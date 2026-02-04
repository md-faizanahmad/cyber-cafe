// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Linkedin, Mail } from "lucide-react";

// const mentors = [
//   {
//     name: "Dr. Ananya Sharma",
//     role: "Chairwoman",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
//   },
//   {
//     name: "Mr. Vikram Singh",
//     role: "Managing Director",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
//   },
//   {
//     name: "Dr. Rajesh Yadav",
//     role: "Director / Principal",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
//   },
//   {
//     name: "Mr. Suresh Gupta",
//     role: "Trustee",
//     image:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
//   },
// ];

// export default function Mentors() {
//   return (
//     <section className="py-16 md:py-24 bg-slate-50/50">
//       <div className="container mx-auto px-4">
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-2 block">
//             The Leadership
//           </span>
//           <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
//             Expert <span className="text-accent italic">Mentors</span>
//           </h2>
//         </div>

//         {/* GRID: Mobile 2 | Tablet 3 | Desktop 4 */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//           {mentors.map((mentor, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="flex flex-col items-center text-center group"
//             >
//               {/* SMALL CIRCLE IMAGE */}
//               <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-600 transition-all duration-300">
//                 <Image
//                   src={mentor.image}
//                   alt={mentor.name}
//                   fill
//                   sizes="(max-width: 768px) 100px, 150px"
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* CONTENT */}
//               <h3 className="text-base md:text-xl font-bold text-slate-900 leading-tight">
//                 {mentor.name}
//               </h3>
//               <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent mt-2">
//                 {mentor.role}
//               </p>

//               {/* SOCIAL LINKS - Subtle indicator of professionalism */}
//               <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <Linkedin
//                   size={14}
//                   className="text-slate-400 hover:text-blue-700 cursor-pointer"
//                 />
//                 <Mail
//                   size={14}
//                   className="text-slate-400 hover:text-blue-600 cursor-pointer"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
