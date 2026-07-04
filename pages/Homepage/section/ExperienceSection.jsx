import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-[#EFE6D8] py-20 px-6 md:px-12 lg:px-20 h-screen flex flex-col justify-center">
      {/* Feature block: text left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto mb-24">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#a8916f] mb-3">
            — On How It Feels
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-[#2b2823] leading-snug mb-6">
            Luxury Measured by Experience
          </h3>
          <p className="text-sm leading-relaxed text-[#6b6558] mb-4">
            True luxury is defined not by what surrounds you, but by how a
            place makes you feel.
          </p>
          <p className="text-sm leading-relaxed text-[#6b6558]">
            It is found in quiet mornings filled with natural light,
            meaningful connections to nature, thoughtfully crafted spaces,
            and the comfort of genuine hospitality. At PLT Properties, every
            residence is designed to inspire wellbeing, encourage
            connection, and create experiences that endure far beyond the
            walls of a home.
          </p>
        </div>

        <div className="relative flex items-stretch justify-end">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/philosophy-stillness.jpg"
              alt="Quiet morning light interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 right-4 text-[10px] tracking-widest uppercase text-white/80">
              Photography, A Quiet Morning, Floor-to-ceiling Glass, Coffee,
              Vinyl, Soft Fabric, Candid
            </p>
          </div>
          <span className="hidden md:block [writing-mode:vertical-rl] text-[10px] tracking-[0.2em] uppercase text-[#a8916f] ml-4 self-end pb-4">
            Stillness
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="max-w-xl mx-auto text-center">
        <div className="w-px h-10 bg-[#a8916f] mx-auto mb-8" />
        <p className="font-serif italic text-2xl md:text-3xl text-[#2b2823] leading-snug">
          Not simply a place to live. A life to belong to.
        </p>
        <p className="mt-6 text-xs tracking-[0.25em] uppercase text-[#a8916f]">
          PLT Properties
        </p>
      </div>
    </section>
  );
}
