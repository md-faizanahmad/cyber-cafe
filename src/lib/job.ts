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
