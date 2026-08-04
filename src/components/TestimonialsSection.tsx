"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import TestimonialAvatar from "./TestimonialAvatar";

export default function TestimonialsSection() {
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
    <section id="testimonials" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
            Expert Reviews
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
            Testimonials
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
            {testimonials.map((t) => (
              <li
                key={t.id}
                className="flex w-80 shrink-0 snap-center flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:w-96"
              >
                <Quote
                  size={22}
                  className="text-gold"
                  aria-hidden="true"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <p className="flex-1 text-sm italic leading-relaxed text-navy/70">
                  {t.quote || "Testimonial coming soon."}
                </p>
                <div className="flex items-center gap-3 border-t border-navy/10 pt-4">
                  <TestimonialAvatar src={t.photo} name={t.name} />
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted">
                      {t.designation || "Designation pending"}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => goTo(Math.max(0, active - 1))}
            aria-label="Previous testimonial"
            className="absolute left-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goTo(Math.min(testimonials.length - 1, active + 1))}
            aria-label="Next testimonial"
            className="absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${t.name}'s testimonial`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                i === active ? "w-6 bg-maroon" : "w-2 bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
