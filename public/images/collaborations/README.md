# Collaboration Logos

Each entry in `src/data/collaborations.ts` has a `logo` path pointing here.

## Current partners

- `hma.png` — HMA CyberTech
- `asti-academy.png` — ASTI Academy, Dubai
- `cyverra.png` — Cyverra Global Technologies LLP
- `hcltech.png` — HCLTech
- `lords-skill-academy.png` — Lords Skill Academy

## Adding a new partner

1. Drop a trimmed, reasonably-sized logo (PNG/SVG, ideally transparent
   background) in this folder.
2. Add an entry to `src/data/collaborations.ts` pointing at it.

The marquee renders logos inside a fixed-size box with `object-fit: contain`,
so any aspect ratio works with no code changes.

## Missing-logo handling

Any logo that fails to load falls back to `_placeholder.svg`, so a broken
path never breaks the marquee.
