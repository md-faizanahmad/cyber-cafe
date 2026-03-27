import CallButton from "@/shared/CallButton";
import LocationButton from "@/shared/LocationButton";
import WhatsAppButton from "@/shared/WhatsAppButton";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

export default function HeroSection() {
  const { city } = CYBER_CAFE_CONFIG;

  return (
    <section
      className="relative pt-20 pb-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      {/* 🔥 OVERLAY (CRITICAL) */}
      <div className="absolute inset-0 bg-white/45 backdrop-blur-xs" />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* TRUST LINE */}
        <p className="text-sm text-gray-600 mb-3">
          📍 {city} | ✔️ 5000+ लोगों का भरोसा
        </p>

        {/* HEADLINE */}
        <h1 className="text-[clamp(2rem,6vw,3.2rem)] font-bold leading-tight text-black">
          PAN Card, Aadhar Update,
          <br />
          सभी Online Form भराई
          <span className="block text-blue-600">बिना गलती के</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          सरकारी फॉर्म गलत भरने से रिजेक्ट हो सकता है। हम सही जानकारी के साथ
          आपका काम जल्दी और सुरक्षित तरीके से करते हैं।
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <WhatsAppButton phone="919876543210" />
          <CallButton phone="9876543210" />
          <LocationButton url="https://maps.google.com" />
        </div>

        {/* PROOF */}
        <div className="mt-6 text-sm text-gray-600">
          ⚡ 10–15 मिनट में काम पूरा • ✔️ सही जानकारी • 🛡️ सुरक्षित प्रक्रिया
        </div>
      </div>
    </section>
  );
}
