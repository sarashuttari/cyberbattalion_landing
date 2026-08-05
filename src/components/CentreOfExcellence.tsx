import { ShieldCheck, Users } from "lucide-react";

export default function CentreOfExcellence() {
  return (
    <section
      id="centre-of-excellence"
      className="relative w-full overflow-hidden bg-navy px-6 py-20 text-white sm:py-28"
    >
      {/* Background SVG pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-screen"
        style={{ backgroundImage: "url('/bg.svg')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-10">
        <div className="border-t border-gold/30 pt-8 md:border-t-0 md:pt-0">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
            <ShieldCheck size={20} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Centre of Excellence in Cybersecurity
          </h2>
          <p className="mt-4 max-w-md text-white/75 leading-relaxed">
            Dr. Shuttari is working towards establishing a Centre of
            Excellence in Cybersecurity to provide industry-recognised
            certifications, hands-on internships, and placement assistance in
            Cybersecurity, AI, and Data Science.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="hidden w-px bg-gold/30 md:block"
        />

        <div className="border-t border-gold/30 pt-8 md:border-t-0 md:pt-0">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Users size={20} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            With Support of Placement Cell
          </h2>
          <p className="mt-4 font-serif text-xl italic text-gold">
            Bridging Skills. Building Careers.
          </p>
        </div>
      </div>
    </section>
  );
}
