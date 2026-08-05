# Team Photos

`src/data/team.ts` lists each member with a `photo` field. Abdul Sameer,
Zayed Ali, and Shaik Ubaid Ali have real photos already (`Team_sameer.jpeg`,
`Team_zayed.jpeg`, `Team_ubed.jpeg`); Mohan and Roshan still have
`photo: ""`, left empty on purpose — `TeamPhoto.tsx` shows an initials
block for them instead of trying to fetch anything. To add one:

1. Drop the file in here (any name is fine, just keep it unique).
2. Set that member's `photo` field in `team.ts` to `/team/<filename>`.

## Recommended size

A **portrait** photo (roughly 4:5) — the card crops to that aspect ratio
(`object-cover`), so a square or landscape photo will get cropped top/bottom
or left/right. The three already in use are ~1000×1400px JPEGs, a good
reference point.

## Missing photos

Any photo that fails to load falls back to the initials block automatically,
so an incomplete set never breaks the layout.
