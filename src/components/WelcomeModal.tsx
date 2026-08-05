"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";

const IMAGES = Array.from(
  { length: 6 },
  (_, i) => `/images/welcome-modal/upcoming/Dubai_internship_lsa_${i + 1}.jpg`
);
const SESSION_KEY = "welcome-modal-shown";
const DELAY_MS = 2000;

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const goNext = () => setIndex((i) => (i + 1) % IMAGES.length);
  const close = () => setOpen(false);

  const dialogRef = useDialogBehavior<HTMLDivElement>({
    active: open,
    onClose: close,
    onPrev: goPrev,
    onNext: goNext,
  });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/80 p-4"
      onClick={close}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Upcoming Dubai Internship LSA"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl outline-none"
      >
        <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
          <p className="font-serif text-lg font-semibold text-maroon sm:text-xl">
            Upcoming: Dubai Internship at LSA
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="rounded-full p-1.5 text-navy/60 hover:bg-navy/5 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative aspect-[3/2] w-full bg-navy">
          <Image
            key={IMAGES[index]}
            src={IMAGES[index]}
            alt={`Dubai Internship at LSA — slide ${index + 1} of ${IMAGES.length}`}
            fill
            priority
            className="object-contain"
          />

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-navy/50 p-2 text-white hover:bg-navy/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-navy/50 p-2 text-white hover:bg-navy/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 py-4">
          {IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                i === index ? "w-6 bg-maroon" : "w-2 bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
