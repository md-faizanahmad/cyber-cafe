"use client";

import React from "react";
import Link from "next/link";
import {
  Monitor,
  MapPin,
  Phone,
  ExternalLink,
  ArrowRight,
  Printer,
  ShieldCheck,
  Globe,
  Mail,
} from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import SocialLinks from "@/shared/SocialLinks";
import GetDirections from "@/shared/GetDirectionsButton";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, city, state, phone, phoneRaw, email, address, location } =
    CYBER_CAFE_CONFIG;

  // 1. DATA ARRAYS
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

  const customerServices = [
    { name: "Government Job Forms", href: "/jobs" },
    { name: "PAN & Passport Services", href: "/services" },
    { name: "Aadhaar Updates", href: "/services" },
    { name: "Color Printing & Lamination", href: "/services" },
    { name: "High-Speed Browsing", href: "/pricing" },
  ];

  const quickLinks = [
    { name: "About Our Center", href: "/about" },
    { name: "Service Charges", href: "/pricing" },
    { name: "Contact Support", href: "/contact" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="relative w-full border-t border-slate-200 bg-white pt-16 pb-6 text-slate-600">
      {/* 2. TRUST INDICATORS STRIP */}
      <div className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-8 bg-slate-50 rounded-2xl border border-slate-100">
          {trustIndicators.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
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
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* 3. BRAND & IDENTITY */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-digital-blue flex items-center justify-center shadow-md">
                <Monitor className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 leading-none italic uppercase">
                  {name}
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-digital-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-digital-green animate-pulse" />
                  Official CSC Center
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              Empowering citizens of{" "}
              <strong>
                {city}, {state}
              </strong>{" "}
              with high-speed digital access and comprehensive government
              e-services under the Digital India initiative.
            </p>
            <SocialLinks />
            <div>
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/330px-Digital_India_logo.svg.png?20210804090323"
                alt="/"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* 4. CUSTOMER SERVICES (Array Map) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 border-l-4 border-digital-saffron pl-3">
              Services
            </h3>
            <ul className="space-y-3">
              {customerServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold hover:text-digital-blue flex items-center gap-2 group transition-all"
                  >
                    <ArrowRight
                      size={14}
                      className="text-digital-saffron opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. QUICK LINKS (Array Map) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 border-l-4 border-digital-blue pl-3">
              Support
            </h3>
            <ul className="space-y-3 font-semibold text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-digital-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. CONTACT & LOCATION DATA */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 border-l-4 border-digital-green pl-3">
              Locate Us
            </h3>
            <div className="space-y-4">
              <address className="not-italic space-y-3">
                <div className="flex gap-3 text-sm">
                  <MapPin className="text-digital-saffron shrink-0" size={18} />
                  <div>
                    <p className="font-bold text-slate-800">{address.line1}</p>
                    <p className="text-slate-500 font-medium">
                      {address.city}, {address.state} - {address.postalCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-digital-blue">
                  <Phone size={16} />
                  <a href={`tel:+91${phoneRaw}`} className="hover:underline">
                    {phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-digital-blue">
                  <Mail size={16} />
                  <a href={`tel:+91${email}`} className="hover:underline">
                    {email}
                  </a>
                </div>
              </address>

              {/* GOOGLE MAPS IFRAME */}
              <div className="w-full h-32 rounded-lg overflow-hidden border border-slate-200 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005762.043440969!2d83.15922106134559!3d25.87987684990523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e1!3m2!1sen!2sin!4v1770197415545!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <GetDirections />
            </div>
          </div>
        </div>

        {/* 7. FINAL BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            © {currentYear} {name} • {city} Center • Powered by Digital India
          </p>

          <Link
            href="https://mfaagency.com"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all border border-slate-100"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              Design & Developed by
            </span>
            <span className="text-[11px] font-black text-slate-800 flex items-center gap-1 group">
              MFA AGENCY
              <ExternalLink
                size={10}
                className="text-digital-blue transition-transform group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
