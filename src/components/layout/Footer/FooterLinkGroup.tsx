import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LinkItem {
  name: string;
  href: string;
}

interface Props {
  title: string;
  links: LinkItem[];
  borderColor: string; // Tailwind class like "border-digital-saffron"
}

export function FooterLinkGroup({ title, links, borderColor }: Props) {
  return (
    <div className="space-y-6">
      <h3
        className={`text-xs font-black uppercase tracking-[0.2em] text-slate-900 border-l-4 ${borderColor} pl-3`}
      >
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm font-semibold text-slate-500 hover:text-digital-blue flex items-center gap-2 group transition-all"
            >
              <ArrowRight
                size={14}
                className="text-digital-saffron opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
