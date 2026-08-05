"use client";

import { Building2, CalendarCheck, GraduationCap, MapPin, Sparkles, Users } from "lucide-react";
import { seminarInstitutions } from "@/data/seminarInstitutions";

export default function SeminarsSection() {
  // Duplicate array to create a seamless infinite marquee effect
  const row1 = [...seminarInstitutions, ...seminarInstitutions];
  const row2 = [...seminarInstitutions.slice().reverse(), ...seminarInstitutions.slice().reverse()];

  const stats = [
    { label: "Partner Institutions", value: "40+", icon: Building2 },
    { label: "Students & Faculty Impacted", value: "5,000+", icon: Users },
    { label: "Seminars & Workshops", value: "100+", icon: CalendarCheck },
    { label: "Regional Reach", value: "Hyderabad & TS", icon: MapPin },
  ];

  return (
    <section
      id="seminars"
      className="relative w-full overflow-hidden border-y border-gold/20 bg-gradient-to-b from-[#fdfbf7] via-white to-[#f9f5ef] px-6 py-20 sm:py-28"
    >
      {/* Background SVG texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] mix-blend-multiply"
        style={{ backgroundImage: "url('/bg.svg')" }}
        aria-hidden="true"
      />

      {/* Decorative ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gold-text border border-gold/30">
            <GraduationCap size={14} aria-hidden="true" />
            Academic Outreach
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl lg:text-5xl">
            Institutions We&rsquo;ve Worked With
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-0.5 w-28 bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Empowering students and faculty across leading colleges, universities, and technical institutes.
          </p>
        </div>

        {/* Key Impact Stats Bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-navy/10 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-text group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </span>
                <p className="mt-3 font-serif text-2xl font-bold text-navy sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-muted">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Animated Continuous Marquee Ticker */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-navy/10 bg-white/70 p-6 shadow-inner backdrop-blur-md">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          {/* Marquee Row 1 */}
          <div className="flex gap-3 overflow-hidden py-2">
            <div className="flex shrink-0 items-center gap-3 motion-safe:animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
              {row1.map((name, i) => (
                <div
                  key={`r1-${name}-${i}`}
                  className="flex items-center gap-2.5 rounded-full border border-navy/10 bg-white px-5 py-2 text-sm font-semibold text-navy shadow-xs transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-maroon hover:shadow-sm"
                >
                  <GraduationCap size={15} className="text-maroon shrink-0" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="flex shrink-0 items-center gap-3 motion-safe:animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
              {row1.map((name, i) => (
                <div
                  key={`r1-dup-${name}-${i}`}
                  className="flex items-center gap-2.5 rounded-full border border-navy/10 bg-white px-5 py-2 text-sm font-semibold text-navy shadow-xs transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-maroon hover:shadow-sm"
                >
                  <GraduationCap size={15} className="text-maroon shrink-0" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Reverse direction) */}
          <div className="mt-3 flex gap-3 overflow-hidden py-2">
            <div className="flex shrink-0 items-center gap-3 motion-safe:animate-[marquee-reverse_32s_linear_infinite] hover:[animation-play-state:paused]">
              {row2.map((name, i) => (
                <div
                  key={`r2-${name}-${i}`}
                  className="flex items-center gap-2.5 rounded-full border border-navy/10 bg-white px-5 py-2 text-sm font-semibold text-navy shadow-xs transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-maroon hover:shadow-sm"
                >
                  <Building2 size={15} className="text-gold-text shrink-0" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="flex shrink-0 items-center gap-3 motion-safe:animate-[marquee-reverse_32s_linear_infinite] hover:[animation-play-state:paused]">
              {row2.map((name, i) => (
                <div
                  key={`r2-dup-${name}-${i}`}
                  className="flex items-center gap-2.5 rounded-full border border-navy/10 bg-white px-5 py-2 text-sm font-semibold text-navy shadow-xs transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-maroon hover:shadow-sm"
                >
                  <Building2 size={15} className="text-gold-text shrink-0" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Action banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-gradient-to-r from-maroon to-navy p-6 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
              <Sparkles size={20} />
            </span>
            <div>
              <p className="font-serif text-lg font-bold">Want to host a seminar or workshop at your college?</p>
              <p className="text-xs text-white/80">Connect with Dr. Sara Shuttari to schedule a hands-on cybersecurity session.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-bold text-navy shadow-md hover:bg-amber-400 transition-colors"
          >
            <span>Request a Session</span>
          </a>
        </div>
      </div>
    </section>
  );
}
