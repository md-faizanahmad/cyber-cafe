import { ShieldCheck, Bus, Video, Fingerprint, Lock } from "lucide-react";
import { MotionContainer, MotionItem } from "./SecurityMotion.client";

// ----------------------------------------------------
// SERVER COMPONENT
// - SEO-visible trust & safety content
// - Uses parent-search keywords naturally
// - No framer-motion import here
// ----------------------------------------------------

const securityFeatures = [
  {
    title: "Safe & Secure School Campus",
    desc: "Hansraj Public School maintains a safe and disciplined campus with strict safety protocols for all students.",
    icon: <ShieldCheck size={24} className="text-blue-600" />,
    bgIcon: (
      <ShieldCheck
        size={120}
        className="text-blue-500/5 absolute -right-4 -bottom-4 rotate-12"
      />
    ),
    color: "bg-blue-50",
  },
  {
    title: "Secure School Transportation",
    desc: "Safe school bus transport in Gaya with trained staff and monitored routes for student safety.",
    icon: <Bus size={24} className="text-emerald-600" />,
    bgIcon: (
      <Bus
        size={120}
        className="text-emerald-500/5 absolute -right-4 -bottom-4 rotate-12"
      />
    ),
    color: "bg-emerald-50",
  },
  {
    title: "24/7 CCTV Surveillance",
    desc: "The entire school campus is monitored through high-definition CCTV cameras for continuous security.",
    icon: <Video size={24} className="text-indigo-600" />,
    bgIcon: (
      <Video
        size={120}
        className="text-indigo-500/5 absolute -right-4 -bottom-4 rotate-12"
      />
    ),
    color: "bg-indigo-50",
  },
  {
    title: "Authorized Entry Only",
    desc: "ID verification and controlled entry ensure that only authorized personnel can access the campus.",
    icon: <Fingerprint size={24} className="text-rose-600" />,
    bgIcon: (
      <Fingerprint
        size={120}
        className="text-rose-500/5 absolute -right-4 -bottom-4 rotate-12"
      />
    ),
    color: "bg-rose-50",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* HEADER — IMPORTANT FOR GSC */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-4">
            <Lock size={14} className="text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              School Safety & Security
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            A <span className="text-accent italic">Safe CBSE School</span> in
            Gaya
          </h2>
        </header>

        {/* SECURITY GRID */}
        <MotionContainer>
          <div className="grid cursor-pointer grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {securityFeatures.map((item, index) => (
              <MotionItem
                key={index}
                className={`group relative p-6 md:p-8 rounded-[2rem] ${item.color} border border-transparent hover:border-blue-200 transition-all duration-300 overflow-hidden`}
              >
                {/* Background decorative icon */}
                {item.bgIcon}

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[11px] md:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
