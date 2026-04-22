# Nav dropdown thumbnails

The three solution dropdowns in the top navigation (Equipment, EnProductive,
EnSave) show a thumbnail image beneath each item so users can scan the
catalog visually. This doc covers where the images come from and how to
add or change one.

## Source of the thumbnail

`SolutionDropdown` (`src/components/SolutionDropdown.tsx`) renders each
item in the dropdown grid as a `<Link>` containing:

1. English `shortname`
2. Korean `nameKorean`
3. Thumbnail: first entry of the item's `images` array (if present)

The image URL is built by stripping the slashes from `routePrefix` and
using that as the folder under `/public/img/`:

```
src = `/img/${folder}/${item.images[0]}`
// e.g. routePrefix "/enproductive/" + images[0]="1-1.png" -> /img/enproductive/1-1.png
```

## Adding or changing an image

1. Drop the PNG into `public/img/<category>/` (folders: `equipment`,
   `enproductive`, `encycle`).
2. Reference it in `src/data/solutionData.ts` under the relevant item's
   `images` array. The first entry in that array is the nav thumbnail.
3. No sizing work needed — the thumbnail container is a fixed 4:3
   aspect ratio with `object-contain`, so images of any shape render
   consistently.

## Styling contract

- Container: `aspect-[4/3]` + `rounded-md` + subtle border.
- Image: `object-contain` so logos/wide equipment shots aren't cropped
  awkwardly.
- Hover: the image scales to 1.05 via the parent's `group-hover` state.

Keeping these invariants means adding a new item does not require any
CSS changes.

## Visual verification

Run `node tests/screenshot-nav.cjs` (with `npm run dev` running) to
generate PNGs of each dropdown at 1440px and 1024px. See
[`tests/README.md`](../tests/README.md) for details.
