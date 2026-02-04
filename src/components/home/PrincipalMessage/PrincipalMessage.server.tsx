import Image from "next/image";
import { Quote } from "lucide-react";
import { MotionContainer, MotionItem } from "./PrincipalMotion.client";

// ----------------------------------------------------
// SERVER COMPONENT
// - SEO-visible text
// - Compact spacing (no wasted vertical height)
// - Uses local + school trust keywords
// ----------------------------------------------------

export default function PrincipalMessage() {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* IMAGE — SERVER RENDERED */}
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-none lg:w-5/12">
            <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                alt="Principal of Hansraj Public School, Gaya"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>

            {/* Quote icon */}
            <div className="absolute -bottom-4 -right-4 bg-blue-600 p-4 rounded-2xl shadow-lg text-white">
              <Quote size={22} fill="currentColor" />
            </div>
          </div>

          {/* CONTENT — SERVER STRUCTURE, CLIENT ANIMATION */}
          <div className="w-full lg:w-7/12">
            <MotionContainer>
              <MotionItem className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-3 block">
                Leadership Message
              </MotionItem>

              <MotionItem className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                From the <span className="text-accent italic">Principal’s</span>{" "}
                Desk
              </MotionItem>

              <MotionItem className="text-base md:text-lg font-semibold text-slate-500 mb-6">
                Nurturing Academic Excellence in a CBSE School in Gaya
              </MotionItem>

              <MotionItem className="space-y-4">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Welcome to Hansraj Public School, a CBSE-affiliated school in
                  Gaya dedicated to holistic education. Our focus goes beyond
                  textbooks to build discipline, values, and academic strength
                  in every student.
                </p>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  We believe quality education, modern teaching methods, and a
                  safe school environment together shape confident learners and
                  responsible citizens of tomorrow.
                </p>
              </MotionItem>

              {/* SIGNATURE */}
              <MotionItem className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="text-xl font-black text-slate-900 leading-none">
                  Dr. S. K. Sharma
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mt-2">
                  Principal
                </p>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Hansraj Public School, Gaya (CBSE)
                </p>
              </MotionItem>
            </MotionContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
