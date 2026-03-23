"use client";

import React from "react";
import { MessageCircle, Phone, MapPin, Send, Truck } from "lucide-react";
import Link from "next/link";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

export default function ActionCTA() {
  const { phone, phoneRaw } = CYBER_CAFE_CONFIG;

  return (
    <div className="mt-16  p-8 md:p-12 text-center max-w-5xl mx-auto    ">
      {/* SERVICE TAGS */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <span className="flex items-center gap-2 bg-digital-green/10 text-digital-green px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-digital-green/20">
          <Send size={12} /> WhatsApp Delivery
        </span>
        <span className="flex items-center gap-2 bg-digital-saffron/10 text-digital-saffron px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-digital-saffron/20">
          <Truck size={12} /> Home Delivery Available
        </span>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase italic">
          आप बस हमारे{" "}
          <span className="text-digital-blue text-shadow">Cyber Café</span> आ
          जाइये — <br className="hidden md:block" />
          या{" "}
          <span className="text-digital-green underline decoration-digital-saffron underline-offset-8">
            WhatsApp
          </span>{" "}
          पर डिटेल्स भेजें!
        </h2>

        <p className="text-slate-600 font-bold text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          घर बैठे काम कराएं! अपने डॉक्यूमेंट्स WhatsApp करें, हम फॉर्म भर कर
          रिसीविंग आपको भेज देंगे। <br className="hidden md:block" />
          <span className="text-digital-blue italic">
            जरूरत पड़ने पर हम होम-डिलीवरी भी करते हैं।
          </span>
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* WHATSAPP ACTION */}
        <Link
          href={`https://wa.me/91${phoneRaw}?text=Hello, I want to avail your digital services.`}
          target="_blank"
          className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-lg"
        >
          <MessageCircle size={20} />
          WhatsApp भेजें
        </Link>

        {/* CALL ACTION */}
        <Link
          href={`tel:+91${phoneRaw}`}
          className="flex items-center justify-center gap-3 bg-digital-blue text-white px-6 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-lg"
        >
          <Phone size={20} />
          कॉल करें: {phone}
        </Link>

        {/* LOCATION ACTION */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-3 bg-white border-2 border-slate-900 text-slate-900 px-6 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all shadow-lg"
        >
          <MapPin size={20} className="text-digital-saffron" />
          दुकान पर आयें
        </Link>
      </div>

      <p className="mt-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
        निश्चिंत रहें • सुरक्षित सेवा • डिजिटल भारत
      </p>
    </div>
  );
}
