"use client";

import { useEffect, useState } from "react";
import {
  galleryCategories,
  galleryPhotos,
  type GalleryPhoto,
} from "@/data/gallery";
import ImageWithFallback from "./ImageWithFallback";
import Lightbox from "./Lightbox";

const FALLBACK = "/images/gallery/_placeholder.svg";
const TABS = ["All", ...galleryCategories] as const;
type Tab = (typeof TABS)[number];
const PAGE_SIZE = 12;

type Positioned = { photo: GalleryPhoto; index: number };

// True Pinterest-style masonry: walk the photos in order and always drop
// the next one into whichever column is currently shortest — NOT CSS
// `columns`, which fills one column completely before moving to the next
// and breaks reading order.
function distributeColumns(
  items: Positioned[],
  columnCount: number
): Positioned[][] {
  const columns: Positioned[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);
  for (const item of items) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(item);
    heights[shortest] += item.photo.height / item.photo.width;
  }
  return columns;
}

export default function GallerySection() {
  const [tab, setTab] = useState<Tab>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [columnCount, setColumnCount] = useState(3);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setColumnCount(mq.matches ? 2 : 3);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const filtered =
    tab === "All"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === tab);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const positioned: Positioned[] = visible.map((photo, index) => ({
    photo,
    index,
  }));
  const columns = distributeColumns(positioned, columnCount);

  function selectTab(t: Tab) {
    setTab(t);
    setLightboxIndex(null);
    setVisibleCount(PAGE_SIZE);
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

      <div className="relative mx-auto mt-10 max-w-5xl">
        <div className="flex gap-4">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-1 flex-col gap-4">
              {column.map(({ photo, index }) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`View gallery photo ${index + 1} of ${filtered.length}`}
                  className="block w-full overflow-hidden rounded-xl border border-navy/10 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
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
          ))}
        </div>
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="rounded-full border border-navy/15 bg-white px-8 py-2.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:border-maroon/40 hover:text-maroon"
          >
            Load More
          </button>
        </div>
      )}

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
