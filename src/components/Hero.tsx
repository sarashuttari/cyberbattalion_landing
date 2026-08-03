import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col items-center px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32"
    >
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
          href="#about"
          className="rounded-full border border-navy/20 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:border-maroon hover:text-maroon"
        >
          About
        </a>
      </div>
    </section>
  );
}
