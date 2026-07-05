"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SLIDES = [
  {
    image: "/images/hero-1.jpg",
    heading: "A standard set in Europe, built in Dubai",
  },
  {
    image: "/images/hero-2.jpg",
    heading: "Where Business Bay meets Riviera elegance",
  },
  {
    image: "/images/hero-3.jpg",
    heading: "Interiors composed by European ateliers",
  },
];

export default function HeroSlider() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent("changeNavbarTheme", { detail: "white" }));
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-[#0b0b0c]"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        pagination={{
          el: ".custom-hero-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        className="hero-swiper h-full w-full"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
              <div className="absolute inset-0 bg-black/20" />

              {/* Content */}
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 text-white mx-auto">
                <h1 className=" italic font-light text-3xl sm:text-5xl md:text-6xl leading-[1.15] max-w-4xl mx-auto text-center mb-10">
                  {slide.heading}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- FIXED: SOLID CONTAINER FOR PAGINATION --- */}
      <div className="custom-hero-pagination absolute bottom-9 left-1/2 -translate-x-1/2 z-30 flex items-center justify-end gap-3 w-auto h-5" />

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 right-8 z-20 items-center gap-2">
        <span className="font-sans text-[11px] tracking-[0.25em] text-white/70 [writing-mode:vertical-rl] rotate-180">
          SCROLL
        </span>
      </div>

      <style jsx global>{`
        .swiper-slide-active .slide-bg {
          animation: zoom 5.5s ease-in-out forwards;
        }
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        
        /* Force Swiper overrides using multi-class specificity */
        .custom-hero-pagination .custom-bullet {
          width: 8px !important;
          height: 4px !important;
          border-radius: 0px !important; /* Strict sharp square corners */
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          display: inline-block;
          cursor: pointer;
          transition: all 0.4s ease-in-out !important;
          margin: 0 !important;
        }
        
        /* Active Red Flat Bar Shape */
        .custom-hero-pagination .custom-bullet-active {
          background: #ef4444 !important; /* Pure Red */
          width: 24px !important;
          height: 4px !important;
          border-radius: 0px !important;
        }
      `}</style>
    </section>
  );
}