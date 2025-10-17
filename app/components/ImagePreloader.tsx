// app/components/PreloadImages.tsx
'use client';

import { useEffect } from 'react';

const HERO_IMAGES = [
  '/wyeth.jpg',
  '/purples.jpg',
  '/pinkpurpleblue.jpg',
  '/yayoi.jpg',
  // Add more image paths as needed
  // Add all your hero images
];

export default function PreloadImages() {
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
