"use client";

import { useEffect, useRef } from "react";

export default function TeamSection() {
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

  const team = [
    {
      name: "Ahmed Al-Rashid",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Michael Chen",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Fatima Hassan",
      role: "Director of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  return (
    <section 
      className="w-full bg-[#d9d9d9] text-[var(--ink)] h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
            — Leadership Team
          </p>
          <h2 className="font-display text-4xl leading-tight mb-4">
            Meet Our Visionaries
          </h2>
          <p className="font-sans text-sm text-[var(--ink)]/80 max-w-2xl mx-auto">
            A team of experienced professionals dedicated to shaping Dubai's skyline 
            with excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg text-white mb-1">{member.name}</h3>
                  <p className="text-[var(--tan)] text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
