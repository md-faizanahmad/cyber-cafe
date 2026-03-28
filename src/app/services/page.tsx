"use client";

import React, { useState, useMemo } from "react";
import { Search, Clock, MessageCircle } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import Breadcrumb from "@/shared/Breadcrumb";

const allServices = [
  {
    name: "New PAN Card",
    category: "ID",
    price: "₹150",
    time: "15m",
    docs: ["Aadhaar", "Photo", "Mobile"],
  },
  {
    name: "Aadhaar Update",
    category: "ID",
    price: "₹50",
    time: "10m",
    docs: ["Aadhaar", "Address Proof"],
  },
  {
    name: "Income Certificate",
    category: "Govt",
    price: "₹120",
    time: "20m",
    docs: ["Aadhaar", "Self-Decl"],
  },
  {
    name: "Caste Certificate",
    category: "Govt",
    price: "₹120",
    time: "20m",
    docs: ["Aadhaar", "Land Doc"],
  },
  {
    name: "Govt Job Form",
    category: "Forms",
    price: "₹100",
    time: "15m",
    docs: ["Marksheet", "Photo", "Sign"],
  },
  {
    name: "Scholarship",
    category: "Forms",
    price: "₹120",
    time: "20m",
    docs: ["Income Cert", "Bank Passbook"],
  },
  {
    name: "Cash Withdrawal",
    category: "Banking",
    price: "₹20",
    time: "5m",
    docs: ["Aadhaar", "Bank Name"],
  },
  {
    name: "Print/Xerox",
    category: "Other",
    price: "₹5",
    time: "Inst",
    docs: ["File/Hardcopy"],
  },
];

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const { phoneRaw } = CYBER_CAFE_CONFIG;

  const categories = ["All", "ID", "Govt", "Forms", "Banking"];

  const filteredServices = useMemo(() => {
    return allServices.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(query.toLowerCase());
      const matchesTab = activeTab === "All" || s.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [query, activeTab]);

  return (
    <main className="min-h-screen bg-white text-zinc-900 pb-10">
      <div className="max-w-3xl mx-auto px-4 pt-5">
        <Breadcrumb />

        {/* SEARCH & FILTER BLOCK */}
        <div className="mt-6  bg-white z-20 pb-4 border-b border-zinc-100">
          <div className="relative mb-4">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search service (e.g. Pan, Aadhaar...)"
              className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm outline-none focus:border-zinc-900 transition-colors"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-500 border-zinc-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* LISTING */}
        <div className="mt-8 space-y-3">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, i) => (
              <div
                key={i}
                className="group p-4 border border-zinc-100 rounded-xl hover:border-zinc-300 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">
                      {service.name}
                    </h3>
                    <div className="flex gap-3 mt-1">
                      <span className="text-[10px] text-zinc-400 flex items-center gap-1 uppercase font-medium">
                        <Clock size={10} /> {service.time}
                      </span>
                      <span className="text-[10px] text-zinc-900 font-bold uppercase">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/91${phoneRaw}?text=Service: ${service.name}`}
                    className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
                  >
                    <MessageCircle size={14} className="text-zinc-600" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2 pt-3 border-t border-zinc-50">
                  <span className="text-[9px] font-bold text-zinc-300 uppercase mr-1">
                    Docs:
                  </span>
                  {service.docs.map((doc, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] text-zinc-500 font-medium bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-zinc-400 text-xs uppercase tracking-widest font-bold">
              No service found
            </div>
          )}
        </div>

        {/* COMPACT FOOTER CTA */}
        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col items-center">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
            Need something else?
          </p>
          <div className="flex gap-3 w-full max-w-sm">
            <a
              href={`tel:${phoneRaw}`}
              className="flex-1 py-3 border border-zinc-900 text-center text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-50 transition-colors"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/91${phoneRaw}`}
              className="flex-1 py-3 bg-zinc-900 text-white text-center text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
