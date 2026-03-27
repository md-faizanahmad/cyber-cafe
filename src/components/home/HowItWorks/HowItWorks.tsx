"use client";

import {
  MessageCircle,
  FileText,
  Settings,
  CheckCircle,
  Phone,
} from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

const steps = [
  {
    title: "संपर्क करें",
    desc: "WhatsApp या कॉल",
    icon: <MessageCircle size={18} />,
    color: "bg-green-500",
  },
  {
    title: "डॉक्यूमेंट",
    desc: "कागजात भेजें",
    icon: <FileText size={18} />,
    color: "bg-blue-500",
  },
  {
    title: "प्रोसेसिंग",
    desc: "फॉर्म भरा जाएगा",
    icon: <Settings size={18} />,
    color: "bg-orange-500",
  },
  {
    title: "काम पूरा",
    desc: "प्रिंट आउट लें",
    icon: <CheckCircle size={18} />,
    color: "bg-emerald-600",
  },
];

export default function HowItWorks() {
  const { phoneRaw } = CYBER_CAFE_CONFIG;

  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">
            Fast <span className="text-blue-600">Service</span> Process
          </span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tighter text-center">
            आसान <span className="text-slate-400">4 स्टेप्स</span>
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* DESKTOP PULSE LINE */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-100 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400 to-transparent w-1/4 animate-line-h" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex md:flex-col items-center md:text-center gap-5 md:gap-4 group"
              >
                {/* ICON & MOBILE LINE */}
                <div className="relative shrink-0">
                  <div
                    className={`w-12 h-12 ${step.color} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 z-10 relative group-hover:scale-110 transition-transform duration-500`}
                  >
                    {step.icon}
                  </div>

                  {/* MOBILE PULSE LINE */}
                  {i !== steps.length - 1 && (
                    <div className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-slate-100 -z-10 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-400 to-transparent h-1/2 animate-line-v" />
                    </div>
                  )}
                </div>

                {/* TEXT */}
                <div className="flex flex-col">
                  <h3 className="text-[13px] font-black text-slate-900 uppercase italic tracking-tight leading-none">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-14 flex gap-3 justify-center">
          <a
            href={`https://wa.me/91${phoneRaw}`}
            className="flex-1 max-w-40 flex items-center justify-center gap-2 py-3.5 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all active:scale-95"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
          <a
            href={`tel:+91${phoneRaw}`}
            className="flex-1 max-w-40 flex items-center justify-center gap-2 py-3.5 bg-white border border-slate-200 text-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-blue-600 transition-all active:scale-95"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>
      </div>

      {/* TAILWIND ANIMATION CONFIG */}
      <style jsx global>{`
        @keyframes line-h {
          0% {
            left: -25%;
          }
          100% {
            left: 100%;
          }
        }
        @keyframes line-v {
          0% {
            top: -50%;
          }
          100% {
            top: 100%;
          }
        }
        .animate-line-h {
          animation: line-h 3s linear infinite;
        }
        .animate-line-v {
          animation: line-v 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
