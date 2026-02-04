// "use client";

// import { motion } from "framer-motion";
// import { Monitor, Trophy, Utensils, Map, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const facilityData = [
//   {
//     title: "Smart Classes",
//     desc: "Learn on Touches",
//     icon: <Monitor size={20} />,
//     image:
//       "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
//   },
//   {
//     title: "Sports Complex",
//     desc: "Indoor & Outdoor",
//     icon: <Trophy size={20} />,
//     image: "/SportsComplex.png",
//   },
//   {
//     title: "Cafeteria",
//     desc: "Nutritious Meals",
//     icon: <Utensils size={20} />,
//     image: "/Cafeteria.png",
//   },
//   {
//     title: "Explore Campus",
//     desc: "Virtual Tours",
//     icon: <Map size={20} />,
//     image: "/ExploreCampu.png",
//     isLink: true,
//   },
// ];

// export default function Facilities() {
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-2 block">
//             Infrastructural Excellence
//           </span>
//           <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
//             Our <span className="text-accent italic">Facilities</span>
//           </h2>
//         </div>

//         {/* GRID: Mobile 2 | Tablet 3 | Desktop 4 */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
//           {facilityData.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative h-48 md:h-80 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Background Image from Unsplash */}
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 sizes="(max-width: 768px) 50vw, 25vw"
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Modern Dark Overlay */}
//               <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

//               {/* Content Layer */}
//               <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end z-10">
//                 <div className="mb-2 md:mb-4 inline-flex p-2 rounded-lg bg-accent text-white w-fit shadow-lg transform group-hover:-translate-y-1 transition-transform">
//                   {item.icon}
//                 </div>

//                 <h3 className="text-sm md:text-xl font-bold text-white mb-1 leading-tight uppercase tracking-tight">
//                   {item.title}
//                 </h3>
//                 <p className="text-[10px] md:text-sm text-slate-300 font-medium leading-tight mb-3">
//                   {item.desc}
//                 </p>

//                 {item.isLink ? (
//                   <Link
//                     href="/campus"
//                     className="inline-flex items-center gap-1 text-[9px] md:text-[11px] font-bold text-accent uppercase tracking-widest hover:text-white transition-colors"
//                   >
//                     Take a Look <ArrowRight size={12} />
//                   </Link>
//                 ) : (
//                   <div className="h-1 w-6 bg-accent rounded-full group-hover:w-12 transition-all duration-300" />
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
