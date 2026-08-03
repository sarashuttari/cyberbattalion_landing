# Cyber Battalion — Dr. Sara Shuttari Landing Page

**Status:** Built and verified (build, lint, responsive, a11y). Real workshop photos are still placeholder — see `public/workshops/README.md`. Collaboration logos are real (see `public/collaborations/README.md`).

Since this was drafted, the user asked for several changes that supersede the sections below — noted here rather than rewritten in place:
- `Collaborations` sits right after `Hero` (before `About`/`Highlights`), not between `Highlights` and `Centre of Excellence`. It's a simple 5-column, single-row grid of full-color logo cards, not the marquee described below.
- `About` is a real route (`src/app/about/page.tsx`, using the `About` component) but is currently **unlinked from the Navbar and Hero** ("hidden for now") — reachable only by direct URL.
- There is **no separate Contact page**. Instead there's a `Contact & Queries` section (`ContactSection.tsx` + `ContactForm.tsx`) as the *last* section on the homepage, directly above the Footer, with a working form (name/email/phone/reason/message) that opens the visitor's email client via a `mailto:` link — this site has no backend, so that's the "no contact form" decision below being reversed without adding one.
- `Navbar`/`Footer` now live in `src/app/layout.tsx` (not `page.tsx`), since the site is multi-page.

## Brand & domain

- **Site title / brand:** `Cyber Battalion` (matches the crest artwork and correct spelling)
- **Tagline:** `Knowledge · Awareness · Protection`
- **Domain:** `cyberbetallion.com` — note the domain spelling intentionally differs from the brand spelling. Use the domain only in canonical URLs / metadata, never as visible brand text.
- Metadata in `src/app/layout.tsx`:
  - `title`: `Cyber Battalion — Dr. Sara Shuttari`
  - `description`: `Cybersecurity & Information Technology Professional. Knowledge, Awareness, Protection.`
  - `metadataBase`: `new URL("https://cyberbetallion.com")`
  - Open Graph + Twitter card using `public/logo.png`
  - Add `public/favicon.ico` / `icon.png` derived from the crest

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind v4 · `next/image` · `lucide-react`.
Static frontend only — no backend, no API routes, no forms.

Scaffold with:

```bash
npx create-next-app@latest . --ts --tailwind --app --eslint --src-dir --import-alias "@/*" --no-turbopack
npm i lucide-react
```

## Design direction

Light professional — clean, academic/institutional.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF9F7` | page base |
| `--maroon` | `#7B1E3C` | primary — headings, buttons, accents |
| `--navy` | `#1B2A4A` | body text, dark bands |
| `--gold` | `#C9A227` | thin accent rules, dividers |
| `--muted` | `#6B7280` | secondary text |

Define as CSS custom properties in `src/app/globals.css` under `@theme`, consumed via Tailwind v4 utilities.

Type: a serif display face for the name/headings (e.g. `Fraunces` or `Playfair Display` via `next/font/google`), sans (`Inter`) for body.

## Assets

Source files are in `assets/` (not served — process these first):

- `assets/logo-source.png` — the "Cyber Battalion" B&W crest containing her portrait. Trim whitespace, export to `public/logo.png`. Used in navbar, hero, footer.
- `assets/poster-source.png` — the original event poster. **Crop Dr. Sara Shuttari's photo out of it** (she's on the right side of the poster, roughly the upper-right quadrant) and export to `public/sara.png` for the About section.

Crop hint (ImageMagick):

```bash
# inspect dimensions first, then tune the geometry
magick assets/poster-source.png -crop WxH+X+Y +repage public/sara.png
```

## Page structure

Single route: `src/app/page.tsx`. Components in `src/components/`.

### 1. `Navbar.tsx`

Sticky. Logo + wordmark `Cyber Battalion` left, anchor links right: About · Highlights · Collaborations · Centre of Excellence.
Translucent + backdrop-blur + subtle border once scrolled past ~40px. Mobile: hamburger → slide-down panel.

### 2. `Hero.tsx`

- Cyber Battalion crest, centered, generous whitespace.
- `Dr. Sara Shuttari` — large serif, maroon.
- Subtitle: *Cybersecurity & Information Technology Professional*
- Tagline: **Knowledge · Awareness · Protection**
- Gold hairline divider.
- Two CTAs: "View Highlights" (filled maroon) → `#highlights`, "About" (outline) → `#about`.

