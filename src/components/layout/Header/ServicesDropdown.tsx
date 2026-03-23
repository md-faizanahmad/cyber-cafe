"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ServiceItem {
  name: string;
  href: string;
}

export function ServicesDropdown({
  items,
  pathname,
}: {
  items: ServiceItem[];
  pathname: string;
}) {
  const isParentActive = pathname.startsWith("/services");

  return (
    <div className="relative group px-4 py-2">
      <button
        className={`flex items-center gap-1.5 text-sm font-bold uppercase tracking-tight transition-colors 
        ${isParentActive ? "text-digital-blue" : "text-slate-700"} group-hover:text-digital-blue`}
      >
        Services
        <ChevronDown
          size={14}
          className="group-hover:rotate-180 transition-transform"
        />
      </button>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 p-2">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block px-4 py-3 text-xs font-bold rounded-lg transition-colors 
              ${pathname === item.href ? "bg-digital-blue/5 text-digital-blue" : "text-slate-600 hover:bg-slate-50 hover:text-digital-blue"}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
