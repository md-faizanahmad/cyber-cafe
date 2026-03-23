import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AgencyCredit() {
  return (
    <Link
      href="https://mfaagency.com"
      target="_blank"
      className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all border border-slate-100"
    >
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
        Design & Developed by
      </span>
      <span className="text-[11px] font-black text-slate-800 flex items-center gap-1 group">
        MFA AGENCY{" "}
        <ExternalLink
          size={10}
          className="text-digital-blue transition-transform group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
