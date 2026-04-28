# Data model

All product information is a static, in‑repo TypeScript constant.
There is no database, no CMS, no fetch layer.

## Shape

```ts
// src/data/solutionData.ts
export interface SolutionItem {
  id: string;                       // URL slug, must be unique across ALL arrays
  shortname: string;                // Compact label for nav dropdown / chips
  name: string;                     // Full English name
  nameKorean: string;               // Full Korean name
  description: string;              // Long English blurb (currently unused in UI)
  specifications?: string[];        // Bullet list, English
  specificationsKorean?: string[];  // Bullet list, Korean
  images?: string[];                // Filenames inside /public/img/<category>/
}
```

Three arrays, one per nav category:

- `equipmentData`     → routes under `/equipment/:id`
- `enproductiveData`  → routes under `/enproductive/:id`
- `encycleData`       → routes under `/encycle/:id`

Plus one helper:

```ts
export const getSolutionItem = (id: string): SolutionItem | undefined
```

It searches **all three arrays**, so duplicate `id`s across categories
will collide silently — keep IDs globally unique.

## Adding a new product

1. Drop the image(s) into `public/img/<category>/<filename>.png`.
2. Append an item to the matching array in `solutionData.ts`:
   ```ts
   {
     id: 'kebab-case-unique-slug',
     shortname: 'Short label',
     name: 'Full English name',
     nameKorean: '한국어 이름',
     description: '…',
     specifications: ['Spec 1', 'Spec 2'],
     specificationsKorean: ['스펙 1', '스펙 2'],
     images: ['filename.png'],   // first entry doubles as the nav thumbnail
   }
   ```
3. Verify:
   - Hover the relevant nav category — your item appears in the
     dropdown with the thumbnail.
   - Click it — the detail page renders at `/<category>/<id>`.
   - Toggle EN/KO — both languages render their own copy.

No code changes needed beyond `solutionData.ts` + `public/img/`.

## Renaming a product

- Changing `id` is a breaking URL change. If the old URL is shared
  externally, add a redirect (`vercel.json` `rewrites` or an explicit
  React Router redirect).
- `shortname`, `name`, `nameKorean`, specs are pure content — change
  freely.

## Removing a product

Delete the array entry **and** the unused images under
`public/img/<category>/`. Vite copies whatever's in `public/` straight
into `dist/`, so leftover images bloat the bundle.

## Image conventions

- Format: PNG (no JPEG/WebP/AVIF in the repo today).
- The first entry of `images[]` is the nav‑dropdown thumbnail (4:3
  container, `object-contain`).
- The detail page (`SolutionCards`) renders all entries in `images[]`
  full‑width, in order.
- Filenames may contain Korean characters; both filesystem and Vite
  cope, but URL‑encoding can be brittle. Prefer ASCII filenames for
  new additions.
