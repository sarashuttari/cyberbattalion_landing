# Gallery Photos

`src/data/gallery.ts` lists 12 placeholder slots (4 each for LSA, MJS, and
LIET) pointing at `/gallery/01.jpg` through `/gallery/12.jpg`. Drop real
photos in here using that naming, or edit `gallery.ts` to add/remove
entries — each just needs a unique `id`, `src`, `category` (one of `LSA`,
`MJS`, `LIET` — add a new one to `galleryCategories` if you need another
tab), and `width`/`height` matching the real photo's actual pixel
dimensions (this drives the masonry grid's aspect ratio, so set it
correctly rather than leaving the placeholder guess).

## Recommended size

~1600px on the long edge, JPEG, reasonably compressed.

## Missing photos

Any photo that fails to load falls back to `_placeholder.svg` automatically,
so an incomplete set never breaks the layout.
