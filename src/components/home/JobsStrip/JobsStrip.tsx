"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  MessageCircle,
  BellRing,
  ChevronLeft,
  ChevronRight,
  Flame,
} from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

interface Job {
  title: string;
  link: string;
}

export default function JobsStrip() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { phoneRaw } = CYBER_CAFE_CONFIG;

  // 1. Fetch Jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        if (data.success && Array.isArray(data.jobs))
          setJobs(data.jobs.slice(0, 6));
      } catch (e) {
        console.error(e);
      }
    };
    fetchJobs();
  }, []);

  // 2. Scroll To Function
  const scrollTo = useCallback((index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth - 48; // Adjust for gap/padding
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  // 3. Auto-Play Logic
  useEffect(() => {
    if (isPaused || jobs.length === 0) return;
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % jobs.length;
      scrollTo(nextIndex);
    }, 4000); // 4 seconds interval
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, jobs.length, scrollTo]);

  // 4. Manual Nav
  const handleNext = () => scrollTo((activeIndex + 1) % jobs.length);
  const handlePrev = () =>
    scrollTo((activeIndex - 1 + jobs.length) % jobs.length);

  if (jobs.length === 0) return null;

  return (
    <section
      className="bg-white py-10 border-b border-slate-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-200">
              <BellRing size={22} className="text-white animate-ring" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-slate-900 italic">
                Sarkari <span className="text-red-600">Jobs</span>
              </h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Live Updates
              </p>
            </div>
          </div>

          {/* Desktop Nav Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SWIPEABLE CONTAINER */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 snap-x snap-mandatory scrollbar-hide pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {jobs.map((job, i) => (
              <div
                key={i}
                className="min-w-[88vw] md:min-w-[380px] snap-center bg-zinc-50 border border-slate-200/50 rounded-[2rem] p-7 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-red-100"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-red-600 px-2.5 py-1 rounded-lg text-[10px] font-black text-white uppercase flex items-center gap-1 italic">
                    <Flame size={12} fill="currentColor" /> New Alert
                  </span>
                  <div className="h-1.5 w-1.5 bg-slate-200 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Job ID: #{1024 + i}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-800 leading-snug mb-8 line-clamp-2 h-14 italic tracking-tight uppercase">
                  {job.title}
                </h3>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/91${phoneRaw}?text=Apply for Job: ${job.title}`}
                    className="flex-1 flex items-center justify-center gap-3 py-4 bg-zinc-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-zinc-200 hover:bg-digital-blue transition-colors"
                  >
                    <MessageCircle size={16} /> फॉर्म भरें
                  </a>
                  <a
                    href={job.link}
                    target="_blank"
                    className="p-4 bg-white border border-slate-200 text-slate-900 rounded-2xl hover:border-red-600 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Overlay Arrows (Transparent) */}
          <button
            onClick={handlePrev}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-10 h-20 bg-gradient-to-r from-white/80 to-transparent flex items-center justify-start z-10"
          >
            <ChevronLeft size={24} className="text-slate-400" />
          </button>
          <button
            onClick={handleNext}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-10 h-20 bg-gradient-to-l from-white/80 to-transparent flex items-center justify-end z-10"
          >
            <ChevronRight size={24} className="text-slate-400" />
          </button>
        </div>

        {/* MODERN DOTS INDICATOR */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {jobs.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                activeIndex === i
                  ? "w-10 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.3)]"
                  : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
