import ImagePlaceholder from "@/components/ImagePlaceholder";

const STATS = [
  { value: "11", label: "Completed projects" },
  { value: "15+", label: "Years in Europe" },
  { value: "100%", label: "On-time delivery" },
  { value: "3", label: "Countries" },
];

export default function DeveloperSection() {
  return (
    <section className="bg-[var(--cream)] text-[var(--ink)] py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12">
        <div className="relative h-[380px] w-full">
          <ImagePlaceholder
            variant="marble"
            label=""
            className="h-full w-full"
          />
          <span className="absolute bottom-4 left-4 font-sans text-[10px] tracking-[0.15em] text-white/80 uppercase">
            Est. 2008 · Vienna, Austria
          </span>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
            THE DEVELOPER
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-6">
            A European developer who builds with patience
          </h2>
          <p className="font-sans text-sm leading-relaxed text-[var(--ink)]/70 mb-4">
            PLT Properties was founded in{" "}
            <span className="text-[var(--rust)]">Vienna in 2008</span> on a
            single principle: that the buildings we leave behind should
            outlast the trends of the decade in which they were built. Over
            fifteen years and eleven completed projects across{" "}
            <span className="text-[var(--rust)]">
              Austria, Germany, and the Netherlands
            </span>
            , we have never been early to deliver — and never late.
          </p>
          <p className="font-sans text-sm leading-relaxed text-[var(--ink)]/70 mb-10">
            PLT Tower is our first address outside Europe. We chose Dubai
            because Business Bay&apos;s ambition matches our own. We chose
            this site because of its relationship to the water. And we chose
            to build here because we believed the city deserved a
            development that was genuinely made — not assembled.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[var(--ink)]/15 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl text-[#3d5a68] mb-1">
                  {s.value}
                </p>
                <p className="font-sans text-[10px] tracking-[0.08em] text-[var(--ink)]/50 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
