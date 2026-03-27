"use client";

import { useEffect, useState, useRef } from "react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

const stats = [
  { id: 1, limit: 10000, suffix: "+", label: "सफलतापूर्वक फॉर्म" },
  { id: 2, limit: 5000, suffix: "+", label: "संतुष्ट ग्राहक" },
  { id: 3, limit: 5, suffix: "+ Yr", label: "कार्य अनुभव" },
  { id: 4, limit: 10, suffix: " Min", label: "औसत समय" },
];

const CounterItem = ({
  limit,
  suffix,
  label,
}: {
  limit: number;
  suffix: string;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 },
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = limit / (duration / 16); // 60fps approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= limit) {
        setCount(limit);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, limit]);

  return (
    <div
      ref={countRef}
      className="flex flex-col items-center md:items-start p-2"
    >
      <div className="text-3xl md:text-4xl font-black tracking-tighter italic text-zinc-900 leading-none">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="h-0.5 w-6 bg-blue-600 my-2 rounded-full" />
      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center md:text-left">
        {label}
      </p>
    </div>
  );
};

export default function TrustBuilder() {
  const { phoneRaw } = CYBER_CAFE_CONFIG;

  return (
    <section className="py-12 px-6 bg-white border-y border-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* HEADER: Ultra Minimal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-xs">
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-zinc-900 leading-tight">
              हमारा <span className="text-zinc-300">रिपोर्ट कार्ड</span>
            </h2>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
              Data speaks louder than words
            </p>
          </div>

          {/* Subtle CTA link instead of bulky buttons */}
          <a
            href={`tel:${phoneRaw}`}
            className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:underline"
          >
            Connect with us →
          </a>
        </div>

        {/* COUNTER GRID: 2x2 on Mobile, 1x4 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-12 border-l border-slate-100 pl-6 md:pl-0 md:border-l-0">
          {stats.map((item) => (
            <CounterItem
              key={item.id}
              limit={item.limit}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>

        {/* BOTTOM LINE: Social Proof */}
        <div className="mt-12 flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400 whitespace-nowrap">
            Trusted by 5,000+ Locals
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
