import { CheckCircle } from "lucide-react";

export default function AdmissionCriteria() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-accent/10 rounded-2xl text-accent">
          <CheckCircle size={24} />
        </div>
        <h2 className="text-2xl font-black uppercase">Eligibility Criteria</h2>
      </div>

      <div className="space-y-4">
        <div className="p-5 border rounded-2xl flex justify-between">
          <span className="font-bold">KG1 – Class 1</span>
          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-black">
            First Come First Served
          </span>
        </div>

        <div className="p-5 border rounded-2xl flex justify-between">
          <span className="font-bold">Class 2 – Class 10</span>
          <span className="text-xs bg-slate-900 text-white px-3 py-1 rounded-full font-black">
            Merit Based
          </span>
        </div>
      </div>
    </div>
  );
}
