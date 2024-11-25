
import Link from 'next/link';


import classes from './page.module.css';
import MealsGrid from '../components/meals/meals-grid';
import { GetMeals } from '@/lib/meals';
import { Suspense } from 'react';


async function Meals() {
    const meals =await GetMeals();

    return <MealsGrid meals={meals} />;
}
export default function MealsPAge(){
    

    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals created{''}
                    <span className={classes.highlight}>
                        by you!
                    </span>
                </h1>
                <p> Choose your favorite recipe and cook it yourself. It is easy and Fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favorite recipe!</Link>
                </p>
            </header>


            <main className={classes.main}>
    
                <Suspense fallback={<p className={classes.loading}>Loading Meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}