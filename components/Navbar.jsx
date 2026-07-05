"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const LINKS = [
  { label: "Developments", href: "#developments" },
  { label: "About", href: "/about-us" },
  { label: "Communities", href: "#communities" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState("default");

  // Scroll handler (Sirf desktop viewports ke liye transitions trigger karega)
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

  // Theme change listener
  useEffect(() => {
    const handleThemeChange = (e) => {
      setActiveTheme(e.detail);
    };

    window.addEventListener("changeNavbarTheme", handleThemeChange);
    return () => window.removeEventListener("changeNavbarTheme", handleThemeChange);
  }, []);

  const isForceWhite = activeTheme === "white";

  // --- DESKTOP ONLY STYLING LOGIC ---
  const desktopHeaderBg = isScrolled
    ? isForceWhite
      ? "lg:bg-transparent lg:border-b lg:border-white/10"
      : "lg:bg-transparent lg:border-b lg:border-black/10"
    : "lg:bg-transparent lg:border-transparent";

  const desktopTextColor = isForceWhite
    ? "lg:text-white"
    : isScrolled ? "lg:text-black" : "lg:text-white";

  const desktopSubTextColor = isForceWhite
    ? "lg:text-white/80"
    : isScrolled ? "lg:text-black/60" : "lg:text-white/80";

  const desktopNavLinkColor = isForceWhite
    ? "lg:text-white/90 lg:hover:text-white"
    : isScrolled
      ? "lg:text-black/80 lg:hover:text-black lg:font-semibold"
      : "lg:text-white/90 lg:hover:text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-white/10 ${desktopHeaderBg}`}>
      
      {/* Main Navbar Bar */}
      <div className="relative flex items-center justify-between px-6 sm:px-10 py-5">

        {/* Brand Logo (Mobile: Always White | Desktop: Dynamic) */}
        <Link href="/" className="leading-tight flex-shrink-0 z-10">
          <span className={`block font-sans text-base sm:text-lg tracking-[0.15em] font-bold text-white transition-colors duration-300 ${desktopTextColor}`}>
            PLT
          </span>
          <span className={`block font-sans text-[9px] sm:text-[10px] tracking-[0.25em] font-medium -mt-0.5 text-white/80 transition-colors duration-300 ${desktopSubTextColor}`}>
            PROPERTIES
          </span>
        </Link>

        {/* Center: Desktop Navigation Links Only */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {LINKS.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans font-medium text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 whitespace-nowrap ${desktopNavLinkColor}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans font-medium text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 whitespace-nowrap ${desktopNavLinkColor}`}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Right Side: Action Button + Mobile Burger Menu */}
        <div className="flex items-center gap-4 flex-shrink-0 z-10">
          {/* Register Interest Button (Desktop Dynamic Style) */}
          <a
            href="#enquire"
            className={`hidden lg:inline-flex items-center px-6 py-2.5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
              isForceWhite
                ? "border border-white text-white hover:bg-white hover:text-black"
                : isScrolled
                  ? "border border-black text-black hover:bg-black hover:text-white"
                  : "border border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Register Interest
          </a>

          {/* Toggle Button (Mobile ke liye hamesha white aur clickable) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors duration-300"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* --- MOBILE DROPDOWN NAVIGATION --- */}
      {open && (
        <div className="lg:hidden px-6 pb-8 pt-2 bg-black border-t border-white/5 animate-fadeIn">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm font-medium tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm font-medium tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              )
            ))}
            
            {/* Mobile View Register Button */}
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 border font-sans text-xs font-semibold tracking-[0.2em] uppercase mt-4 bg-white text-black hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
            >
              Register Interest
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}