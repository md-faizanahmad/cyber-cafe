import CyberCafeServices from "@/components/home/cyberService/CyberCafeServices";
import HeroSection from "@/components/layout/HeroSection";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import TrustBuilder from "@/shared/TrustBuilder";
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
  return (
    <main className="relative bg-background">
      <HeroSection />
      <CyberCafeServices />
      <h4>Working in process</h4>

      <TrustBuilder />
    </main>
  );
}
