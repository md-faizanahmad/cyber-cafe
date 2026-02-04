"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

type TabCategory = "Academics" | "Arts & Culture" | "Sports";

const tabData: Record<
  TabCategory,
  {
    title: string;
    subtitle: string;
    image: string;
    items: { label: string; desc: string }[];
  }
> = {
  Academics: {
    title: "CBSE Academic Curriculum",
    subtitle:
      "Strong foundation in core subjects aligned with the CBSE syllabus for academic excellence.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    items: [
      { label: "Mathematics", desc: "Logic & problem solving" },
      { label: "Science", desc: "Experiments & inquiry" },
      { label: "English", desc: "Reading & communication" },
      { label: "Computer Studies", desc: "Digital skills & basics" },
    ],
  },

  "Arts & Culture": {
    title: "Arts, Music & Cultural Activities",
    subtitle:
      "Creative expression through music, dance, fine arts, and cultural programs.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    items: [
      { label: "Music", desc: "Vocal & instrumental" },
      { label: "Dance", desc: "Classical & contemporary" },
      { label: "Fine Arts", desc: "Drawing & painting" },
      { label: "Drama", desc: "Confidence & expression" },
    ],
  },

  Sports: {
    title: "Sports & Physical Education",
    subtitle:
      "Fitness, teamwork, and discipline through structured sports and yoga.",
    image: "/school_sports.png",
    items: [
      { label: "Football", desc: "Teamwork & agility" },
      { label: "Basketball", desc: "Coordination & focus" },
      { label: "Yoga", desc: "Mental & physical balance" },
      { label: "Athletics", desc: "Strength & stamina" },
    ],
  },
};

export default function HolisticDevelopmentClient() {
  const [activeTab, setActiveTab] = useState<TabCategory>("Academics");

  return (
    <>
      {/* TAB NAV */}
      <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar pb-2">
        <div className="flex bg-slate-50 p-1.5 rounded-full border border-slate-100">
          {(Object.keys(tabData) as TabCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 md:px-10 py-3 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-accent text-white shadow-lg"
                  : "text-slate-500 hover:text-accent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col lg:flex-row gap-10 items-center"
        >
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-16/10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
              <Image
                src={tabData[activeTab].image}
                alt={`${activeTab} at Hansraj Public School`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              {tabData[activeTab].title}
            </h3>
            <p className="text-base text-slate-500 font-medium mb-8">
              {tabData[activeTab].subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tabData[activeTab].items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.label}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
