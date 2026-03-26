"use client";

import { Phone } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

export default function CTASection() {
  const { phoneRaw } = CYBER_CAFE_CONFIG;

  return (
    <section className="py-16 px-4 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">अभी संपर्क करें</h2>

        <p className="mt-3 text-gray-300">
          किसी भी ऑनलाइन सेवा के लिए तुरंत मदद पाएं
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:+91${phoneRaw}`}
            className="px-6 py-3 bg-white text-black rounded font-semibold flex items-center justify-center gap-2"
          >
            <Phone size={16} /> Call Now
          </a>

          <a
            href={`https://wa.me/91${phoneRaw}`}
            className="px-6 py-3 bg-green-500 text-white rounded font-semibold"
          >
            💬 WhatsApp करें
          </a>
        </div>
      </div>
    </section>
  );
}
