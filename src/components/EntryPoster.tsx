"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import AdmissionButton from "./ui/AdmissionButton";

export function EntryPoster() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Effect 1: Decide WHEN the poster should open
   * - Runs once
   * - Session-based visibility
   * - No DOM side-effects
   */
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenEntryPoster");

    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  /**
   * Effect 2: Handle BODY SCROLL LOCK
   * - Pure UI side-effect
   * - Reacts only to isOpen
   * - Mobile + desktop safe
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenEntryPoster", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Poster */}
      <div
        className="relative w-full max-w-lg md:max-w-xl aspect-4/5 md:aspect-square bg-white overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/30 hover:bg-black/50 text-white  transition"
          aria-label="Close Poster"
        >
          <X size={22} />
        </button>

        {/* Poster image */}
        <div className="relative h-full w-full ">
          <Image
            src="/entry_poster.png"
            alt="Admissions 2026 Poster"
            fill
            priority
            sizes=""
            className="object-cover p-4"
          />

          {/* CTA */}
          <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-primary via-primary/70 to-transparent text-white text-center">
            <p className="mb-5 text-sm font-medium uppercase tracking-widest opacity-90">
              Limited Seats for Gaya Campus
            </p>
            <AdmissionButton />
          </div>
        </div>
      </div>
    </div>
  );
}
