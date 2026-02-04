// src/components/sections/Testimonials/TestimonialsGlow.tsx
import { TestimonialsClientWrapper } from "./TestimonialsClientWrapper";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export default function TestimonialsGlow() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ramesh Kumar Singh",
      role: "Parent of Class 8 Student (CBSE Curriculum)",
      quote:
        "Hansraj Public School in Gaya has transformed my child’s academic performance. His confidence in English and Mathematics has improved significantly after joining this CBSE school.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
    {
      id: "2",
      name: "Anjali Devi",
      role: "Parent & Local Business Owner, Gaya",
      quote:
        "Finally, Gaya has a school that focuses on both values and modern CBSE education. Hansraj Public School provides a disciplined environment along with quality teaching.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    },
    {
      id: "3",
      name: "Prakash Yadav",
      role: "Government Employee & Parent",
      quote:
        "The focus on discipline, academics, and extracurricular activities at Hansraj Public School is impressive. It is one of the best CBSE schools in Gaya for holistic development.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center lg:text-left">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600/60">
          Parent Reviews from Gaya
        </h2>
        <p className="mt-4 text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
          Trusted by <span className="text-accent">Families of Gaya</span>
        </p>

        {/* SEO helper (invisible but safe) */}
        <p className="sr-only">
          Parents in Gaya trust Hansraj Public School for CBSE education,
          discipline, academic excellence, and overall student development.
        </p>
      </div>

      <TestimonialsClientWrapper testimonials={testimonials} />
    </section>
  );
}
