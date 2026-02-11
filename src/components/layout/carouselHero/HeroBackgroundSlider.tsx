// src/components/sections/HeroBackgroundSlider.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroBackgroundSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`FutureSchool Campus Scene ${i + 1}`}
            fill
            priority={i === 0}
            // Logic: 100vw because it's a full-screen hero
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Solid Overlay: No Gradient. 
          The backdrop-blur adds a premium 'glass' feel without obscuring the image.
      */}
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-[2px] z-10" />
    </div>
  );
}
