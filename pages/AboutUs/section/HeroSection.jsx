"use client";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-[#241D18] h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#B08D57] mb-6">
          — About Us
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8">
          Building Dubai's<br />Future, Today
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          PLT Properties is redefining luxury living in Dubai with innovative 
          developments that blend European standards with Arabian hospitality.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
