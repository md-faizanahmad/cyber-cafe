import type { Metadata } from "next";
import AdmissionHero from "./components/AdmissionHero";
import AdmissionTimeline from "./components/AdmissionTimeline";
import AdmissionCriteria from "./components/AdmissionCriteria";
import AdmissionDocuments from "./components/AdmissionDocuments";
import AdmissionProcess from "./components/AdmissionProcess";
import AdmissionHelpDesk from "./components/AdmissionHelpDesk";
import getAcademicYear from "@/helper/getAcademicYear";

const { label } = getAcademicYear();
export const metadata: Metadata = {
  title: `School Admission Enquiry in Gaya (${label}) | Hansraj Public School (CBSE)`,
  description:
    "Looking for school admission in Gaya? Hansraj Public School (CBSE) has admissions open for Nursery to Class 10 for the 2026–27 session. Check eligibility, documents, and apply online.",
  alternates: {
    canonical: "https://yourdomain.com/admission",
  },
  openGraph: {
    title: "School Admission Open in Gaya | Hansraj Public School",
    description:
      "Admissions open for Nursery to Class 10 at Hansraj Public School, a CBSE-affiliated school in Gaya, Bihar.",
    url: "https://yourdomain.com/admission",
    siteName: "Hansraj Public School",
    locale: "en_IN",
    type: "website",
  },
};

export default function AdmissionPage() {
  return (
    <main className="bg-white">
      <AdmissionHero />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl space-y-20">
          <AdmissionTimeline />
          <AdmissionCriteria />
          <AdmissionDocuments />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AdmissionProcess />
            <AdmissionHelpDesk />
          </div>
        </div>
      </section>
    </main>
  );
}
