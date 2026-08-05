"use client";

import { ArrowRight, Award, Lock, QrCode, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EventRegistrationCTA() {
  const [showQR, setShowQR] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="event-registration" className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#2a121e] to-maroon p-8 shadow-2xl border border-gold/30 sm:p-12">
          {/* Subtle SVG Background Pattern */}
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-screen"
            style={{ backgroundImage: "url('/bg.svg')" }}
            aria-hidden="true"
          />

          {/* Decorative radial lighting */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-maroon/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Content Left */}
            <div className="lg:col-span-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold shadow-sm backdrop-blur-md sm:text-sm">
                <Lock size={14} className="text-gold" />
                <span>10-Day Cyber Security Bootcamp</span>
              </div>

              {/* Title */}
              <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Cyber Security Fundamentals Bootcamp <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-gold via-amber-200 to-white bg-clip-text text-transparent">
                  – Launch Your Cyber Career
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-base text-white/85 sm:text-lg leading-relaxed max-w-2xl">
                Kickstart your cybersecurity journey with Lords Skill Academy (LSA). This 10-day
                bootcamp offers hands-on training in cybersecurity fundamentals, ethical hacking
                basics, network security, and digital safety.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Registration Fee</p>
                    <p className="font-semibold text-white">₹99 Only</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Certificate</p>
                    <p className="font-semibold text-white">Provided</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Availability</p>
                    <p className="font-semibold text-white">Limited Seats</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-navy shadow-lg shadow-gold/25 transition-all hover:bg-amber-400 hover:shadow-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span>Register Now — ₹99</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => setShowQR(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <QrCode size={18} />
                  <span>Scan QR Code</span>
                </button>
              </div>
            </div>

            {/* QR Card Right */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="group relative w-full max-w-xs overflow-hidden rounded-2xl border border-gold/30 bg-white/10 p-6 text-center shadow-xl backdrop-blur-md transition-all hover:border-gold/60">
                <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-xl bg-white p-3 shadow-inner">
                  <Image
                    src="/images/welcome-modal/reg_qr.jpeg"
                    alt="Scan QR to Register for Cybersecurity Bootcamp"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                    <QrCode size={14} /> Scan to Register
                  </span>
                  <p className="mt-1 text-xs text-white/80">
                    Instant registration via UPI / Form
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Lightbox Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm"
          onClick={() => setShowQR(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-navy/10 pb-3">
              <h3 className="font-serif font-bold text-navy text-lg">
                Bootcamp Registration QR
              </h3>
              <button
                type="button"
                onClick={() => setShowQR(false)}
                className="rounded-full p-1 text-navy/60 hover:bg-navy/5"
              >
                ✕
              </button>
            </div>
            <div className="relative mx-auto mt-4 aspect-square w-64 overflow-hidden rounded-xl border border-navy/10 p-2">
              <Image
                src="/images/welcome-modal/reg_qr.jpeg"
                alt="Registration QR Code"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-xs font-semibold text-navy/70">
              Scan this QR code with any UPI or Camera app to register now for ₹99.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
