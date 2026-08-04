# Gallery Photos

`src/data/gallery.ts` lists 10 placeholder slots pointing at `/gallery/01.jpg`
through `/gallery/10.jpg`. Drop real photos in here using that naming, or
edit `gallery.ts` to add/remove/rename entries (each just needs a unique
`id` and `src`; `caption` is optional).

## Recommended size

~1600px on the long edge, JPEG, reasonably compressed.

## Missing photos

Any photo that fails to load falls back to `_placeholder.svg` automatically,
so an incomplete set never breaks the layout.
