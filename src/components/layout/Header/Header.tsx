"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Monitor,
  Menu,
  X,
  CreditCard,
  FileText,
  Landmark,
  Phone,
  Clock,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";

// Import small components
import { NavLink } from "./NavLink";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileMenu } from "./MobileMenu";
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

  const serviceItems = [
    { name: "Aadhaar Services", href: "/services/aadhaar" },
    { name: "PAN Card", href: "/services/pan" },
    { name: "Voter & Passport", href: "/services/voter" },
    { name: "Certificates", href: "/services/certificates" },
    { name: "Printing", href: "/services/printing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. TOP BAR (Static Data) */}
      <div className="hidden lg:block bg-digital-blue text-white py-2 px-6 text-[11px] font-bold uppercase tracking-widest">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-digital-saffron" /> 9 AM - 8 PM
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-digital-saffron" /> {phone}
            </span>
          </div>
          <span>Digital India Initiative • CSC Verified</span>
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <nav
        className={`transition-all border-b ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"} border-slate-100`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-lg bg-digital-blue flex items-center justify-center shadow-lg">
              <Monitor className="text-white" size={22} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-black text-slate-900 leading-none uppercase italic">
                {name}
              </h1>
              <span className="text-[9px] font-bold text-digital-green uppercase tracking-widest">
                {city} Digital Seva
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU - Small Components in action */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink
              href="/govt-schemes"
              icon={<Landmark size={15} />}
              label="Schemes"
              active={pathname === "/govt-schemes"}
            />
            <NavLink
              href="/jobs"
              icon={<FileText size={15} />}
              label="Forms"
              active={pathname === "/jobs"}
            />
            <ServicesDropdown items={serviceItems} pathname={pathname} />

            <Link
              href="/pvc-card"
              className={`ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${pathname === "/pvc-card" ? "bg-digital-blue text-white" : "bg-slate-900 text-white hover:bg-digital-blue"}`}
            >
              <CreditCard
                size={15}
                className={
                  pathname === "/pvc-card"
                    ? "text-white"
                    : "text-digital-saffron"
                }
              />
              PVC Card
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-slate-900 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            items={serviceItems}
            pathname={pathname}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
