// src/components/sections/MagneticClientWrapper.tsx
"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

export function MagneticClientWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for X and Y position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use springs for a "liquid" elastic feel (60FPS)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Set the "Pull" strength (0.3 = 30% of distance)
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <motion.div
        ref={ref}
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
