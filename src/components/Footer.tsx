import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <Image
          src="/logo.png"
          alt="Cyber Battalion crest"
          width={40}
          height={42}
          className="h-9 w-auto opacity-90"
        />
        <p className="font-serif text-base font-semibold text-maroon">
          Cyber Battalion
        </p>
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold-text">
          Knowledge · Awareness · Protection
        </p>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
          <a
            href="mailto:info@cyberbattalion.in"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-maroon"
          >
            <Mail size={14} aria-hidden="true" />
            info@cyberbattalion.in
          </a>
          <a
            href="tel:+918919850920"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-maroon"
          >
            <Phone size={14} aria-hidden="true" />
            +91 89198 50920
          </a>
          <a
            href="https://www.linkedin.com/in/dr-sara-shuttari-s-cyberbattalion-8a413620/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-maroon"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-muted">
          © 2026 Dr. Sara Shuttari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
