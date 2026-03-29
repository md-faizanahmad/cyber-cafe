"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { phone, phoneRaw, email, address, city } = CYBER_CAFE_CONFIG;

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* 🔥 HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">संपर्क करें</h1>
          <p className="text-gray-600 mt-2">
            किसी भी सेवा के लिए तुरंत संपर्क करें
          </p>
        </div>

        {/* 🔥 QUICK ACTION */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {/* CALL */}
          <a
            href={`tel:+91${phoneRaw}`}
            className="p-6 border rounded-xl text-center hover:shadow-md"
          >
            <Phone className="mx-auto mb-3" />
            <p className="font-semibold">Call करें</p>
            <p className="text-sm text-gray-600">{phone}</p>
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/91${phoneRaw}`}
            className="p-6 border rounded-xl text-center bg-green-500 text-white hover:bg-green-600"
          >
            <p className="text-lg">💬</p>
            <p className="font-semibold">WhatsApp करें</p>
            <p className="text-sm">तुरंत जवाब मिलेगा</p>
          </a>
        </div>

        {/* 🔥 CONTACT INFO */}
        <div className="bg-gray-50 p-6 rounded-xl border space-y-4">
          <h2 className="text-lg font-semibold">हमारी जानकारी</h2>

          <p className="flex items-center gap-2 text-sm">
            <MapPin size={16} /> {address.line1}, {city}
          </p>

          <p className="flex items-center gap-2 text-sm">
            <Phone size={16} /> {phone}
          </p>

          <p className="flex items-center gap-2 text-sm">
            <Mail size={16} /> {email}
          </p>
        </div>

        {/* 🔥 DIRECTIONS */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-block px-6 py-3 bg-black text-white rounded"
          >
            📍 Directions देखें
          </a>
        </div>

        {/* 🔥 OPTIONAL FORM (LOW PRIORITY) */}
        <div className="mt-12 border p-6 rounded-xl">
          <h3 className="font-semibold mb-4">या अपना विवरण भेजें</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
