"use client";

import { useEffect, useRef } from "react";

export default function ValuesSection() {
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

  const values = [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices in all our dealings."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every aspect of our work, from design to delivery."
    },
    {
      title: "Innovation",
      description: "We continuously push boundaries and embrace new ideas to create exceptional spaces."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible development and sustainable practices."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve greatness."
    },
    {
      title: "Passion",
      description: "Our love for what we do drives us to create remarkable living experiences."
    }
  ];

  return (
    <section 
      className="w-full bg-[#d9d9d9] text-[var(--ink)] h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
            — Our Values
          </p>
          <h2 className="font-display text-4xl leading-tight">
            The Principles That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-lg border border-[var(--ink)]/10 hover:border-[var(--tan)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--tan)]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--tan)] transition-colors">
                  <span className="text-[var(--tan)] group-hover:text-white font-display text-lg">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">{value.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-[var(--ink)]/70">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
