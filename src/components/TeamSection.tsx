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
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-text">
          <Users size={12} aria-hidden="true" />
          Our People
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          The people behind Cyber Battalion&rsquo;s workshops, sessions, and
          community initiatives.
        </p>
      </div>

      <div className="relative mt-14">
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-[max(1.5rem,calc((100%-64rem)/2))] [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((m) => (
            <li
              key={m.id}
              className="w-56 shrink-0 snap-center overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm sm:w-64"
            >
              <TeamPhoto src={m.photo || undefined} name={m.name} />
              <div className="p-4 text-left sm:p-5">
                <p className="font-semibold text-navy">{m.name}</p>
                <p className="mt-0.5 text-sm text-muted">
                  Cyber Battalion Team
                </p>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => goTo(Math.max(0, active - 1))}
          aria-label="Previous team member"
          className="absolute left-1 top-[38%] hidden -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon sm:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(Math.min(teamMembers.length - 1, active + 1))}
          aria-label="Next team member"
          className="absolute right-1 top-[38%] hidden -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon sm:flex"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {teamMembers.map((m, i) => (
          <button
            key={m.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${m.name}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
              i === active ? "w-6 bg-maroon" : "w-2 bg-navy/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
