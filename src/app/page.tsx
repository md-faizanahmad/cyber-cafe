import CTASection from "@/components/home/CTASection";
import CyberCafeServices from "@/components/home/cyberService/CyberCafeServices";
import DocumentsPreview from "@/components/home/DocumentsPreview";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";
import JobsStrip from "@/components/home/JobsStrip/JobsStrip";
import ReviewsSection from "@/components/home/ReviewsSection";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import HeroSection from "@/components/layout/Header/HeroSection";
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
      {/* 🔥 Attention */}
      <HeroSection />

      {/* 🔥 Urgency */}
      <JobsStrip />

      {/* 🔥 Core offering */}
      <CyberCafeServices />

      {/* 🔥 Preparation */}
      <DocumentsPreview />

      {/* 🔥 Process clarity */}
      <HowItWorks />

      {/* 🔥 Problem solving */}
      <WhyChooseUs />

      {/* 🔥 Social proof */}
      <ReviewsSection />

      {/* 🔥 Hard proof (numbers) */}
      <TrustBuilder />

      {/* 🔥 Final conversion */}
      <CTASection />
    </main>
  );
}
