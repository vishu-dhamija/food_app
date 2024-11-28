'use client';

import { useState } from "react";
import Link from "next/link";
import ImageSlideshow from "./components/image/image-slideshow";

import classes from "./page.module.css";
import MealFinder from "./components/search/page";

export default function Home() {
 

  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={classes.hero}>
            <h1>Feast Your Eyes, Fork Your Appetite.</h1>
            <p>
              Delicious dishes, cozy vibes, and unforgettable dining experiences await.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join Our Community</Link>
            <Link href="/meals">Explore Meals</Link>
            {/* <button className={classes.ct} onClick={openContactForm}>
              Contact Us
            </button> */}
          </div>
        </div>
      </header>

      <main>
        <div className={classes.search}>
          <MealFinder />
        </div>


        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Fork & Feast is your go-to platform for discovering delicious recipes and sharing your culinary creations with the world.
          </p>
          <p>
            Whether you're a seasoned chef or a kitchen newbie, Fork & Feast connects food lovers everywhere, making every meal an adventure.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Fork & Feast?</h2>
          <p>
            At Fork & Feast, we believe food is more than sustenance—it's an experience. Our platform brings together a community of passionate foodies eager to share and explore amazing dishes.
          </p>
          <p>
            From tantalizing recipes to connecting with like-minded food enthusiasts, Fork & Feast turns every meal into a celebration of flavor and fellowship.
          </p>
        </section>
      </main>

     
    </>
  );
}


// import classes from "./page.module.css";
// import Link from "next/link";
// import ImageSlideshow from "./components/image/image-slideshow";

// export default function Home() {
//   return (
//     <>
//       <header className={classes.header}>
//         <div className={classes.slideshow}>
//            <ImageSlideshow />
//         </div>
          
//         <div>
//             <div className={classes.hero}>
//               <h1>Feast Your Eyes, Fork Your Appetite.</h1>
//               <p>Delicious dishes, cozy vibes, and unforgettable dining experiences await.</p>
//             </div>
//             <div className={classes.cta}>
//               <Link href="/community">Join Our Community</Link>
//               <Link href="/meals">Explore Meals</Link>
//             </div>
//         </div>

//       </header>
//       <main>
//         <section className={classes.section}>
//           <h2>How It Works</h2>
//           <p>
//             Fork & Feast is your go-to platform for discovering delicious recipes and sharing your culinary creations with the world.
//           </p>
//           <p>
//             Whether you're a seasoned chef or a kitchen newbie, Fork & Feast connects food lovers everywhere, making every meal an adventure.
//           </p>
//         </section>

//         <section className={classes.section}>
//           <h2>Why Fork & Feast?</h2>
//           <p>
//             At Fork & Feast, we believe food is more than sustenance—it's an experience. Our platform brings together a community of passionate foodies eager to share and explore amazing dishes.
//           </p>
//           <p>
//             From tantalizing recipes to connecting with like-minded food enthusiasts, Fork & Feast turns every meal into a celebration of flavor and fellowship.
//           </p>
//         </section>

//       </main>
//     </>
//   );
// } 