### 3. `About.tsx`

Two columns — cropped photo left in a rounded card with a maroon frame/offset shadow, credentials right:

- 23+ years of industry & academic experience
- M.Sc., M.Tech., MBA
- Doctorate from the University of Cambridge for research in Cybersecurity
- Professor & Visiting Faculty at MANUU, ICFAI University, University of Hyderabad, ASTI Academy Dubai
- Consultant, Lords Skill Academy

Render as an icon list (lucide: `GraduationCap`, `Briefcase`, `Award`, `Building2`, `UserCheck`).

### 4. `Highlights.tsx` — the main interactive piece

Grid of 5 cards:

1. **40+ Workshops & Sessions** — *interactive*, see below
2. **FDPs — Faculty Development Programs**
3. **Research Presented at National & International Conferences**
4. **100+ Urdu Articles on IT in Siasat Daily**
5. **Expertise: Cybersecurity, AI, IT, Industry–Academia Collaboration**

Card 1 is a button: chevron icon + "View all" affordance, `aria-expanded`. Clicking smoothly expands a **full-width panel directly beneath the grid** (animate height/opacity, respect `prefers-reduced-motion`). Clicking again collapses it. Scroll the panel into view on open.

### 5. `WorkshopsPanel.tsx`

Client component (`"use client"`).

- Reads from `src/data/workshops.ts`, sorted newest-first.
- **Search/filter box** — matches on college, name, or topic. Filtering resets to page 1.
- **Pagination: 5 per page** (8 pages for 40). Prev/Next buttons + numbered page pills. Show "Showing 1–5 of 40".
- Each row renders: thumbnail strip (first 3–4 photos, `+N` badge if more) · **Name** (bold, navy) · **College** (maroon) · date · location · attendee count · topic chips (gold-tinted pills).
- Clicking any thumbnail opens `Lightbox.tsx`.

### 6. `Lightbox.tsx`

Client component. Full-size image overlay, scoped to the clicked workshop's photo array.

- Prev/next arrows + `←` `→` keys
- `Esc` and click-outside to close
- Focus trap, `role="dialog"` `aria-modal="true"`, restore focus on close
- Body scroll lock while open
- Caption: workshop name + college + `n of N`

### 7. `Collaborations.tsx`

Partner-logo strip. Section title **"Collaborations"** with a gold hairline and a short subline (*Institutions, industry bodies and academic partners*).

**Infinite auto-scroll marquee**, pure CSS — no library:

- Render the logo array **twice** back-to-back inside a flex track, animate `transform: translateX(0 → -50%)` with `animation: marquee 40s linear infinite`. The duplicate makes the loop seamless.
- `pause on hover` via `:hover { animation-play-state: paused }`
- Wrap in `overflow-hidden` with left/right fade masks (`mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent)`)
- **`prefers-reduced-motion`: disable the animation** and fall back to a horizontally scrollable / wrapped static row
- Logos: grayscale + ~70% opacity at rest, full colour on hover, fixed height (`h-12 md:h-14`) with `w-auto` so varied aspect ratios line up
- `aria-hidden` on the duplicated half; wrap the whole strip in a `<ul>` with proper labels on the first half

Place this section **between Highlights and Centre of Excellence**.

Data — `src/data/collaborations.ts`:

```ts
export type Collaborator = { name: string; logo: string; url?: string };
export const collaborations: Collaborator[] = [ /* 12 entries */ ];
```

Seed with these 12, in this order:

| # | Name | File |
|---|---|---|
| 1 | AICTE | `/collaborations/aicte.png` |
| 2 | Institution's Innovation Council (MoE) | `/collaborations/iic.png` |
| 3 | Sphoorthy Engineering College | `/collaborations/sphoorthy.png` |
| 4 | Cyber Genz Club | `/collaborations/cyber-genz.png` |
| 5 | IDEA Lab | `/collaborations/idea-lab.png` |
| 6 | TASK | `/collaborations/task.png` |
| 7 | MANUU | `/collaborations/manuu.png` |
| 8 | ICFAI University | `/collaborations/icfai.png` |
| 9 | University of Hyderabad | `/collaborations/university-of-hyderabad.png` |
| 10 | ASTI Academy, Dubai | `/collaborations/asti-academy.png` |
| 11 | Lords Skill Academy | `/collaborations/lords-skill-academy.png` |
| 12 | Siasat Daily | `/collaborations/siasat-daily.png` |

