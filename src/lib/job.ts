// lib/job.ts

export function slugify(title: string): string {
  return (
    title
      .toLowerCase()
      .trim()
      // Replace Hindi/Unicode spaces properly
      .normalize("NFKD")
      // Remove special characters
      .replace(/[^\w\s-]/g, "")
      // Replace spaces & multiple dashes with single dash
      .replace(/[\s_-]+/g, "-")
      // Remove starting/ending dash
      .replace(/^-+|-+$/g, "")
  );
}
// src/lib/job.ts

export type JobStatus = "active" | "inactive";

export interface Job {
  title: string;
  department: string;
  qualification: string;
  last_date: string;
  apply_link: string;
  posted_date: string;
  status: JobStatus;
}

const JOBS_URL =
  "https://opensheet.elk.sh/1yGzN0DAzP7fx9497m-irBT1J4sFGJCHJwP4e3irCBA0/Sheet1";

export function parseDate(dateStr: string): Date {
  // Handles "DD MMM YYYY" format
  return new Date(dateStr.replace(/(\d{2}) (\w{3}) (\d{4})/, "$2 $1, $3"));
}

export async function getJobs(): Promise<Job[]> {
  const res = await fetch(JOBS_URL, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
}
