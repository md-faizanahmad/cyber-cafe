import Link from "next/link";
import {
  Landmark,
  ShieldCheck,
  Leaf,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

const schemes = [
  {
    category: "Farmer & Agriculture",
    icon: Leaf,
    items: [
      {
        name: "PM Kisan Samman Nidhi Yojana",
        desc: "Income support scheme for farmers.",
        link: "https://pmkisan.gov.in/",
      },
      {
        name: "PM Fasal Bima Yojana",
        desc: "Crop insurance scheme for farmers.",
        link: "https://pmfby.gov.in/",
      },
    ],
  },
  {
    category: "Student & Education",
    icon: GraduationCap,
    items: [
      {
        name: "National Scholarship Portal (NSP)",
        desc: "Central & state scholarships for students.",
        link: "https://scholarships.gov.in/",
      },
      {
        name: "Bihar Scholarship Portal",
        desc: "State scholarships for Bihar students.",
        link: "https://pmsonline.bih.nic.in/",
      },
    ],
  },
  {
    category: "Identity & Citizen Services",
    icon: ShieldCheck,
    items: [
      {
        name: "Aadhaar Services",
        desc: "Update, download & Aadhaar-related services.",
        link: "https://myaadhaar.uidai.gov.in/",
      },
      {
        name: "PAN Card Services (NSDL)",
        desc: "Apply or correct PAN card details.",
        link: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
      },
      {
        name: "Passport Seva",
        desc: "Passport application & appointment booking.",
        link: "https://www.passportindia.gov.in/",
      },
    ],
  },
  {
    category: "Social Welfare",
    icon: HeartPulse,
    items: [
      {
        name: "PM Shram Yogi Maandhan",
        desc: "Pension scheme for unorganised workers.",
        link: "https://maandhan.in/",
      },
      {
        name: "Ayushman Bharat Yojana",
        desc: "Health insurance scheme for eligible citizens.",
        link: "https://beneficiary.nha.gov.in/",
      },
    ],
  },
];

export default function GovernmentSchemesPage() {
  return (
    <main className="min-h-screen bg-background mt-25">
      {/* HERO */}
      <section className="border-b border-border py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-foreground">
            Government Schemes & Yojana Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-medium">
            Explore popular government schemes and yojanas. Our cyber café helps
            you apply online, fill forms correctly, and complete registrations
            without errors.
          </p>
        </div>
      </section>

      {/* SCHEMES GRID */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schemes.map((group, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent-foreground">
                    <group.icon size={22} />
                  </div>
                  <h2 className="text-lg font-black text-foreground">
                    {group.category}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {group.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col gap-1 border-b border-border pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="font-semibold text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.desc}
                      </span>
                      <div className="flex gap-4 mt-2 text-sm font-semibold">
                        <Link
                          href={item.link}
                          target="_blank"
                          className="text-brand-primary hover:underline"
                        >
                          Official Website
                        </Link>
                        <span className="text-accent font-bold">
                          Apply via Cyber Café
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-14 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-2">
            Need help applying for any scheme?
          </p>
          <p className="text-xl font-black text-foreground">
            Visit our Cyber Café — we’ll handle the entire process for you.
          </p>
        </div>
      </section>
    </main>
  );
}
