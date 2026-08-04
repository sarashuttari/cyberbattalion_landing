export type GalleryCategory = "LSA" | "MJS" | "LIET";

export type GalleryPhoto = {
  id: string;
  src: string;
  category: GalleryCategory;
  caption?: string;
  // Intrinsic size hint for next/image — set these to the real photo's
  // actual width/height once one replaces a placeholder, so the masonry
  // grid reflects its true aspect ratio instead of a guessed one.
  width: number;
  height: number;
};

export const galleryCategories: GalleryCategory[] = ["LSA", "MJS", "LIET"];

// Placeholder slots with varied aspect ratios (to preview the masonry
// layout) — drop real event photos into public/gallery/ (see
// public/gallery/README.md) and update src/width/height below.
const heights = [500, 340, 620, 420, 380, 560, 440, 700, 320, 480, 400, 540];

export const galleryPhotos: GalleryPhoto[] = galleryCategories.flatMap(
  (category, catIndex) =>
    Array.from({ length: 4 }, (_, i) => {
      const n = catIndex * 4 + i + 1;
      return {
        id: `g${String(n).padStart(2, "0")}`,
        src: `/gallery/${String(n).padStart(2, "0")}.jpg`,
        category,
        width: 400,
        height: heights[(n - 1) % heights.length],
      };
    })
);
