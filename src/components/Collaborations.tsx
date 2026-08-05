"use client";

import { ExternalLink, Handshake } from "lucide-react";
import { collaborations } from "@/data/collaborations";
import ImageWithFallback from "./ImageWithFallback";

export default function Collaborations() {
  return (
    <section
      id="collaborations"
      className="relative w-full overflow-hidden border-y border-gold/20 bg-gradient-to-b from-[#faf6f2] via-white to-[#fbf8f4] px-6 py-24 sm:py-32"
    >
      {/* Background SVG pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04] mix-blend-multiply"
        style={{ backgroundImage: "url('/bg.svg')" }}
        aria-hidden="true"
      />

      {/* Decorative ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gold-text border border-gold/30">
          <Handshake size={14} aria-hidden="true" />
          Trusted Partners
        </span>

        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-5xl">
          Collaborations
        </h2>

        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-0.5 w-28 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
          Institutions, industry leaders, and academic partners empowering our cybersecurity and
          training initiatives.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-7xl">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {collaborations.map((c) => {
            const cardContent = (
              <div className="group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-navy/10 bg-white/90 p-4 sm:p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-white hover:shadow-xl hover:shadow-maroon/5 text-center">
                {/* Hover top highlight border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* External link indicator */}
                {c.url && (
                  <div className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-navy/5 text-navy/40 transition-colors group-hover:bg-gold/15 group-hover:text-gold-text">
                    <ExternalLink size={12} />
                  </div>
                )}

                {/* Logo display container */}
                <div className="relative flex h-20 w-full items-center justify-center p-1.5 sm:h-24">
                  <div className="relative h-full w-full">
                    <ImageWithFallback
                      src={c.logo}
                      alt={`${c.name} logo`}
                      fallbackSrc="/images/collaborations/_placeholder.svg"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Title and Badge */}
                <div className="mt-3 border-t border-navy/5 pt-3">
                  <p className="font-serif text-sm font-bold text-navy transition-colors group-hover:text-maroon line-clamp-2">
                    {c.name}
                  </p>
                  <span className="mt-1.5 block rounded-full bg-maroon/5 px-2 py-0.5 text-[10px] font-semibold text-maroon/80 border border-maroon/10 truncate">
                    {c.category}
                  </span>
                </div>
              </div>
            );

            return (
              <li key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.name} — ${c.category} (opens in a new tab)`}
                    className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 rounded-2xl"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="h-full">{cardContent}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
