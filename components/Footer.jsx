"use client";

function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Linkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <line x1="7.5" y1="6.8" x2="7.5" y2="6.9" />
      <path d="M12 17v-4.5a2 2 0 0 1 4 0V17" />
      <line x1="12" y1="10" x2="12" y2="17" />
    </svg>
  );
}
function Youtube(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const NAVIGATE = [
  { label: "The building", href: "#building" },
  { label: "Lifestyle & amenities", href: "#lifestyle" },
  { label: "Location", href: "#location" },
  { label: "Investment", href: "#investment" },
  { label: "Residences", href: "#residences" },
  { label: "Developer story", href: "#developer" },
];

const TOPICS = [
  "Apartments for sale in Business Bay",
  "Luxury flats Dubai",
  "Off-plan property Dubai 2027",
  "European developer Dubai",
  "Canal view apartments Business Bay",
  "New residential towers Dubai",
  "Investment property Business Bay",
  "PLT Properties Dubai",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white pt-16 pb-6 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-sans text-sm tracking-[0.2em] font-medium mb-1">
              PLT TOWER
            </p>
            <p className="font-sans text-[10px] tracking-[0.15em] text-white/40 mb-6">
              BY PLT PROPERTIES
            </p>
            <p className="font-sans text-xs leading-relaxed text-white/45">
              A European developer&apos;s first address in Dubai. Business
              Bay, 2027.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] text-[var(--tan)] mb-5 uppercase">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAVIGATE.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="font-sans text-sm text-[var(--rust)] hover:text-white transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] text-[var(--tan)] mb-5 uppercase">
              Contact
            </p>
            <p className="font-sans text-[11px] text-white/40 mb-1">
              Dubai Sales Office
            </p>
            <p className="font-sans text-sm mb-4">+971 4 400 0000</p>
            <p className="font-sans text-[11px] text-white/40 mb-1">
              International
            </p>
            <p className="font-sans text-sm mb-4">+43 1 200 0000</p>
            <p className="font-sans text-[11px] text-white/40 mb-1">Email</p>
            <p className="font-sans text-sm">hello@pltproperties.com</p>
          </div>

          {/* Updates */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] text-[var(--tan)] mb-5 uppercase">
              Updates
            </p>
            <p className="font-sans text-xs leading-relaxed text-white/45 mb-4">
              Construction progress, launch events, and priority invitations.
            </p>
            <form
              className="flex items-center border-b border-white/25 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent font-sans text-sm placeholder:text-white/35 outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="text-white/70 hover:text-white">
                →
              </button>
            </form>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/50 hover:text-white">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Search topics */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="font-sans text-[11px] tracking-[0.2em] text-[var(--tan)] mb-4 uppercase">
            Search topics
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {TOPICS.map((t) => (
              <span key={t} className="font-sans text-xs text-white/40">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-white/35">
            © 2026 PLT Properties. RERA registration pending. All prices are
            indicative and subject to change. DLD approval in progress.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="font-sans text-[11px] text-white/40 hover:text-white">
              Privacy policy
            </a>
            <a href="#" className="font-sans text-[11px] text-white/40 hover:text-white">
              Terms
            </a>
            <a href="#" className="font-sans text-[11px] text-white/40 hover:text-white">
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
