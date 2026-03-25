"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Monitor } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import { NAV_LINKS } from "@/config/nav.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { name, phone } = CYBER_CAFE_CONFIG;

  // क्लिक करने पर बैकग्राउंड स्क्रॉल रोकना
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <header className=" sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-70">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 z-80">
            <div className="bg-zinc-900 text-white h-9 w-9 flex items-center justify-center rounded-xl shadow-lg">
              <Monitor size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black uppercase tracking-tighter leading-none italic">
                {name}
              </span>
              <span className="text-[8px] font-bold text-digital-green uppercase tracking-widest mt-0.5">
                आपका साइबर कैफ़े
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-digital-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${phone}`}
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-digital-blue transition-all"
            >
              Call Now
            </a>
          </nav>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-zinc-900 z-80 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 📱 MOBILE OVERLAY MENU - (Fix: Initial state is -translate-y-full) */}
        <div
          className={`fixed inset-0 bg-white z-75 lg:hidden transform transition-transform duration-500 ease-in-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
          style={{ height: "100vh", pointerEvents: open ? "auto" : "none" }}
        >
          <div className="flex flex-col h-full pt-28 px-10 pb-12 overflow-y-auto">
            {/* Nav Links */}
            <div className="space-y-8 mb-12">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-3xl font-black uppercase tracking-tighter italic ${
                    i === 0 ? "text-digital-blue" : "text-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-auto space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                CONNECT_HUB
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`tel:${phone}`}
                  className="flex flex-col items-center justify-center p-5 bg-zinc-50 rounded-2xl border border-zinc-100"
                >
                  <Phone size={22} className="mb-2 text-zinc-900" />
                  <span className="text-[10px] font-bold uppercase">Call</span>
                </a>
                <a
                  href={`https://wa.me/91${phone}`}
                  className="flex flex-col items-center justify-center p-5 bg-green-50 rounded-2xl border border-green-100"
                >
                  <MessageCircle size={22} className="mb-2 text-green-600" />
                  <span className="text-[10px] font-bold uppercase">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 🚀 FLOATING PILL (Only visible when menu is CLOSED) */}
      {!open && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-zinc-950/90 backdrop-blur-md text-white px-2 py-2 rounded-2xl shadow-2xl z-50 lg:hidden w-[90%] max-w-[320px] border border-white/10">
          <a
            href={`tel:${phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 font-bold text-[10px] uppercase tracking-[0.2em] border-r border-white/10"
          >
            <Phone size={14} /> Call Now
          </a>
          <a
            href={`https://wa.me/91${phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 font-bold text-[10px] uppercase tracking-[0.2em] text-green-400"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
