"use client";

import React from "react";
import Link from "next/link";
import { Monitor, MapPin, Phone, Mail } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import SocialLinks from "@/shared/SocialLinks";
import GetDirections from "@/shared/GetDirectionsButton";
import TrustAuthority from "./TrustAuthority";
import { FooterLinkGroup } from "./FooterLinkGroup";
import AgencyCredit from "./AgencyCredit";
import Image from "next/image";

export default function Footer() {
  const { name, city, state, phone, phoneRaw, email, address } =
    CYBER_CAFE_CONFIG;

  return (
    <footer className="relative w-full border-t border-slate-200 bg-white pt-16 pb-6 text-slate-600">
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
                <span className="text-[10px] font-bold text-digital-green flex items-center gap-1 uppercase mt-1 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-digital-green animate-pulse" />
                  आपका साइबर कैफ़े
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 max-w-sm">
              डिजिटल इंडिया पहल के तहत,{" "}
              <strong>
                {city}, {state}
              </strong>{" "}
              के नागरिकों को हाई-स्पीड इंटरनेट और सभी सरकारी ई-सेवाओं के साथ
              सशक्त बनाना।
            </p>
            <SocialLinks />
            <TrustAuthority />
            <div className="relative w-full h-32 rounded-3xl overflow-hidden  bg-zinc-900 shadow-xl">
              {/* Overlay for Cyber feel */}
              <div className="absolute inset-0 bg-digital-blue/10 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src="/footer-banner.png"
                alt="Cyber Cafe Services Banner"
                fill
                className="object-fill opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>

          {/* DYNAMIC LINK GROUPS */}
          <div className="lg:col-span-3">
            <FooterLinkGroup
              title="डिजिटल सेवाएँ"
              borderColor="border-digital-saffron"
              links={[
                { name: "Sarkari Job & Results", href: "/jobs" },
                { name: "PAN, Voter & Passport", href: "/services/pan" },
                { name: "Aadhaar Card Updates", href: "/services/aadhaar" },
                {
                  name: "आय, जाति एवं निवास प्रमाण पत्र",
                  href: "/services/certificates",
                },
                {
                  name: "Birth & Death Certificate",
                  href: "/services/certificates",
                },
                { name: "Marriage Registration", href: "/services/marriage" },
                { name: "Land Records (खसरा-खतौनी)", href: "/services/land" },
                { name: "PVC Card & Photo Printing", href: "/pvc-card" },
                { name: "Banking & आधार निकासी", href: "/services/banking" },
                { name: "High-Speed Internet Hub", href: "/pricing" },
              ]}
            />
          </div>

          <div className="lg:col-span-2">
            <FooterLinkGroup
              title="सहायता एवं सुरक्षा"
              borderColor="border-digital-blue"
              links={[
                { name: "About Our Center", href: "/about" },
                { name: "Service Charges & Plans", href: "/pricing" },
                { name: "Home Delivery Details", href: "/services/delivery" },
                { name: "100% Document Privacy", href: "/privacy" },
                { name: "Data Deletion Policy", href: "/privacy#deletion" },
                { name: "Terms of Service", href: "/terms" },
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
