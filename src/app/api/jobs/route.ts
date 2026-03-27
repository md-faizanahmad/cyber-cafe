import { NextResponse } from "next/server";

interface RawJob {
  title?: string;
  link?: string;
  date?: string;
  publishedAt?: string;
}

export interface Job {
  title: string;
  link: string;
  date: string;
}

interface JobsApiResponse {
  success: boolean;
  jobs: Job[];
}

export async function GET() {
  try {
    const response = await fetch(
      "https://sarkari-result.p.rapidapi.com/results/",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY || "",
          "x-rapidapi-host": "sarkari-result.p.rapidapi.com",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data: unknown = await response.json();

    // ✅ SAFE EXTRACTION
    let rawJobs: RawJob[] = [];

    if (Array.isArray(data)) {
      rawJobs = data;
    } else if (
      typeof data === "object" &&
      data !== null &&
      "results" in data &&
      Array.isArray((data as { results: RawJob[] }).results)
    ) {
      rawJobs = (data as { results: RawJob[] }).results;
    } else if (
      typeof data === "object" &&
      data !== null &&
      "data" in data &&
      Array.isArray((data as { data: RawJob[] }).data)
    ) {
      rawJobs = (data as { data: RawJob[] }).data;
    }

    // ❌ REMOVE FILTERING (frontend will handle)
    // ❌ REMOVE SLICING

    const jobs: Job[] = rawJobs.map((item) => ({
      title: item.title ?? "New Job Update",
      link: item.link ?? "#",
      date: item.date ?? item.publishedAt ?? "New",
    }));

    const result: JobsApiResponse = {
      success: true,
      jobs,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Jobs API Error:", error);

    const fallback: JobsApiResponse = {
      success: false,
      jobs: [
        {
          title: "SSC GD Constable Form",
          link: "#",
          date: "New",
        },
        {
          title: "Railway Group D Recruitment",
          link: "#",
          date: "New",
        },
        {
          title: "Bihar Police Vacancy",
          link: "#",
          date: "New",
        },
      ],
    };

    return NextResponse.json(fallback);
  }
}
