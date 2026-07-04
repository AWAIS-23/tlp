import Image from "next/image";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="w-full bg-[#EFE6D8] py-20 px-6 md:px-12 lg:px-20 flex flex-col justify-center"
    >
      {/* Hero */}
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-12">
        <p className="text-xs tracking-[0.25em] uppercase text-[#a8916f] mb-1">
          The PLT Philosophy
        </p>
        <div className="w-8 h-px bg-[#a8916f] mx-auto mb-2" />
        <h2 className="font-serif text-4xl md:text-4xl leading-tight text-[#2b2823]">
          More Than Places to Live
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#7a7468] max-w-md mx-auto">
          Creating timeless residences where Italian heritage, exceptional
          architecture, wellness, and hospitality come together to shape
          extraordinary lifestyles.
        </p>
      </div>

      {/* Feature block 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto w-full">
        <div className="relative flex items-stretch w-full">
          <span className="hidden md:block [writing-mode:vertical-rl] text-[10px] tracking-[0.2em] uppercase text-[#a8916f] mr-4 self-end pb-4">
            Artisanal
          </span>

          {/* امیج کا سائز یہاں چھوٹا اور فکس کیا گیا ہے */}
          <div className="relative aspect-[4/3] md:max-h-[350px] w-full overflow-hidden border border-[#d8d3c7]">
            <Image
              src="/images/philosophy-artisanal.jpg"
              alt="Italian craftsmanship materials"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-[10px] tracking-widest uppercase text-white/90">
              Photography, Arpeggi Travertine, Bronze, Oak, Linen Textiles
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#a8916f] mb-3">
            — On Coming Home
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-[#2b2823] leading-snug mb-6">
            Designed to Enrich Everyday Living
          </h3>
          <p className="text-sm leading-relaxed text-[#6b6558] mb-4">
            Every PLT residence begins with a simple belief: exceptional
            living starts with exceptional design.
          </p>
          <p className="text-sm leading-relaxed text-[#6b6558]">
            Inspired by Italian craftsmanship, every detail is thoughtfully
            considered to create homes that feel timeless, welcoming, and
            beautifully balanced. From elegant architecture to refined
            interiors, our spaces are designed to elevate everyday life while
            creating lasting value for generations.
          </p>
        </div>
      </div>
    </section>
  );
}