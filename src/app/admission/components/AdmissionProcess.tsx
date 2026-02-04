import { HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdmissionProcess() {
  return (
    <div className="lg:col-span-2 p-8 rounded-[2.5rem] border border-dashed">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="text-accent" />
        <h3 className="text-xl font-black">Admission Process</h3>
      </div>

      <p className="text-slate-600 font-medium mb-6">
        Parents must submit the admission enquiry form. Shortlisted candidates
        will be informed and guided through fee payment and document
        verification.
      </p>

      <Link
        href="/admission/admission-enquiry"
        className="inline-flex items-center gap-2 text-accent font-bold uppercase text-xs"
      >
        Admission Enquiry <ArrowRight size={14} />
      </Link>
    </div>
  );
}
