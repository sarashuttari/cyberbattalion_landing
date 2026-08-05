"use client";

import { Calendar, MapPin, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { workshops, type Workshop } from "@/data/workshops";
import ImageWithFallback from "./ImageWithFallback";
import Lightbox from "./Lightbox";

const PAGE_SIZE = 5;
const MAX_THUMBS = 4;

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
    <div className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-serif text-2xl font-semibold text-navy">
          All Workshops &amp; Sessions
        </h3>

        <label className="relative w-full sm:w-72">
          <span className="sr-only">Search workshops by college, name, or topic</span>
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search college, name, or topic..."
            className="w-full rounded-full border border-navy/15 bg-bg py-2 pl-9 pr-4 text-sm text-navy placeholder:text-muted focus:border-maroon focus:outline-none focus:ring-1 focus:ring-maroon"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 py-8 text-center text-sm text-muted">
          No workshops match &ldquo;{query}&rdquo;. Try a different search.
        </p>
      ) : (
        <>
          <p className="mt-6 text-sm text-muted">
            Showing {start + 1}–{Math.min(start + PAGE_SIZE, filtered.length)}{" "}
            of {filtered.length}
          </p>

          <ul className="mt-2 divide-y divide-navy/10">
            {pageItems.map((workshop) => {
              const visiblePhotos = workshop.photos.slice(
                0,
                workshop.photos.length > MAX_THUMBS ? 3 : MAX_THUMBS
              );
              const hiddenCount = workshop.photos.length - visiblePhotos.length;

              return (
                <li key={workshop.id} className="flex flex-col gap-4 py-6 sm:flex-row">
                  <div className="flex shrink-0 gap-2">
                    {visiblePhotos.map((photo, i) => (
                      <button
                        key={photo}
                        type="button"
                        onClick={() => setLightbox({ workshop, index: i })}
                        className="h-16 w-16 overflow-hidden rounded-lg border border-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                        aria-label={`View photo ${i + 1} of ${workshop.name}`}
                      >
                        <ImageWithFallback
                          fallbackSrc="/images/workshops/_placeholder.svg"
                          key={photo}
                          src={photo}
                          alt=""
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                    {hiddenCount > 0 && (
                      <button
                        type="button"
                        onClick={() => setLightbox({ workshop, index: visiblePhotos.length })}
                        className="relative h-16 w-16 overflow-hidden rounded-lg border border-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                        aria-label={`View all ${workshop.photos.length} photos of ${workshop.name}`}
                      >
                        <ImageWithFallback
                          fallbackSrc="/images/workshops/_placeholder.svg"
                          key={workshop.photos[visiblePhotos.length]}
                          src={workshop.photos[visiblePhotos.length]}
                          alt=""
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-navy/60 text-sm font-semibold text-white">
                          +{hiddenCount}
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-navy">{workshop.name}</p>
                    <p className="text-sm font-medium text-maroon">{workshop.college}</p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={13} aria-hidden="true" />
                        {formatDate(workshop.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={13} aria-hidden="true" />
                        {workshop.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Users size={13} aria-hidden="true" />
                        {workshop.attendees} attendees
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {workshop.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-navy/80"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <nav
            aria-label="Workshops pagination"
            className="mt-8 flex flex-wrap items-center justify-center gap-1.5"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-navy/70 hover:bg-navy/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                aria-current={n === currentPage ? "page" : undefined}
                onClick={() => setPage(n)}
                className={`h-8 w-8 rounded-full text-sm font-medium transition-colors ${
                  n === currentPage
                    ? "bg-maroon text-white"
                    : "text-navy/70 hover:bg-navy/5"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-navy/70 hover:bg-navy/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        </>
      )}

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
