"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  UserCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    title: "100% सही फॉर्म भरना",
    desc: "सरकारी नौकरी हो या स्कॉलरशिप, हम बिना किसी गलती के आपका फॉर्म भरते हैं ताकि रिजेक्शन का डर न रहे।",
    icon: <CheckCircle2 className="text-digital-green" size={32} />,
    tag: "पूरी गारंटी",
  },
  {
    title: "तुरंत प्रिंट और स्कैन",
    desc: "हाई-क्वालिटी लेजर प्रिंटिंग और स्कैनिंग। आपके डॉक्यूमेंट्स तुरंत व्हाट्सएप या ईमेल पर भी भेज दिए जाते हैं।",
    icon: <Zap className="text-digital-saffron" size={32} />,
    tag: "सुपर फास्ट",
  },
  {
    title: "सुरक्षित पेमेंट और बैंकिंग",
    desc: "आधार कार्ड से पैसे निकालना हो या केवाईसी (KYC), हमारा सिस्टम पूरी तरह सुरक्षित और भरोसेमंद है।",
    icon: <ShieldCheck className="text-digital-blue" size={32} />,
    tag: "100% सुरक्षित",
  },
  {
    title: "अनुभवी स्टाफ का साथ",
    desc: "RTPS बिहार, ई-डिस्ट्रिक्ट और अन्य सरकारी पोर्टल्स की गहरी जानकारी रखने वाले एक्सपर्ट्स आपकी मदद करेंगे।",
    icon: <UserCheck className="text-digital-blue" size={32} />,
    tag: "एक्सपर्ट टीम",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* हेडर: बिहार की दुकानों के स्टाइल में */}
        <div className="mb-12 border-l-8 border-digital-blue pl-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            हमारी <span className="text-digital-blue">खास</span> सुविधाएं
          </h2>
          <p className="text-slate-500 font-bold mt-2 uppercase text-xs tracking-[0.2em]">
            आपके शहर का सबसे भरोसेमंद डिजिटल सेवा केंद्र
          </p>
        </div>

        {/* मोबाइल डिजाइन: कार्ड स्टैकिंग (Mobile First) */}
        <div className="flex flex-col gap-6 lg:hidden">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="sticky top-24 bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-200/40"
              style={{ marginTop: i === 0 ? 0 : "1.5rem" }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  {item.icon}
                </div>
                <span className="bg-digital-saffron/10 text-digital-saffron text-[10px] font-black px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tighter italic uppercase">
                {item.title}
              </h3>
              <p className="text-slate-600 font-semibold text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* डेस्कटॉप डिजाइन: साफ-सुथरा ग्रिड */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 p-10 rounded-[2.5rem] border border-slate-100 hover:border-digital-blue/20 hover:bg-slate-50/50 transition-all duration-500 group"
            >
              <div className="shrink-0">
                <div className="w-20 h-20 bg-white shadow-lg rounded-3xl flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold text-digital-blue bg-digital-blue/5 px-2 py-0.5 rounded border border-digital-blue/10">
                    {item.tag}
                  </span>
                </div>
                <p className="text-slate-500 font-bold leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* भरोसा पट्टी (Trust Strip) */}
        <div className="mt-20 p-8  flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-digital-blue flex items-center justify-center shrink-0">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <p className="text-black font-black text-lg md:text-xl tracking-tight italic">
                10,000+ फॉर्म सफलतापूर्वक भरे गए!
              </p>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                आपका भरोसा ही हमारी पहचान है
              </p>
            </div>
          </div>
          <button className="w-full md:w-auto px-10 py-4 bg-white text-zinc-950 font-black rounded-2xl uppercase text-xs tracking-[0.2em] hover:bg-digital-saffron hover:text-white transition-all active:scale-95 shadow-lg">
            संपर्क करें
          </button>
        </div>
      </div>
    </section>
  );
}
