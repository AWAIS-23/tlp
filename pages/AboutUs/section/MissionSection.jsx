"use client";

export default function MissionSection() {
  return (
    <section
      className="w-full bg-[#241D18] h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#B08D57] mb-4">
            — Our Mission
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
            Creating Spaces That Inspire
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Our mission is to develop exceptional properties that exceed expectations 
            and set new standards in luxury living across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card 1 */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-white/10 hover:border-[#B08D57]/50 transition-colors">
            <div className="w-12 h-12 bg-[#B08D57]/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-white mb-3">Quality First</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We never compromise on quality. Every material, every finish, 
              every detail is carefully selected to ensure excellence.
            </p>
          </div>

          {/* Mission Card 2 */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-white/10 hover:border-[#B08D57]/50 transition-colors">
            <div className="w-12 h-12 bg-[#B08D57]/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-white mb-3">Innovation</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We embrace cutting-edge technology and innovative design to create 
              living spaces that are ahead of their time.
            </p>
          </div>

          {/* Mission Card 3 */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-white/10 hover:border-[#B08D57]/50 transition-colors">
            <div className="w-12 h-12 bg-[#B08D57]/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-white mb-3">Customer Focus</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Our customers are at the heart of everything we do. We listen, 
              understand, and deliver beyond expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
