"use client";

import { Calendar, Camera, MapPin, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { workshops, type Workshop } from "@/data/workshops";
import ImageWithFallback from "./ImageWithFallback";
import Lightbox from "./Lightbox";

const PAGE_SIZE = 5;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

const sortedWorkshops = [...workshops].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0
);

export default function WorkshopsPanel() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<{
    workshop: Workshop;
    index: number;
  } | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sortedWorkshops;
    return sortedWorkshops.filter(
      (w) =>
        w.college.toLowerCase().includes(q) ||
        w.name.toLowerCase().includes(q) ||
        w.topics.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  function handleQueryChange(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-10 shadow-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-navy/10 pb-6">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
            All Workshops &amp; Sessions
          </h3>
          <p className="mt-1 text-sm text-muted">
            Explore 40+ sessions conducted across engineering colleges &amp; universities.
          </p>
        </div>

        <label className="relative w-full sm:w-80">
          <span className="sr-only">Search workshops by college, name, or topic</span>
          <Search
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search college, name, topic..."
            className="w-full rounded-full border border-navy/15 bg-bg py-2.5 pl-10 pr-4 text-sm text-navy placeholder:text-muted focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 py-12 text-center text-sm text-muted">
          No workshops match &ldquo;{query}&rdquo;. Try searching for another college or topic.
        </p>
      ) : (
        <>
          <div className="mt-4 flex items-center justify-between text-xs font-semibold text-muted">
            <span>
              Showing {start + 1}–{Math.min(start + PAGE_SIZE, filtered.length)} of {filtered.length} workshops
            </span>
            <span>Page {currentPage} of {totalPages}</span>
          </div>

          <ul className="mt-6 flex flex-col gap-6">
            {pageItems.map((workshop) => {
              const primaryPhoto = workshop.photos[0] || "/images/workshops/_placeholder.svg";
              const photoCount = workshop.photos.length;

              return (
                <li
                  key={workshop.id}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-lg"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
                    {/* Left Column: Workshop Image & Thumbnails */}
                    <div className="md:col-span-5 lg:col-span-4">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-navy/10 bg-navy/5 shadow-inner">
                        <ImageWithFallback
                          src={primaryPhoto}
                          fallbackSrc="/images/workshops/_placeholder.svg"
                          alt={workshop.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Overlay Gallery Trigger Button */}
                        <button
                          type="button"
                          onClick={() => setLightbox({ workshop, index: 0 })}
                          className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-transparent to-transparent p-3 text-white transition-opacity focus-visible:outline-none"
                          aria-label={`View photos for ${workshop.name}`}
                        >
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
                            <Camera size={13} />
                            <span>{photoCount > 0 ? `${photoCount} Photos` : "View Photo"}</span>
                          </span>
                        </button>
                      </div>

                      {/* Extra Thumbnails preview strip */}
                      {photoCount > 1 && (
                        <div className="mt-2.5 flex gap-2 overflow-x-auto pb-1">
                          {workshop.photos.slice(0, 4).map((photo, i) => (
                            <button
                              key={photo + i}
                              type="button"
                              onClick={() => setLightbox({ workshop, index: i })}
                              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                              aria-label={`View photo ${i + 1}`}
                            >
                              <ImageWithFallback
                                src={photo}
                                fallbackSrc="/images/workshops/_placeholder.svg"
                                alt=""
                                fill
                                sizes="48px"
                                className="object-cover hover:opacity-80"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Column: Workshop Details */}
                    <div className="flex flex-col justify-between md:col-span-7 lg:col-span-8">
                      <div>
                        {/* Meta Badges */}
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-3 py-1 font-medium text-navy/80">
                            <Calendar size={13} className="text-maroon" />
                            {formatDate(workshop.date)}
                          </span>

                          <span className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-3 py-1 font-medium text-navy/80">
                            <MapPin size={13} className="text-maroon" />
                            {workshop.location}
                          </span>

                          <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 font-semibold text-gold-text border border-gold/30">
                            <Users size={13} />
                            {workshop.attendees} attendees
                          </span>
                        </div>

                        {/* Title & College */}
                        <h4 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-navy transition-colors group-hover:text-maroon">
                          {workshop.name}
                        </h4>
                        <p className="mt-1 text-sm sm:text-base font-semibold text-maroon">
                          {workshop.college}
                        </p>
                      </div>

                      {/* Topics & CTA Button */}
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {workshop.topics.map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy/80"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => setLightbox({ workshop, index: 0 })}
                          className="inline-flex items-center gap-1.5 rounded-full bg-maroon/10 px-4 py-2 text-xs font-bold text-maroon transition-all hover:bg-maroon hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                        >
                          <Camera size={14} />
                          <span>View Gallery</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Pagination */}
          <nav
            aria-label="Workshops pagination"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-maroon hover:text-maroon disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                aria-current={n === currentPage ? "page" : undefined}
                onClick={() => setPage(n)}
                className={`h-9 w-9 rounded-full text-xs font-bold transition-all ${
                  n === currentPage
                    ? "bg-maroon text-white shadow-md shadow-maroon/20"
                    : "border border-navy/10 bg-white text-navy/70 hover:border-maroon/40 hover:text-maroon"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-maroon hover:text-maroon disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        </>
      )}

      {/* Lightbox for Workshop Photos */}
      {lightbox && (
        <Lightbox
          photos={lightbox.workshop.photos}
          initialIndex={lightbox.index}
          title={lightbox.workshop.name}
          subtitle={lightbox.workshop.college}
          fallbackSrc="/images/workshops/_placeholder.svg"
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
