import AboutSection from "@/components/home/AboutSection/AboutSection.server";
import AcademicJourney from "@/components/home/AcademicJourney/AcademicJourney.server";
import Facilities from "@/components/home/Facilities/Facilities.server";
import FeaturesSection from "@/components/home/featureSection/FeaturesSection.server";
import HolisticDevelopment from "@/components/home/holisticDevelopment/HolisticDevelopment.server";
import LifeAtSchool from "@/components/home/lifeAtSchool/LifeAtSchool.server";
import Mentors from "@/components/home/Management/Mentors.server";
import PrincipalMessage from "@/components/home/PrincipalMessage/PrincipalMessage.server";
import SecuritySection from "@/components/home/SecuritySection/SecuritySection.server";
import TestimonialsGlow from "@/components/home/Testimonials/TestimonialsGlow";
import HeroImg from "@/components/layout/carouselHero/HeroImg";
// import Hero from "@/components/layout/Hero";
import SchoolStats from "@/components/SchoolStats/SchoolStats";
import TrendingSidebar from "@/components/TrendingSidebar";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";
import EnrollmentCTA from "@/shared/EnrollmentCTA";
import QuickLinks from "@/shared/QuickLink/QuickLink";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(CYBER_CAFE_CONFIG.website),

  title: {
    default: `CBSE School in ${CYBER_CAFE_CONFIG.city} | ${CYBER_CAFE_CONFIG.name}`,
    template: `%s | ${CYBER_CAFE_CONFIG.name}`,
  },

  description: `${CYBER_CAFE_CONFIG.name} is a CBSE-affiliated school in ${CYBER_CAFE_CONFIG.city}, ${CYBER_CAFE_CONFIG.state}, offering quality education from Nursery to Class 10. Admissions are open for the current academic session.`,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: CYBER_CAFE_CONFIG.website,
    title: `CBSE School in ${CYBER_CAFE_CONFIG.city} | ${CYBER_CAFE_CONFIG.name}`,
    description: `${CYBER_CAFE_CONFIG.name} is a trusted CBSE school in ${CYBER_CAFE_CONFIG.city}, providing quality education and a safe learning environment.`,
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
    "https://images.unsplash.com/photo-1592066575517-58df903152f2?",
    "https://images.unsplash.com/photo-1709290749293-c6152a187b14?q=80&w=2069&auto",

    // "/images/hero/robotics-lab.jpg",
    // "/images/hero/sports-ground.jpg",
  ];
  return (
    <main className="relative bg-background">
      {/* SCENE 1: The Vision */}
      {/* <Hero
        videoSrc="School_Children_Using_Technology_Video.mp4"
        titleTop="Today's Kids,"
        titleAccent="World's Future Bright"
        description="An immersive learning environment where technology meets empathy to shape the leaders of tomorrow."
        primaryBtnText="Explore Campus"
        secondaryBtnText="Watch Our Story"
      /> */}

      <HeroImg
        images={cyberCafeImages} // Make sure to update your image array variable name
        titleTop=""
        titleAccent=""
        description=""
      />
      {/* <QuickLinks /> */}
      <TrendingSidebar />
      <SchoolStats />
      <AboutSection />
      <FeaturesSection />
      <PrincipalMessage />
      <SecuritySection />
      <AcademicJourney />
      <HolisticDevelopment />
      <LifeAtSchool />
      <Facilities />
      <Mentors />
      <TestimonialsGlow />
      <EnrollmentCTA />
    </main>
  );
}
