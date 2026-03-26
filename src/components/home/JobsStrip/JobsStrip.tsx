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
      .then((data) => {
        setJobs(data.jobs || []);
      })
      .catch(() => setJobs([]));
  }, []);

  if (!jobs.length) return null;

  return (
    <section className="bg-yellow-50 border-y border-yellow-200 py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        {/* 🔥 HEADER */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-red-600">🔥 Latest Jobs</span>

          <Link href="/jobs" className="text-sm font-semibold text-blue-600">
            सभी देखें →
          </Link>
        </div>

        {/* 🔥 JOB LIST */}
        <div className="flex overflow-x-auto gap-4 pb-2">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="min-w-65 bg-white border rounded-lg p-3 shadow-sm"
            >
              <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                {job.title}
              </p>

              <p className="text-xs text-gray-500 mt-1">📢 नया अपडेट</p>

              {/* 🔥 BUTTONS */}
              <div className="mt-3 flex gap-2">
                {/* PRIMARY */}
                <a
                  href={`https://wa.me/91${phoneRaw}?text=मुझे ${job.title} के बारे में जानकारी चाहिए और फॉर्म भरवाना है`}
                  className="flex-1 text-center py-1.5 bg-green-500 text-white rounded text-xs font-semibold"
                >
                  💬 WhatsApp
                </a>

                {/* SECONDARY */}
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 border border-gray-300 rounded text-xs text-gray-700"
                >
                  View Page
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
