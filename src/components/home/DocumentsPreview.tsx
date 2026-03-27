"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
    service: "प्रिंट / स्कैन / ज़ेरॉक्स",
    docs: ["डॉक्यूमेंट (PDF / फोटो)", "पेन ड्राइव (यदि हो)"],
  },
  {
    service: "आधार से पैसे निकासी (AEPS)",
    docs: ["आधार कार्ड", "फिंगरप्रिंट", "बैंक लिंक होना जरूरी"],
  },
];

export default function DocumentsPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">जरूरी कागजात</h2>
          <p className="text-gray-600 mt-2 text-sm">
            आने से पहले ये डॉक्यूमेंट साथ लाएं
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-8 space-y-3">
          {previewDocs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border rounded-lg overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex  justify-between items-center p-4 font-semibold text-gray-800"
                >
                  {item.service}
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown />
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <ul className="px-4 pb-4 text-sm text-gray-600 space-y-1">
                    {item.docs.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        ✔️ {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
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
