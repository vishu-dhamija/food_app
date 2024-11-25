import sql from 'better-sqlite3';
const db=sql('meals.db');


export async function GetMeals(){
    await new Promise((resolve) => setTimeout(resolve,2000));

    // throw new Error ('Loading Meals Failed');
    return db.prepare('SELECT * from meals').all();
}