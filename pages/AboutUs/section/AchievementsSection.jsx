"use client";

export default function AchievementsSection() {
  const achievements = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Over a decade of excellence in real estate development"
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered across the UAE"
    },
    {
      number: "2000+",
      label: "Happy Residents",
      description: "Families who call our properties home"
    },
    {
      number: "25+",
      label: "Industry Awards",
      description: "Recognition for innovation and quality"
    },
    {
      number: "AED 5B+",
      label: "Project Value",
      description: "Total value of developments delivered"
    },
    {
      number: "100%",
      label: "On-Time Delivery",
      description: "Commitment to meeting deadlines"
    }
  ];

  return (
    <section 
      className="w-full bg-[#0b0b0c] h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#B08D57] mb-4">
            — Our Achievements
          </p>
          <h2 className="font-serif text-4xl text-white leading-tight mb-4">
            Numbers That Speak
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our track record of success is a testament to our commitment to excellence 
            and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[#1a1a1a] rounded-lg border border-white/10 hover:border-[#B08D57]/50 transition-colors"
            >
              <p className="text-5xl font-serif text-[#B08D57] mb-2">{achievement.number}</p>
              <h3 className="font-serif text-xl text-white mb-2">{achievement.label}</h3>
              <p className="text-white/50 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
