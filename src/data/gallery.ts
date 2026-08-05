export type GalleryCategory = "LSA" | "MJS" | "LIET" | "Spoorthy" | "TRR";

export type GalleryPhoto = {
  id: string;
  src: string;
  category: GalleryCategory;
  caption?: string;
  // Real intrinsic pixel size (read with `sips`) — drives the masonry
  // grid's aspect ratio. Keep these accurate if a photo is ever replaced.
  width: number;
  height: number;
};

export const galleryCategories: GalleryCategory[] = [
  "LSA",
  "MJS",
  "LIET",
  "Spoorthy",
  "TRR",
];

// Real event photos from public/gallery/{lsa,mjs,liet,Spoorthy,trr}/.
export const galleryPhotos: GalleryPhoto[] = [
  { id: "sp-1", src: "/gallery/Spoorthy/sp_1.jpeg", category: "Spoorthy", width: 960, height: 1280 },
  { id: "sp-2", src: "/gallery/Spoorthy/sp_2.jpeg", category: "Spoorthy", width: 1600, height: 720 },
  { id: "sp-3", src: "/gallery/Spoorthy/sp_3.jpeg", category: "Spoorthy", width: 899, height: 1599 },
  { id: "sp-4", src: "/gallery/Spoorthy/sp_4.jpeg", category: "Spoorthy", width: 1599, height: 899 },
  { id: "sp-5", src: "/gallery/Spoorthy/sp_5.jpeg", category: "Spoorthy", width: 1280, height: 960 },
  { id: "sp-6", src: "/gallery/Spoorthy/sp_6.jpeg", category: "Spoorthy", width: 1280, height: 960 },
  { id: "sp-7", src: "/gallery/Spoorthy/sp_7.jpeg", category: "Spoorthy", width: 1280, height: 960 },
  { id: "sp-8", src: "/gallery/Spoorthy/sp_8.jpeg", category: "Spoorthy", width: 1280, height: 960 },
  { id: "sp-9", src: "/gallery/Spoorthy/sp_9.jpeg", category: "Spoorthy", width: 960, height: 1280 },
  { id: "sp-10", src: "/gallery/Spoorthy/sp_10.jpeg", category: "Spoorthy", width: 1280, height: 960 },
  { id: "lsa-1", src: "/gallery/lsa/lsa_1.jpeg", category: "LSA", width: 1600, height: 720 },
  { id: "lsa-2", src: "/gallery/lsa/lsa_2.jpeg", category: "LSA", width: 3072, height: 3072 },
  { id: "lsa-3", src: "/gallery/lsa/lsa_3.jpeg", category: "LSA", width: 1280, height: 960 },
  { id: "lsa-4", src: "/gallery/lsa/lsa_4.jpeg", category: "LSA", width: 1280, height: 960 },
  { id: "lsa-5", src: "/gallery/lsa/lsa_5.jpeg", category: "LSA", width: 946, height: 1549 },
  { id: "lsa-6", src: "/gallery/lsa/lsa_6.jpeg", category: "LSA", width: 900, height: 1600 },
  { id: "lsa-7", src: "/gallery/lsa/lsa_7.jpeg", category: "LSA", width: 720, height: 1280 },
  { id: "lsa-8", src: "/gallery/lsa/lsa_8.jpeg", category: "LSA", width: 1280, height: 960 },
  { id: "lsa-9", src: "/gallery/lsa/lsa_9.jpeg", category: "LSA", width: 1070, height: 820 },
  { id: "lsa-10", src: "/gallery/lsa/lsa_10.jpeg", category: "LSA", width: 991, height: 1587 },
  { id: "mjs1", src: "/gallery/mjs/mjs1.jpeg", category: "MJS", width: 3200, height: 1472 },
  { id: "mjs2", src: "/gallery/mjs/mjs2.jpeg", category: "MJS", width: 1880, height: 4096 },
  { id: "mjs3", src: "/gallery/mjs/mjs3.jpeg", category: "MJS", width: 4096, height: 1880 },
  { id: "mjs4", src: "/gallery/mjs/mjs4.jpeg", category: "MJS", width: 3200, height: 1472 },
  { id: "mjs5", src: "/gallery/mjs/mjs5.jpeg", category: "MJS", width: 4096, height: 1880 },
  { id: "mjs6", src: "/gallery/mjs/mjs6.jpeg", category: "MJS", width: 3072, height: 3072 },
  { id: "mjs7", src: "/gallery/mjs/mjs7.jpeg", category: "MJS", width: 3072, height: 3072 },
  { id: "mjs8", src: "/gallery/mjs/mjs8.jpeg", category: "MJS", width: 3072, height: 3072 },
  { id: "mjs9", src: "/gallery/mjs/mjs9.jpeg", category: "MJS", width: 3072, height: 3072 },
  { id: "liet-1", src: "/gallery/liet/liet_1.jpeg", category: "LIET", width: 1280, height: 960 },
  { id: "liet-2", src: "/gallery/liet/liet_2.jpeg", category: "LIET", width: 1600, height: 1200 },
  { id: "liet-3", src: "/gallery/liet/liet_3.jpeg", category: "LIET", width: 1600, height: 1200 },
  { id: "liet-4", src: "/gallery/liet/liet_4.jpeg", category: "LIET", width: 1600, height: 1200 },
  { id: "liet-5", src: "/gallery/liet/liet_5.jpeg", category: "LIET", width: 1600, height: 1200 },
  { id: "liet-6", src: "/gallery/liet/liet_6.jpeg", category: "LIET", width: 720, height: 1600 },
  { id: "liet-7", src: "/gallery/liet/liet_7.jpeg", category: "LIET", width: 1280, height: 960 },
  { id: "liet-8", src: "/gallery/liet/liet_8.jpeg", category: "LIET", width: 1280, height: 720 },
  { id: "liet-9", src: "/gallery/liet/liet_9.jpeg", category: "LIET", width: 1600, height: 720 },
  { id: "liet-10", src: "/gallery/liet/liet_10.jpeg", category: "LIET", width: 1600, height: 720 },
  { id: "liet-11", src: "/gallery/liet/liet_11.jpeg", category: "LIET", width: 1280, height: 720 },
  { id: "trr-1", src: "/gallery/trr/trr_1.jpeg", category: "TRR", width: 899, height: 1599 },
  { id: "trr-2", src: "/gallery/trr/trr_2.jpeg", category: "TRR", width: 1600, height: 720 },
  { id: "trr-3", src: "/gallery/trr/trr_3.jpeg", category: "TRR", width: 1600, height: 720 },
  { id: "trr-4", src: "/gallery/trr/trr_4.jpeg", category: "TRR", width: 720, height: 1600 },
  { id: "trr-5", src: "/gallery/trr/trr_5.jpeg", category: "TRR", width: 1600, height: 720 },
];
