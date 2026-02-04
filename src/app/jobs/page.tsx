// app/jobs/page.tsx
import { slugify } from "@/lib/job";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Latest Government Jobs | Cyber Cafe",
  description:
    "Latest government job notifications, eligibility, and last dates. Updated weekly at our cyber cafe.",
};

type JobStatus = "active" | "inactive";

interface Job {
  title: string;
  department: string;
  qualification: string;
  last_date: string; // format: DD MMM YYYY
  apply_link: string;
  posted_date: string; // format: DD MMM YYYY
  status: JobStatus;
}

const JOBS_URL =
  "https://opensheet.elk.sh/1yGzN0DAzP7fx9497m-irBT1J4sFGJCHJwP4e3irCBA0/Sheet1"; // <-- replace with final working JSON url

// ---------- helpers ----------
function parseDate(date: string): Date {
  return new Date(date.replace(/(\d{2}) (\w{3}) (\d{4})/, "$2 $1, $3"));
}

function isExpired(lastDate: string): boolean {
  return parseDate(lastDate) < new Date();
}

function isNew(postedDate: string): boolean {
  const days =
    (Date.now() - parseDate(postedDate).getTime()) / (1000 * 60 * 60 * 24);
  return days <= 7;
}

// ---------- data fetch ----------
async function getJobs(): Promise<Job[]> {
  const res = await fetch(JOBS_URL, {
    next: { revalidate: 3600 }, // revalidate every 1 hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}

// ---------- page ----------
export default async function JobsPage() {
  const jobs = await getJobs();

  const visibleJobs = jobs
    .filter((job) => job.status === "active")
    .filter((job) => !isExpired(job.last_date))
    .sort(
      (a, b) =>
        parseDate(b.posted_date).getTime() - parseDate(a.posted_date).getTime(),
    );

  return (
    <main className="min-h-screen bg-white px-4 py-8">
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
          <p className="text-gray-500">
            No active job notifications right now.
          </p>
        ) : (
          <ul className="space-y-4">
            {visibleJobs.map((job, index) => (
              <li
                key={index}
                className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {job.title}
                      {isNew(job.posted_date) && (
                        <span className="ml-2 rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                          NEW
                        </span>
                      )}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                      {job.department}
                    </p>

                    <div className="mt-3 space-y-1 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Qualification:</span>{" "}
                        {job.qualification}
                      </p>
                      <p>
                        <span className="font-medium">Last Date:</span>{" "}
                        {job.last_date}
                      </p>
                    </div>
                  </div>
                  <a
                    href={job.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Apply
                  </a>

                  <Link
                    href={`/jobs/${slugify(job.title)}`}
                    className="text-blue-600 underline"
                  >
                    View Details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
