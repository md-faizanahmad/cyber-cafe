// src/config/cyberCafe.ts
// -------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR CYBER CAFE INFORMATION
//
// ✅ Used by: Footer, Header, Metadata, Schema, WhatsApp, Maps
// ✅ Update data here → entire website updates automatically
// ❌ Do NOT put page content, JSX, UI logic, or marketing copy here
//
// Rule of thumb:
// - If Google, customers, or schema need it → it belongs here
// - If it’s visual or page-specific → it does NOT belong here
// -------------------------------------------------------------------

export const CYBER_CAFE_CONFIG = {
  // ============================================================
  // BUSINESS IDENTITY & TRUST
  // ============================================================
  management: {
    owner: "Mr. XYZ", // Optional but useful for LocalBusiness schema
    foundedYear: 2018,
  },

  // ============================================================
  // BASIC IDENTITY
  // ============================================================
  name: "ABC Cyber Cafe",
  shortName: "ABC Cyber Cafe",
  businessType: "Cyber Cafe & Digital Services",
  city: "Gaya",
  state: "Bihar",
  country: "India",

  // ============================================================
  // BUSINESS HOURS
  // ============================================================
  timings: {
    days: "Monday to Sunday",
    hours: "8:00 AM – 9:00 PM",
  },

  // ============================================================
  // BRANCHES / LOCATIONS
  // ============================================================
  branches: [
    {
      city: "Gaya",
      address: "Near Bodh Gaya Road",
      phone: "9512953624",
    },
  ],

  // ============================================================
  // CONTACT INFORMATION (NAP)
  // ============================================================
  phone: "+91 95129 53624",
  phoneRaw: "9512953624",
  email: "abccyber@gmail.com",

  // ============================================================
  // POSTAL ADDRESS
  // ============================================================
  address: {
    line1: "Near Bodh Gaya Road",
    city: "Gaya",
    state: "Bihar",
    postalCode: "824208",
    country: "IN",
  },

  // ============================================================
  // GEO LOCATION
  // ============================================================
  location: {
    latitude: 24.7955,
    longitude: 85.0079,
  },

  // ============================================================
  // SOCIAL MEDIA
  // ============================================================
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },

  // ============================================================
  // WHATSAPP CONFIG
  // ============================================================
  whatsapp: {
    enabled: true,
    message: "Hello, I would like to enquire about cyber cafe services.",
  },

  // ============================================================
  // SERVICES OFFERED
  // Used in: SEO text, schema, footer
  // ============================================================
  services: [
    "Internet Browsing",
    "Online Form Filling",
    "Government Job Applications",
    "Aadhar & PAN Services",
    "Printing & Scanning",
    "Lamination & Photocopy",
    "Online Exam Registration",
  ],

  // ============================================================
  // GOOGLE BUSINESS PROFILE (OPTIONAL)
  // ============================================================
  googleBusiness: {
    placeId: "",
    mapsUrl: "",
  },

  // ============================================================
  // WEBSITE
  // ============================================================
  website: "https://yourdomain.com",
};
