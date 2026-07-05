import ImagePlaceholder from "@/components/ImagePlaceholder";

const MATERIALS = [
  {
    title: "Italian stone",
    copy: "Calacatta marble selected at the quarry — not from a standard tile range.",
  },
  {
    title: "German engineering",
    copy: "Schüco window systems, triple-glazed for both thermal performance and silence.",
  },
  {
    title: "Handcrafted joinery",
    copy: "All millwork produced by a family-run workshop in Vicenza, Italy.",
  },
];

export default function ArchitectureSection() {
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

  return (
    <section ref={sectionRef} className="bg-[#d9d9d9] text-[var(--ink)]">
      <ImagePlaceholder
        variant="night"
        label="Tower under construction, Business Bay"
        className="h-[280px] sm:h-[360px] w-full"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
        <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
          ARCHITECTURE &amp; DESIGN
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Form as a consequence of restraint
          </h2>
          <div>
            <p className="font-sans text-sm leading-relaxed text-white/70 mb-4">
              PLT Tower rises from Business Bay with a facade that refuses
              ornament. Designed in collaboration with{" "}
              <span className="text-[var(--rust)]">
                European structural architects
              </span>
              , every angle was arrived at by removing what didn&apos;t need
              to be there. The result: a silhouette that stands apart
              precisely because it doesn&apos;t try to.
            </p>
            <p className="font-sans text-xs leading-relaxed text-[var(--ink)]/40">
              Floor-to-ceiling glazing on all primary residences. Deep-set
              balconies that frame the canal. A ground-floor arrival sequence
              that takes its time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          <ImagePlaceholder
            variant="dusk"
            label="Landmark silhouette, Business Bay skyline"
            className="h-[300px] w-full"
          />
          <ImagePlaceholder
            variant="stone"
            label="Living room, show residence"
            className="h-[300px] w-full"
          />
        </div>

        <div className="border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {MATERIALS.map((m) => (
            <div key={m.title}>
              <p className="font-display italic text-[var(--tan)] text-lg mb-2">
                {m.title}
              </p>
              <p className="font-sans text-xs leading-relaxed text-[var(--ink)]/50">
                {m.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
