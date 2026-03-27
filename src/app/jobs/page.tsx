"use client";

import { useEffect, useMemo, useState } from "react";
import { CYBER_CAFE_CONFIG } from "@/config/cyberCafe";

interface Job {
  title: string;
  link: string;
  date: string;
}

const ITEMS_PER_PAGE = 10;

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { phoneRaw } = CYBER_CAFE_CONFIG;

  // 🔥 FETCH
  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs || []))
      .catch(() => setJobs([]));
  }, []);

  // 🔥 SEARCH ONLY
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [jobs, search]);

  // 🔥 PAGINATION
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const paginatedJobs = filteredJobs.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-white px-4 py-6 mt-16">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-5">
        <h1 className="text-lg sm:text-xl font-bold">🔥 सरकारी नौकरी अपडेट</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          फॉर्म भरवाने के लिए WhatsApp या Call करें
        </p>
      </div>

      {/* 🔍 SEARCH */}
      <div className="max-w-4xl mx-auto mb-5">
        <input
          type="text"
          placeholder="नौकरी खोजें..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full border px-3 py-2 rounded text-sm"
        />
      </div>

      {/* 📄 LIST */}
      <div className="max-w-4xl mx-auto divide-y">
        {paginatedJobs.length === 0 ? (
          <p className="text-gray-500 text-sm py-6">कोई नौकरी नहीं मिली</p>
        ) : (
          paginatedJobs.map((job, index) => (
            <div key={index} className="py-4">
              {/* TITLE */}
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                {job.title}
              </p>

              {/* STATUS */}
              <p className="text-[11px] text-gray-500 mt-1">📢 नया अपडेट</p>

              {/* ACTIONS */}
              <div className="mt-3 flex flex-wrap gap-2">
                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/91${phoneRaw}?text=मुझे ${job.title} का फॉर्म भरवाना है`}
                  className="px-3 py-1.5 bg-green-500 text-white text-xs rounded"
                >
                  💬 WhatsApp
                </a>

                {/* CALL */}
                <a
                  href={`tel:+91${phoneRaw}`}
                  className="px-3 py-1.5 bg-black text-white text-xs rounded"
                >
                  📞 Call
                </a>

                {/* VIEW */}
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border text-xs rounded"
                >
                  View
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 📄 PAGINATION */}
      {totalPages > 1 && (
        <div className="max-w-4xl mx-auto mt-6 flex flex-wrap justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 text-xs rounded ${
                page === i + 1 ? "bg-black text-white" : "border"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
