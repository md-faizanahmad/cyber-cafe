"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

export default function ContactSidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const { phoneRaw, whatsapp } = CYBER_CAFE_CONFIG;

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Show sidebar after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!whatsapp.enabled || !phoneRaw) return null;

  const whatsappUrl = `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(whatsapp.message)}`;

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-100 flex flex-col transition-all duration-500 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {/* 🟢 WHATSAPP TAB */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-9 py-4 bg-[#25D366] text-white rounded-tl-xl border-b border-white/10 shadow-[-2px_0_8px_rgba(0,0,0,0.1)] active:w-11 transition-all"
      >
        <span className="[writing-mode:vertical-lr] rotate-180 text-[8px] font-black uppercase tracking-widest mb-2">
          WhatsApp
        </span>
        <MessageCircle size={14} fill="currentColor" />
      </a>

      {/* 🔘 CALL TAB */}
      <a
        href={`tel:${phoneRaw}`}
        className="flex flex-col items-center justify-center w-9 py-4 bg-zinc-900 text-white rounded-bl-xl shadow-[-2px_2px_8px_rgba(0,0,0,0.1)] active:w-11 transition-all"
      >
        <span className="[writing-mode:vertical-lr] rotate-180 text-[8px] font-black uppercase tracking-widest mb-2">
          Call_Now
        </span>
        <Phone size={14} fill="currentColor" />
      </a>
    </div>
  );
}
