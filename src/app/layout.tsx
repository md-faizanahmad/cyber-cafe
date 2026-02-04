import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer/Footer";
import { EntryPoster } from "@/components/EntryPoster";
import WhatsAppChat from "@/shared/WhatsAppChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ABC Public School | Excellence in Education Gaya, Bihar",
    template: "%s | ABC Public School Gaya",
  },
  description:
    "ABC Public School is a premier CBSE-affiliated co-educational institution in Gaya, Bihar. Providing quality education, smart classrooms, and holistic development for future leaders.",
  keywords: [
    "Best school in Gaya",
    "CBSE school Bihar",
    "ABC Public School Gaya",
    "Top rated schools in Gaya",
    "Admission Open 2026 Bihar",
  ],
  authors: [{ name: "ABC Public School Administration" }],
  creator: "Md Faizan Ahmad", // Your branding as the developer
  icons: {
    icon: "/favicon.ico", // Make sure to add a school logo favicon
  },
  openGraph: {
    title: "ABC Public School | Nurturing Future Leaders",
    description:
      "Experience world-class education with traditional values at ABC Public School, Gaya.",
    url: "https://abcschoolgaya.edu",
    siteName: "ABC Public School",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "@id": "https://yourdomain.com/#school",
              name: "Hansraj Public School",
              alternateName: "Hansraj Public School Gaya",
              url: "https://yourdomain.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Near Bodh Gaya Road",
                addressLocality: "Gaya",
                addressRegion: "Bihar",
                postalCode: "824208",
                addressCountry: "IN",
              },
              telephone: "+91-9512953624",
              email: "hansraj@schoolgaya.edu",
              areaServed: {
                "@type": "City",
                name: "Gaya",
              },
              geo: {
                "@type": "GeoCoordinates",
                // latitude: 24.7955,
                // longitude: 85.0079,
              },
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gaya",
                  addressRegion: "Bihar",
                  addressCountry: "IN",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EntryPoster />

        <Header />
        {children}
        <WhatsAppChat />
        <Footer />
      </body>
    </html>
  );
}
