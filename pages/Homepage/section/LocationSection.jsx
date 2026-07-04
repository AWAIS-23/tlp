import ImagePlaceholder from "@/components/ImagePlaceholder";

const DISTANCES = [
  { place: "Dubai Mall / Downtown", time: "8 min", dist: "3.2 km" },
  { place: "DIFC", time: "5 min", dist: "2.1 km" },
  { place: "Dubai International Airport", time: "16 min", dist: "14 km" },
  { place: "Palm Jumeirah", time: "22 min", dist: "18 km" },
  { place: "Dubai Marina", time: "25 min", dist: "21 km" },
];

export default function LocationSection() {
  return (
    <section id="location" className="bg-[var(--cream)] text-[var(--ink)] py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 mb-10">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
              LOCATION
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight">
              Business Bay — the genuine centre of Dubai
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-[var(--ink)]/70 self-end">
            Not a suburb of Downtown. Not a satellite district.{" "}
            <span className="text-[var(--rust)]">
              Business Bay has become the city&apos;s true axis
            </span>{" "}
            — where finance, hospitality, and residential life coexist along
            the canal, within sight of everything that matters.
          </p>
        </div>

        <div className="relative h-[340px] w-full mb-6">
          <ImagePlaceholder
            variant="night"
            label="Business Bay skyline at dusk"
            className="h-full w-full"
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white ring-4 ring-white/25" />
            <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-white">
              PLT Tower
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6">
          <div className="relative h-[220px] w-full">
            <ImagePlaceholder
              variant="sunset"
              label="Business Bay, Dubai — interactive map, replace with Google Maps embed"
              className="h-full w-full"
            />
            <span className="absolute top-4 left-4 font-sans text-[11px] tracking-[0.15em] uppercase text-white">
              BUSINESS BAY, DUBAI
            </span>
          </div>

          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] text-[var(--tan)] mb-4 uppercase">
              Distances from PLT Tower
            </p>
            <div className="divide-y divide-[var(--ink)]/10">
              {DISTANCES.map((d) => (
                <div
                  key={d.place}
                  className="flex items-center justify-between py-3"
                >
                  <span className="font-sans text-sm text-[var(--ink)]/80">
                    {d.place}
                  </span>
                  <span className="text-right">
                    <span className="block font-display text-sm">{d.time}</span>
                    <span className="block font-sans text-[10px] text-[var(--ink)]/45">
                      {d.dist}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
