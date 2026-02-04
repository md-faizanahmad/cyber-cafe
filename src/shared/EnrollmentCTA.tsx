// src/components/sections/EnrollmentCTA.tsx

import Link from "next/link";
import { MagneticClientWrapper } from "./MagneticClientWrapper";

export default function EnrollmentCTA() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-slate-200 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <header className="max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary/40 mb-6">
            School Admissions Open
          </h2>

          <p className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[0.9]">
            Admissions Open at <br />
            <span className="text-accent">Hansraj Public School</span>
          </p>

          <p className="mt-8 text-lg text-slate-600 font-medium max-w-xl mx-auto">
            Apply for admission at Hansraj Public School, a CBSE-affiliated
            school in Gaya offering quality education from Nursery to Class 10.
            Admissions for the current academic session are now open.
          </p>
        </header>

        {/* CTA Button */}
        <MagneticClientWrapper>
          <button className="group relative px-12 py-6 bg-primary text-white rounded-full font-black text-xl uppercase tracking-widest overflow-hidden shadow-2xl transition-transform active:scale-95">
            <Link className="relative z-10" href="/admission">
              Apply for Admission
            </Link>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </MagneticClientWrapper>

        <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
          Limited seats available • Early applications encouraged
        </p>

        {/* SEO helper */}
        <p className="sr-only">
          School admission in Gaya for CBSE curriculum. Apply online for Nursery
          to Class 10 at Hansraj Public School.
        </p>
      </div>
    </section>
  );
}
