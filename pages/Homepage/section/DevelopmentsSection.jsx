import Image from "next/image";

const featured = {
  tags: [
    { label: "Flagship", variant: "outline" },
    { label: "Now Selling", variant: "solid" },
  ],
  title: "PLT Tower",
  location: "Business Bay, Dubai",
  description:
    "Fifty-one storeys of considered living in Dubai's most dynamic address. Each residence designed with European restraint — natural stone, warm metals, and proportions built to last.",
  stats: [
    { label: "Type", value: "Studio–3 Bed" },
    { label: "Handover", value: "Q4 2027" },
    { label: "Payment", value: "60 / 40" },
  ],
  image: "/images/plt-tower.jpg",
  cta: "View Development",
};

const developments = [
  {
    title: "PLT Residences",
    location: "Downtown Dubai",
    tag: "Coming Soon",
    image: "/images/plt-residences.jpg",
  },
  {
    title: "Canal House",
    location: "Dubai Canal",
    tag: "In Planning",
    image: "/images/canal-house.jpg",
  },
  {
    title: "The Quarter",
    location: "Al Quoz Arts District",
    tag: "In Planning",
    image: "/images/the-quarter.jpg",
  },
];

function Tag({ label, variant = "solid" }) {
  const base =
    "inline-block px-2.5 py-1 text-[10px] tracking-widest uppercase font-medium whitespace-nowrap";
  const styles =
    variant === "outline"
      ? "border border-[#B08D57] text-[#B08D57] bg-transparent"
      : "bg-[#2b2823] text-white";
  return <span className={`${base} ${styles}`}>{label}</span>;
}

function BadgeTag({ label }) {
  return (
    <span className="absolute top-4 left-4 bg-[#1f2937]/90 text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
      {label}
    </span>
  );
}

export default function Developments() {
  return (
    <section id="developments" className="w-full bg-[#EEEBE3] py-16 px-4 md:px-8 lg:px-12 min-h-screen flex flex-col justify-center">
      
      {/* Featured development */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#d8d3c7] items-stretch min-h-[300px] overflow-hidden">
        
        {/* Image Container */}
        <div className="relative h-[250px] sm:h-[300px] lg:h-auto w-full overflow-hidden">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Details Container - Fixed padding and sizes */}
        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 md:px-12 lg:py-12 bg-[#EEEBE3] min-h-[300px] min-w-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {featured.tags.map((tag) => (
              <Tag key={tag.label} label={tag.label} variant={tag.variant} />
            ))}
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-[#2b2823] leading-tight break-words">
            {featured.title}
          </h2>
          <p className="mt-1.5 text-[9px] tracking-[0.15em] uppercase text-[#8a8578]">
            {featured.location}
          </p>

          <p className="mt-3 text-[12px] leading-relaxed text-[#5c584f] max-w-md break-words">
            {featured.description}
          </p>

          {/* Stats Grid - Responsive wrap to prevent bursting out */}
          <div className="mt-5 pt-4 border-t border-[#d8d3c7] grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md min-w-0">
            {featured.stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="text-[9px] tracking-widest uppercase text-[#a8a397] mb-0.5 truncate">
                  {stat.label}
                </p>
                <p className="text-[11px] text-[#2b2823] font-medium truncate">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-5 self-start border border-[#2b2823] text-[#2b2823] text-[9px] tracking-widest uppercase px-4 py-2 hover:bg-[#2b2823] hover:text-white transition-colors">
            {featured.cta}
          </button>
        </div>
      </div>

      {/* Development grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {developments.map((dev) => (
          <div key={dev.title} className="group flex flex-col">
            <div className="relative h-[200px] overflow-hidden border border-[#d8d3c7]">
              <Image
                src={dev.image}
                alt={dev.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <BadgeTag label={dev.tag} />
            </div>

            <div className="mt-3">
              <h3 className="font-serif text-sm md:text-base text-neutral-800 transition-colors duration-300 group-hover:text-neutral-600 truncate">
                {dev.title}
              </h3>
              <p className="mt-1 text-[9px] tracking-widest uppercase text-neutral-500">
                {dev.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}