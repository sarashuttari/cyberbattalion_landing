export type Testimonial = {
  id: string;
  name: string;
  // Designation is pending real content from the client — TestimonialsSection
  // renders "Designation pending" whenever it's empty. Do not invent one.
  designation: string;
  // DRAFT quote — the user asked for placeholder testimonial copy to be
  // written now and swapped for the client's real, approved wording later.
  // Kept generic/safe on purpose: no fabricated specifics (dates, numbers,
  // events) attributed to these real people, just plausible general praise.
  quote: string;
  photo: string;
};

// Names as provided by the client (WhatsApp, 2026-08-04). Quotes below are
// DRAFT placeholders (see note above) — replace with real, client-approved
// wording before this goes live.
export const testimonials: Testimonial[] = [
  {
    id: "renuka-sagar",
    name: "Prof. Renuka Sagar",
    designation: "",
    quote:
      "Dr. Shuttari's sessions bring a rare balance of academic depth and real-world relevance. Our faculty and students consistently come away better equipped to think about cybersecurity.",
    photo: "/testimonials/renuka-sagar.jpg",
  },
  {
    id: "sai-krishna",
    name: "Sai Krishna, CCOE",
    designation: "",
    quote:
      "The hands-on approach to teaching cybersecurity concepts made a lasting impression. It's rare to find a mentor who explains complex ideas this clearly.",
    photo: "/testimonials/sai-krishna.jpg",
  },
  {
    id: "chairman-tgmfc",
    name: "Chairman, TGMFC",
    designation: "",
    quote:
      "Partnering with Dr. Shuttari on our cybersecurity initiatives has been invaluable. Her commitment to bridging academia and industry sets a high standard.",
    photo: "/testimonials/chairman-tgmfc.jpg",
  },
  {
    id: "tanvir",
    name: "Tanvir",
    designation: "",
    quote:
      "Every session with Dr. Shuttari is packed with practical insights you can apply immediately. I'd recommend her workshops to any student serious about cybersecurity.",
    photo: "/testimonials/tanvir.jpg",
  },
  {
    id: "abdur-rahman",
    name: "Abdur Rahman",
    designation: "",
    quote:
      "Her ability to simplify complex security concepts for students of all backgrounds is exceptional — a truly dedicated mentor.",
    photo: "/testimonials/abdur-rahman.jpg",
  },
  {
    id: "noman",
    name: "Noman",
    designation: "",
    quote:
      "The workshop reshaped how I think about information security. Dr. Shuttari's energy and expertise are contagious.",
    photo: "/testimonials/noman.jpg",
  },
  {
    id: "asif-basha",
    name: "Asif Basha",
    designation: "",
    quote:
      "A phenomenal speaker who brings clarity to even the most technical cybersecurity topics. Our students walked away inspired.",
    photo: "/testimonials/asif-basha.jpg",
  },
  {
    id: "dr-andal",
    name: "Dr. Andal",
    designation: "",
    quote:
      "Dr. Shuttari's contribution to cybersecurity education in our region has been remarkable. Her sessions are always insightful and well-structured.",
    photo: "/testimonials/dr-andal.jpg",
  },
  {
    id: "dr-yousuf",
    name: "Dr. Yousuf",
    designation: "",
    quote:
      "Her dedication to nurturing the next generation of cybersecurity professionals is evident in every session she conducts.",
    photo: "/testimonials/dr-yousuf.jpg",
  },
];