Folder — pre-create `public/collaborations/` with a `README.md` (naming convention, prefer transparent PNG or SVG, ~200px tall, trimmed whitespace) and `_placeholder.svg`. Same `onError` fallback behaviour as workshop photos so missing logos never break the strip.

The six poster logos (AICTE, IIC, Sphoorthy, Cyber Genz, IDEA Lab, TASK) can be extracted from `assets/poster-source.png` — they sit in the header band across the top.

### 8. `CentreOfExcellence.tsx`

Full-bleed dark navy band, two columns:

**Left — Centre of Excellence in Cybersecurity**
Dr. Shuttari is working towards establishing a Centre of Excellence in Cybersecurity to provide industry-recognised certifications, hands-on internships, and placement assistance in Cybersecurity, AI, and Data Science.

**Right — With Support of Placement Cell**
*Bridging Skills. Building Careers.*

Gold vertical rule between columns on desktop; stacked on mobile.

### 9. `Footer.tsx`

Small logo mark, `Cyber Battalion`, `Knowledge · Awareness · Protection`, `© 2026 Dr. Sara Shuttari`, gold top rule.

## Data model

`src/data/workshops.ts`:

```ts
export type Workshop = {
  id: string;
  slug: string;        // must match the folder name under public/workshops/
  name: string;
  college: string;
  date: string;        // ISO "2026-07-31"
  location: string;    // "Hyderabad, Telangana"
  attendees: number;
  topics: string[];    // ["Ethical Hacking", "AI Security"]
  photos: string[];    // ["/workshops/<slug>/01.jpg", "/workshops/<slug>/02.jpg"]
};

export const workshops: Workshop[] = [ /* 40 entries */ ];
```

Seed with **40 realistic placeholder entries** — plausible Hyderabad/Telangana engineering colleges, cybersecurity/AI workshop titles, dates spread across 2023–2026, attendee counts 45–220. Each entry's `photos` should point at 3–4 files in its own slug folder. Mahmood will overwrite with real data later.

## Photo folder structure

Pre-create all 40 slug folders so photos can be dropped in with no code changes:

```
public/
├─ logo.png
├─ sara.png
└─ workshops/
   ├─ README.md
   ├─ _placeholder.svg
   ├─ 01-<slug>/
   │  ├─ 01.jpg          ← first photo is the cover
   │  ├─ 02.jpg
   │  └─ 03.jpg
   ├─ 02-<slug>/
   └─ … 40 total
```

Folder name === the entry's `slug`. Write `public/workshops/README.md` documenting: naming convention, that `01.jpg` is the cover, recommended size (~1600px wide, JPEG), and that missing files fall back to `_placeholder.svg`.

**Missing-photo handling:** `next/image` with an `onError` fallback to `_placeholder.svg` (a maroon tile with the crest mark), so an incomplete folder never breaks the layout. Use `unoptimized` or configure `images` appropriately for local static files.

## Verification

- [ ] `npm run build` passes clean
- [ ] `npm run lint` passes
- [ ] Pagination: all 8 pages reachable, counts correct, filter resets to page 1
- [ ] Lightbox: keyboard nav, Esc, focus restore, scroll lock
- [ ] Responsive at 375 / 768 / 1440
- [ ] Missing photos render placeholders, not broken images
- [ ] Marquee loops seamlessly with no visible jump; pauses on hover; static under `prefers-reduced-motion`
- [ ] Metadata / OG tags resolve against `https://cyberbetallion.com`
- [ ] Lighthouse a11y ≥ 95

## Decisions already made (don't re-ask)

- Light professional palette, not dark cyber
- Sections: Hero, About/Bio, Highlights, Centre of Excellence, Footer — **no contact form**
- Logo in navbar/hero/footer + cropped real photo in About
- App Router + TypeScript
- Workshops expand **inline below the grid** (not a modal, not a separate route)
- Thumbnail strip + lightbox (not single cover)
- 40 placeholder entries seeded now
- Extra fields: date, location, attendees, topic tags
- Brand text is **"Cyber Battalion"** (logo spelling), domain is **cyberbetallion.com** — this mismatch is deliberate
- Collaborations section sits between Highlights and Centre of Excellence
- Marquee is pure CSS infinite auto-scroll, pause on hover — no carousel library
