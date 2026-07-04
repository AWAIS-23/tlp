"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const AMENITIES = [
  {
    title: "Rooftop infinity pool",
    copy: "40 metres above Business Bay, with an uninterrupted view of the canal and the Downtown skyline.",
  },
  { title: "The arrival", copy: "A double-height lobby with a private residents' entrance, separate from guest access." },
  { title: "Wellness & fitness", copy: "A full floor dedicated to recovery, movement, and quiet training." },
  { title: "Residents' lounge", copy: "A reserved space for residents to host, work, or simply sit with the view." },
];

export default function LifestyleSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="lifestyle" className="bg-[var(--cream)] text-[var(--ink)] py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
          LIFESTYLE &amp; AMENITIES
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-tight max-w-lg mb-12">
          Designed for how you actually live
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 mb-8">
          <ImagePlaceholder
            variant="ocean"
            label="Rooftop pool deck, Business Bay skyline"
            className="h-[320px] w-full"
          />
          <div className="flex flex-col">
            {AMENITIES.map((a, i) => (
              <button
                key={a.title}
                onClick={() => setActive(i)}
                className={`text-left border-t ${i === 0 ? "border-transparent" : "border-[var(--ink)]/12"} py-4 transition-colors`}
              >
                <p
                  className={`font-display italic text-sm mb-1 ${
                    active === i ? "text-[var(--rust)]" : "text-[var(--ink)]"
                  }`}
                >
                  {a.title}
                </p>
                {active === i && (
                  <p className="font-sans text-xs leading-relaxed text-[var(--ink)]/60 max-w-xs">
                    {a.copy}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[300px] w-full overflow-hidden">
          <ImagePlaceholder
            variant="night"
            label="View from residence, canal-facing"
            className="h-full w-full"
          />
          <blockquote className="absolute bottom-6 left-6 max-w-sm font-display italic text-lg sm:text-xl text-white leading-snug">
            &ldquo;The light changes the apartment throughout the day.
            I&apos;d never lived somewhere that felt this alive.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
