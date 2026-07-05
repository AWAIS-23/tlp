"use client";

import { useEffect, useRef } from "react";

export default function StorySection() {
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
    <section
      ref={sectionRef}
      className="w-full bg-[#d9d9d9] text-[var(--ink)] h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="aspect-[4/5] bg-[#1a1a1a] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
              alt="PLT Properties Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--tan)] rounded-lg" />
        </div>

        {/* Right: Content */}
        <div>
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
            — Our Story
          </p>
          <h2 className="font-display text-4xl leading-tight mb-6">
            A Legacy of Excellence
          </h2>
          <div className="space-y-4 font-sans text-sm leading-relaxed text-[var(--ink)]/80">
            <p>
              Founded with a vision to transform Dubai's real estate landscape, 
              PLT Properties has been at the forefront of luxury development for over a decade.
            </p>
            <p>
              Our journey began with a simple belief: that exceptional living spaces 
              should be accessible to those who appreciate the finer things in life.
            </p>
            <p>
              Today, we stand as a testament to unwavering commitment to quality, 
              innovation, and customer satisfaction. Every project we undertake 
              is a reflection of our dedication to creating spaces that inspire.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="font-display text-4xl text-[var(--tan)] mb-2">15+</p>
              <p className="font-sans text-sm text-[var(--ink)]/60">Years of Excellence</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[var(--tan)] mb-2">50+</p>
              <p className="font-sans text-sm text-[var(--ink)]/60">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
