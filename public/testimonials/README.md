# Testimonial Photos

`src/data/testimonials.ts` lists 9 people, each with a `photo` path like
`/testimonials/renuka-sagar.jpg`. Drop a photo in here using that exact
filename and it'll replace the initials avatar automatically.

## Recommended size

A square-ish headshot, ~400px, JPEG.

## Missing photos

Any photo that fails to load falls back to a circular avatar showing the
person's initials (see `TestimonialAvatar.tsx`), so an incomplete set never
breaks the layout.
