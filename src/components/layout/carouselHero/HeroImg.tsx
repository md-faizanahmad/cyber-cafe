// src/components/sections/Hero.tsx
import { HeroBackgroundSlider } from "./HeroBackgroundSlider";

interface HeroProps {
  images: string[];
  titleTop: string;
  titleAccent: string;
  description: string;
}

export default function HeroImg({
  images,
  titleTop,
  titleAccent,
  description,
}: HeroProps) {
  return (
    <section className="relative mt-8  h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
      {/* 1. Client-Side Image Engine */}
      <HeroBackgroundSlider images={images} />

      {/* 2. Content Overlay */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            {titleTop} <br />
            <span className="text-accent">{titleAccent}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
