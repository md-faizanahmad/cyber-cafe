"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, ExternalLink, Zap } from "lucide-react";

export default function TrendingSidebar() {
  const trendingLinks = [
    {
      name: "HSRP No. Plate Online",
      href: "https://bookmyhsrp.com/",
      tag: "New",
    },
    { name: "PACL Inve. Complaint", href: "#" },
    {
      name: "DSP Login (CSC)",
      href: "https://digitalseva.csc.gov.in/",
      tag: "Login",
    },
    {
      name: "NSDL Pan Card",
      href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    },
    { name: "CSC Olympiad", href: "#" },
    { name: "BIHAR Energy", href: "https://sbpdcl.co.in/" },
    {
      name: "BIHAR E-District",
      href: "https://serviceonline.bihar.gov.in/",
      tag: "Govt",
    },
    { name: "PM Kisan", href: "https://pmkisan.gov.in/" },
    { name: "E-Aadhaar", href: "https://myaadhaar.uidai.gov.in/" },
    { name: "Passport Seva", href: "https://www.passportindia.gov.in/" },
    { name: "Maandhan Yojana", href: "https://maandhan.in/" },
    { name: "PM Fasal Bima Yojana", href: "https://pmfby.gov.in/" },
    { name: "BIHAR Scholarship", href: "https://pmsonline.bih.nic.in/" },
    {
      name: "NSP (National Scholarship)",
      href: "https://scholarships.gov.in/",
    },
    {
      name: "BIHAR Khasra (Land Records)",
      href: "http://biharbhumi.bihar.gov.in/",
    },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-4 p-10 mt-15 ">
      {/* HEADER */}
      <div className="flex items-center gap-2 px-4 lg:px-0">
        <div className="p-1.5 bg-digital-saffron/10 rounded-lg">
          <TrendingUp className="text-digital-saffron" size={20} />
        </div>
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">
          Trending Portals
        </h3>
      </div>

      {/* MOBILE VIEW: Horizontal Scroll Chips */}
      {/* MOBILE VIEW: 2-Column Grid (Visible below LG breakpoint) */}
      <div className="lg:hidden grid grid-cols-2 gap-3 px-4 pb-6">
        {trendingLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            target="_blank"
            className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm active:scale-95 active:bg-slate-50 transition-all border-l-4 border-l-digital-blue"
          >
            <div className="shrink-0 p-1.5 bg-digital-saffron/10 rounded-md">
              <Zap size={16} className="text-digital-saffron" />
            </div>
            <span className="text-sm md:text-base font-bold text-slate-700 leading-tight">
              {link.name}
            </span>
          </Link>
        ))}
      </div>

      {/* DESKTOP VIEW: Vertical List */}
      <div className="hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="bg-slate-50 p-3 border-b border-slate-100 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            Fast Access Links
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
        </div>

        <nav className="p-2 space-y-1 max-h-150 overflow-y-auto no-scrollbar">
          {trendingLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              className="group flex items-center justify-between p-3 rounded-xl hover:bg-digital-blue transition-all duration-200"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-700 group-hover:text-white transition-colors uppercase tracking-tight">
                  {link.name}
                </span>
                {link.tag && (
                  <span
                    className={`text-[9px] w-fit px-1.5 rounded mt-1 font-black uppercase tracking-tighter ${
                      link.tag === "New"
                        ? "bg-red-100 text-red-600"
                        : "bg-digital-blue/10 text-digital-blue group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    {link.tag}
                  </span>
                )}
              </div>
              <ExternalLink
                size={14}
                className="text-slate-300 group-hover:text-white/70 group-hover:translate-x-1 transition-all"
              />
            </Link>
          ))}
        </nav>

        {/* FOOTER CTA */}
        <div className="p-4 bg-digital-blue text-center">
          <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1">
            Need Help Filling Forms?
          </p>
          <p className="text-xs font-black text-white uppercase italic tracking-tighter">
            Visit CyberCafe Hub Today
          </p>
        </div>
      </div>
    </aside>
  );
}
