export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#241D18] py-20 px-6 md:px-12 lg:px-20 h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
        {/* Left: intro + sales info */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#B08D57] mb-4">
            — Register Interest
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug mb-5">
            Begin a conversation with our team
          </h2>
          <p className="text-sm leading-relaxed text-white/50 max-w-sm mb-10">
            Our sales team is available in person at the PLT Tower Sales
            Gallery, Business Bay, seven days a week — or reach us by phone
            and WhatsApp.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                Sales Gallery
              </p>
              <p className="text-sm text-white/80">
                Business Bay, Dubai · Open daily 10am–8pm
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                Phone
              </p>
              <p className="text-sm text-white/80">+971 4 XXX XXXX</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                WhatsApp
              </p>
              <p className="text-sm text-white/80">+971 50 XXX XXXX</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">
                Email
              </p>
              <p className="text-sm text-white/80">enquiries@pltproperties.com</p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 content-start">
          <Field label="Full Name" placeholder="Your name" />
          <Field label="Mobile" placeholder="+971 XX XXX XXXX" />
          <Field
            label="Email Address"
            placeholder="you@email.com"
            className="sm:col-span-2"
          />
          <Select
            label="Development of Interest"
            placeholder="Select development"
            className="sm:col-span-2"
          />
          <Select
            label="I am interested in"
            placeholder="Select interest"
            className="sm:col-span-2"
          />

          <button
            type="submit"
            className="sm:col-span-2 mt-4 justify-self-start border border-white/70 text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-[#241D18] transition-colors"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B08D57] transition-colors"
      />
    </label>
  );
}

function Select({ label, placeholder, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">
        {label}
      </span>
      <select
        defaultValue=""
        className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white/50 focus:outline-none focus:border-[#B08D57] transition-colors appearance-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
      </select>
    </label>
  );
}
