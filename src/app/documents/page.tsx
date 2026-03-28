"use client";

import Breadcrumb from "@/shared/Breadcrumb";
import { Check, AlertCircle, Phone, MessageSquare } from "lucide-react";

const docsData = [
  {
    service: "पैन कार्ड आवेदन",
    required: ["आधार कार्ड", "मोबाइल नंबर", "पासपोर्ट फोटो"],
    note: "नाम और जन्मतिथि सही होना जरूरी है",
  },
  {
    service: "आधार अपडेट",
    required: ["आधार कार्ड", "मोबाइल नंबर"],
    note: "मोबाइल नंबर लिंक होना जरूरी है",
  },
  {
    service: "जाति / आय / निवास प्रमाण पत्र",
    required: ["आधार कार्ड", "फोटो", "स्थानीय प्रमाण"],
    note: "पता और जानकारी सही दें",
  },
  {
    service: "सरकारी नौकरी फॉर्म",
    required: ["फोटो", "सिग्नेचर", "शैक्षणिक दस्तावेज"],
    note: "फोटो साइज और फॉर्मेट सही होना चाहिए",
  },
];

export default function DocumentsPage() {
  return (
    <main className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <Breadcrumb />
      </div>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* --- MINIMAL HEADER --- */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            जरूरी{" "}
            <span className="text-accent italic font-medium">दस्तावेज.</span>
          </h1>
          <p className="text-slate-400 font-medium text-lg max-w-xl border-l-2 border-accent pl-6">
            सही जानकारी, सही परिणाम। आपके आवेदन की सफलता के लिए आवश्यक कागजात की
            सूची।
          </p>
        </header>

        {/* --- CLEAN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {docsData.map((item, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-black text-accent/30 tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-accent transition-colors">
                  {item.service}
                </h3>
              </div>

              <ul className="space-y-4 mb-6">
                {item.required.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-bold text-slate-500"
                  >
                    <Check size={14} className="text-accent" strokeWidth={3} />
                    {doc}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-rose-500 bg-rose-50 w-fit px-3 py-1 rounded-md">
                <AlertCircle size={12} />
                {item.note}
              </div>
            </div>
          ))}
        </div>

        {/* --- SYSTEMATIC CHECKLIST (ELEGANT) --- */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                आम चेकलिस्ट
              </h2>
              <p className="text-slate-400 text-sm mt-2 font-medium">
                हमेशा साथ रखने वाले डॉक्यूमेंट्स।
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "आधार कार्ड",
                "पासपोर्ट फोटो",
                "मोबाइल नंबर",
                "ईमेल आईडी",
                "मार्कशीट",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border border-slate-50 rounded-2xl hover:border-slate-200 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-700">
                    {text}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- ACTION BAR (FLOATING STYLE) --- */}
        <div className="mt-32 flex flex-col items-center">
          <div className="bg-slate-900 p-2 rounded-full flex flex-col sm:flex-row gap-2 shadow-2xl">
            <a
              href="tel:9512953624"
              className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href="https://wa.me/919512953624"
              className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
            >
              <MessageSquare size={14} /> WhatsApp
            </a>
          </div>
          <p className="mt-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            Expert Support Available
          </p>
        </div>
      </div>
    </main>
  );
}
