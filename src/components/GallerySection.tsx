"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { galleryPhotos } from "@/data/gallery";
import ImageWithFallback from "./ImageWithFallback";
import Lightbox from "./Lightbox";

const FALLBACK = "/gallery/_placeholder.svg";

export default function GallerySection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? card.clientWidth + 16 : 300;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    track.scrollBy({
      left: direction * amount,
      behavior: reduceMotion ? "auto" : "smooth",
    });
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

      <div className="relative mt-14">
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-[max(1.5rem,calc((100%-64rem)/2))] [&::-webkit-scrollbar]:hidden"
        >
          {galleryPhotos.map((photo, i) => (
            <li key={photo.id} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View gallery photo ${i + 1} of ${galleryPhotos.length}`}
                className="block h-48 w-64 overflow-hidden rounded-xl border border-navy/10 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon sm:h-56 sm:w-72"
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.caption ?? ""}
                  fallbackSrc={FALLBACK}
                  width={288}
                  height={224}
                  className="h-full w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll gallery left"
          className="absolute left-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon sm:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll gallery right"
          className="absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon sm:flex"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={galleryPhotos.map((p) => p.src)}
          initialIndex={lightboxIndex}
          title="Gallery"
          fallbackSrc={FALLBACK}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
