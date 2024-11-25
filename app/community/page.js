import Image from 'next/image';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src="/icons/meal.png" alt="A delicious meal" width={100} height={100} />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src="/icons/community.png" alt="A crowd of people, cooking" width={100} height={100} />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src="/icons/events.png"
              alt="A crowd of people at a cooking event"
              width={100}
              height={100}
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
