import { Calendar } from "lucide-react";

export default function AdmissionTimeline() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-accent/10 rounded-2xl text-accent">
          <Calendar size={24} />
        </div>
        <h2 className="text-2xl font-black uppercase">Admission Timeline</h2>
      </div>

      <p className="text-slate-600 font-medium">
        The academic year runs from <strong>June to April</strong>. Registration
        for Nursery, KG1, KG2, and Class 1 generally begins in late January
        every year.
      </p>
    </div>
  );
}
