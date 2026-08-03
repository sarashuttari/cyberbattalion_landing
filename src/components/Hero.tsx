import Image from "next/image";

const stats = [
  { value: "23+", label: "Years Experience" },
  { value: "40+", label: "Workshops & Sessions" },
  { value: "5+", label: "Industry Collaborations" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/bg.svg"
          alt=""
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-maroon/10 blur-3xl" />
        <div className="absolute right-[10%] top-1/3 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute left-[8%] bottom-0 h-64 w-64 rounded-full bg-navy/5 blur-3xl" />
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Cyber Battalion crest — Dr. Sara Shuttari"
          width={168}
          height={178}
          priority
          className="h-36 w-auto sm:h-44"
        />

        <h1 className="mt-8 font-serif text-4xl font-semibold tracking-tight text-maroon sm:text-6xl">
          Dr. Sara Shuttari
        </h1>

        <p className="mt-4 max-w-xl text-lg text-navy/80 sm:text-xl">
          Cybersecurity &amp; Information Technology Professional
        </p>

        <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Knowledge <span className="text-gold">·</span> Awareness{" "}
          <span className="text-gold">·</span> Protection
        </p>

        <div
          aria-hidden="true"
          className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#highlights"
            className="rounded-full bg-maroon px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-maroon-dark"
          >
            View Highlights
          </a>
          <a
            href="#contact"
            className="rounded-full border border-navy/20 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:border-maroon hover:text-maroon"
          >
            Contact
          </a>
        </div>

        <div className="mt-14 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-gold/30 pt-8 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-2xl font-semibold text-maroon sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted sm:text-xs sm:tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
