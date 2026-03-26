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
    title: "पैन कार्ड आवेदन",
    price: "₹150",
    time: "15 मिनट",
    icon: <CreditCard className="text-blue-500" size={24} />,
    docs: ["आधार कार्ड", "मोबाइल नंबर"],
    color: "bg-blue-50",
  },
  {
    title: "आधार अपडेट",
    price: "₹50",
    time: "10 मिनट",
    icon: <Fingerprint className="text-orange-500" size={24} />,
    docs: ["आधार कार्ड"],
    color: "bg-orange-50",
  },
  {
    title: "ऑनलाइन फॉर्म भराई",
    price: "₹100",
    time: "20 मिनट",
    icon: <FileText className="text-purple-500" size={24} />,
    docs: ["सभी आवश्यक दस्तावेज"],
    color: "bg-purple-50",
  },
  {
    title: "जाति / आय / निवास प्रमाण पत्र",
    price: "₹120",
    time: "20 मिनट",
    icon: <CheckCircle2 className="text-green-500" size={24} />,
    docs: ["आधार", "फोटो"],
    color: "bg-green-50",
  },
  {
    title: "प्रिंट / स्कैन / ज़ेरॉक्स",
    price: "₹5 – ₹20",
    time: "तुरंत",
    icon: <Printer className="text-slate-600" size={24} />,
    docs: ["फाइल / डॉक्यूमेंट"],
    color: "bg-slate-50",
  },
  {
    title: "आधार से पैसे निकासी (AEPS)",
    price: "₹10 – ₹30",
    time: "5 मिनट",
    icon: <MessageCircle className="text-cyan-500" size={24} />,
    docs: ["आधार + फिंगरप्रिंट"],
    color: "bg-cyan-50",
  },
];

export default function ServicesSection() {
  const displayedServices = services.slice(0, 3);

  return (
    <section id="services" className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2">
          <div className="text-left">
            <span className="text-digital-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">
              TOP SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase leading-none">
              लोकप्रिय <span className="text-digital-blue">सुविधाएँ</span>
            </h2>
            <div className="h-1.5 w-16 bg-digital-saffron mt-4 rounded-full" />
          </div>

          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-digital-blue transition-colors group"
          >
            सभी सेवाएं देखें
            <LayoutGrid size={16} />
          </Link>
        </div>

        {/* SERVICES */}
        <div className="flex overflow-x-auto pb-8 pt-2 gap-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {displayedServices.map((service, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-center group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className={`absolute -right-4 -top-4 w-24 h-24 ${service.color} rounded-full opacity-40`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-1 uppercase italic">
                  {service.title}
                </h3>

                <div className="flex items-center gap-4 mt-3 mb-6">
                  <span className="text-xs font-black text-white bg-zinc-900 px-3 py-1 rounded-lg">
                    {service.price}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                    <Clock size={12} /> {service.time}
                  </span>
                </div>

                {/* 🔥 FIXED DOCS */}
                <div className="space-y-2 border-t border-slate-50 pt-5 mb-8">
                  <p className="text-xs font-semibold text-gray-500">
                    📄 जरूरी कागजात:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.docs.map((doc, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=मुझे ${service.title} करवाना है`}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-zinc-900 hover:bg-digital-blue text-white rounded-2xl text-xs font-black uppercase"
                >
                  Apply Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-8 px-2 md:hidden">
          <Link href="/services">
            <button className="w-full py-4 bg-slate-50 border rounded-xl text-sm font-bold">
              सभी सेवाएं देखें
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
