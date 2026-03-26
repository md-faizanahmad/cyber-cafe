"use client";

import React from "react";
import Link from "next/link";
import {
  CreditCard,
  Fingerprint,
  FileText,
  Printer,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  LayoutGrid,
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
  // Only show first 3 services on Home
  const displayedServices = services.slice(0, 3);

  return (
    <section id="services" className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2">
          <div className="text-left">
            <span className="text-digital-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">
              OUR_TOP_SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase leading-none">
              लोकप्रिय <span className="text-digital-blue">सुविधाएँ</span>
            </h2>
            <div className="h-1.5 w-16 bg-digital-saffron mt-4 rounded-full" />
          </div>

          {/* DESKTOP VIEW ALL BUTTON */}
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-digital-blue transition-colors group"
          >
            सभी सेवाएं देखें
            <LayoutGrid
              size={16}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* SERVICES GRID / SWIPER */}
        <div className="flex overflow-x-auto pb-8 pt-2 gap-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {displayedServices.map((service, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-center group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className={`absolute -right-4 -top-4 w-24 h-24 ${service.color} rounded-full opacity-40 group-hover:scale-150 transition-transform duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-1 leading-tight uppercase italic tracking-tighter">
                  {service.title}
                </h3>

                <div className="flex items-center gap-4 mt-3 mb-6">
                  <span className="text-xs font-black text-white bg-zinc-900 px-3 py-1 rounded-lg">
                    {service.price}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1 tracking-widest">
                    <Clock size={12} /> {service.time}
                  </span>
                </div>

                <div className="space-y-3 border-t border-slate-50 pt-5 mb-8">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                    REQUIRED_DOCS:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.docs.map((doc, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=I want to apply for ${service.title}`}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-zinc-900 hover:bg-digital-blue text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW ALL BUTTON */}
        <div className="mt-8 px-2 md:hidden">
          <Link href="/services">
            <button className="w-full flex items-center justify-center gap-3 py-5 bg-slate-50 border border-slate-200 text-slate-900 rounded-[2rem] text-sm font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
              सभी {services.length} सेवाएं देखें
              <LayoutGrid size={18} className="text-digital-blue" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
