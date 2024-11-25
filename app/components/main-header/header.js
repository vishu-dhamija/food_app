'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classes from "./header.module.css";

// Use the correct path for images stored in the public folder
const logoimg = "/images/logo.png"; 

export default function HeaderMain() {
  const path = usePathname();

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoimg} alt="food" priority width={200} height={100}/>
        Fork & Feast
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href="/community" className={path === '/community' ? classes.active : undefined}>
              Our Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
