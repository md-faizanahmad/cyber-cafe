import Image from "next/image";
import Link from "next/link";
import { Monitor, Trophy, Utensils, Map, ArrowRight } from "lucide-react";
import { MotionContainer, MotionItem } from "./FacilitiesMotion.client";

// ----------------------------------------------------
// SERVER COMPONENT
// - Facilities keywords visible to Google
// - Supports local + admission intent
// - No framer-motion import here
// ----------------------------------------------------

const facilityData = [
  {
    title: "Smart Classrooms",
    desc: "Technology-enabled smart classes for interactive CBSE learning.",
    icon: <Monitor size={20} />,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
  },
  {
    title: "Sports Complex",
    desc: "Indoor and outdoor sports facilities for physical development.",
    icon: <Trophy size={20} />,
    image: "/SportsComplex.png",
  },
  {
    title: "School Cafeteria",
    desc: "Hygienic cafeteria serving nutritious meals for students.",
    icon: <Utensils size={20} />,
    image: "/Cafeteria.png",
  },
  {
    title: "Explore School Campus",
    desc: "Virtual campus tour showcasing classrooms and facilities.",
    icon: <Map size={20} />,
    image: "/ExploreCampu.png",
    isLink: true,
  },
];

export default function Facilities() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* HEADER — IMPORTANT FOR GSC */}
        <header className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-2 block">
            School Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Facilities at{" "}
            <span className="text-accent italic">Hansraj Public School</span>
          </h2>

          {/* SEO fallback text */}
          <p className="sr-only">
            Hansraj Public School in Gaya offers smart classrooms, sports
            complex, cafeteria, and modern infrastructure to support quality
            CBSE education.
          </p>
        </header>

        {/* FACILITIES GRID */}
        <MotionContainer>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {facilityData.map((item, index) => (
              <MotionItem
                key={index}
                className="group relative h-48 md:h-80 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={`${item.title} at Hansraj Public School, Gaya`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end z-10">
                  <div className="mb-2 md:mb-4 inline-flex p-2 rounded-lg bg-accent text-white w-fit shadow-lg transform group-hover:-translate-y-1 transition-transform">
                    {item.icon}
                  </div>

                  <h3 className="text-sm md:text-xl font-bold text-white mb-1 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-sm text-slate-300 font-medium mb-3">
                    {item.desc}
                  </p>

                  {item.isLink ? (
                    <Link
                      href="/campus"
                      className="inline-flex items-center gap-1 text-[9px] md:text-[11px] font-bold text-accent uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Take a Look <ArrowRight size={12} />
                    </Link>
                  ) : (
                    <div className="h-1 w-6 bg-accent rounded-full group-hover:w-12 transition-all duration-300" />
                  )}
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
