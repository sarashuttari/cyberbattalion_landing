# Team Photos

`src/data/team.ts` lists each member with a `photo` path like
`/team/abdul-sameer.jpg`. Drop a photo in here using that exact filename
and it'll replace the initials avatar automatically.

## Recommended size

A square-ish headshot, ~400px, JPEG.

## Missing photos

Any photo that fails to load falls back to a circular initials avatar (see
`TeamAvatar.tsx`), so an incomplete set never breaks the layout.
