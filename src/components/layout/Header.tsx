"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Monitor,
  Menu,
  X,
  ChevronDown,
  CreditCard,
  FileText,
  Landmark,
  Phone,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { name, phone, city } = CYBER_CAFE_CONFIG;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Centralized Navigation Data
  const serviceItems = [
    { name: "Aadhaar Services", href: "/services/aadhaar" },
    { name: "PAN Card (New/Correction)", href: "/services/pan" },
    { name: "Voter ID & Passport", href: "/services/voter" },
    { name: "Income & Caste Certificates", href: "/services/certificates" },
    { name: "High Speed Printing", href: "/services/printing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT BAR (Saffron Alert) */}
      <div className="hidden lg:block bg-digital-blue text-white py-2 px-6">
        <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-digital-saffron" />
              Open: 9:00 AM - 8:00 PM
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-digital-saffron" />
              Support: {phone}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white/10 px-2 py-0.5 rounded">
              CSC ID: VERIFIED
            </span>
            <span className="text-digital-saffron">
              Digital India Initiative
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-4"
        } border-slate-100`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-lg bg-digital-blue flex items-center justify-center shadow-lg shadow-digital-blue/20">
              <Monitor className="text-white" size={22} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-black text-slate-900 leading-none tracking-tighter uppercase italic">
                {name}
              </h1>
              <span className="text-[9px] font-bold text-digital-green uppercase tracking-widest">
                Digital Seva • {city}
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink
              href="/govt-schemes"
              icon={<Landmark size={15} />}
              label="Govt Schemes"
            />
            <NavLink
              href="/jobs"
              icon={<FileText size={15} />}
              label="Govt Forms"
            />

            {/* SERVICES DROPDOWN */}
            <div className="relative group px-4 py-2">
              <button className="flex items-center gap-1.5 text-sm font-bold text-slate-700 group-hover:text-digital-blue transition-colors uppercase tracking-tight">
                Services{" "}
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>

              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 p-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-digital-blue rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pvc-card"
              className="ml-4 flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-digital-blue transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              <CreditCard size={15} className="text-digital-saffron" />
              PVC Card Order
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <MobileNavLink
                href="/schemes"
                label="Govt Schemes"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                href="/jobs"
                label="Govt Forms"
                onClick={() => setIsOpen(false)}
              />
              <MobileNavLink
                href="/pvc-card"
                label="PVC Card Order"
                onClick={() => setIsOpen(false)}
                isSpecial
              />

              <div className="mt-2 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-3">
                  All Services
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {serviceItems.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="text-sm font-bold text-slate-600 py-2"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// HELPER COMPONENTS
function NavLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 hover:text-digital-blue transition-colors uppercase tracking-tight"
    >
      <span className="text-digital-blue/60">{icon}</span>
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
  isSpecial = false,
}: {
  href: string;
  label: string;
  onClick: () => void;
  isSpecial?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-lg font-black uppercase tracking-tight ${isSpecial ? "text-digital-saffron" : "text-slate-800"}`}
    >
      {label}
    </Link>
  );
}
