import type { Metadata } from "next";
import AdmissionForm from "@/components/AdmissionForm";
import { Toaster } from "react-hot-toast";
import getAcademicYear from "@/helper/getAcademicYear";
import { getAdmissionStatus } from "@/helper/admissionStatus";

const { label } = getAcademicYear();
const { isOpen, message } = getAdmissionStatus();
export const metadata: Metadata = {
  title: "School Admission Enquiry in Gaya | Hansraj Public School (CBSE)",
  description:
    "Submit an admission enquiry for Nursery to Class 10 at Hansraj Public School, Gaya. Our admissions team will contact you with next steps.",
  alternates: {
    canonical: "https://yourdomain.com/admission/admission-enquiry",
  },
  openGraph: {
    title: "Admission Enquiry – Hansraj Public School, Gaya",
    description:
      "Online admission enquiry form for Hansraj Public School (CBSE), Gaya. Nursery to Class 10 admissions open.",
    url: "https://yourdomain.com/admission/admission-enquiry",
    siteName: "Hansraj Public School",
    locale: "en_IN",
    type: "website",
  },
};

export default function AdmissionEnquiryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Toasts (client-only UX feedback) */}
      <Toaster position="top-right" containerClassName="mt-12" />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            Admissions {label}
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Admission Enquiry – Hansraj Public School, Gaya
          </h1>

          <p className="text-slate-600 font-medium max-w-2xl mx-auto">
            Looking for a CBSE school admission in Gaya? Fill out the admission
            enquiry form below for Nursery to Class 10. Our admissions team will
            contact you shortly with further details.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-2xl">
          {isOpen ? (
            <AdmissionForm />
          ) : (
            <div className="rounded-xl bg-white p-6 text-center shadow">
              <h2 className="text-xl font-bold">Admissions Closed</h2>
              <p className="mt-2 text-slate-600">
                {message} Please contact the school for details.
              </p>
              <a
                href="tel:+919512953624"
                className="mt-4 inline-block font-bold text-blue-600"
              >
                Call Admission Office
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
