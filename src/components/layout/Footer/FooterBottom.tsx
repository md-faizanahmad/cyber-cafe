// "use client";

// import React from "react";
// import Image from "next/image";
// import GetDirections from "@/shared/GetDirectionsButton";
// import TrustAuthority from "./TrustAuthority";

// export default function FooterBottom() {
//   return (
//     <div className="mt-12 w-full pt-10 border-t border-zinc-800/50">
//       <div className="flex items-center gap-10">
//         {/* LEFT SIDE: PHYSICAL LOCATION HUB */}
//         <div className="w-80 space-y-4">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="h-1.5 w-1.5 rounded-full bg-digital-saffron animate-pulse" />
//             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black">
//               Google Map Location
//             </h4>
//           </div>

//           {/* GOOGLE MAPS CONTAINER */}
//           <div className=" h-40 rounded-2xl overflow-hidden border border-zinc-800  shadow-2xl">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18..." // Replace with your actual embed URL
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>

//           <div className="flex items-center justify-between gap-4">
//             <GetDirections />
//           </div>
//         </div>

//         {/* RIGHT SIDE: DIGITAL BRANDING & TRUST */}
//         <div className=" flex gap-19 space-y-6">
//           {/* CYBER BANNER IMAGE */}

//           {/* TRUST LOGOS COMPONENT */}
//           <TrustAuthority />
//         </div>
//       </div>
//     </div>
//   );
// }
