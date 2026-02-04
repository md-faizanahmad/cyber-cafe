import CyberCafeServices from "@/components/home/cyberService/CyberCafeServices";
import HeroImg from "@/components/layout/carouselHero/HeroImg";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(CYBER_CAFE_CONFIG.website),

  title: {
    default: `Cyber Cafe in ${CYBER_CAFE_CONFIG.city} | ${CYBER_CAFE_CONFIG.name}`,
    template: `%s | ${CYBER_CAFE_CONFIG.name}`,
  },

  description: `${CYBER_CAFE_CONFIG.name} is a trusted cyber cafe in ${CYBER_CAFE_CONFIG.city}, ${CYBER_CAFE_CONFIG.state}. We provide online form filling, government services assistance, AEPS, biometric, digital payments, printing, scanning, photocopy, and photo services.`,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: CYBER_CAFE_CONFIG.website,
    title: `Cyber Cafe in ${CYBER_CAFE_CONFIG.city} | ${CYBER_CAFE_CONFIG.name}`,
    description: `Reliable cyber cafe in ${CYBER_CAFE_CONFIG.city} for online forms, govt services, AEPS, biometric, printing, scanning, and digital payment assistance.`,
    siteName: CYBER_CAFE_CONFIG.name,
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const cyberCafeImages = [
    // "/banner/banner-1.png",
    "/banner/banner-2.png",
    "/banner/banner-3.png",
    "/banner/banner-4.png",

    // "/images/hero/robotics-lab.jpg",
    // "/images/hero/sports-ground.jpg",
  ];
  return (
    <main className="relative bg-background">
      <HeroImg
        images={cyberCafeImages} // Make sure to update your image array variable name
        titleTop=""
        titleAccent=""
        description=""
      />
      <CyberCafeServices />
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-10">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Experienced assistance for online & government services",
              "Fast computers & reliable internet",
              "Error-free form filling with verification",
              "Secure handling of Aadhaar, biometric & payments",
              "All digital services available at one place",
              "Trusted local cyber café support",
            ].map((point, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border border-slate-200 font-semibold text-slate-700"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
