"use client";

import { ArrowUp, Building2, Calendar, ChevronRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import LinkedinIcon from "./LinkedinIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1b2a4a] via-navy to-[#111c34] text-white">
      {/* Top Gradient Highlight Line */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-gold/40 via-gold to-gold/40"
      />

      {/* Subtle Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{ backgroundImage: "url('/bg.svg')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Column 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md">
                <Image
                  src="/logo.png"
                  alt="Cyber Battalion crest logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">Cyber Battalion</p>
                <p className="text-xs font-medium text-gold">Dr. Sara Shuttari</p>
              </div>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">
              Knowledge <span className="text-white">·</span> Awareness{" "}
              <span className="text-white">·</span> Protection
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Empowering students, faculty, and institutions with cutting-edge cybersecurity education, AI safety workshops, and career placement assistance across Telangana &amp; beyond.
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-serif text-base font-bold text-gold uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#highlights" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                  <ChevronRight size={14} className="text-gold" />
                  <span>Highlights &amp; Sessions</span>
                </a>
              </li>
              <li>
                <a href="#event-registration" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                  <ChevronRight size={14} className="text-gold" />
                  <span>Upcoming Bootcamp ₹99</span>
                </a>
              </li>
              <li>
                <a href="#collaborations" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                  <ChevronRight size={14} className="text-gold" />
                  <span>Trusted Partners</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                  <ChevronRight size={14} className="text-gold" />
                  <span>Event Gallery</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                  <ChevronRight size={14} className="text-gold" />
                  <span>Expert Reviews</span>
                </a>
              </li>
              <li>
                <a href="#team" className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
                  <ChevronRight size={14} className="text-gold" />
                  <span>Our Team</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Initiatives & Programs (2 cols) */}
          <div className="lg:col-span-2">
            <p className="font-serif text-base font-bold text-gold uppercase tracking-wider">
              Initiatives
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-gold shrink-0" />
                <span>Centre of Excellence</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar size={14} className="text-gold shrink-0" />
                <span>College Workshops</span>
              </li>
              <li className="flex items-center gap-2">
                <Building2 size={14} className="text-gold shrink-0" />
                <span>Placement Support</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <p className="font-serif text-base font-bold text-gold uppercase tracking-wider">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="mailto:info@cyberbattalion.in"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-gold">
                    <Mail size={15} />
                  </span>
                  <span>info@cyberbattalion.in</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918919850920"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-gold">
                    <Phone size={15} />
                  </span>
                  <span>+91 89198 50920</span>
                </a>
              </li>
              <li>
                <div className="inline-flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-gold">
                    <MapPin size={15} />
                  </span>
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </li>
            </ul>

            <div className="mt-5">
              <a
                href="https://www.linkedin.com/in/dr-sara-shuttari-s-cyberbattalion-8a413620/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
              >
                <LinkedinIcon size={14} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-white/60">
          <p>© 2026 Dr. Sara Shuttari — Cyber Battalion. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy focus-visible:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
