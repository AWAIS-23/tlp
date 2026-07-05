import ImagePlaceholder from "@/components/ImagePlaceholder";

const INTRO_STATS = [
  { value: "15+", label: "YEARS OF CRAFT" },
  { value: "100%", label: "DLD ESCROW-BACKED" },
  { value: "Business Bay", label: "FLAGSHIP LOCATION" },
  { value: "European", label: "DESIGN HERITAGE" },
];

export default function IntroSection() {
  return (
    <section id="building" className="bg-[#d9d9d9] text-[var(--ink)] py-24 px-6 sm:px-10 h-full flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <span className="block h-px bg-[var(--tan)] w-16 mr-6"></span>
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] whitespace-nowrap">
            WHO WE ARE
          </p>
          <span className="block h-px bg-[var(--tan)] w-16 ml-6"></span>
        </div>
        
        <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl mx-auto mb-8">
          PLT Properties brings European craftsmanship to the heart of Dubai
        </h2>

        <p className="text-center font-sans text-sm leading-relaxed text-[var(--ink)]/80 max-w-3xl mx-auto mb-16">
          For over 28 years, The Total Office has been at the forefront of crafting dynamic and effective workplace and commercial solutions. Our longevity is not just a number, it represents decades of accumulated knowledge, refined expertise and a deep understanding of the evolving needs of a modern business.
        </p>

      
      </div>
        <div className="border-y border-[var(--ink)]/20 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--ink)]/20">
            {INTRO_STATS.map((stat, index) => (
              <div key={index} className="text-center px-4 sm:px-6 md:px-8">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl mb-2 text-[var(--ink)]">
                  {stat.value}
                </p>
                <p className="font-sans text-xs tracking-[0.1em] text-[var(--ink)]/60 uppercase leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
