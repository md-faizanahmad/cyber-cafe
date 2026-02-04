// src/components/sections/Testimonials/TestimonialsClientWrapper.tsx
"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "./TestimonialsGlow";
import { useRef, useState, useEffect } from "react";

export function TestimonialsClientWrapper({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);

  // Calculate constraints based on window width
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const width =
        containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      setConstraints({ left: -width - 48, right: 0 }); // 48 is for padding
    }
  }, []);

  const handleDragEnd = () => {
    const x = dragX.get();
    if (x > -100) setActiveIdx(0);
    else if (x > -400) setActiveIdx(1);
    else setActiveIdx(2);
  };

  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/50 blur-[100px] -z-10 rounded-full" />

      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={constraints}
        style={{ x: dragX }}
        onDragEnd={handleDragEnd}
        className="flex gap-6 px-6 cursor-grab active:cursor-grabbing"
      >
        {testimonials.map((t) => (
          <motion.blockquote
            key={t.id}
            className="min-w-[90vw] md:min-w-112.5 p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <p className="text-lg md:text-xl font-medium text-slate-700 italic leading-relaxed">
              &quot;{t.quote}&quot;
            </p>

            <footer className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div>
                <cite className="not-italic font-bold text-slate-900 block text-lg">
                  {t.name}
                </cite>
                <span className="text-[11px] uppercase font-bold tracking-widest text-accent">
                  {t.role}
                </span>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIdx ? "w-8 bg-accent" : "w-2 bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
