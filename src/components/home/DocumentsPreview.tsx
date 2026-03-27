"use client";

import { useState } from "react";
import Link from "next/link";

interface PreviewDoc {
  service: string;
  docs: string[];
}

const previewDocs: PreviewDoc[] = [
  {
    service: "पैन कार्ड",
    docs: [
      "आधार कार्ड",
      "मोबाइल नंबर",
      "पासपोर्ट साइज फोटो",
      "ईमेल आईडी (वैकल्पिक)",
    ],
  },
  {
    service: "आधार अपडेट",
    docs: ["आधार कार्ड", "मोबाइल नंबर", "सही जानकारी (नाम / पता)"],
  },
  {
    service: "जाति / आय / निवास प्रमाण पत्र",
    docs: [
      "आधार कार्ड",
      "पासपोर्ट साइज फोटो",
      "पता प्रमाण (राशन कार्ड / बिजली बिल)",
      "पुराना प्रमाण पत्र (यदि हो)",
      "मोबाइल नंबर",
    ],
  },
  {
    service: "सरकारी नौकरी फॉर्म",
    docs: [
      "पासपोर्ट साइज फोटो",
      "सिग्नेचर (स्कैन)",
      "आधार कार्ड",
      "शैक्षणिक प्रमाण पत्र",
      "मोबाइल नंबर",
      "ईमेल आईडी",
    ],
  },
  {
    service: "स्कॉलरशिप आवेदन",
    docs: ["आधार कार्ड", "बैंक पासबुक", "मार्कशीट", "फोटो", "मोबाइल नंबर"],
  },

  {
    service: "आधार से पैसे निकासी (AEPS)",
    docs: ["आधार कार्ड", "फिंगरप्रिंट", "बैंक लिंक होना जरूरी"],
  },
];

export default function DocumentsPreview() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">जरूरी कागजात</h2>
          <p className="text-gray-600 mt-2 text-sm">
            आने से पहले ये डॉक्यूमेंट साथ लाएं
          </p>
        </div>

        {/* 🔥 MOBILE (Accordion) */}
        <div className="mt-8 space-y-3 md:hidden">
          {previewDocs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="bg-white border rounded-lg">
                <button
                  onClick={() => setOpenIndex(index)} // ✅ FIXED
                  className="w-full flex justify-between items-center p-4 font-semibold"
                >
                  {item.service}
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 p-4" : "max-h-0"
                  }`}
                >
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.docs.map((doc, i) => (
                      <li key={i}>✔️ {doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 DESKTOP (Tabs) */}
        <div className="hidden md:block mt-10">
          {/* Tabs */}
          <div className="flex gap-3 border-b pb-2">
            {previewDocs.map((item, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`px-4 py-2 text-sm font-semibold rounded-t ${
                  openIndex === index
                    ? "bg-white border border-b-0"
                    : "text-gray-500"
                }`}
              >
                {item.service}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white border p-6 rounded-b">
            <ul className="text-sm text-gray-600 space-y-2">
              {previewDocs[openIndex].docs.map((doc, i) => (
                <li key={i}>✔️ {doc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link href="/documents" className="text-blue-600 font-semibold">
            सभी डॉक्यूमेंट देखें →
          </Link>
        </div>
      </div>
    </section>
  );
}
