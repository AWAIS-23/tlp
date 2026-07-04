import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function CTASection() {
  return (
    <section id="enquire" className="relative h-[480px] w-full overflow-hidden">
      <ImagePlaceholder
        variant="ocean"
        label="Rooftop pool at dusk"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-xs tracking-[0.25em] text-[var(--tan)] mb-5">
          LIMITED RESIDENCES AVAILABLE
        </p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight max-w-2xl text-white mb-5">
          Begin your conversation with the PLT Properties team
        </h2>
        <p className="font-sans text-sm text-white/70 max-w-lg mb-10">
          Priority access to floor plans, unit schedules, and pricing is
          available upon registration. Our team is available seven days a
          week.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#residences"
            className="w-64 sm:w-auto inline-flex items-center justify-center bg-white text-[#0b0b0c] px-8 py-3.5 font-sans text-sm font-semibold tracking-[0.03em] hover:bg-white/90 transition-colors"
          >
            Register interest
          </a>
          <a
            href="tel:+97144000000"
            className="w-64 sm:w-auto inline-flex items-center justify-center border border-white/70 px-8 py-3.5 font-sans text-sm tracking-[0.03em] text-white hover:bg-white hover:text-[#0b0b0c] transition-colors"
          >
            +971 4 400 0000
          </a>
        </div>
        <p className="font-sans text-[10px] text-white/40 mt-8">
          RERA-registered broker partnerships welcome — contact our
          partnerships team.
        </p>
      </div>
    </section>
  );
}
