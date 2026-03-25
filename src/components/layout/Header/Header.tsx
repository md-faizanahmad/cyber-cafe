"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import { NAV_LINKS } from "@/config/nav.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { name, phone } = CYBER_CAFE_CONFIG;

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16 md:h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 relative z-110">
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

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 text-zinc-900 outline-none active:scale-90 transition-transform"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* 📱 MODERN SIDE DRAWER MENU */}
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-zinc-950/40 backdrop-blur-sm z-120 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar Sheet */}
      <div
        className={`fixed top-0 right-0 h-full w-70 sm:w-[320px] bg-white z-130 lg:hidden shadow-2xl transform transition-transform duration-500 ease-out border-l border-slate-100 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-50">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
              Navigation
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 bg-slate-50 rounded-full text-zinc-500"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between w-full p-4 rounded-2xl text-zinc-900 font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition-colors group"
                >
                  {link.label}
                  <ArrowRight
                    size={16}
                    className="text-zinc-300 group-hover:text-digital-blue transform group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
            </div>
          </nav>

          {/* Drawer Footer (Actions) */}
          <div className="p-6 bg-slate-50/50 space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 w-full p-4 bg-zinc-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg"
              >
                <div className="bg-white/10 p-2 rounded-lg">
                  <Phone size={14} />
                </div>
                Call Center
              </a>
              <a
                href={`https://wa.me/91${phone}`}
                className="flex items-center gap-3 w-full p-4 bg-white border border-slate-200 text-zinc-900 rounded-2xl font-bold text-xs uppercase tracking-widest"
              >
                <div className="bg-green-500/10 p-2 rounded-lg text-green-600">
                  <MessageCircle size={14} />
                </div>
                WhatsApp Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
