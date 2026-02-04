"use client";

import Link from "next/link";
import {
  Globe,
  FileText,
  CreditCard,
  Landmark,
  ExternalLink,
  Printer,
} from "lucide-react";

const services = [
  {
    title: "Vehicle & Transport Services",
    icon: <CreditCard size={22} />,
    items: [
      { name: "HSRP Number Plate", href: "https://bookmyhsrp.com/" },
      { name: "Driving License Services", href: "https://parivahan.gov.in/" },
    ],
  },
  {
    title: "Government & CSC Services",
    icon: <Landmark size={22} />,
    items: [
      {
        name: "CSC Digital Seva Login",
        href: "https://digitalseva.csc.gov.in/",
      },
      { name: "Bihar E-District", href: "https://serviceonline.bihar.gov.in/" },
      {
        name: "Bihar Land Records (Bhumi)",
        href: "http://biharbhumi.bihar.gov.in/",
      },
    ],
  },
  {
    title: "Identity & Certificates",
    icon: <FileText size={22} />,
    items: [
      {
        name: "PAN Card (NSDL)",
        href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
      },
      { name: "E-Aadhaar Download", href: "https://myaadhaar.uidai.gov.in/" },
      { name: "Passport Seva", href: "https://www.passportindia.gov.in/" },
    ],
  },
  {
    title: "Scholarship & Yojana",
    icon: <Globe size={22} />,
    items: [
      { name: "PM Kisan Yojana", href: "https://pmkisan.gov.in/" },
      { name: "PM Fasal Bima Yojana", href: "https://pmfby.gov.in/" },
      { name: "Bihar Scholarship", href: "https://pmsonline.bih.nic.in/" },
      {
        name: "National Scholarship Portal",
        href: "https://scholarships.gov.in/",
      },
    ],
  },
  {
    title: "Payments & Banking Services",
    icon: <CreditCard size={22} />,
    items: [
      { name: "Digital Payments", href: "#" },
      { name: "AEPS (Aadhaar Enabled Payment)", href: "#" },
      { name: "PM Kisan Yojana", href: "https://pmkisan.gov.in/" },
      { name: "PM Fasal Bima Yojana", href: "https://pmfby.gov.in/" },
    ],
  },
  {
    title: "Printing & Delivery Services",
    icon: <Printer size={22} />,
    items: [
      { name: "Printing (B/W & Color)", href: "#" },
      { name: "Scanning & Photocopy", href: "#" },
      { name: "Lamination", href: "#" },
      { name: "Photo Services (Passport / ID)", href: "#" },
    ],
  },
];

export default function CyberCafeServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Our Cyber Café Services
          </h2>
          <p className="mt-3 text-slate-500 font-medium max-w-xl mx-auto">
            We help you fill online forms, apply for government services, print
            documents, and complete registrations accurately and quickly.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-digital-blue/10 text-digital-blue">
                  {service.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-800">
                  {service.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      target="_blank"
                      className="group flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-digital-blue"
                    >
                      {item.name}
                      <ExternalLink
                        size={14}
                        className="opacity-40 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm font-bold text-slate-600 mb-2">
            Don’t want to do it yourself?
          </p>
          <p className="text-lg font-black text-slate-900">
            Visit our Cyber Café — we’ll handle everything for you.
          </p>
        </div>
      </div>
    </section>
  );
}
