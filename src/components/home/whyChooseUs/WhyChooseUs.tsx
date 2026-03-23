"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  UserCheck,
  MousePointerClick,
  LayoutGrid,
  HeartHandshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Expert Assistance",
      desc: "Online aur Government services ke liye experienced team ka support.",
      icon: <UserCheck className="text-digital-blue" size={24} />,
    },
    {
      title: "Fast & Reliable",
      desc: "Super fast computers aur reliable internet connectivity.",
      icon: <Zap className="text-digital-saffron" size={24} />,
    },
    {
      title: "Error-Free Forms",
      desc: "Verification ke saath bina kisi galti ke form filling ki suvidha.",
      icon: <MousePointerClick className="text-digital-green" size={24} />,
    },
    {
      title: "Safe & Secure",
      desc: "Aadhaar, Biometrics aur Payments ka 100% safe handling.",
      icon: <ShieldCheck className="text-digital-blue" size={24} />,
    },
    {
      title: "All-in-One Hub",
      desc: "Ek hi jagah par saari digital aur CSC services available.",
      icon: <LayoutGrid className="text-digital-saffron" size={24} />,
    },
    {
      title: "Trusted Support",
      desc: "Aapka bharosemand local cyber café hamesha aapki seva mein.",
      icon: <HeartHandshake className="text-digital-green" size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-digital-blue/5 rounded-full blur-3xl -mr-32 -mt-32" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">
            Humein Hi Kyun{" "}
            <span className="text-digital-blue underline decoration-digital-saffron underline-offset-8">
              Chunein?
            </span>
          </h2>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
            Best Digital Services In Your City
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div
              key={i}
              className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-white group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tighter italic">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
