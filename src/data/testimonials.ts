export type Testimonial = {
  id: string;
  name: string;
  // Designation and quote are pending real content from the client — see
  // TestimonialsSection.tsx, which renders a clearly-marked placeholder
  // whenever these are empty. Do not invent designations or quotes here.
  designation: string;
  quote: string;
  photo: string;
};

// Names as provided by the client (WhatsApp, 2026-08-04). Designations,
// quotes, and photos are pending — she noted these will follow.
export const testimonials: Testimonial[] = [
  {
    id: "renuka-sagar",
    name: "Prof. Renuka Sagar",
    designation: "",
    quote: "",
    photo: "/testimonials/renuka-sagar.jpg",
  },
  {
    id: "sai-krishna",
    name: "Sai Krishna, CCOE",
    designation: "",
    quote: "",
    photo: "/testimonials/sai-krishna.jpg",
  },
  {
    id: "chairman-tgmfc",
    name: "Chairman, TGMFC",
    designation: "",
    quote: "",
    photo: "/testimonials/chairman-tgmfc.jpg",
  },
  {
    id: "tanvir",
    name: "Tanvir",
    designation: "",
    quote: "",
    photo: "/testimonials/tanvir.jpg",
  },
  {
    id: "abdur-rahman",
    name: "Abdur Rahman",
    designation: "",
    quote: "",
    photo: "/testimonials/abdur-rahman.jpg",
  },
  {
    id: "noman",
    name: "Noman",
    designation: "",
    quote: "",
    photo: "/testimonials/noman.jpg",
  },
  {
    id: "asif-basha",
    name: "Asif Basha",
    designation: "",
    quote: "",
    photo: "/testimonials/asif-basha.jpg",
  },
  {
    id: "dr-andal",
    name: "Dr. Andal",
    designation: "",
    quote: "",
    photo: "/testimonials/dr-andal.jpg",
  },
  {
    id: "dr-yousuf",
    name: "Dr. Yousuf",
    designation: "",
    quote: "",
    photo: "/testimonials/dr-yousuf.jpg",
  },
];
