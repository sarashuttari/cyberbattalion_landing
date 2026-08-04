"use client";

import { useState } from "react";
import {
  galleryCategories,
  galleryPhotos,
  type GalleryCategory,
} from "@/data/gallery";
import ImageWithFallback from "./ImageWithFallback";
import Lightbox from "./Lightbox";

const FALLBACK = "/gallery/_placeholder.svg";
const TABS = ["All", ...galleryCategories] as const;
type Tab = (typeof TABS)[number];

export default function GallerySection() {
  const [tab, setTab] = useState<Tab>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    tab === "All"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === (tab as GalleryCategory));

  function selectTab(t: Tab) {
    setTab(t);
    setLightboxIndex(null);
  }

  return (
    <section id="gallery" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text">
          Moments
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-maroon sm:text-4xl">
          Gallery
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <p className="mt-4 text-muted">
          Glimpses from workshops, sessions, and events
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => selectTab(t)}
            aria-pressed={tab === t}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
              tab === t
                ? "bg-maroon text-white"
                : "border border-navy/15 text-navy/70 hover:border-maroon/40 hover:text-maroon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-5xl columns-2 gap-4 sm:columns-3">
        {filtered.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View gallery photo ${i + 1} of ${filtered.length}`}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-navy/10 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            <ImageWithFallback
              src={photo.src}
              alt={photo.caption ?? ""}
              fallbackSrc={FALLBACK}
              width={photo.width}
              height={photo.height}
              className="h-auto w-full object-cover"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered.map((p) => p.src)}
          initialIndex={lightboxIndex}
          title={`Gallery — ${tab}`}
          fallbackSrc={FALLBACK}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
