import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getJobs, slugify, parseDate, Job } from "@/lib/job";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ---------- SEO ----------
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const jobs = await getJobs();
  const job = jobs.find((j) => slugify(j.title) === slug);

  if (!job) return {};

  return {
    title: `${job.title} – Apply Before ${job.last_date}`,
    description: `${job.title} recruitment by ${job.department}. Qualification: ${job.qualification}. Last date: ${job.last_date}.`,
  };
}

// ---------- PAGE ----------
export default async function JobDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const jobs = await getJobs();

  const job = jobs.find(
    (j) =>
      j.status === "active" &&
      slugify(j.title) === slug &&
      parseDate(j.last_date) >= new Date(),
  );

  if (!job) notFound();

  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <article className="mx-auto max-w-3xl">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
          <p className="mt-2 text-sm text-gray-600">{job.department}</p>
        </header>

        <section className="space-y-4 text-gray-800">
          <p>
            <strong>Qualification:</strong> {job.qualification}
          </p>

          <p>
            <strong>Last Date:</strong> {job.last_date}
          </p>

          <p>
            <strong>Posted On:</strong> {job.posted_date}
          </p>
        </section>

        <div className="mt-8 flex gap-4">
          <a
            href={job.apply_link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
          >
            Apply Online
          </a>

          <Link
            href="/jobs"
            className="rounded-md border px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            ← Back to Jobs
          </Link>
        </div>
      </article>
    </main>
  );
}
