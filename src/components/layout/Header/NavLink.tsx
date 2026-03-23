"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

export function NavLink({ href, icon, label, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative flex items-center gap-2 px-4 py-2 text-sm font-bold transition-colors uppercase tracking-tight 
        ${active ? "text-digital-blue" : "text-slate-700 hover:text-digital-blue"}`}
    >
      <span className={active ? "text-digital-blue" : "text-digital-blue/60"}>
        {icon}
      </span>
      {label}

      {/* Animated underline only for active desktop link */}
      {active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute bottom-0 left-4 right-4 h-0.5 bg-digital-blue"
        />
      )}
    </Link>
  );
}
