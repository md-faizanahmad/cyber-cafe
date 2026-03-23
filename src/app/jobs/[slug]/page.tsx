// src/app/jobs/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getJobs, parseDate, slugify } from "@/lib/job";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const jobs = await getJobs();
  const job = jobs.find((j) => slugify(j.title) === slug);

  if (!job) return { title: "Job Not Found" };

  return {
    title: `${job.title} Recruitment 2026`,
    description: `Apply for ${job.title} in ${job.department}. Last date: ${job.last_date}.`,
  };
}

export default async function JobDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const jobs = await getJobs();
  const job = jobs.find((j) => slugify(j.title) === slug);

  if (
    !job ||
    job.status !== "active" ||
    parseDate(job.last_date) < new Date()
  ) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-4 py-24">
      <article className="mx-auto max-w-3xl border border-slate-100 p-8 rounded-3xl shadow-sm">
        <header className="mb-8 border-b pb-6">
          <Link
            href="/jobs"
            className="text-digital-blue text-sm font-bold hover:underline mb-4 block"
          >
            ← Back to Jobs
          </Link>
          <h1 className="text-3xl font-black text-slate-900 uppercase italic leading-tight">
            {job.title}
          </h1>
          <p className="mt-2 text-lg font-bold text-digital-green">
            {job.department}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-4 bg-slate-50 rounded-xl">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Qualification
            </p>
            <p className="text-base font-bold text-slate-800">
              {job.qualification}
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <p className="text-xs font-black text-red-400 uppercase tracking-widest">
              Apply Before
            </p>
            <p className="text-base font-bold text-red-700">{job.last_date}</p>
          </div>
        </div>

        <a
          href={job.apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-digital-blue py-4 rounded-2xl text-white font-black uppercase tracking-[0.2em] shadow-lg hover:bg-blue-700 transition-all active:scale-95"
        >
          Apply Online Now
        </a>
      </article>
    </main>
  );
}
