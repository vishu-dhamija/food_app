import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';


const db=sql('meal.db');

export async function GetMeals(){
    await new Promise((resolve) => setTimeout(resolve,2000));

    // throw new Error ('Loading Meals Failed');
    return db.prepare('SELECT * from meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * from meals WHERE slug= ?').get(slug);
}
export async function SaveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed! Try again..");
        }
    });

    meal.image = `/images/${filename}`;

    // Fixed missing comma in SQL
    db.prepare(`
        INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
    `).run(meal);
}


