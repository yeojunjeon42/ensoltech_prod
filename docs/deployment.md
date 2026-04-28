# Deployment

Two targets are configured. Vercel is primary; GitHub Pages is a
fallback.

## Vercel (primary)

- Connected to the GitHub repo. Pushes to `master` deploy
  automatically; PRs get preview URLs.
- `vercel.json` rewrites every path to `/index.html` so React Router
  handles `/equipment/:id` etc. on the client.
- Environment variables (set in the Vercel dashboard, **not** in the
  repo):
  - `VITE_WEB3FORMS_ACCESS_KEY` — required for the contact form.
- Build command: `npm run build`. Output dir: `dist/`.

If the contact form silently fails in production, the env var is the
first place to look.

## GitHub Pages (secondary)

```bash
npm run deploy   # = predeploy (build) + gh-pages -d dist
```

`postbuild` writes an empty `dist/.nojekyll` so GitHub Pages doesn't
strip files starting with an underscore. The deploy script publishes
`dist/` to the `gh-pages` branch.

`package.json` has `"homepage": "."` (relative paths) — do not
hard‑code an absolute base URL in `vite.config.ts`. The commented‑out
`base: '/ensoltech_prod/'` line is intentionally disabled; leave it
that way unless you're committing to GitHub Pages as the *only* host.

## Image assets

`public/img/{equipment,enproductive,encycle}/*.png` is copied verbatim
to `dist/img/` by Vite. Filenames are referenced as strings from
`src/data/solutionData.ts`, so renaming an image file means updating
`solutionData.ts` too.

## Things that will silently break a deploy

- Forgetting `VITE_WEB3FORMS_ACCESS_KEY` (contact form 403s).
- Adding a route in `App.tsx` and forgetting to update
  `SolutionCards.getImageCategory()` (images 404 on the new route).
- Renaming an image without updating `solutionData.ts`.
- Re‑enabling `base: '/ensoltech_prod/'` in `vite.config.ts` while
  deploying to Vercel (every asset 404s).
