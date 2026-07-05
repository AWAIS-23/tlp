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
    eyebrow: "BUSINESS BAY · DUBAI",
    heading: "A standard set in Europe, built in Dubai",
  },
  {
    image: "/images/hero-2.jpg",
    eyebrow: "BUSINESS BAY · DUBAI",
    heading: "Where Business Bay meets Riviera elegance",
  },
  {
    image: "/images/hero-3.jpg",
    eyebrow: "BUSINESS BAY · DUBAI",
    heading: "Interiors composed by European ateliers",
  },
];

export default function HeroSlider() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jab bhi Hero slider screen par dikhega, navbar text white ho jayega
        if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent("changeNavbarTheme", { detail: "white" }));
        }
      },
      { threshold: 0.2 } // Thoda scroll hote hi register kar lega
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
          el: ".hero-pagination",
          clickable: true,
          bulletClass: "hero-dot",
          bulletActiveClass: "hero-dot-active",
        }}
        className="hero-swiper h-full w-full"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              {/* Background image */}
              <div
                className="absolute inset-0  bg-cover bg-center slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
              <div className="absolute inset-0 bg-black/20" />

              {/* Content - centered both horizontally and vertically */}
              <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 text-white mx-auto">
             
                <h1 className="font-display italic text-3xl sm:text-5xl md:text-6xl leading-[1.15] max-w-4xl mx-auto text-center mb-10">
                  {slide.heading}
                </h1>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots */}
      <div className="hero-pagination absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5" />

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
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
        .hero-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          display: inline-block;
          cursor: pointer;
          transition: all 0.2s ease;
          margin: 0 4px;
        }
        .hero-dot-active {
          background: #fff;
          width: 9px;
          height: 9px;
        }
      `}</style>
    </section>
  );
}