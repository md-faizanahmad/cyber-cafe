"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

export default function JobsStrip() {
  const [jobs, setJobs] = useState<any[]>([]);
  const { phoneRaw } = CYBER_CAFE_CONFIG;

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.slice(0, 5))) // only top 5
      .catch(() => setJobs([]));
  }, []);

  if (!jobs.length) return null;

  return (
    <section className="bg-yellow-50 border-y border-yellow-200 py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-3">
        {/* 🔥 LABEL */}
        <span className="text-sm font-bold text-red-600 whitespace-nowrap">
          🔥 Latest Jobs:
        </span>

        {/* 🔥 SCROLLABLE JOBS */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-4 whitespace-nowrap text-sm text-gray-700">
            {jobs.map((job, i) => (
              <span key={i} className="flex items-center gap-2">
                • {job.title}
                <span className="text-xs text-gray-500">
                  ({job.date || "Last Date Soon"})
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="flex gap-2">
          <Link href="/jobs" className="text-sm font-semibold text-blue-600">
            सभी देखें →
          </Link>

          <a
            href={`https://wa.me/91${phoneRaw}`}
            className="text-sm font-semibold text-green-600"
          >
            Apply →
          </a>
        </div>
      </div>
    </section>
  );
}
