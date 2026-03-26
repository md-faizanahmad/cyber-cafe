"use client";

import { MessageCircle, FileText, Settings, CheckCircle } from "lucide-react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

const steps = [
  {
    title: "संपर्क करें",
    desc: "WhatsApp करें या सीधे दुकान पर आएं",
    icon: <MessageCircle size={28} className="text-green-500" />,
  },
  {
    title: "डॉक्यूमेंट दें",
    desc: "जरूरी कागजात हमारे साथ शेयर करें",
    icon: <FileText size={28} className="text-blue-500" />,
  },
  {
    title: "हम फॉर्म भरेंगे",
    desc: "सही जानकारी के साथ आपका काम करेंगे",
    icon: <Settings size={28} className="text-yellow-500" />,
  },
  {
    title: "काम पूरा",
    desc: "फॉर्म सबमिट / प्रिंट / अपडेट तुरंत",
    icon: <CheckCircle size={28} className="text-green-600" />,
  },
];

export default function HowItWorks() {
  const { phoneRaw } = CYBER_CAFE_CONFIG;

  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔥 HEADER */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          कैसे काम करता है?
        </h2>
        <p className="text-gray-600 mt-2">
          आसान और तेज प्रक्रिया — बिना परेशानी
        </p>

        {/* 🔥 STEPS */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="mb-4 flex justify-center">{step.icon}</div>

              <h3 className="font-semibold text-lg">
                {i + 1}. {step.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/91${phoneRaw}`}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold"
          >
            💬 WhatsApp करें
          </a>

          <a
            href={`tel:+91${phoneRaw}`}
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
