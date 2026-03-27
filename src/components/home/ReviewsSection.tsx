"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Star, MessageSquareQuote, MapPin, ExternalLink } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

const reviews = [
  {
    name: "Ravi Kumar",
    initial: "R",
    avatarColor: "bg-emerald-500",
    text: "पैन कार्ड जल्दी बन गया।",
    rating: 5,
    tag: "PAN Card",
  },
  {
    name: "Shabana P.",
    initial: "S",
    avatarColor: "bg-blue-500",
    text: "आधार अपडेट आसानी से हुआ।",
    rating: 5,
    tag: "Aadhaar",
  },
  {
    name: "Amit Singh",
    initial: "A",
    avatarColor: "bg-orange-500",
    text: "सरकारी फॉर्म सही भरा गया।",
    rating: 5,
    tag: "Online Form",
  },
  {
    name: "Sunil V.",
    initial: "S",
    avatarColor: "bg-purple-500",
    text: "नकद निकासी सुरक्षित रही।",
    rating: 5,
    tag: "AEPS",
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { googleReviewUrl } = CYBER_CAFE_CONFIG;

  // 1. Auto-Scroll Logic
  const scrollTo = useCallback((index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth - 32; // Adjust for spacing
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % reviews.length;
      scrollTo(nextIndex);
    }, 4500); // Slightly slower for readability
    return () => clearInterval(interval);
  }, [activeIndex, scrollTo]);

  return (
    <section className="py-12 px-4 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* HEADER: Ultra-Compact */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6 px-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-blue-600">
              <MessageSquareQuote size={20} className="fill-blue-100" />
              <h2 className="text-sm font-black uppercase tracking-widest text-zinc-900 leading-none italic">
                ग्राहकों का <span className="text-blue-600">भरोसा</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-2 text-slate-400">
              <MapPin size={12} className="text-slate-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Live Google Reviews
              </span>
            </div>
          </div>
          {/* <a
            href={googleReviewUrl || "#"}
            target="_blank"
            className="text-[10px] font-black uppercase text-slate-400 tracking-widest hover:text-blue-600 transition-colors"
          >
            सभी देखें →
          </a> */}
        </div>

        {/* SWIPER CONTAINER */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-2 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-[85vw] md:min-w-[320px] snap-center"
              >
                {/* ID CARD STYLE REVIEW */}
                <div className="bg-white p-6 rounded-4xl shadow-xl shadow-slate-200/40 border border-slate-100 relative h-full flex flex-col justify-between">
                  {/* Top Bar: Name Avatar + Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`h-10 w-10 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-black italic text-sm shadow-inner`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 uppercase italic tracking-tighter">
                        {review.name}
                      </p>
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                        ID Card Review
                      </span>
                    </div>
                    <span className="ml-auto text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      {review.tag}
                    </span>
                  </div>

                  {/* Body: Review Text */}
                  <p className="text-[13px] font-bold text-slate-700 italic leading-snug mb-5 min-h-10">
                    “{review.text}”
                  </p>

                  {/* Footer: Rating Stars */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Customer Rating:
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CATCHY BOTTOM NOTIFICATION BAR */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-5 p-6  text-white ">
          <div className="flex items-center gap-4 text-center md:text-left">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-yellow-400 text-yellow-400 animate-pulse"
              />
            ))}
            <p className="text-[11px] md:text-xs font-black text-black uppercase tracking-[0.2em] leading-relaxed">
              आपकी राय हमारे लिए अनमोल है,{" "}
              <span className="text-zinc-500 italic">
                कृपया Google पर रिव्यू दें।
              </span>
            </p>
          </div>

          <a
            href={googleReviewUrl || "https://g.page/r/your-profile-id/review"}
            target="_blank"
            className="w-full md:w-auto px-8 py-4 bg-white text-zinc-900 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-colors shadow-lg active:scale-95 group"
          >
            Submit Review
            <ExternalLink
              size={14}
              className="inline ml-1.5 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
