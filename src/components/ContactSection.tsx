import { Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import LinkedinIcon from "./LinkedinIcon";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
            Get in Touch
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
            Contact &amp; Queries
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Workshop requests, collaboration ideas, or general questions —
            reach out and we&rsquo;ll get back to you.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <a
              href="mailto:info@cyberbattalio.in"
              className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy/80 shadow-sm transition-colors hover:border-maroon/30 hover:text-maroon"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                <Mail size={16} aria-hidden="true" />
              </span>
              info@cyberbattalio.in
            </a>
            <a
              href="tel:+918919850920"
              className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy/80 shadow-sm transition-colors hover:border-maroon/30 hover:text-maroon"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                <Phone size={16} aria-hidden="true" />
              </span>
              +91 89198 50920
            </a>
            <a
              href="https://www.linkedin.com/in/dr-sara-shuttari-s-cyberbattalion-8a413620/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy/80 shadow-sm transition-colors hover:border-maroon/30 hover:text-maroon"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                <LinkedinIcon size={16} />
              </span>
              Connect on LinkedIn
            </a>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
