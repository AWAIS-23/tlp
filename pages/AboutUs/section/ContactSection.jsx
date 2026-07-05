"use client";

import { useEffect, useRef } from "react";

export default function ContactSection() {
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
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
            — Get In Touch
          </p>
          <h2 className="font-display text-4xl leading-tight mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="font-sans text-sm text-[var(--ink)]/80 max-w-2xl mx-auto">
            Have questions about our projects or want to learn more about PLT Properties? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--tan)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--tan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display text-xl mb-2">Our Office</h3>
            <p className="font-sans text-sm text-[var(--ink)]/70">
              Business Bay, Dubai<br />
              United Arab Emirates
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--tan)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--tan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-display text-xl mb-2">Call Us</h3>
            <p className="font-sans text-sm text-[var(--ink)]/70">
              +971 4 XXX XXXX<br />
              Sat-Thu: 9AM - 6PM
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--tan)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--tan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-xl mb-2">Email Us</h3>
            <p className="font-sans text-sm text-[var(--ink)]/70">
              info@pltproperties.com<br />
              enquiries@pltproperties.com
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/contact"
            className="inline-block border border-[var(--tan)] text-[var(--tan)] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[var(--tan)] hover:text-white transition-colors"
          >
            Send Us a Message
          </a>
        </div>
      </div>
    </section>
  );
}
