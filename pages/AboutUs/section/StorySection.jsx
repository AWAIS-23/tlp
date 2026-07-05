"use client";

export default function StorySection() {
  return (
    <section
      className="w-full bg-[#0b0b0c] h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="aspect-[4/5] bg-[#1a1a1a] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
              alt="PLT Properties Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#B08D57] rounded-lg" />
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#B08D57] mb-4">
            — Our Story
          </p>
          <h2 className="font-serif text-4xl text-white leading-tight mb-6">
            A Legacy of Excellence
          </h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              Founded with a vision to transform Dubai's real estate landscape, 
              PLT Properties has been at the forefront of luxury development for over a decade.
            </p>
            <p>
              Our journey began with a simple belief: that exceptional living spaces 
              should be accessible to those who appreciate the finer things in life.
            </p>
            <p>
              Today, we stand as a testament to unwavering commitment to quality, 
              innovation, and customer satisfaction. Every project we undertake 
              is a reflection of our dedication to creating spaces that inspire.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-serif text-[#B08D57] mb-2">15+</p>
              <p className="text-white/50 text-sm">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-[#B08D57] mb-2">50+</p>
              <p className="text-white/50 text-sm">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
