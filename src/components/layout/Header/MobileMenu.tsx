"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MobileMenuProps, MobileLinkProps, ServiceItem } from "./types";

export function MobileMenu({ items, pathname, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl lg:hidden overflow-hidden"
    >
      <div className="p-6 flex flex-col gap-4">
        {/* Main Links */}
        <MobileLink
          href="/govt-schemes"
          label="Govt Schemes"
          active={pathname === "/govt-schemes"}
          onClick={onClose}
        />
        <MobileLink
          href="/jobs"
          label="Govt Forms"
          active={pathname === "/jobs"}
          onClick={onClose}
        />
        <MobileLink
          href="/pvc-card"
          label="PVC Card Order"
          active={pathname === "/pvc-card"}
          onClick={onClose}
          isSaffron
        />

        {/* Nested Services List */}
        <div className="mt-2 pt-4 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-widest">
            All Services
          </p>
          <div className="grid grid-cols-1 gap-2">
            {items.map((s: ServiceItem) => (
              <Link
                key={s.name}
                href={s.href}
                onClick={onClose}
                className={`text-sm font-bold py-2 transition-colors ${
                  pathname === s.href
                    ? "text-digital-blue"
                    : "text-slate-600 hover:text-digital-blue"
                }`}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Helper component for main mobile navigation links
 */
function MobileLink({
  href,
  label,
  active,
  onClick,
  isSaffron,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-lg font-black uppercase tracking-tight transition-colors 
        ${
          active
            ? "text-digital-blue"
            : isSaffron
              ? "text-digital-saffron hover:opacity-80"
              : "text-slate-800 hover:text-digital-blue"
        }`}
    >
      {label}
    </Link>
  );
}
