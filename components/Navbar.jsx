"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Developments", href: "#developments" },
  { label: "About", href: "#about" },
  { label: "Communities", href: "#communities" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState("default"); // 'default' ya 'white'

  // Scroll Up Aur Down dono track karne ke liye event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact section se aane wali theme update
  useEffect(() => {
    const handleThemeChange = (e) => {
      setActiveTheme(e.detail);
    };

    window.addEventListener("changeNavbarTheme", handleThemeChange);
    return () => window.removeEventListener("changeNavbarTheme", handleThemeChange);
  }, []);

  // --- CORE CONDITION ---
  const isForceWhite = activeTheme === "white";

  // 1. Navbar Main Container Background Logic
  // Desktop par strictly transparent rahega aur scroll karne par bottom border badlega.
  // Mobile par agar burger menu open hai (`open === true`), toh background SOLID BLACK ho jayega.
  const headerBgClass = open
    ? "bg-black border-b border-white/10"
    : isScrolled
      ? isForceWhite
        ? "bg-transparent border-b border-white/10"
        : "bg-transparent border-b border-black/10"
      : "bg-transparent border-transparent";

  // 2. Text Color Logic
  // Agar mobile menu open hai, toh text hamesha white hona chahiye kyunki background black hai.
  const textColorClass = open || isForceWhite
    ? "text-white"
    : isScrolled ? "text-black" : "text-white";

  const subTextColorClass = open || isForceWhite
    ? "text-white/80"
    : isScrolled ? "text-black/60" : "text-white/80";

  const navLinkColorClass = open || isForceWhite
    ? "text-white/90 hover:text-white"
    : isScrolled
      ? "text-black/80 hover:text-black font-semibold"
      : "text-white/90 hover:text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="relative flex items-center justify-between px-6 sm:px-10 py-5 transition-all duration-300 bg-black sm:bg-transparent">

        {/* Left Side: Logo */}
        <a href="#home" className="leading-tight flex-shrink-0 z-10">
          <span className={`block font-sans text-base sm:text-lg tracking-[0.15em] font-bold transition-colors duration-300 ${textColorClass}`}>
            PLT
          </span>
          <span className={`block font-sans text-[9px] sm:text-[10px] tracking-[0.25em] font-medium -mt-0.5 transition-colors duration-300 ${subTextColorClass}`}>
            PROPERTIES
          </span>
        </a>

        {/* Center: Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans font-medium text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 whitespace-nowrap ${navLinkColorClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Button + Burger */}
        <div className="flex items-center gap-4 flex-shrink-0 z-10">
          <a
            href="#enquire"
            className={`hidden sm:inline-flex items-center px-6 py-2.5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
              open || isForceWhite
                ? "border border-white text-white hover:bg-white hover:text-black"
                : isScrolled
                  ? "border border-black text-black hover:bg-black hover:text-white"
                  : "border border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Register Interest
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 transition-colors duration-300 ${textColorClass}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile menu dropdown - Yeh solid black background ke saath niche expand hoga */}
      {open && (
        <div className="lg:hidden px-6 py-8 transition-colors duration-300 bg-black">
          <nav className="flex flex-col gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 text-white/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 border font-sans text-xs font-semibold tracking-[0.2em] uppercase mt-2 transition-all duration-300 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              Register Interest
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}