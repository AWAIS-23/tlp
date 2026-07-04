const STATS = [
  { value: "6–8%", label: "Projected gross yield", sub: "Business Bay average" },
  { value: "Q4 2027", label: "Handover", sub: "DLD-registered timeline" },
  { value: "0%", label: "Capital gains tax", sub: "Dubai policy" },
  { value: "AED 1.2M", label: "Starting from", sub: "Studio residences" },
];

const PAYMENT = [
  { stage: "On booking", pct: 10 },
  { stage: "During construction", pct: 50 },
  { stage: "On handover", pct: 40 },
];

const PROTECTIONS = [
  "DLD Oqood registration within 60 days",
  "RERA-approved escrow account",
  "SPA (Sale and Purchase Agreement) governed by UAE law",
  "Mandatory snagging and handover inspection",
];

export default function InvestmentSection() {
  return (
    <section id="investment" className="bg-[var(--dark)] text-white py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
          INVESTMENT
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 mb-14">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            A considered position in one of the world&apos;s most resilient
            property markets
          </h2>
          <p className="font-sans text-sm leading-relaxed text-white/55 self-end">
            Business Bay has consistently outperformed Dubai&apos;s wider
            market over the past decade. PLT Tower offers a structured entry
            into that trajectory, with a payment plan designed to reduce
            financial exposure during construction.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/10 mb-16">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 ${i !== 0 ? "border-l border-white/10" : ""}`}
            >
              <p className="font-display text-2xl sm:text-3xl text-[#8fb3c9] mb-2">
                {s.value}
              </p>
              <p className="font-sans text-xs text-white/70 mb-1">{s.label}</p>
              <p className="font-sans text-[10px] text-white/35">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-14">
          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] text-[var(--tan)] mb-8 uppercase">
              Payment plan
            </p>
            <div className="space-y-6 mb-6">
              {PAYMENT.map((p) => (
                <div key={p.stage} className="flex items-center justify-between">
                  <span className="font-sans text-sm text-white/75">
                    {p.stage}
                  </span>
                  <span className="font-display text-lg">{p.pct}%</span>
                </div>
              ))}
            </div>
            <div className="h-[3px] w-full bg-white/10 relative">
              <div className="h-[3px] bg-white w-1/3" />
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-sans text-[10px] text-white/35">Now</span>
              <span className="font-sans text-[10px] text-white/35">
                Q4 2027
              </span>
            </div>
          </div>

          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] text-[var(--tan)] mb-8 uppercase">
              Buyer protection
            </p>
            <div className="border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full border border-[#8fb3c9]" />
                <p className="font-display text-[#8fb3c9] text-sm">
                  DLD-registered off-plan security
                </p>
              </div>
              <p className="font-sans text-xs leading-relaxed text-white/50 mb-5">
                All deposits are held in a Dubai Land Department escrow
                account and released to the developer in stages only upon
                verified construction milestones. This is mandated by UAE
                law — your investment cannot be accessed ahead of schedule.
              </p>
              <ul className="space-y-2">
                {PROTECTIONS.map((p) => (
                  <li
                    key={p}
                    className="font-sans text-xs text-white/60 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
