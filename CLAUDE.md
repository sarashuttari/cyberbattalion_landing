# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Context

Single-page-feeling (technically multi-route) landing site for **Dr. Sara Shuttari**, Cybersecurity & Information Technology Professional, under the "Cyber Battalion" brand.

**Read `PLAN.md` first** — it contains the full agreed spec: stack, palette, section-by-section breakdown, the interactive workshops panel, data model, and photo folder structure. The "Since this was drafted…" note near the top and the "Decisions already made" section at the bottom are load-bearing: they record changes made after the original plan was written and explicit decisions not to re-litigate. When PLAN.md and the live code disagree, treat the code as current and the mismatch as worth flagging, not silently "fixing" in either direction.

The site is built and verified (build, lint, responsive, a11y — see PLAN.md's Verification checklist). The main outstanding gap is real workshop photos and collaboration logos — `public/workshops/<slug>/` and `public/collaborations/` currently hold placeholders (see the README.md in each folder).

Source images in `assets/` (not served) have been processed into `public/logo.png` and `public/sara.png`.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build — must pass clean before calling work done
npm run lint     # eslint (flat config, eslint.config.mjs)
npm run start    # serve the production build
```

There is no test suite/runner configured in this repo.

## Architecture

- **Next.js 16 App Router, TypeScript, Tailwind v4, React 19.** Static frontend only — no backend, no API routes, no database. The Contact form submits via a `mailto:` link (`ContactForm.tsx`), not a network request — **this is a known pain point** (the client reports "email is not working," which is really the mailto limitation that nothing auto-sends). The agreed fix is a client-side form-delivery service (Web3Forms) once an access key is available; don't re-litigate that decision, just wire it in when the key shows up.
- **Routing:** `src/app/page.tsx` is the homepage and composes the section components in order: `AnnouncementMarquee → Hero → Collaborations → Highlights → GallerySection → TestimonialsSection → CentreOfExcellence → ContactSection`. `src/app/about/page.tsx` renders the `About` component as a real but currently unlinked route (not in Navbar/Hero nav — deliberately hidden per client request, don't re-add the nav link without being asked).
- **`Navbar`/`Footer` live in `src/app/layout.tsx`**, not in `page.tsx`, since they're shared chrome across the (technically) multi-page site. Nav switches from hamburger to full horizontal links at `lg` (not `md`) because there are 6 links now. Section anchors used for in-page nav/CTAs: `#top`, `#highlights`, `#collaborations`, `#gallery`, `#testimonials`, `#centre-of-excellence`, `#contact`. (`#about` still exists on its own page but isn't a homepage anchor.)
- **Design tokens** (`--bg`, `--maroon`, `--navy`, `--gold`, `--muted`) are defined as CSS custom properties in `src/app/globals.css` under `@theme` and consumed as Tailwind utilities (`text-maroon`, `bg-maroon-dark`, `text-gold-text`, etc.) — don't hardcode hex colors in components. Fonts: `Fraunces` (serif, `--font-fraunces`, headings) and `Inter` (`--font-inter`, body), loaded via `next/font/google` in `layout.tsx`. `@keyframes marquee` in `globals.css` drives both `AnnouncementMarquee.tsx` and (if re-added) any other scrolling ticker — it was removed once when Collaborations dropped its marquee, then reinstated for `AnnouncementMarquee`; don't remove it while that component exists.
- **The interactive centerpiece is `Highlights.tsx` → `WorkshopsPanel.tsx` → `Lightbox.tsx`:**
  - `Highlights.tsx` owns an `open` boolean that expands/collapses a full-width panel (CSS grid-rows trick + `inert` for a11y) directly beneath the highlight cards, rendering `WorkshopsPanel` inside it, and scrolls it into view on open (respecting `prefers-reduced-motion`). It also has its own independent expand/collapse state for a "Projects" card, which expands *in place* (not below-grid like Workshops) and ends in a "Register Now" link to `#contact` — don't conflate the two toggles. Cards, in order: Workshops (interactive) → Internship & Placements → Projects (interactive) → FDPs. Grid is a plain 2×2 (`sm:grid-cols-2` + `items-start`, not 3 columns) — there are only 4 cards.
  - `WorkshopsPanel.tsx` reads `src/data/workshops.ts` (40 entries, typed by the `Workshop` type in that file), handles search/filter (matches college/name/topic, resets to page 1) and pagination (5/page). Clicking a thumbnail opens `Lightbox.tsx`, scoped to that workshop's `photos` array.
  - Workshop photo folders live at `public/workshops/<slug>/`, where `<slug>` must match the entry's `slug` field exactly — pre-created for all 40 entries even though most still hold placeholder content. **The client sent a real (but truncated) list of seminar/college names over WhatsApp that hasn't been reconciled with this placeholder data yet** — get the untruncated list before touching `workshops.ts` college names, to avoid redoing it.
  - `Lightbox.tsx` is **generic**, not workshop-specific: it takes `{ photos, initialIndex, title, subtitle?, fallbackSrc, onClose }`, not a `Workshop` object. `GallerySection.tsx` reuses it too. If you need a lightbox somewhere new, pass these props rather than adding a workshop dependency.
- **Missing-image handling:** `ImageWithFallback.tsx` wraps `next/image` with an `onError` handler that swaps to a fallback src (`_placeholder.svg`) client-side, so incomplete photo/logo folders never produce a broken image. Use it (not raw `next/image`) anywhere a src comes from a data file. `TestimonialAvatar.tsx` is the same idea for people photos, but falls back to a computed initials circle instead of a static SVG.
- **`Collaborations.tsx`** renders `src/data/collaborations.ts` (5 entries, order is client-specified: Lords, ASTI, HMA, Cyverra, HCL — don't re-sort) as a static single-row grid of logo cards — PLAN.md's marquee/auto-scroll description for this section is superseded (see the note at the top of PLAN.md). Cards are clickable (`url` field) only where an official site was confidently verified; HMA CyberTech and Cyverra Global Technologies LLP turned up no confident match and are intentionally left unlinked pending the client.
- **`TestimonialsSection.tsx`** reads `src/data/testimonials.ts` (9 people, names from the client's WhatsApp list) — `designation`/`quote` are intentionally empty strings pending real content from the client; the component renders "Designation pending" / "Testimonial coming soon" for empty fields. **Do not invent quotes or designations for these real, named people.**
- **`AnnouncementMarquee.tsx`** is a scrolling ticker between the header and Hero reading "Register through this link," linking to `REGISTER_HREF` (currently `#contact` as a placeholder) — swap that constant for a real registration URL once one exists.
- **Data files** (`workshops.ts`, `collaborations.ts`, `gallery.ts`, `testimonials.ts`) are plain typed arrays, not fetched from anywhere — adding/editing entries is just editing the array, no build step beyond the normal dev reload.

## Notes

- `AGENTS.md` flags that this Next.js version may diverge from training-data assumptions — check `node_modules/next/dist/docs/` for API/convention specifics before relying on memory for App Router behavior.
- `src/app/layout.tsx`'s `metadataBase` is `https://cyberbetallion.com`, matching PLAN.md's explicitly-documented deliberate brand/domain misspelling ("Decisions already made — don't re-ask"). A prior session mistook this for a typo and changed it to `cyberbattalion.in`; it was reverted. Don't "fix" it again without the user explicitly saying the domain has changed.
- Client's WhatsApp punch list (2026-08-04) still has open items needing her input before they can be finished: a Web3Forms access key (Contact form delivery), the full seminar/college list (WhatsApp truncated it), and what "Intellectual Connects" should actually be (no spec given yet — ask before building anything for it).
