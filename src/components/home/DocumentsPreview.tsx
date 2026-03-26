"use client";

import Link from "next/link";

const previewDocs = [
  {
    service: "पैन कार्ड",
    docs: ["आधार कार्ड", "मोबाइल नंबर", "फोटो"],
  },
  {
    service: "आधार अपडेट",
    docs: ["आधार कार्ड", "मोबाइल नंबर"],
  },
  {
    service: "जाति / आय प्रमाण पत्र",
    docs: ["आधार", "फोटो", "पता प्रमाण"],
  },
];

export default function DocumentsPreview() {
  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔥 Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          जरूरी कागजात
        </h2>

        <p className="text-gray-600 mt-2">
          आने से पहले ये डॉक्यूमेंट साथ लाएं ताकि आपका काम जल्दी हो
        </p>

        {/* 🔥 Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewDocs.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{item.service}</h3>

              <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
                {item.docs.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="mt-8">
          <Link
            href="/documents"
            className="text-blue-600 font-semibold hover:underline"
          >
            सभी डॉक्यूमेंट देखें →
          </Link>
        </div>
      </div>
    </section>
  );
}
