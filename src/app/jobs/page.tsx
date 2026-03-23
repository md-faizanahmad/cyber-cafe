// src/app/jobs/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { getJobs, parseDate, slugify } from "@/lib/job";

export const metadata: Metadata = {
  title: "Latest Government Jobs | Cyber Cafe",
  description:
    "Latest government job notifications updated weekly at our cyber cafe.",
};

function isNew(postedDate: string): boolean {
  const days =
    (Date.now() - parseDate(postedDate).getTime()) / (1000 * 60 * 60 * 24);
  return days <= 7;
}

// Next.js pages MUST be default exports
export default async function JobsPage() {
  const jobs = await getJobs();

  const visibleJobs = jobs
    .filter((job) => job.status === "active")
    .filter((job) => parseDate(job.last_date) >= new Date())
    .sort(
      (a, b) =>
        parseDate(b.posted_date).getTime() - parseDate(a.posted_date).getTime(),
    );

  return (
    <main className="min-h-screen bg-white px-4 py-8 mt-20">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Latest Government Jobs
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Updated weekly • Apply before last date
          </p>
        </header>

        {visibleJobs.length === 0 ? (
          <p className="text-gray-500 italic">
            No active job notifications right now.
          </p>
        ) : (
          <ul className="space-y-4">
            {visibleJobs.map((job, index) => (
              <li
                key={index}
                className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 uppercase">
                      {job.title}
                      {isNew(job.posted_date) && (
                        <span className="ml-2 rounded bg-green-100 px-2 py-0.5 text-[10px] font-black text-green-700">
                          NEW
                        </span>
                      )}
                    </h2>
                    <p className="text-sm font-semibold text-digital-blue uppercase tracking-tight">
                      {job.department}
                    </p>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                      <p>
                        <span className="font-bold text-slate-900">
                          Qualification:
                        </span>{" "}
                        {job.qualification}
                      </p>
                      <p>
                        <span className="font-bold text-slate-900">
                          Last Date:
                        </span>{" "}
                        {job.last_date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Link
                      href={`/jobs/${slugify(job.title)}`}
                      className="px-4 py-2 text-sm font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Details
                    </Link>
                    <a
                      href={job.apply_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-digital-blue px-4 py-2 text-sm font-bold text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
