# Gallery Photos

Real event photos, organized one subfolder per institution:

```
public/gallery/
├─ lsa/        (10 photos)
├─ mjs/        (9 photos)
├─ liet/       (11 photos)
├─ Spoorthy/   (10 photos — note the capital S, matches the actual folder)
└─ trr/        (5 photos)
```

`src/data/gallery.ts` lists each photo individually with its real
`width`/`height` (read via `sips -g pixelWidth -g pixelHeight <file>`) —
this drives the masonry grid's aspect ratio, so keep it accurate if you
add, remove, or replace a photo. `category` must be one of the values in
`galleryCategories` (`LSA`, `MJS`, `LIET`, `Spoorthy`, `TRR`); add a new
one there (and a new subfolder here) for another tab.

## Adding a new photo

1. Drop the file in the right subfolder.
2. Get its real dimensions: `sips -g pixelWidth -g pixelHeight path/to/file.jpeg`
3. Add an entry to `galleryPhotos` in `gallery.ts` with those exact numbers.

## Missing photos

Any photo that fails to load falls back to `_placeholder.svg` automatically,
so a missing or renamed file never breaks the layout.
