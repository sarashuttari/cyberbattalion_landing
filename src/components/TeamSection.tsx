"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { teamMembers } from "@/data/team";
import TeamAvatar from "./TeamAvatar";

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
    <section id="team" className="bg-navy px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Our People
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Team Members
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>

      <div className="relative mt-14">
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-[max(1.5rem,calc((100%-64rem)/2))] [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((m) => (
            <li
              key={m.id}
              className="flex w-52 shrink-0 snap-center flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:w-56"
            >
              <TeamAvatar src={m.photo} name={m.name} />
              <div>
                <p className="font-serif text-lg font-semibold">{m.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">
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
          className="absolute left-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(Math.min(teamMembers.length - 1, active + 1))}
          aria-label="Next team member"
          className="absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:flex"
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
            className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              i === active ? "w-6 bg-gold" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
