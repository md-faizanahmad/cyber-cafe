import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { MotionContainer, MotionItem } from "./MentorsMotion.client";

// ----------------------------------------------------
// SERVER COMPONENT
// - Leadership & management keywords visible to Google
// - Builds trust (E-E-A-T)
// - No framer-motion import here
// ----------------------------------------------------

const mentors = [
  {
    name: "Dr. Ananya Sharma",
    role: "Chairperson",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
  },
  {
    name: "Mr. Vikram Singh",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
  },
  {
    name: "Dr. Rajesh Yadav",
    role: "Principal & Academic Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
  },
  {
    name: "Mr. Suresh Gupta",
    role: "Trustee",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
  },
];

export default function Mentors() {
  return (
    <section className="py-14 md:py-20 bg-slate-50/50">
      <div className="container mx-auto px-4">
        {/* HEADER — IMPORTANT FOR GSC */}
        <header className="text-center mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-2 block">
            School Management
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Leadership & Management at{" "}
            <span className="text-accent italic">Hansraj Public School</span>
          </h2>

          {/* SEO fallback text */}
          <p className="sr-only">
            Hansraj Public School in Gaya is led by experienced management,
            trustees, and principal ensuring quality CBSE education and student
            development.
          </p>
        </header>

        {/* LEADERSHIP GRID */}
        <MotionContainer>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {mentors.map((mentor, index) => (
              <MotionItem
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* IMAGE */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-600 transition-all duration-300">
                  <Image
                    src={mentor.image}
                    alt={`${mentor.name}, ${mentor.role} of Hansraj Public School`}
                    fill
                    sizes="(max-width: 768px) 100px, 150px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <h3 className="text-base md:text-xl font-bold text-slate-900 leading-tight">
                  {mentor.name}
                </h3>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent mt-2">
                  {mentor.role}
                </p>

                {/* SOCIAL (optional trust signals) */}
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Linkedin
                    size={14}
                    className="text-slate-400 hover:text-blue-700 cursor-pointer"
                  />
                  <Mail
                    size={14}
                    className="text-slate-400 hover:text-blue-600 cursor-pointer"
                  />
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
