// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { CheckCircle2 } from "lucide-react";

// type TabCategory = "Academics" | "Arts & Culture" | "Sports";

// interface ContentData {
//   title: string;
//   subtitle: string;
//   image: string;
//   items: { label: string; desc: string }[];
// }

// const tabData: Record<TabCategory, ContentData> = {
//   Academics: {
//     title: "Core Subjects",
//     subtitle:
//       "We follow an integrated curriculum ensuring a balanced academic foundation.",
//     image:
//       "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
//     items: [
//       { label: "Mathematics", desc: "Logic & Problem Solving" },
//       { label: "General Science", desc: "Inquiry & Experiments" },
//       { label: "English Lit", desc: "Reading & Expression" },
//       { label: "Computer Sci", desc: "Coding & Algorithms" },
//     ],
//   },
//   "Arts & Culture": {
//     title: "Expressive Arts",
//     subtitle:
//       "Every child is encouraged to find their voice through our robust arts program.",
//     image:
//       "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
//     items: [
//       { label: "Music", desc: "Classical & Western" },
//       { label: "Fine Arts", desc: "Pottery & Painting" },
//       { label: "Dance", desc: "Traditional & Contemporary" },
//       { label: "Drama", desc: "Expression & Confidence" },
//     ],
//   },
//   Sports: {
//     title: "Physical Education",
//     subtitle:
//       "Building teamwork, resilience, and health through structured sports.",
//     image: "/school_sports.png",
//     items: [
//       { label: "Swimming", desc: "Heated Pool Facilities" },
//       { label: "Football", desc: "Professional Coaching" },
//       { label: "Basketball", desc: "Court Discipline" },
//       { label: "Yoga", desc: "Mental & Physical Balance" },
//     ],
//   },
// };

// export default function HolisticDevelopment() {
//   const [activeTab, setActiveTab] = useState<TabCategory>("Academics");

//   return (
//     <section className="py-20 md:py-32 bg-white overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
//             Curriculum & Co-curricular
//           </span>
//           <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
//             Holistic <span className="text-accent italic">Development</span>
//           </h2>
//         </div>

//         {/* TAB NAVIGATION - Mobile First Scrollable */}
//         <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar pb-2">
//           <div className="flex bg-slate-50 p-1.5 rounded-full border border-slate-100">
//             {(Object.keys(tabData) as TabCategory[]).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 md:px-10 py-3 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
//                   activeTab === tab
//                     ? "bg-accent text-white shadow-lg"
//                     : "text-slate-500 hover:text-accent"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* CONTENT AREA */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="flex flex-col lg:flex-row gap-12 items-center"
//           >
//             {/* Image Side */}
//             <div className="w-full lg:w-1/2 relative">
//               <div className="relative aspect-16/10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
//                 <Image
//                   src={tabData[activeTab].image}
//                   alt={activeTab}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
//             </div>

//             {/* Text Side */}
//             <div className="w-full lg:w-1/2">
//               <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
//                 {tabData[activeTab].title}
//               </h3>
//               <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
//                 {tabData[activeTab].subtitle}
//               </p>

//               {/* Items Grid: 2x2 for clean layout */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {tabData[activeTab].items.map((item, idx) => (
//                   <div key={idx} className="flex items-start gap-4 group">
//                     <div className="mt-1">
//                       <CheckCircle2
//                         size={20}
//                         className="text-blue-600 group-hover:scale-110 transition-transform"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-900 leading-tight">
//                         {item.label}
//                       </h4>
//                       <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
