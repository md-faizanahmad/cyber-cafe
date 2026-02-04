import {
  ShieldCheck,
  MonitorPlay,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import { MotionContainer, MotionItem } from "./FeaturesMotion.client";

// ----------------------------------------------------
// SERVER COMPONENT
// - SEO-first content
// - Uses real school / admission keywords
// - No framer-motion import here
// ----------------------------------------------------

const features = [
  {
    title: "Quality CBSE Education in Gaya",
    desc: "Experienced and qualified teachers delivering strong academic foundations as per CBSE curriculum.",
    icon: <Sparkles className="text-blue-600" size={20} />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Smart Classrooms & Digital Learning",
    desc: "Technology-enabled classrooms, computer labs, and digital communication with parents.",
    icon: <MonitorPlay className="text-emerald-600" size={20} />,
    bgColor: "bg-emerald-50",
  },
  {
    title: "Planned Academics & Career Guidance",
    desc: "Well-structured academic calendar, regular assessments, and early career guidance for students.",
    icon: <CalendarCheck className="text-indigo-600" size={20} />,
    bgColor: "bg-indigo-50",
  },
  {
    title: "Safe Campus & Modern Facilities",
    desc: "CCTV surveillance, secure transport, and well-maintained classrooms for a safe learning environment.",
    icon: <ShieldCheck className="text-rose-600" size={20} />,
    bgColor: "bg-rose-50",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* HEADER — SEO IMPORTANT */}
        <header className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-2 block">
            Why Parents Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            A Trusted CBSE School in{" "}
            <span className="text-accent italic">Gaya</span>
          </h2>
        </header>

        {/* FEATURES GRID */}
        <MotionContainer>
          <div className="grid cursor-pointer grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {features.map((feature, index) => (
              <MotionItem
                key={index}
                className="group p-5 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`mb-4 inline-flex p-3 rounded-xl ${feature.bgColor} group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-[11px] md:text-sm text-slate-500 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
