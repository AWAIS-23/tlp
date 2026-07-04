import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Download } from "lucide-react";

const UNITS = [
  {
    type: "Studio",
    size: "From 450 sq ft · Floors 5–15",
    features: ["City view", "Juliet balcony", "European kitchen"],
    price: "AED 1.2M",
    variant: "stone",
  },
  {
    type: "1 Bedroom",
    size: "From 780 sq ft · Floors 10–28",
    features: ["Canal or city view", "Full balcony", "Master suite", "Separate laundry"],
    price: "AED 1.9M",
    variant: "sand",
  },
  {
    type: "2 Bedroom",
    size: "From 1,250 sq ft · Floors 15–35",
    features: ["Canal or skyline view", "Wrap balcony", "En-suite bathrooms", "Storage room"],
    price: "AED 3.1M",
    variant: "sunset",
  },
  {
    type: "3 Bedroom",
    size: "From 2,100 sq ft · Floors 28–36",
    features: ["Panoramic canal view", "Full-length terrace", "3 en-suite bathrooms", "Private entrance lobby"],
    price: "AED 5.4M",
    variant: "dusk",
  },
];

export default function ResidencesSection() {
  return (
    <section id="residences" className="bg-[var(--cream)] text-[var(--ink)] py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-4">
              RESIDENCES &amp; FLOOR PLANS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Choose your residence
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 border border-[var(--ink)]/30 px-5 py-2.5 font-sans text-xs tracking-wide hover:bg-[var(--ink)] hover:text-white transition-colors self-start sm:self-auto">
            <Download size={14} />
            Download brochure
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {UNITS.map((u) => (
            <div key={u.type} className="group">
              <ImagePlaceholder
                variant={u.variant}
                label={`${u.type} interior`}
                className="h-[190px] w-full mb-4"
              />
              <p className="font-display italic text-[var(--rust)] text-base mb-1">
                {u.type}
              </p>
              <p className="font-sans text-[11px] text-[var(--ink)]/45 mb-3">
                {u.size}
              </p>
              <ul className="space-y-1 mb-4">
                {u.features.map((f) => (
                  <li
                    key={f}
                    className="font-sans text-xs text-[var(--ink)]/65 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--ink)]/30 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="font-sans text-xs tracking-wide">
                From{" "}
                <span className="text-[var(--rust)] font-medium">
                  {u.price}
                </span>
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-sans text-xs text-[var(--ink)]/45">
          Detailed floor plans and unit schedules are available upon
          registration of interest.
        </p>
      </div>
    </section>
  );
}
