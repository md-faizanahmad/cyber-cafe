"use client";

import { ShieldCheck, Zap, UserCheck, CheckCircle2, Phone } from "lucide-react";

const reasons = [
  {
    title: "फॉर्म बिना गलती के",
    desc: "गलत फॉर्म भरने से रिजेक्ट हो जाता है। हम सही जानकारी के साथ आपका फॉर्म भरते हैं।",
    icon: <CheckCircle2 className="text-green-500" size={28} />,
  },
  {
    title: "तेज़ प्रिंट और स्कैन",
    desc: "तुरंत प्रिंट, स्कैन और WhatsApp पर डॉक्यूमेंट भेजने की सुविधा।",
    icon: <Zap className="text-yellow-500" size={28} />,
  },
  {
    title: "सुरक्षित पेमेंट",
    desc: "AEPS और बैंकिंग सेवाएं पूरी तरह सुरक्षित और भरोसेमंद।",
    icon: <ShieldCheck className="text-blue-500" size={28} />,
  },
  {
    title: "अनुभवी स्टाफ",
    desc: "सरकारी पोर्टल्स की पूरी जानकारी — आपका काम जल्दी और सही।",
    icon: <UserCheck className="text-blue-500" size={28} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            क्यों चुनें हमें?
          </h2>
          <p className="text-gray-600 mt-2">
            सही काम, सही समय पर — बिना परेशानी
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((item, i) => (
            <div key={i} className="border rounded-xl p-5 bg-white shadow-sm">
              <div className="mb-3">{item.icon}</div>

              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>

              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔥 STRONG CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-gray-500">
            ✔️ 10,000+ फॉर्म सफलतापूर्वक भरे गए
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
      </div>
    </section>
  );
}
