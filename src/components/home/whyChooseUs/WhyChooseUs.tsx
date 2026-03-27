"use client";

import {
  ShieldCheck,
  Zap,
  UserCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

const reasons = [
  {
    title: "100% Zero-Error Forms",
    desc: "एक छोटी गलती से फॉर्म रिजेक्ट हो सकता है। हमारा अनुभवी स्टाफ हर डिटेल को दो बार चेक करता है ताकि आपका पैसा और समय बर्बाद न हो।",
    icon: <CheckCircle2 className="text-emerald-500" size={32} />,
    tag: "Security First",
  },
  {
    title: "Lightning Fast Processing",
    desc: "लंबी लाइनों में खड़ा होना भूल जाइए। हम हाई-स्पीड इंटरनेट और मॉडर्न स्कैनर्स का इस्तेमाल करते हैं ताकि आपका काम मिनटों में हो जाए।",
    icon: <Zap className="text-amber-500" size={32} />,
    tag: "Speed",
  },
  {
    title: "Privacy & Data Safety",
    desc: "आपका पर्सनल डेटा हमारे पास सुरक्षित है। फॉर्म भरने के बाद हम आपकी फाइल्स को सुरक्षित तरीके से हैंडल करते हैं।",
    icon: <ShieldCheck className="text-blue-500" size={32} />,
    tag: "Privacy",
  },
  {
    title: "Expert Portal Knowledge",
    desc: "सरकारी पोर्टल्स अक्सर जटिल होते हैं। हमें हर अपडेट और नए नियम की जानकारी होती है, जिससे आपका काम पहली बार में ही सही होता है।",
    icon: <UserCheck className="text-indigo-500" size={32} />,
    tag: "Expertise",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* DESKTOP: STICKY LAYOUT | MOBILE: STACKED */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:h-fit">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[0.9] uppercase italic tracking-tighter mb-6">
              भीड़ से <br />
              <span className="text-zinc-300">अलग क्यों?</span>
            </h2>
            <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8">
              हम सिर्फ फॉर्म नहीं भरते, हम यह पक्का करते हैं कि आपका हर काम बिना
              किसी रुकावट के पूरा हो।
            </p>

            {/* Desktop Only Stats */}
            <div className="hidden lg:block pt-8 border-t border-slate-100">
              <div className="text-3xl font-black text-slate-900 tracking-tighter italic">
                10K+
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                Happy Customers
              </p>
            </div>
          </div>

          {/* RIGHT: Scroll Reveal Items */}
          <div className="lg:w-2/3 space-y-20 lg:space-y-32">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row gap-8 items-start animate-in fade-in slide-in-from-bottom-10 duration-700 transition-all"
              >
                {/* Visual Number & Icon */}
                <div className="shrink-0 relative">
                  <div className="text-7xl font-black text-slate-50 absolute -top-8 -left-4 select-none group-hover:text-blue-50 transition-colors">
                    0{i + 1}
                  </div>
                  <div className="relative z-10 w-16 h-16 bg-white shadow-2xl shadow-slate-200 rounded-4xl flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-2 block italic">
                    {item.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-semibold text-sm md:text-base leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
