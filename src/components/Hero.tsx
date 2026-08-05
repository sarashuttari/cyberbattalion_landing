"use client";

import { ArrowRight, Mail, ShieldCheck, Sparkles } from "lucide-react";
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
      className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/bg.svg"
          alt=""
          fill
          priority
          className="object-cover opacity-60 mix-blend-multiply"
        />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-maroon/10 blur-3xl" />
        <div className="absolute right-[5%] top-1/4 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute left-[5%] bottom-10 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (Content & Stats below buttons) */}
          <div className="flex flex-col justify-between text-center lg:col-span-7 lg:text-left">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-text shadow-sm backdrop-blur-md">
                <ShieldCheck size={15} className="text-gold" />
                <span>Cybersecurity &amp; IT Professional</span>
              </div>

              {/* Title */}
              <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-maroon sm:text-6xl lg:text-7xl leading-tight">
                Dr. Sara Shuttari
              </h1>

              {/* Motto */}
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-muted sm:text-sm">
                Knowledge <span className="text-gold font-bold">·</span> Awareness{" "}
                <span className="text-gold font-bold">·</span> Protection
              </p>

              {/* Subtitle */}
              <p className="mt-4 max-w-2xl text-base text-navy/80 sm:text-lg leading-relaxed mx-auto lg:mx-0">
                Teacher, Mentor, and Industry Pioneer leading cybersecurity education, institutional workshops, and skill development programs across Hyderabad &amp; Telangana.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#highlights"
                  className="inline-flex items-center gap-2.5 rounded-full bg-maroon px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-maroon/20 transition-all hover:bg-maroon-dark hover:shadow-maroon/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                >
                  <span>View Highlights</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white/80 px-7 py-3.5 text-sm font-semibold text-navy shadow-sm backdrop-blur-sm transition-all hover:border-maroon hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </a>

                <a
                  href="#event-registration"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-4 py-2 text-xs font-bold text-gold-text transition-colors hover:bg-gold/25"
                >
                  <Sparkles size={14} className="text-gold" />
                  <span>Upcoming Bootcamp ₹99</span>
                </a>
              </div>
            </div>

            {/* Stats Row directly below Left Section */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-gold/30 pt-8 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-serif text-2xl font-bold text-maroon sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Full-Height Image Card (Matching Left Height) */}
          <div className="flex h-full items-stretch lg:col-span-5">
            <div className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-b from-white via-[#fcfaf7] to-[#f7f2ea] p-8 text-center shadow-2xl backdrop-blur-md min-h-[380px] sm:min-h-[460px]">
              {/* Decorative background ambient glow */}
              <div aria-hidden="true" className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold/30 via-maroon/15 to-navy/20 blur-xl opacity-60" />

              {/* Sketched Emblem Crest Logo */}
              <div className="relative z-10 flex flex-1 w-full items-center justify-center p-2">
                <div className="relative h-64 sm:h-80 w-full max-w-[300px]">
                  <Image
                    src="/logo.png"
                    alt="Cyber Battalion sketched logo crest — Dr. Sara Shuttari"
                    fill
                    priority
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Sub-label */}
              <div className="relative z-10 w-full border-t border-gold/30 pt-4">
                <p className="font-serif text-xl font-bold text-navy">Cyber Battalion</p>
                <p className="mt-0.5 text-xs font-semibold text-maroon">Teacher · Mentor · Inspires</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
