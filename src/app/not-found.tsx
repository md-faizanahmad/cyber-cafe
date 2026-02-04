// src/app/not-found.tsx
import Link from "next/link";
import { MagneticClientWrapper } from "@/shared/MagneticClientWrapper";

export default function NotFound() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* 1. Background "Glow" Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-10 pointer-events-none" />

      {/* 2. Content Layer */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-[12rem] md:text-[20rem] font-black tracking-tighter text-primary/10 leading-none select-none">
          404
        </h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
            Oops! You&apos;ve <br />
            <span className="text-accent">Lost the Path</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-xs mx-auto">
            The page you are looking for has been moved to the future or
            doesn&lsquo;t exist yet.
          </p>
        </div>

        <div className="mt-20">
          <MagneticClientWrapper>
            <Link href="/">
              <button className="rounded-full px-10 h-14 bg-primary text-white text-lg font-bold shadow-2xl">
                Return to Home
              </button>
            </Link>
          </MagneticClientWrapper>
        </div>
      </div>

      {/* 3. Floating "School" Elements (Visual Polish) */}
      <div
        className="absolute top-20 left-20 w-12 h-12 rounded-full border-2 border-accent/20 animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full border-4 border-primary/10 animate-pulse" />
    </main>
  );
}
