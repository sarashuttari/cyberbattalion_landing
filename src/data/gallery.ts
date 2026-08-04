export type GalleryPhoto = {
  id: string;
  src: string;
  caption?: string;
};

// Placeholder slots — drop real event/workshop photos into public/gallery/
// (see public/gallery/README.md) and update the src paths below.
export const galleryPhotos: GalleryPhoto[] = Array.from(
  { length: 10 },
  (_, i) => ({
    id: `g${String(i + 1).padStart(2, "0")}`,
    src: `/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
  })
);
