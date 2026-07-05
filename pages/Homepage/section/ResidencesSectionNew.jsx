"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const dnaCards = [
  {
    title: "Business Bay",
    subtitle: "Dubai's most dynamic professional address",
    image: "/images/business-bay.jpg",
  },
  {
    title: "Downtown Dubai",
    subtitle: "Where the city's pulse is at its strongest",
    image: "/images/downtown-dubai.jpg",
  },
  {
    title: "Dubai Canal",
    subtitle: "A new waterfront chapter in the city's story",
    image: null, // no image supplied — renders as a dark placeholder card
  },
];

export default function BrandDNA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent("changeNavbarTheme", { detail: "light" }));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#d9d9d9] py-23 px-6 md:px-10 ">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2b2823] tracking-tight">
          Brand DNA
        </h2>
        <div className="mt-3 flex gap-1.5">
          <span className="h-[3px] w-6 bg-[#2b2823]/30 rounded-full" />
          <span className="h-[3px] w-6 bg-[#2b2823]/30 rounded-full" />
          <span className="h-[3px] w-6 bg-[#2b2823]/20 rounded-full" />
          <span className="h-[3px] w-6 bg-[#2b2823]/10 rounded-full" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {dnaCards.map((card) => (
          <div
            key={card.title}
            className="group relative h-[400px]  overflow-hidden bg-[#1a1610]"
          >
            {card.image ? (
              <>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={false}
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </>
            ) : (
              // Placeholder state (e.g. image pending / broken)
              <div className="absolute inset-0 flex items-center justify-center bg-[#1f1a14]">
                <svg
                  className="h-6 w-6 text-[#4a7dab]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl md:text-2xl text-white">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-white/70 max-w-xs">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
