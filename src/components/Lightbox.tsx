"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";
import ImageWithFallback from "./ImageWithFallback";

type Props = {
  photos: string[];
  initialIndex: number;
  title: string;
  subtitle?: string;
  fallbackSrc: string;
  onClose: () => void;
};

export default function Lightbox({
  photos,
  initialIndex,
  title,
  subtitle,
  fallbackSrc,
  onClose,
}: Props) {
  const [index, setIndex] = useState(initialIndex);
  const total = photos.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const dialogRef = useDialogBehavior<HTMLDivElement>({
    active: true,
    onClose,
    onPrev: goPrev,
    onNext: goNext,
  });

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} photos`}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-3xl flex-col outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-12 right-0 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:-top-11"
        >
          <X size={24} />
        </button>

        <div className="relative flex aspect-[4/3] max-h-[65vh] w-full items-center justify-center overflow-hidden rounded-xl bg-navy">
          <ImageWithFallback
            key={photo}
            fallbackSrc={fallbackSrc}
            src={photo}
            alt={`${title} — photo ${index + 1} of ${total}`}
            width={1600}
            height={1200}
            priority
            className="h-full w-full object-contain"
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-navy/50 p-2 text-white hover:bg-navy/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-navy/50 p-2 text-white hover:bg-navy/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-white/90">
          <span className="font-semibold">{title}</span>
          {subtitle && (
            <>
              {" — "}
              {subtitle}
            </>
          )}
          <span className="text-white/60">
            {" "}
            · {index + 1} of {total}
          </span>
        </p>
      </div>
    </div>
  );
}
