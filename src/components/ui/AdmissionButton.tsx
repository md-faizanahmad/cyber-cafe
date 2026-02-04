// src/components/ui/AdmissionButton.tsx
import Link from "next/link";

interface AdmissionButtonProps {
  className?: string; // For custom padding/margins
  width?: string; // e.g., "w-full" or "w-fit"
  px?: string; // e.g., "px-8"
  py?: string; // e.g., "py-4"
  fontSize?: string; // e.g., "text-sm"
  isPulse?: boolean; // Toggle the pulse animation
}

export default function AdmissionButton({
  className = "",
  width = "w-fit",
  px = "px-6",
  py = "py-3",
  fontSize = "text-[10px] md:text-xs",
  isPulse = true,
}: AdmissionButtonProps) {
  return (
    <Link
      href="/admission/admission-enquiry"
      className={`relative inline-flex items-center justify-center group ${width} ${className}`}
    >
      {/* 1. Animated Pulse (Conditional) */}
      {isPulse && (
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping group-hover:animate-none opacity-75"></span>
      )}

      {/* 2. Main Button Body */}
      <span
        className={`
          relative z-10 block rounded-full shadow-lg transition-all duration-300
          bg-accent text-white font-black uppercase tracking-widest
          group-hover:bg-blue-950 group-hover:scale-105 active:scale-95 
          border border-accent/20 text-center
          ${px} ${py} ${fontSize} ${width}
        `}
      >
        Admissions Open
      </span>
    </Link>
  );
}
