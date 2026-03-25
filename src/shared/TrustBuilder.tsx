"use client";

import { Phone } from "lucide-react";

export default function TrustBuilder() {
  const stats = [
    { value: "10,000+", label: "फॉर्म सफलतापूर्वक भरे गए" },
    { value: "5,000+", label: "खुश ग्राहक" },
    { value: "5+ साल", label: "अनुभव" },
    { value: "10 मिनट", label: "औसत समय" },
  ];

  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔥 HEADLINE */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          अब तक का हमारा काम
        </h2>
        <p className="text-gray-600 mt-2">लोगों का भरोसा ही हमारी पहचान है</p>

        {/* 🔥 STATS */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
              <p className="text-2xl font-bold text-black">{item.value}</p>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🔥 TRUST LINE */}
        <p className="mt-8 text-sm text-gray-500">
          ✔️ सही जानकारी • ✔️ बिना गलती • ✔️ तुरंत काम
        </p>

        {/* 🔥 CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:9876543210"
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Phone size={16} /> Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold"
          >
            💬 WhatsApp करें
          </a>
        </div>
      </div>
    </section>
  );
}
