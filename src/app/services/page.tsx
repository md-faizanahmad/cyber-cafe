import React from "react";
import {
  CreditCard,
  FileCheck,
  Edit3,
  PlusCircle,
  Clock,
  Wallet,
  ChevronDown,
  MessageCircle,
  Phone,
} from "lucide-react";

const services = [
  {
    category: "पहचान सेवाएं",
    icon: <CreditCard className="text-blue-600" size={20} />,
    items: [
      {
        name: "पैन कार्ड आवेदन (New/Correction)",
        price: "₹150",
        time: "15 मिनट",
        docs: ["आधार कार्ड", "मोबाइल नंबर", "पासपोर्ट फोटो"],
        process:
          "हम आपका फॉर्म भरेंगे, फिंगरप्रिंट या OTP के माध्यम से वेरिफिकेशन करेंगे। 7-10 दिनों में ई-पैन मिल जाएगा।",
      },
      {
        name: "आधार अपडेट (Mobile/Address)",
        price: "₹50",
        time: "10 मिनट",
        docs: ["आधार कार्ड", "सहायक दस्तावेज (एड्रेस के लिए)"],
        process:
          "आधार सेंटर अपॉइंटमेंट या ऑनलाइन एड्रेस अपडेट की सुविधा। मोबाइल नंबर लिंक होना अनिवार्य है।",
      },
    ],
  },
  {
    category: "सरकारी प्रमाण पत्र",
    icon: <FileCheck className="text-orange-600" size={20} />,
    items: [
      {
        name: "जाति / आय / निवास प्रमाण पत्र",
        price: "₹120",
        time: "20 मिनट",
        docs: ["आधार कार्ड", "स्व-घोषणा पत्र", "फोटो"],
        process:
          "RTPS पोर्टल के माध्यम से आवेदन। 10-15 कार्य दिवसों में सर्टिफिकेट डाउनलोड के लिए उपलब्ध होगा।",
      },
      {
        name: "जन्म / मृत्यु प्रमाण पत्र",
        price: "₹150",
        time: "20 मिनट",
        docs: ["अस्पताल का पेपर", "आधार कार्ड", "माता-पिता के दस्तावेज"],
        process:
          "नगर निगम या ब्लॉक के माध्यम से ऑनलाइन पंजीकरण। वेरिफिकेशन के बाद ओरिजिनल सर्टिफिकेट प्राप्त करें।",
      },
    ],
  },
  {
    category: "ऑनलाइन फॉर्म",
    icon: <Edit3 className="text-purple-600" size={20} />,
    items: [
      {
        name: "सरकारी नौकरी फॉर्म (All Govt Jobs)",
        price: "₹100",
        time: "15 मिनट",
        docs: ["मार्कशीट", "फोटो", "हस्ताक्षर", "जाति प्रमाण पत्र"],
        process:
          "Sarkari Result और अन्य पोर्टल से सही और सटीक फॉर्म फिलिंग। प्रिंटआउट और पेमेंट रसीद तुरंत प्राप्त करें।",
      },
      {
        name: "स्कॉलरशिप आवेदन",
        price: "₹120",
        time: "20 मिनट",
        docs: ["आय प्रमाण पत्र", "मार्कशीट", "बैंक पासबुक", "बोनाफाइड"],
        process:
          "NSP या स्टेट स्कॉलरशिप पोर्टल पर पंजीकरण। सभी दस्तावेजों को सही साइज में स्कैन कर अपलोड करना।",
      },
    ],
  },
  {
    category: "अन्य सेवाएं",
    icon: <PlusCircle className="text-green-600" size={20} />,
    items: [
      {
        name: "प्रिंट / स्कैन / ज़ेरॉक्स",
        price: "₹5 – ₹20",
        time: "तुरंत",
        docs: ["PDF File", "Hardcopy"],
        process:
          "कलर और ब्लैक एंड व्हाइट प्रिंटिंग। हाई-क्वालिटी स्कैनिंग और लेमिनेशन की सुविधा उपलब्ध है।",
      },
      {
        name: "नकद निकासी (AEPS / Micro ATM)",
        price: "₹10 – ₹30",
        time: "5 मिनट",
        docs: ["आधार नंबर", "बैंक का नाम", "फिंगरप्रिंट"],
        process:
          "किसी भी बैंक से पैसा निकालें। सुरक्षित ट्रांजैक्शन और तुरंत रसीद। आधार से लिंक बैंक अकाउंट होना जरूरी है।",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="px-4 py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* 🔥 SEO OPTIMIZED HEADER */}
        <div className="mb-12 text-left md:text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight italic uppercase">
            हमारी <span className="text-blue-600">डिजिटल</span> सेवाएं
          </h1>
          <p className="text-slate-500 mt-4 text-lg font-medium">
            डिजिटल इंडिया की सभी सुविधाएं —{" "}
            <span className="text-slate-900 underline decoration-orange-400">
              बिना किसी गलती के
            </span>
            ।
          </p>
        </div>

        {/* 🔥 CATEGORY LOOP */}
        {services.map((section, i) => (
          <div key={i} className="mb-12">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                {section.icon}
              </div>
              <h2 className="text-xl font-black uppercase tracking-widest text-slate-800">
                {section.category}
              </h2>
            </div>

            <div className="space-y-4">
              {section.items.map((service, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-xl open:ring-1 open:ring-blue-100"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none focus:outline-none">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-slate-900 md:text-lg group-open:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">
                          {service.price}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                          <Clock size={12} /> {service.time}
                        </span>
                      </div>
                    </div>
                    <div className="text-slate-300 group-open:rotate-180 transition-transform duration-300 bg-slate-50 p-2 rounded-full">
                      <ChevronDown size={20} />
                    </div>
                  </summary>

                  <div className="px-5 pb-6 text-sm border-t border-slate-50 pt-5">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left: Docs */}
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
                          जरूरी कागजात:
                        </p>
                        <ul className="grid grid-cols-1 gap-2">
                          {service.docs.map((doc, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 font-bold text-slate-700"
                            >
                              <div className="h-1.5 w-1.5 bg-orange-400 rounded-full" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Process */}
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
                          प्रक्रिया (Process):
                        </p>
                        <p className="text-slate-600 leading-relaxed font-medium bg-slate-50 p-3 rounded-xl border border-slate-100 italic">
                          &quot;{service.process}&quot;
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919876543210?text=नमस्ते, मुझे ${service.name} के बारे में जानकारी चाहिए।`}
                      className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 bg-zinc-900 text-white rounded-xl font-bold hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle size={18} /> WhatsApp पर पूछें
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* 🔥 STICKY FOOTER CTA AREA */}
        <div className="mt-20 p-8 bg-white border border-slate-200 rounded-[2.5rem] text-center shadow-sm">
          <h4 className="text-2xl font-black text-slate-900 italic uppercase">
            कोई अन्य सेवा चाहिए?
          </h4>
          <p className="text-slate-500 mt-2 mb-8 font-medium italic">
            अगर आपकी ज़रूरत यहाँ नहीं है, तो हमें कॉल करें। हम आपकी पूरी मदद
            करेंगे।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9876543210"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl active:scale-95 transition-transform"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 active:scale-95 transition-transform"
            >
              <MessageCircle size={16} className="text-green-600" /> WhatsApp
              करें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
