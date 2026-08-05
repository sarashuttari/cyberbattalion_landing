# Workshop Photos

Each workshop in `src/data/workshops.ts` has a `slug` (e.g. `40-sphoorthy-engineering-college`)
that must exactly match a folder name here.

## Naming convention

```
public/workshops/
└─ <slug>/
   ├─ 01.jpg   ← cover photo (used as the thumbnail strip's first image)
   ├─ 02.jpg
   ├─ 03.jpg
   └─ 04.jpg
```

- Files are numbered `01.jpg`, `02.jpg`, `03.jpg`, ... in the order they should appear.
- `01.jpg` is always the cover — it's what shows first in the thumbnail strip and lightbox.
- A workshop's `photos` array in `workshops.ts` lists the exact paths to use; add or
  remove entries there to match however many photos you drop in a folder.

## Recommended size

~1600px wide, JPEG, reasonably compressed (aim for under ~400KB per photo).

## Missing photos

Folders are pre-created for all 40 workshops but start empty. Any photo that fails to
load automatically falls back to `_placeholder.svg` (a maroon tile with the crest mark),
so an incomplete folder never breaks the layout — just drop real photos in as you get them.
