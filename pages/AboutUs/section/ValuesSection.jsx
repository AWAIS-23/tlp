"use client";

export default function ValuesSection() {
  const values = [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices in all our dealings."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every aspect of our work, from design to delivery."
    },
    {
      title: "Innovation",
      description: "We continuously push boundaries and embrace new ideas to create exceptional spaces."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible development and sustainable practices."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve greatness."
    },
    {
      title: "Passion",
      description: "Our love for what we do drives us to create remarkable living experiences."
    }
  ];

  return (
    <section 
      className="w-full bg-[#0b0b0c] h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#B08D57] mb-4">
            — Our Values
          </p>
          <h2 className="font-serif text-4xl text-white leading-tight">
            The Principles That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-[#1a1a1a] p-6 rounded-lg border border-white/10 hover:border-[#B08D57] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#B08D57]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#B08D57] transition-colors">
                  <span className="text-[#B08D57] group-hover:text-white font-serif text-lg">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-2">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
