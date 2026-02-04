import HolisticDevelopmentClient from "./HolisticDevelopment.client";

// ----------------------------------------------------
// SERVER COMPONENT
// - All curriculum keywords are visible to Google
// - Client handles tabs & animation only
// ----------------------------------------------------
const curriculumSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Curriculum at Hansraj Public School",
  itemListElement: [
    {
      "@type": "Course",
      position: 1,
      name: "Pre-Primary and Primary Education",
      description:
        "CBSE-aligned foundational education focusing on literacy, numeracy, and conceptual learning from Nursery to Class 5.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Hansraj Public School",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gaya",
          addressRegion: "Bihar",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "Course",
      position: 2,
      name: "Secondary School Curriculum",
      description:
        "CBSE secondary education from Class 6 to 10 with focus on academics, leadership skills, and exam preparation.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Hansraj Public School",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gaya",
          addressRegion: "Bihar",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "Course",
      position: 3,
      name: "Co-Curricular and Sports Education",
      description:
        "Arts, music, cultural activities, yoga, and sports programs supporting holistic student development.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Hansraj Public School",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gaya",
          addressRegion: "Bihar",
          addressCountry: "IN",
        },
      },
    },
  ],
};

export default function HolisticDevelopment() {
  return (
    <section
      className="py-16 md:py-24 bg-white overflow-hidden"
      aria-labelledby="holistic-education"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(curriculumSchema) }}
      />

      <div className="container mx-auto px-6">
        {/* HEADER — IMPORTANT FOR GSC */}
        <header className="text-center mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
            Curriculum & Student Development
          </span>
          <h2
            id="holistic-education"
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter"
          >
            Holistic Education at{" "}
            <span className="text-accent italic">Hansraj Public School</span>
          </h2>

          {/* SEO fallback text (hidden visually, visible to Google) */}
          <p className="sr-only">
            Hansraj Public School in Gaya offers CBSE academics, arts and
            culture, and sports education for overall student development from
            Nursery to Class 10.
          </p>
        </header>

        {/* CLIENT INTERACTIVE SECTION */}
        <HolisticDevelopmentClient />
      </div>
    </section>
  );
}
