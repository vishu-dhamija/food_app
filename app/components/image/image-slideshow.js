"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './image-slideshow.module.css';

const images = [
  { image: '/images/burger.jpg', alt: 'A delicious, juicy burger' },
  { image: '/images/curry.jpg', alt: 'A delicious, spicy curry' },
  { image: '/images/dumplings.jpg', alt: 'Steamed dumplings' },
  { image: '/images/macncheese.jpg', alt: 'Mac and cheese' },
  { image: '/images/pizza.jpg', alt: 'A delicious pizza' },
  { image: '/images/schnitzel.jpg', alt: 'A delicious schnitzel' },
  { image: '/images/tomato-salad.jpg', alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
          fill
        />
      ))}
    </div>
  );
}
