import { Phone, Mail } from "lucide-react";

export default function AdmissionHelpDesk() {
  return (
    <div className="bg-slate-50 p-8 rounded-[2.5rem]">
      <h4 className="text-xs font-black uppercase mb-6">Admission Help Desk</h4>

      <div className="space-y-4 font-bold text-slate-700">
        <div className="flex items-center gap-3">
          <Phone size={18} className="text-accent" />
          9512953624
        </div>

        <div className="flex items-center gap-3">
          <Mail size={18} className="text-accent" />
          hansraj@gmail.com
        </div>
      </div>
    </div>
  );
}
