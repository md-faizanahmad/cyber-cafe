// "use client";

// import { motion } from "framer-motion";
// import { Compass, Lightbulb, Trophy, ArrowRight } from "lucide-react";

// const stages = [
//   {
//     title: "Explorers",
//     sub: "(Pre-Primary)",
//     desc: "Foundation of literacy, numeracy, and curiosity. Play-based learning meets basic concepts.",
//     icon: <Compass className="text-blue-600" size={24} />,
//     color: "bg-blue-50",
//     border: "border-blue-100",
//   },
//   {
//     title: "Thinkers",
//     sub: "(Primary)",
//     desc: "Introduction to scientific method, creative writing, and collaborative projects.",
//     icon: <Lightbulb className="text-amber-600" size={24} />,
//     color: "bg-amber-50",
//     border: "border-amber-100",
//   },
//   {
//     title: "Leaders",
//     sub: "(Secondary)",
//     desc: "Advanced concepts, leadership roles, debating, and preparation for higher education.",
//     icon: <Trophy className="text-emerald-600" size={24} />,
//     color: "bg-emerald-50",
//     border: "border-emerald-100",
//   },
// ];

// export default function AcademicJourney() {
//   return (
//     <section className="py-20 md:py-32 bg-slate-50/30 overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* HEADER */}
//         <div className="text-center mb-16 md:mb-24">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block"
//           >
//             Academic Journey
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
//           >
//             The <span className="text-accent italic">Learning</span> Curve
//           </motion.h2>
//         </div>

//         {/* STAGES GRID: 1 Col Mobile | 3 Col Desktop */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
//           {/* Decorative Path Line (Desktop Only) */}
//           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10" />

//           {stages.map((stage, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="group relative"
//             >
//               <div
//                 className={`h-full p-8 md:p-10 rounded-[2.5rem] bg-white border ${stage.border} shadow-sm group-hover:shadow-xl transition-all duration-500`}
//               >
//                 {/* Stage Number & Icon */}
//                 <div className="flex justify-between items-start mb-8">
//                   <div
//                     className={`p-4 rounded-2xl ${stage.color} transition-transform duration-500 group-hover:rotate-12`}
//                   >
//                     {stage.icon}
//                   </div>
//                   <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">
//                     0{index + 1}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-black text-slate-900 mb-1">
//                   {stage.title}
//                 </h3>
//                 <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
//                   {stage.sub}
//                 </p>
//                 <p className="text-slate-500 font-medium leading-relaxed mb-6">
//                   {stage.desc}
//                 </p>

//                 {/* Mobile-First Indicator */}
//                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
//                   View Curriculum <ArrowRight size={14} />
//                 </div>
//               </div>

//               {/* Connecting Arrow (Desktop Only) */}
//               {index < stages.length - 1 && (
//                 <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full border border-slate-100 shadow-md">
//                   <ArrowRight size={16} className="text-slate-300" />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
