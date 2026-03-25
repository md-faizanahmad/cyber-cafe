"use client";

import React from "react";
import {
  CreditCard,
  Fingerprint,
  FileText,
  Printer,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "PAN Card Apply",
    price: "₹150",
    time: "15 मिनट",
    icon: <CreditCard className="text-blue-500" size={24} />,
    docs: ["Aadhaar Card", "Mobile Number"],
    color: "bg-blue-50",
  },
  {
    title: "Aadhaar Update",
    price: "₹50",
    time: "10 मिनट",
    icon: <Fingerprint className="text-orange-500" size={24} />,
    docs: ["Aadhaar Card"],
    color: "bg-orange-50",
  },
  {
    title: "Online Form Filling",
    price: "₹100",
    time: "20 मिनट",
    icon: <FileText className="text-purple-500" size={24} />,
    docs: ["All Documents"],
    color: "bg-purple-50",
  },
  {
    title: "जाति / आय / निवास",
    price: "₹120",
    time: "20 मिनट",
    icon: <CheckCircle2 className="text-green-500" size={24} />,
    docs: ["Aadhaar", "Photo"],
    color: "bg-green-50",
  },
  {
    title: "Print / Scan / Xerox",
    price: "₹5 – ₹20",
    time: "Instant",
    icon: <Printer className="text-slate-600" size={24} />,
    docs: ["File / Document"],
    color: "bg-slate-50",
  },
  {
    title: "नकद निकासी (AEPS)",
    price: "₹10 – ₹30",
    time: "5 मिनट",
    icon: <MessageCircle className="text-cyan-500" size={24} />,
    docs: ["Aadhaar + Finger"],
    color: "bg-cyan-50",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-left mb-10 md:mb-12 px-2">
          <span className="text-digital-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">
            OUR_EXPERT_SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic uppercase">
            हमारी <span className="text-digital-blue">सेवाएं</span>
          </h2>
          <div className="h-1.5 w-16 bg-digital-saffron mt-3 rounded-full" />
        </div>

        {/* MOBILE: SWIPE CARDS | DESKTOP: GRID */}
        {/* Added: overflow-x-auto, snap-x, snap-mandatory */}
        <div className="flex overflow-x-auto pb-8 pt-2 gap-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {services.map((service, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-center group relative bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              {/* Decorative Circle */}
              <div
                className={`absolute -right-4 -top-4 w-24 h-24 ${service.color} rounded-full opacity-40 group-hover:scale-150 transition-transform duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-5`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight">
                  {service.title}
                </h3>

                <div className="flex items-center gap-4 mt-3 mb-5">
                  <span className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/50">
                    {service.price}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase flex items-center gap-1">
                    <Clock size={12} /> {service.time}
                  </span>
                </div>

                <div className="space-y-2 border-t border-slate-50 pt-4 mb-6">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider italic">
                    जरूरी कागजात:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.docs.map((doc, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/919876543210"
                  className="w-full flex items-center justify-between py-4 px-6 bg-zinc-900 hover:bg-digital-blue text-white rounded-2xl text-sm font-bold transition-all active:scale-95"
                >
                  WhatsApp करें
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SWIPE INDICATOR (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-1.5 mt-2">
          <div className="w-8 h-1 bg-digital-blue rounded-full" />
          <div className="w-2 h-1 bg-slate-200 rounded-full" />
          <div className="w-2 h-1 bg-slate-200 rounded-full" />
        </div>
      </div>
    </section>
  );
}
