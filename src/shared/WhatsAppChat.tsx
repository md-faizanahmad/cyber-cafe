"use client";

// ----------------------------------------------------
// Floating WhatsApp Chat Widget
// - Uses SCHOOL_CONFIG
// - Click icon → opens chat box
// - Click button → opens WhatsApp with prefilled message
// ----------------------------------------------------

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { phoneRaw, whatsapp, name } = CYBER_CAFE_CONFIG;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ❌ Do not show floating widget on mobile
  if (isMobile || !whatsapp.enabled || !phoneRaw) return null;

  const whatsappUrl = `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(
    whatsapp.message,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* CHAT BOX */}
      {open && (
        <div className="mb-4 w-72 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
          {/* HEADER */}
          <div className="flex items-center justify-between bg-green-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="text-sm font-bold">WhatsApp Chat</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="p-4 text-sm text-slate-700 space-y-3">
            <p className="font-semibold">{name}</p>
            <p>
              Hi 👋 <br />
              Have questions about admissions? Chat with us on WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-lg bg-green-600 py-2 font-bold text-white hover:bg-green-700 transition"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
      >
        <MessageCircle size={26} />
      </button>
    </div>
  );
}
