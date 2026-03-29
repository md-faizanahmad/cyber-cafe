"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Fingerprint,
  FileText,
  Clock,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";

const services = [
  {
    title: "पैन कार्ड आवेदन",
    price: "₹150",
    time: "15m",
    icon: <CreditCard size={16} />,
    docs: ["आधार", "फोटो"],
    // Wikipedia Image Optimized for Next.js
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/A_sample_of_Permanent_Account_Number_%28PAN%29_Card.jpg",
  },
  {
    title: "आधार अपडेट",
    price: "₹50",
    time: "10m",
    icon: <Fingerprint size={16} />,
    docs: ["आधार कार्ड"],
    image: "https://upload.wikimedia.org/wikipedia/en/c/cf/Aadhaar_Logo.svg",
  },
  {
    title: "ऑनलाइन फॉर्म",
    price: "₹100",
    time: "20m",
    icon: <FileText size={16} />,
    docs: ["मार्कशीट", "Sign"],
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/330px-Digital_India_logo.svg.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* COMPACT HEADER */}
        <div className="flex items-end justify-between mb-6">
          <div className="text-left">
            <h2 className="text-lg md:text-2xl font-black text-slate-900 uppercase italic leading-none">
              टॉप <span className="text-blue-600">सर्विसेज</span>
            </h2>
            <p className="text-[9px] font-bold text-slate-400 mt-1.5 uppercase tracking-widest">
              Digital & Fast Delivery
            </p>
          </div>
          <Link
            href="/services"
            className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            All Services <LayoutGrid size={12} />
          </Link>
        </div>

        {/* MOBILE-FIRST GRID: 1 col on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative h-44 md:h-48 rounded-2xl overflow-hidden bg-zinc-900 border border-slate-100"
            >
              {/* NEXT.JS IMAGE OPTIMIZATION */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                priority={i === 0} // Load first image immediately
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900/40 to-transparent" />

              {/* CONTENT AREA */}
              <div className="relative h-full p-4 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white border border-white/10">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-black text-white bg-blue-600 px-2 py-0.5 rounded uppercase tracking-tighter">
                    {service.price}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-base font-black text-white italic uppercase tracking-tight mb-1">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[8px] font-bold text-slate-300 flex items-center gap-1 uppercase">
                      <Clock size={10} /> {service.time}
                    </span>
                    <div className="flex gap-1">
                      {service.docs.map((doc, idx) => (
                        <span
                          key={idx}
                          className="text-[8px] font-bold text-white/40 border border-white/5 px-1 rounded bg-black/20"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919876543210?text=Hi, I want to apply for ${service.title}`}
                    className="flex items-center justify-center gap-2 w-full py-2 bg-white text-zinc-950 rounded-xl text-[9px] font-black uppercase tracking-[0.1em] hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                  >
                    Apply <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
