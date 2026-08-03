import Image from "next/image";
import { Mail, Phone } from "lucide-react";

// lucide-react intentionally excludes brand/logo marks, so LinkedIn is inlined.
function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

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
            href="mailto:info@cyberbattalio.in"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-maroon"
          >
            <Mail size={14} aria-hidden="true" />
            info@cyberbattalio.in
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
