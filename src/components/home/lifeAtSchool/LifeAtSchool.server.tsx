import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Book, Trees } from "lucide-react";
import { MotionContainer, MotionItem } from "./LifeAtSchoolMotion.client";

// ----------------------------------------------------
// SERVER COMPONENT
// - Campus & facilities keywords visible to Google
// - Supports local + admission intent
// - No framer-motion import here
// ----------------------------------------------------

const galleryPreview = [
  {
    title: "Robotics & Computer Lab",
    desc: "Modern robotics and computer labs encouraging innovation and technical learning.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    icon: <Bot size={20} />,
    span: "md:col-span-2",
  },
  {
    title: "School Library",
    desc: "Well-stocked library promoting reading habits and academic research.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    icon: <Book size={20} />,
    span: "md:col-span-1",
  },
  {
    title: "Playground & Activity Area",
    desc: "Open play zones supporting physical development and outdoor activities.",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800",
    icon: <Trees size={20} />,
    span: "md:col-span-1",
  },
];

export default function LifeAtSchool() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* HEADER — GSC IMPORTANT */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
              Campus & Facilities
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
              School Campus & Facilities at{" "}
              <span className="text-accent italic">Hansraj Public School</span>
            </h2>

            {/* SEO fallback text */}
            <p className="sr-only">
              Hansraj Public School in Gaya provides modern classrooms, robotics
              labs, library, playground, and activity areas for overall student
              development.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group flex items-center gap-3 px-8 py-4 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 border border-slate-100 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              View School Gallery
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </header>

        {/* CAMPUS GALLERY GRID */}
        <MotionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPreview.map((item, index) => (
              <MotionItem
                key={index}
                className={`group relative h-100 overflow-hidden rounded-[2.5rem] shadow-lg ${item.span}`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={`${item.title} at Hansraj Public School, Gaya`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent rounded-xl text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-200 font-medium leading-relaxed max-w-xs text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>

                {/* Hover CTA */}
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
