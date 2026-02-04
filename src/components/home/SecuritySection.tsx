// "use client";

// import { motion } from "framer-motion";
// import { ShieldCheck, Bus, Video, Fingerprint, Lock } from "lucide-react";

// const securityFeatures = [
//   {
//     title: "Safe & Secure",
//     desc: "We take your child's safety as seriously as you do.",
//     icon: <ShieldCheck size={24} className="text-blue-600" />,
//     bgIcon: (
//       <ShieldCheck
//         size={120}
//         className="text-blue-500/5 absolute -right-4 -bottom-4 rotate-12"
//       />
//     ),
//     color: "bg-blue-50",
//   },
//   {
//     title: "Transportation",
//     desc: "Our facility keeps your children safe during the commute.",
//     icon: <Bus size={24} className="text-emerald-600" />,
//     bgIcon: (
//       <Bus
//         size={120}
//         className="text-emerald-500/5 absolute -right-4 -bottom-4 rotate-12"
//       />
//     ),
//     color: "bg-emerald-50",
//   },
//   {
//     title: "24/7 Surveillance",
//     desc: "Our campus is strictly monitored by high-def CCTV cameras.",
//     icon: <Video size={24} className="text-indigo-600" />,
//     bgIcon: (
//       <Video
//         size={120}
//         className="text-indigo-500/5 absolute -right-4 -bottom-4 rotate-12"
//       />
//     ),
//     color: "bg-indigo-50",
//   },
//   {
//     title: "ID Proof",
//     desc: "Entry is restricted for all unauthorized personnels.",
//     icon: <Fingerprint size={24} className="text-rose-600" />,
//     bgIcon: (
//       <Fingerprint
//         size={120}
//         className="text-rose-500/5 absolute -right-4 -bottom-4 rotate-12"
//       />
//     ),
//     color: "bg-rose-50",
//   },
// ];

// export default function SecuritySection() {
//   return (
//     <section className="py-16 md:py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-4">
//             <Lock size={14} className="text-blue-600" />
//             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
//               Campus Safety
//             </span>
//           </div>
//           <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
//             Your Child&apos;s{" "}
//             <span className="text-accent italic">Security</span> First
//           </h2>
//         </div>

//         {/* GRID: Mobile 2 | Tablet 3 | Desktop 4 */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {securityFeatures.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className={`group relative p-6 md:p-8 rounded-[2rem] ${item.color} border border-transparent hover:border-blue-200 transition-all duration-300 overflow-hidden`}
//             >
//               {/* Background Decorative Icon */}
//               {item.bgIcon}

//               <div className="relative z-10">
//                 <div className="mb-6 inline-flex p-3 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
//                   {item.icon}
//                 </div>

//                 <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 leading-tight">
//                   {item.title}
//                 </h3>
//                 <p className="text-[11px] md:text-sm text-slate-500 font-medium leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
