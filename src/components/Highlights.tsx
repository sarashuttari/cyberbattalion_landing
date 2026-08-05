"use client";

import { Award, BookOpen, BrainCircuit, ChevronDown, Handshake, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WorkshopsPanel from "./WorkshopsPanel";

const baseCardClass =
  "group relative flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 sm:p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-maroon/5";

export default function Highlights() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const panelWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    requestAnimationFrame(() => {
      panelWrapperRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [open]);

  return (
    <section id="highlights" className="relative px-6 py-20 sm:py-28 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
            Highlights
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-maroon sm:text-4xl">
            At a Glance
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        {/* Balanced 3x2 Grid on Desktop (6 cards total) */}
        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Workshops & Sessions */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="workshops-panel"
            onClick={() => setOpen((v) => !v)}
            className={`${baseCardClass} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon`}
          >
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-maroon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-between w-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon text-white shadow-md shadow-maroon/20 group-hover:scale-105 transition-transform">
                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </span>
              <span className="rounded-full bg-maroon/10 px-3 py-1 text-xs font-bold text-maroon">
                40+ Events
              </span>
            </div>

            <div className="mt-5">
              <p className="font-serif text-xl font-bold text-navy group-hover:text-maroon transition-colors">
                40+ Workshops &amp; Sessions
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Delivered across premier engineering colleges and institutions in Hyderabad &amp; Telangana.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-maroon">
              <span>{open ? "Hide workshops" : "View all workshops"}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </div>
          </button>

          {/* Card 2: Internship & Placements */}
          <div className={baseCardClass}>
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-between w-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-text group-hover:scale-105 transition-transform">
                <Handshake size={22} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-text">
                Career Track
              </span>
            </div>

            <div className="mt-5">
              <p className="font-serif text-xl font-bold text-navy group-hover:text-maroon transition-colors">
                Internship &amp; Placements
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Guidance and placement assistance bridging students into high-demand cybersecurity industry roles.
              </p>
            </div>

            <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-text">
              Industry Ready
            </div>
          </div>

          {/* Card 3: Projects */}
          <div className={baseCardClass}>
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-maroon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <button
              type="button"
              aria-expanded={projectsOpen}
              aria-controls="projects-detail"
              onClick={() => setProjectsOpen((v) => !v)}
              className="flex w-full flex-col items-start text-left focus-visible:outline-none"
            >
              <div className="flex items-center justify-between w-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon text-white shadow-md shadow-maroon/20 group-hover:scale-105 transition-transform">
                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`}
                  />
                </span>
                <span className="rounded-full bg-maroon/10 px-3 py-1 text-xs font-bold text-maroon">
                  Hands-On
                </span>
              </div>

              <div className="mt-5">
                <p className="font-serif text-xl font-bold text-navy group-hover:text-maroon transition-colors">
                  Projects
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Hands-on student &amp; industry projects in Cybersecurity, AI and IT domains.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-maroon">
                <span>{projectsOpen ? "Hide project details" : "View project details"}</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`} />
              </div>
            </button>

            <div
              className={`grid w-full transition-[grid-template-rows] duration-300 ease-in-out ${
                projectsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div id="projects-detail" inert={!projectsOpen} className="overflow-hidden">
                <p className="pt-3 text-sm leading-relaxed text-navy/80 border-t border-navy/10 mt-3">
                  From capstone research to industry-sponsored initiatives — practical cybersecurity, AI, and IT projects with pathways into the upcoming Centre of Excellence.
                </p>
                <a
                  href="https://forms.gle/8j9k9VQKTuxggxr7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-maroon-dark"
                >
                  Register Interest
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: FDPs */}
          <div className={baseCardClass}>
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-between w-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-text group-hover:scale-105 transition-transform">
                <BookOpen size={22} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-text">
                Faculty Focus
              </span>
            </div>

            <div className="mt-5">
              <p className="font-serif text-xl font-bold text-navy group-hover:text-maroon transition-colors">
                FDPs &amp; Workshops
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Faculty Development Programs designed to upskill educators with modern security tools.
              </p>
            </div>

            <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-text">
              Academic Excellence
            </div>
          </div>

          {/* Card 5: Intellectual Connects */}
          <div className={baseCardClass}>
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-maroon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-between w-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon/10 text-maroon group-hover:scale-105 transition-transform">
                <BrainCircuit size={22} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-maroon/10 px-3 py-1 text-xs font-bold text-maroon">
                Leadership
              </span>
            </div>

            <div className="mt-5">
              <p className="font-serif text-xl font-bold text-navy group-hover:text-maroon transition-colors">
                Intellectual Connects
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Building meaningful connections across academia, industry, and technology thought leaders.
              </p>
            </div>

            <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-maroon">
              Thought Leadership
            </div>
          </div>

          {/* Card 6: Certifications & CoE */}
          <div className={baseCardClass}>
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-between w-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-text group-hover:scale-105 transition-transform">
                <ShieldCheck size={22} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-text">
                Certifications
              </span>
            </div>

            <div className="mt-5">
              <p className="font-serif text-xl font-bold text-navy group-hover:text-maroon transition-colors">
                Centre of Excellence
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Industry-recognized certifications and specialized training in Cybersecurity, AI, and Data Science.
              </p>
            </div>

            <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-text">
              Industry Standard
            </div>
          </div>
        </div>

        {/* Expanded Workshops Panel Drawer */}
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
