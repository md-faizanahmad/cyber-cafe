import { FileText } from "lucide-react";

export default function AdmissionDocuments() {
  return (
    <section className="bg-slate-900 text-white rounded-[3rem] p-10">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="text-accent" />
        <h2 className="text-3xl font-black uppercase">Documents Required</h2>
      </div>

      <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
        <li>Birth Certificate (Municipality / Panchayat)</li>
        <li>3 Passport Size Photographs</li>
        <li>Transfer Certificate (Class 2 onwards)</li>
        <li>Aadhar Card Copy</li>
      </ul>
    </section>
  );
}
