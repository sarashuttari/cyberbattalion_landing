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

- **Next.js 16 App Router, TypeScript, Tailwind v4, React 19.** Static frontend only — no backend, no API routes, no database. The Contact form submits via a `mailto:` link (`ContactForm.tsx`), not a network request.
- **Routing:** `src/app/page.tsx` is the homepage and composes the section components in order: `Hero → Collaborations → Highlights → CentreOfExcellence → ContactSection`. `src/app/about/page.tsx` renders the `About` component as a real but currently unlinked route (not in Navbar/Hero nav).
- **`Navbar`/`Footer` live in `src/app/layout.tsx`**, not in `page.tsx`, since they're shared chrome across the (technically) multi-page site. Section anchors used for in-page nav/CTAs: `#top`, `#about`, `#highlights`, `#collaborations`, `#centre-of-excellence`, `#contact`.
- **Design tokens** (`--bg`, `--maroon`, `--navy`, `--gold`, `--muted`) are defined as CSS custom properties in `src/app/globals.css` under `@theme` and consumed as Tailwind utilities (`text-maroon`, `bg-maroon-dark`, `text-gold-text`, etc.) — don't hardcode hex colors in components. Fonts: `Fraunces` (serif, `--font-fraunces`, headings) and `Inter` (`--font-inter`, body), loaded via `next/font/google` in `layout.tsx`.
- **The interactive centerpiece is `Highlights.tsx` → `WorkshopsPanel.tsx` → `Lightbox.tsx`:**
  - `Highlights.tsx` owns an `open` boolean that expands/collapses a full-width panel (CSS grid-rows trick + `inert` for a11y) directly beneath the highlight cards, rendering `WorkshopsPanel` inside it, and scrolls it into view on open (respecting `prefers-reduced-motion`). It also has its own independent expand/collapse state for a "Projects" detail block — don't conflate the two.
  - `WorkshopsPanel.tsx` reads `src/data/workshops.ts` (40 entries, typed by the `Workshop` type in that file), handles search/filter (matches college/name/topic, resets to page 1) and pagination (5/page). Clicking a thumbnail opens `Lightbox.tsx`, scoped to that workshop's `photos` array.
  - Workshop photo folders live at `public/workshops/<slug>/`, where `<slug>` must match the entry's `slug` field exactly — pre-created for all 40 entries even though most still hold placeholder content.
- **Missing-image handling:** `ImageWithFallback.tsx` wraps `next/image` with an `onError` handler that swaps to a fallback src (`_placeholder.svg`) client-side, so incomplete photo/logo folders never produce a broken image. Use it (not raw `next/image`) anywhere a src comes from `workshops.ts` or `collaborations.ts`.
- **`Collaborations.tsx`** renders `src/data/collaborations.ts` (12 entries) as a static single-row grid of logo cards — PLAN.md's marquee/auto-scroll description for this section is superseded (see the note at the top of PLAN.md).
- **Data files (`src/data/workshops.ts`, `src/data/collaborations.ts`) are plain typed arrays**, not fetched from anywhere — adding/editing entries is just editing the array, no build step beyond the normal dev reload.

## Notes

- `AGENTS.md` flags that this Next.js version may diverge from training-data assumptions — check `node_modules/next/dist/docs/` for API/convention specifics before relying on memory for App Router behavior.
- `src/app/layout.tsx`'s `metadataBase` currently points at `https://cyberbattalion.in`, while PLAN.md specifies the deliberately-misspelled `cyberbetallion.com`. Confirm the intended domain before touching metadata rather than assuming either is correct.
