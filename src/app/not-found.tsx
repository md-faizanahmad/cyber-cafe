// src/app/not-found.tsx
import Link from "next/link";
import { MonitorOff, Home } from "lucide-react";
import { MagneticClientWrapper } from "@/shared/MagneticClientWrapper";

export default function NotFound() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* 1. DIGITAL GRID BACKGROUND (Cyber Cafe Style) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[grid-line] bg-size-[30px_30px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
        }}
      />

      {/* 2. GLITCH BACKGROUND TEXT */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black tracking-tighter text-slate-100 leading-none select-none z-0">
        404
      </h1>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 text-center px-6">
        {/* ICON WITH ANIMATION */}
        <div className="flex justify-center mb-6">
          <div className="p-5 bg-red-50 rounded-3xl border border-red-100 text-red-500 animate-pulse">
            <MonitorOff size={48} strokeWidth={2.5} />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic">
          कनेक्शन <span className="text-red-600">लॉस्ट!</span>
        </h2>

        <p className="mt-4 text-slate-500 font-bold max-w-sm mx-auto leading-relaxed">
          लगता है आप गलत लिंक पर आ गए हैं। यह पेज हमारे सर्वर पर उपलब्ध नहीं है।
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <MagneticClientWrapper>
            <Link href="/">
              <button className="group flex items-center gap-3 rounded-2xl px-12 h-16 bg-zinc-900 text-white text-sm font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 transition-all active:scale-95">
                <Home size={18} /> मुख्य पेज पर जाएँ
              </button>
            </Link>
          </MagneticClientWrapper>

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
            Error_Code: 0x404_Page_Not_Found
          </p>
        </div>
      </div>

      {/* 4. DECORATIVE CYBER ELEMENTS */}
      {/* Top Left Floating Square */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-slate-200 hidden md:block" />
      {/* Bottom Right Floating Square */}
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-slate-200 hidden md:block" />

      {/* Decorative Dots */}
      <div className="absolute top-1/4 right-20 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping delay-75" />
        <div className="w-2 h-2 rounded-full bg-green-400 animate-ping delay-150" />
      </div>
    </main>
  );
}
