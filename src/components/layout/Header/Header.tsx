"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import { NAV_LINKS } from "./nav.config";
import { NavLink } from "./NavLink";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { name, phone, city } = CYBER_CAFE_CONFIG;

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:flex justify-between px-6 py-2 text-xs bg-black text-white">
        <span>📍 {city} | ⏰ 9AM–8PM</span>
        <span>✔️ Trusted Cyber Cafe</span>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-black text-white h-9 w-9 flex items-center justify-center rounded">
              🖥️
            </div>
            <span className="text-sm font-semibold">{name}</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex gap-3">
            <a
              href={`tel:${phone}`}
              className="px-4 py-2 bg-black text-white rounded-full text-sm"
            >
              📞 Call
            </a>
            <a
              href={`https://wa.me/91${phone}`}
              target="_blank"
              className="px-4 py-2 bg-green-500 text-white rounded-full text-sm"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* MOBILE */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href={`tel:${phone}`}>
              <Phone size={20} />
            </a>

            <a href={`https://wa.me/91${phone}`} className="text-green-600">
              💬
            </a>

            <button onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden px-4 pb-4 space-y-3 border-t">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-gray-700"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 space-y-2">
              <a
                href={`tel:${phone}`}
                className="block w-full text-center py-2 bg-black text-white rounded"
              >
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/91${phone}`}
                className="block w-full text-center py-2 bg-green-500 text-white rounded"
              >
                💬 WhatsApp करें
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 flex lg:hidden">
        <a
          href={`tel:${phone}`}
          className="w-1/2 py-3 bg-black text-white text-center"
        >
          📞 Call
        </a>
        <a
          href={`https://wa.me/91${phone}`}
          className="w-1/2 py-3 bg-green-500 text-white text-center"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
