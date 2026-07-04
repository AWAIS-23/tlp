"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "The Building", href: "#building" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Location", href: "#location" },
  { label: "Investment", href: "#investment" },
  { label: "Residences", href: "#residences" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkSection = () => {
      // Horizontal container को ढूंढें
      const container = document.querySelector('.timeline-container') || document.querySelector('.philosophy-container');
      if (!container) return false;
      
      const containerRect = container.getBoundingClientRect();
      const currentX = Math.abs(containerRect.left);
      const sectionWidth = window.innerWidth;
      const currentSectionIndex = Math.round(currentX / sectionWidth);
      
      // जब आप पहले सेक्शन (Index 1) या उससे आगे जाएँ, तब कलर ब्लैक हो
      return currentSectionIndex >= 1;
    };

    const handleScroll = () => {
      const isOnCream = checkSection();
      setScrolled(isOnCream);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    const interval = setInterval(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // --- यहाँ हमने CSS variables हटाकर डायरेक्ट Tailwind Black कलर्स सेट कर दिए हैं ---
  const textColorClass = scrolled ? 'text-black' : 'text-white';
  const textColorHoverClass = scrolled ? 'hover:text-black' : 'hover:text-white';
  const borderColorClass = scrolled ? 'border-black/40' : 'border-white/70';
  const subTextColorClass = scrolled ? 'text-black/60' : 'text-white/60';
  const navTextColorClass = scrolled ? 'text-black/80' : 'text-white/85';
  
  // स्क्रॉल होने पर बटन ब्लैक बैकग्राउंड और वाइट टेक्स्ट में बदल जाएगा
  const buttonBgHoverClass = scrolled 
    ? 'hover:bg-black hover:text-white text-black' 
    : 'hover:bg-white hover:text-[#0b0b0c] text-white';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 sm:px-10 py-6">
        
        {/* Left Side: Logo */}
        <a href="#home" className="leading-tight flex-shrink-0">
          <span className={`block font-sans text-sm sm:text-base tracking-[0.25em] font-medium transition-colors duration-300 ${textColorClass}`}>
            PLT TOWER
          </span>
          <span className={`block font-sans text-[10px] sm:text-[11px] tracking-[0.2em] transition-colors duration-300 ${subTextColorClass}`}>
            BY PLT PROPERTIES
          </span>
        </a>

        {/* Right Side Group: Links + Button/Burger */}
        <div className="flex items-center gap-9">
          
          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-9">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-[13px] tracking-[0.08em] transition-colors duration-300 whitespace-nowrap ${navTextColorClass} ${textColorHoverClass}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Enquire button (desktop) + burger (mobile) */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="#enquire"
              className={`hidden sm:inline-flex items-center border px-6 py-2.5 font-sans text-[13px] font-medium tracking-[0.05em] transition-colors duration-300 ${borderColorClass} ${buttonBgHoverClass}`}
            >
              Enquire
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

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0b0b0c]/98 border-t border-white/10 px-6 py-8">
          <nav className="flex flex-col gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base tracking-[0.05em] text-white/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center border border-white/70 px-6 py-3 font-sans text-sm font-medium tracking-[0.05em] mt-2 text-white"
            >
              Enquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}