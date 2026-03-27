"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Split path and remove empty strings
  const pathSegments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-1">
      <ol className="flex items-center gap-2 list-none m-0 p-0">
        {/* HOME ICON */}
        <li>
          <Link
            href="/"
            className="flex items-center text-slate-400 hover:text-zinc-900 transition-colors"
          >
            <Home size={16} />
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          // Format label: "pan-card" -> "PAN CARD"
          const label = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .toUpperCase();

          return (
            <li key={href} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-slate-300 shrink-0" />

              {isLast ? (
                <span
                  className="text-[14px] font-black tracking-[0.2em] text-blue-600 leading-none"
                  aria-current="page"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-[10px] font-bold tracking-widest text-slate-400 hover:text-zinc-900 uppercase transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
