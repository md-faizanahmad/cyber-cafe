"use client";

import React from "react";
import Link from "next/link";
import {
  Monitor,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Globe,
  Printer,
} from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import SocialLinks from "@/shared/SocialLinks";
import GetDirections from "@/shared/GetDirectionsButton";
import TrustAuthority from "./TrustAuthority";
import { FooterLinkGroup } from "./FooterLinkGroup";
import AgencyCredit from "./AgencyCredit";

export default function Footer() {
  const { name, city, state, phone, phoneRaw, email, address } =
    CYBER_CAFE_CONFIG;

  const trustIndicators = [
    {
      icon: <Monitor size={20} />,
      label: "High-Speed Hub",
      color: "text-digital-blue",
    },
    {
      icon: <Printer size={20} />,
      label: "Express Printing",
      color: "text-digital-green",
    },
    {
      icon: <ShieldCheck size={20} />,
      label: "Secure CSC Portal",
      color: "text-digital-blue",
    },
    {
      icon: <Globe size={20} />,
      label: "Online Govt Forms",
      color: "text-digital-saffron",
    },
  ];

  return (
    <footer className="relative w-full border-t border-slate-200 bg-white pt-16 pb-6 text-slate-600">
      {/* 1. TOP STRIP */}
      <div className="container mx-auto px-6 mb-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {trustIndicators.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-6 px-8 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <div
              className={`${item.color} bg-white p-2.5 rounded-lg shadow-sm border border-slate-100`}
            >
              {item.icon}
            </div>
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-digital-blue flex items-center justify-center shadow-md">
                <Monitor className="text-white" size={24} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-black text-slate-900 leading-none italic uppercase">
                  {name}
                </h2>
                <span className="text-[10px] font-bold text-digital-green flex items-center gap-1 uppercase mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-digital-green animate-pulse" />
                  Official CSC Center
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Empowering citizens of{" "}
              <strong>
                {city}, {state}
              </strong>{" "}
              with high-speed digital access under the Digital India initiative.
            </p>
            <SocialLinks />
            <TrustAuthority />
          </div>

          {/* DYNAMIC LINK GROUPS */}
          <div className="lg:col-span-3">
            <FooterLinkGroup
              title="Services"
              borderColor="border-digital-saffron"
              links={[
                { name: "Government Job Forms", href: "/jobs" },
                { name: "PAN & Passport Services", href: "/services" },
                { name: "Aadhaar Updates", href: "/services" },
                { name: "High-Speed Browsing", href: "/pricing" },
              ]}
            />
          </div>

          <div className="lg:col-span-2">
            <FooterLinkGroup
              title="Support"
              borderColor="border-digital-blue"
              links={[
                { name: "About Our Center", href: "/about" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
              ]}
            />
          </div>

          {/* CONTACT & MAP */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 border-l-4 border-digital-green pl-3">
              Locate Us
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-digital-saffron shrink-0" size={18} />
                <p className="text-slate-500 font-medium">
                  {address.line1}, {address.city}, {address.state}
                </p>
              </div>
              <div className="flex items-center gap-3 font-bold text-digital-blue">
                <Phone size={16} />
                <a href={`tel:+91${phoneRaw}`}>{phone}</a>
              </div>
              <div className="flex items-center gap-3 font-bold text-digital-blue">
                <Mail size={16} />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </address>
            <div className="w-full h-32 rounded-lg overflow-hidden border border-slate-200 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005762.043440969!2d83.15922106134559!3d25.87987684990523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e1!3m2!1sen!2sin!4v1770197415545!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
            <GetDirections />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            © {new Date().getFullYear()} {name} • Powered by Digital India
          </p>
          <AgencyCredit />
        </div>
      </div>
    </footer>
  );
}
