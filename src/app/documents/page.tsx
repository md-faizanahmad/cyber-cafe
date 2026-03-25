"use client";

const docsData = [
  {
    service: "पैन कार्ड आवेदन",
    required: ["आधार कार्ड", "मोबाइल नंबर", "पासपोर्ट फोटो"],
    note: "नाम और जन्मतिथि सही होना जरूरी है",
  },
  {
    service: "आधार अपडेट",
    required: ["आधार कार्ड", "मोबाइल नंबर"],
    note: "मोबाइल नंबर लिंक होना जरूरी है",
  },
  {
    service: "जाति / आय / निवास प्रमाण पत्र",
    required: ["आधार कार्ड", "फोटो", "स्थानीय प्रमाण"],
    note: "पता और जानकारी सही दें",
  },
  {
    service: "सरकारी नौकरी फॉर्म",
    required: ["फोटो", "सिग्नेचर", "शैक्षणिक दस्तावेज"],
    note: "फोटो साइज और फॉर्मेट सही होना चाहिए",
  },
];

export default function DocumentsPage() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 HERO */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">जरूरी कागजात</h1>
          <p className="text-gray-600 mt-2">
            सही डॉक्यूमेंट लाने से आपका काम जल्दी और बिना गलती के होगा
          </p>
        </div>

        {/* 🔥 SERVICE DOCUMENTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsData.map((item, i) => (
            <div key={i} className="border rounded-xl p-5 bg-gray-50 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">{item.service}</h3>

              <p className="text-sm font-medium">📄 जरूरी कागजात:</p>

              <ul className="text-sm text-gray-600 list-disc ml-4 mt-2">
                {item.required.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>

              <p className="text-sm text-red-500 mt-3">⚠️ {item.note}</p>
            </div>
          ))}
        </div>

        {/* 🔥 COMMON DOCUMENTS */}
        <div className="mt-14">
          <h2 className="text-xl font-semibold mb-4">
            आम तौर पर जरूरी दस्तावेज
          </h2>

          <div className="bg-gray-50 p-6 rounded-xl border">
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li>✔️ आधार कार्ड</li>
              <li>✔️ पासपोर्ट साइज फोटो</li>
              <li>✔️ मोबाइल नंबर</li>
              <li>✔️ ईमेल आईडी</li>
              <li>✔️ शैक्षणिक प्रमाण पत्र</li>
              <li>✔️ पता प्रमाण</li>
            </ul>
          </div>
        </div>

        {/* 🔥 MISTAKES SECTION (HIGH VALUE) */}
        <div className="mt-14">
          <h2 className="text-xl font-semibold mb-4">आम गलतियाँ (इनसे बचें)</h2>

          <div className="bg-red-50 p-6 rounded-xl border text-sm text-red-700">
            <ul className="space-y-2">
              <li>❌ गलत नाम या जन्मतिथि भरना</li>
              <li>❌ गलत फोटो या साइज अपलोड करना</li>
              <li>❌ मोबाइल नंबर गलत देना</li>
              <li>❌ अधूरे दस्तावेज़ देना</li>
            </ul>
          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-4">
            सभी डॉक्यूमेंट तैयार हैं? अभी संपर्क करें
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9876543210"
              className="px-6 py-3 bg-black text-white rounded"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919876543210"
              className="px-6 py-3 bg-green-500 text-white rounded"
            >
              💬 WhatsApp करें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
