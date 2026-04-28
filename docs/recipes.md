# Recipes

Step‑by‑step playbooks for the changes that actually happen in this
repo.

## Add a new product to a category

1. Drop the image(s) into `public/img/<category>/<file>.png`
   (`equipment` | `enproductive` | `encycle`).
2. Append an entry to the matching array in
   `src/data/solutionData.ts`. See [`data-model.md`](data-model.md) for
   the required fields. The first `images[]` entry doubles as the
   nav‑dropdown thumbnail.
3. `npm run dev` → hover the relevant nav category → confirm the
   thumbnail and label render → click through to the detail page.
4. Toggle EN/KO in the navbar to confirm both `name` and `nameKorean`
   render correctly.

## Add a new image to an existing product

1. Drop the file into `public/img/<category>/`.
2. Append the filename to that item's `images: [...]` array.
3. The detail page renders the array in order; reorder the array if
   you want a different lead image.
4. **If you want to change the nav thumbnail**, put the new file
   *first* in the array.

## Change the brand colour

1. Update the relevant CSS variable in `src/styles/styles.css`
   (typically `--color-primary-dark` for buttons / CTAs).
2. Grep for any leftover hard‑coded hex values and replace them with
   the variable. Brand blue used to be `#2694BF`; legacy literals may
   linger in components.
3. Re‑run the visual harness (`npm run test:visual`) to spot‑check.

## Add a new top‑level nav category

This one touches more than data — work through every step:

1. Define the data: a new `xxxData: SolutionItem[]` export in
   `solutionData.ts`. Make sure IDs don't collide with existing ones
   (`getSolutionItem` searches across all arrays).
2. Add the route in `App.tsx`:
   ```tsx
   <Route path="/<slug>/:id" element={<AnimatedRoute><SolutionCards /></AnimatedRoute>} />
   ```
3. Update `Navbar.tsx`: add an entry to `CATEGORIES` (mobile drawer)
   and an instance of `<SolutionDropdown>` (desktop) using the new
   data array, title, Korean title, and route prefix.
4. Update `SolutionCards.getImageCategory()` to recognise the new
   pathname prefix and return the matching folder name.
5. Create `public/img/<slug>/` and add the images.
6. Verify: hover the new nav item, click into a product, toggle EN/KO,
   and run `npm run test:visual` (it screenshots all dropdowns).

## Change the contact form recipient or fields

The form posts JSON to `https://api.web3forms.com/submit`. To change
the recipient, update the access key in the Web3Forms dashboard — not
the repo. To add a field:

1. Add it to the `FormData` interface and `useState` initial value in
   `Contact.tsx`.
2. Add the labelled input following the existing pattern (label →
   input → `INPUT_CLASSES`).
3. Add the bilingual copy to the `COPY` object.
4. Include the new field in the `body` of the `fetch()` call.

## Change route fade timing

`AnimatedRoute.tsx` wraps each route in a Framer Motion fade.
Duration / easing live there. Keep changes small (≤300 ms) — long
fades feel sluggish on mobile.

## Update a hard invariant

If you change something this `/docs` folder calls an "invariant", also
update the doc. The doc is the harness — drift is worse than absence.
