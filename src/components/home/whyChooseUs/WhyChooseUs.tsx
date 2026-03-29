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
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 border-l-4 border-zinc-900 pl-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">
            भीड़ से <span className="text-zinc-300">अलग क्यों?</span>
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* VERTICAL PULSE LINE */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-slate-100 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500 to-transparent h-1/3 animate-pulse-line" />
          </div>

          <div className="space-y-12 relative z-10">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="group flex gap-8 items-start md:items-center"
              >
                {/* STEP INDICATOR */}
                <div className="shrink-0 relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-100 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-zinc-900 text-white text-[10px] font-black rounded-full flex items-center justify-center italic">
                    0{i + 1}
                  </div>
                </div>

                {/* STACKED CARD CONTENT */}
                <div className="flex-1 bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase italic tracking-tight">
                      {item.title}
                    </h3>
                    <span className="w-fit text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-slate-500 font-semibold text-xs md:text-sm leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPACT TRUST BANNER */}
        <div className="mt-16 p-6 bg-zinc-950 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
              <AlertCircle size={20} className="text-blue-400 animate-pulse" />
            </div>
            <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">
              Trusted by{" "}
              <span className="text-blue-500 italic">10,000+ Customers</span>{" "}
              for Error-Free Documentation
            </p>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            Get Started Now
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-line {
          0% {
            top: -33%;
          }
          100% {
            top: 100%;
          }
        }
        .animate-pulse-line {
          animation: pulse-line 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
