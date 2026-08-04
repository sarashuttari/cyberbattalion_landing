"use client";

import { BookOpen, BrainCircuit, ChevronDown, Handshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WorkshopsPanel from "./WorkshopsPanel";

const cardClass =
  "flex flex-col items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6 text-left shadow-sm";

export default function Highlights() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
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

        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className={cardClass}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/10 text-maroon">
              <Handshake size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold text-navy">
                Internship &amp; Placements
              </p>
              <p className="mt-1 text-sm text-muted">
                Guidance and placement assistance bridging students into
                industry roles
              </p>
            </div>
          </div>

          <div className={cardClass}>
            <button
              type="button"
              aria-expanded={projectsOpen}
              aria-controls="projects-detail"
              onClick={() => setProjectsOpen((v) => !v)}
              className="flex w-full flex-col items-start gap-4 text-left focus-visible:outline-none"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-white">
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`}
                />
              </span>
              <div>
                <p className="font-serif text-xl font-semibold text-navy">
                  Projects
                </p>
                <p className="mt-1 text-sm text-muted">
                  Hands-on student &amp; industry projects in Cybersecurity,
                  AI and IT
                </p>
              </div>
              <span className="text-sm font-semibold text-maroon">
                {projectsOpen ? "Hide project details" : "View project details"}
              </span>
            </button>

            <div
              className={`grid w-full transition-[grid-template-rows] duration-300 ease-in-out ${
                projectsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div id="projects-detail" inert={!projectsOpen} className="overflow-hidden">
                <p className="pt-1 text-sm leading-relaxed text-navy/80">
                  From student capstone work to industry-sponsored
                  initiatives — real cybersecurity, AI, and IT projects, with
                  pathways into the upcoming Centre of Excellence.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-maroon-dark"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/10 text-maroon">
              <BookOpen size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold text-navy">
                FDPs
              </p>
              <p className="mt-1 text-sm text-muted">
                Faculty Development Programs
              </p>
            </div>
          </div>

          {/* Content is a placeholder pending the client's definition of this
              feature — confirm exact wording with her before treating it as final. */}
          <div className={cardClass}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon/10 text-maroon">
              <BrainCircuit size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold text-navy">
                Intellectual Connects
              </p>
              <p className="mt-1 text-sm text-muted">
                Building meaningful connections across academia, industry,
                and technology thought leaders
              </p>
            </div>
          </div>
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
