// src/components/shared/SocialLinks.tsx
// ----------------------------------------------------
// Centralized social media links component
// - Reads data ONLY from SCHOOL_CONFIG
// - Automatically hides platforms that are not configured
// - Safe for Server Components (no client hooks)
// ----------------------------------------------------

import Link from "next/link";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

type SocialLinksProps = {
  size?: number; // Icon size (default: 18)
  className?: string; // Optional wrapper styles
};

export default function SocialLinks({
  size = 18,
  className = "",
}: SocialLinksProps) {
  const { social, whatsapp, phoneRaw } = CYBER_CAFE_CONFIG;

  // Build WhatsApp chat URL only if enabled
  const whatsappUrl =
    whatsapp.enabled && phoneRaw
      ? `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(
          whatsapp.message,
        )}`
      : null;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* FACEBOOK */}
      {social.facebook && (
        <Link
          href={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-slate-400 hover:text-accent transition-colors"
        >
          <Facebook size={size} />
        </Link>
      )}

      {/* INSTAGRAM */}
      {social.instagram && (
        <Link
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-slate-400 hover:text-accent transition-colors"
        >
          <Instagram size={size} />
        </Link>
      )}

      {/* YOUTUBE */}
      {social.youtube && (
        <Link
          href={social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-slate-400 hover:text-accent transition-colors"
        >
          <Youtube size={size} />
        </Link>
      )}

      {/* WHATSAPP CHAT */}
      {whatsappUrl && (
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Admission Enquiry"
          className="text-slate-400 hover:text-green-600 transition-colors"
        >
          <MessageCircle size={size} />
        </Link>
      )}
    </div>
  );
}
