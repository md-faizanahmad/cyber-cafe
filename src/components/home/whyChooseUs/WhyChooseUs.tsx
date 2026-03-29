"use client";

import {
  ShieldCheck,
  Zap,
  UserCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const reasons = [
  {
    title: "100% Zero-Error Forms",
    desc: "एक छोटी गलती से फॉर्म रिजेक्ट हो जाता है। हमारा अनुभवी स्टाफ हर डिटेल को दो बार चेक करता है ताकि आपका पैसा और समय बर्बाद न हो।",
    icon: <CheckCircle2 className="text-emerald-500" size={24} />,
    tag: "Security",
  },
  {
    title: "Lightning Fast Processing",
    desc: "लंबी लाइनों में खड़ा होना भूल जाइए। हम हाई-स्पीड इंटरनेट और मॉडर्न स्कैनर्स का इस्तेमाल करते हैं ताकि आपका काम मिनटों में हो जाए।",
    icon: <Zap className="text-amber-500" size={24} />,
    tag: "Speed",
  },
  {
    title: "Privacy & Data Safety",
    desc: "आपका पर्सनल डेटा हमारे पास सुरक्षित है। फॉर्म भरने के बाद हम आपकी फाइल्स को सुरक्षित तरीके से हैंडल करते हैं।",
    icon: <ShieldCheck className="text-blue-500" size={24} />,
    tag: "Privacy",
  },
  {
    title: "Expert Portal Knowledge",
    desc: "सरकारी पोर्टल्स अक्सर जटिल होते हैं। हमें हर अपडेट और नए नियम की जानकारी होती है, जिससे आपका काम पहली बार में ही सही होता है।",
    icon: <UserCheck className="text-indigo-500" size={24} />,
    tag: "Expertise",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 border-l-4 border-zinc-900 pl-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">
            भीड़ से <span className="text-zinc-300">अलग क्यों?</span>
          </h2>
        </div>

        {/* STACKING CONTAINER */}
        <div className="relative space-y-10 md:space-y-20">
          {/* BACKGROUND PULSE LINE (Visible between cards) */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-slate-50 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500 to-transparent h-1/4 animate-pulse-line" />
          </div>

          {reasons.map((item, i) => (
            <div
              key={i}
              className="sticky group flex gap-6 md:gap-10 items-start"
              // Increase top offset for each card to create the "Stacking" look
              style={{ top: `${80 + i * 30}px` }}
            >
              {/* STEP INDICATOR */}
              <div className="shrink-0 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2  rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-zinc-900 text-white text-[10px] font-black rounded-full flex items-center justify-center italic">
                  0{i + 1}
                </div>
              </div>

              {/* STACKED CARD */}
              <div className="flex-1 bg-white border border-slate-100 p-6 md:p-10 rounded-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:border-blue-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 uppercase italic tracking-tight">
                    {item.title}
                  </h3>
                  <span className="w-fit text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                    {item.tag}
                  </span>
                </div>
                <p className="text-slate-500 font-semibold text-xs md:text-base leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-line {
          0% {
            top: -25%;
          }
          100% {
            top: 100%;
          }
        }
        .animate-pulse-line {
          animation: pulse-line 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
