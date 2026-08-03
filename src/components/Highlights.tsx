"use client";

import {
  BookOpen,
  ChevronDown,
  Globe2,
  Newspaper,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WorkshopsPanel from "./WorkshopsPanel";

type Card = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

const staticCards: Card[] = [
  {
    icon: BookOpen,
    title: "FDPs",
    subtitle: "Faculty Development Programs",
  },
  {
    icon: Globe2,
    title: "Research",
    subtitle: "Presented at National & International Conferences",
  },
  {
    icon: Newspaper,
    title: "100+ Urdu Articles",
    subtitle: "On Information Technology in Siasat Daily",
  },
  {
    icon: Target,
    title: "Expertise",
    subtitle: "Cybersecurity, AI, IT & Industry–Academia Collaboration",
  },
];

const cardClass =
  "flex flex-col items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6 text-left shadow-sm";

export default function Highlights() {
  const [open, setOpen] = useState(false);
  const panelWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Wait a frame so the expand transition has started before scrolling.
    requestAnimationFrame(() => {
      panelWrapperRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [open]);

  return (
    <section id="highlights" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
          Highlights
        </p>
        <h2 className="mt-2 text-center font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
          At a Glance
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="workshops-panel"
            onClick={() => setOpen((v) => !v)}
            className={`${cardClass} transition-colors hover:border-maroon/30 hover:bg-maroon/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-white">
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold text-navy">
                40+ Workshops &amp; Sessions
              </p>
              <p className="mt-1 text-sm text-muted">
                Delivered across colleges in Hyderabad &amp; Telangana
              </p>
            </div>
            <span className="text-sm font-semibold text-maroon">
              {open ? "Hide workshops" : "View all workshops"}
            </span>
          </button>

          {staticCards.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className={cardClass}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-xl font-semibold text-navy">
                  {title}
                </p>
                <p className="mt-1 text-sm text-muted">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={panelWrapperRef}
          className={`grid scroll-mt-24 transition-[grid-template-rows] duration-300 ease-in-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div
            id="workshops-panel"
            inert={!open}
            className={`overflow-hidden transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="pt-8">
              <WorkshopsPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
