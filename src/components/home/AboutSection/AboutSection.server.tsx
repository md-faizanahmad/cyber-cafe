import Image from "next/image";
import Link from "next/link";
import { History, Users, ArrowRight } from "lucide-react";
import { MotionContainer, MotionItem } from "./AboutMotion.client";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* IMAGE GRID — SERVER ONLY */}
          <div className="relative w-full lg:w-1/2 flex gap-4">
            <div className="relative w-1/2 h-75 md:h-112.5 rounded-[2rem] overflow-hidden mt-8 shadow-2xl">
              <Image
                src="/school_student1.png"
                alt="Students at Hansraj Public School, Gaya"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="relative w-1/2 h-75 md:h-112.5 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/school_student2.jpg"
                alt="Classroom learning at Hansraj Public School"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* CONTENT — SERVER STRUCTURE, CLIENT ANIMATION */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <MotionContainer>
              <MotionItem className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
                Who We Are
              </MotionItem>

              <MotionItem className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                Hansraj <span className="text-accent">Public School</span>
              </MotionItem>

              <MotionItem className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                Hansraj Public School is a well-known English medium,
                co-educational institution in Gaya, Bihar, committed to academic
                excellence, leadership, and strong moral values.
              </MotionItem>

              <MotionItem className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <History className="text-blue-600" size={20} />
                    <span className="text-2xl font-black text-slate-900">
                      10+
                    </span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    Years of Excellence
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <Users className="text-blue-600" size={20} />
                    <span className="text-2xl font-black text-slate-900">
                      12:1
                    </span>
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    Student–Teacher Ratio
                  </p>
                </div>
              </MotionItem>

              <MotionItem>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3  bg-accent hover:bg-blue-950 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-ambar-600 transition-all shadow-xl"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </MotionItem>
            </MotionContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
