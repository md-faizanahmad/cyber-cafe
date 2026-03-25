"use client";

const services = [
  {
    title: "PAN Card Apply",
    price: "₹150",
    time: "15 मिनट",
    docs: ["Aadhaar Card", "Mobile Number"],
  },
  {
    title: "Aadhaar Update",
    price: "₹50",
    time: "10 मिनट",
    docs: ["Aadhaar Card"],
  },
  {
    title: "Online Form Filling",
    price: "₹100",
    time: "15-20 मिनट",
    docs: ["Documents as per form"],
  },
  {
    title: "जाति / आय / निवास प्रमाण पत्र",
    price: "₹120",
    time: "20 मिनट",
    docs: ["Aadhaar", "Photo", "Proof"],
  },
  {
    title: "Print / Scan / Xerox",
    price: "₹5 – ₹20",
    time: "Instant",
    docs: ["File / Document"],
  },
  {
    title: "AEPS / Money Withdrawal",
    price: "₹10 – ₹30",
    time: "5 मिनट",
    docs: ["Aadhaar + Fingerprint"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            हमारी सेवाएं
          </h2>
          <p className="text-gray-600 mt-2">
            सही जानकारी के साथ आपका काम जल्दी और बिना गलती के
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>

              <p className="text-sm text-gray-600">💰 {service.price}</p>

              <p className="text-sm text-gray-600">⏱ {service.time}</p>

              <div className="mt-3 text-sm">
                <p className="font-medium">📄 जरूरी कागजात:</p>
                <ul className="list-disc ml-4 text-gray-600">
                  {service.docs.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>

              {/* 🔥 CTA */}
              <a
                href="https://wa.me/919876543210"
                className="mt-4 block text-center py-2 bg-green-500 text-white rounded-lg text-sm font-semibold"
              >
                💬 WhatsApp करें
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
