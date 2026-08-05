import { ArrowUpRight, Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import LinkedinIcon from "./LinkedinIcon";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-gold/20 bg-gradient-to-b from-[#faf6f2] via-white to-[#fbf8f4] px-6 py-24 sm:py-32"
    >
      {/* Background SVG pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04] mix-blend-multiply"
        style={{ backgroundImage: "url('/bg.svg')" }}
        aria-hidden="true"
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute right-10 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gold-text border border-gold/30">
            <MessageSquare size={14} aria-hidden="true" />
            Get in Touch
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-5xl">
            Contact &amp; Queries
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-0.5 w-28 bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Workshop requests, collaboration ideas, or general questions — reach out and we&rsquo;ll get back to you promptly.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {/* Email Card */}
            <a
              href="mailto:info@cyberbattalion.in"
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-navy/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon/10 text-maroon transition-colors group-hover:bg-maroon group-hover:text-white">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email Us</p>
                  <p className="mt-0.5 font-bold text-navy text-sm sm:text-base group-hover:text-maroon transition-colors">
                    info@cyberbattalion.in
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-navy/40 transition-colors group-hover:text-maroon" />
            </a>

            {/* Phone Card */}
            <a
              href="tel:+918919850920"
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-navy/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-text transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Call / WhatsApp</p>
                  <p className="mt-0.5 font-bold text-navy text-sm sm:text-base group-hover:text-maroon transition-colors">
                    +91 89198 50920
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-navy/40 transition-colors group-hover:text-maroon" />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/dr-sara-shuttari-s-cyberbattalion-8a413620/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-navy/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon/10 text-maroon transition-colors group-hover:bg-maroon group-hover:text-white">
                  <LinkedinIcon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Dr. Sara Shuttari</p>
                  <p className="mt-0.5 font-bold text-navy text-sm sm:text-base group-hover:text-maroon transition-colors">
                    Connect on LinkedIn
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-navy/40 transition-colors group-hover:text-maroon" />
            </a>

            {/* Location & Trust Card */}
            <div className="rounded-2xl border border-navy/10 bg-white/60 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold-text">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold text-navy">Hyderabad, Telangana</p>
                  <p className="text-xs text-muted">India</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-navy/10 pt-3 text-xs text-navy/70">
                <Clock size={14} className="text-maroon" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 sm:p-10 shadow-xl backdrop-blur-md lg:col-span-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-maroon to-gold"
            />
            <div className="mb-6 border-b border-navy/10 pb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                Send Us a Message
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Fill out the form below and we will reach back to discuss your requirements.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
