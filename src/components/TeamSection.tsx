"use client";

import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { teamMembers } from "@/data/team";
import TeamPhoto from "./TeamPhoto";

export default function TeamSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          const idx = cards.indexOf(mostVisible.target as HTMLElement);
          if (idx !== -1) setActive(idx);
        }
      },
      { root: track, threshold: [0.6] }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!card) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    card.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <section id="team" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-gold-text">
              <Users size={12} aria-hidden="true" />
              Our People
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              The people behind Cyber Battalion&rsquo;s workshops, sessions, and
              community initiatives.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(Math.max(0, active - 1))}
              aria-label="Previous team member"
              className="rounded-full border border-navy/15 bg-white p-2.5 text-navy shadow-sm transition-colors hover:border-maroon/40 hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(teamMembers.length - 1, active + 1))}
              aria-label="Next team member"
              className="rounded-full border border-navy/15 bg-white p-2.5 text-navy shadow-sm transition-colors hover:border-maroon/40 hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl">
          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {teamMembers.map((m) => (
              <li
                key={m.id}
                className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)] shrink-0 snap-start flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/5] w-full bg-navy/5">
                  <TeamPhoto src={m.photo || undefined} name={m.name} />
                </div>
                <div className="p-4 text-left sm:p-5">
                  <p className="font-semibold text-navy sm:text-lg">{m.name}</p>
                  <p className="mt-0.5 text-xs text-muted sm:text-sm">
                    Cyber Battalion Team
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {teamMembers.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${m.name}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                i === active ? "w-8 bg-maroon" : "w-6 bg-navy/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
