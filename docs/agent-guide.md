# Agent guide

Rules for AI coding agents (Claude Code, Codex CLI, Cursor, etc.)
working on this repo. Consider this your *harness*: the durable
context that survives across sessions and limits how badly a wrong
turn can damage the codebase.

## Read this first

1. [`/CLAUDE.md`](../CLAUDE.md) — central rules of the road.
2. [`architecture.md`](architecture.md) — ten‑minute mental model of
   the app.
3. The doc that matches your specific task (recipes, data model,
   styling).

If your task touches more than one of those areas, read all of them
before editing.

## Boundaries (do not cross without explicit user approval)

- **Don't introduce a state library or data‑fetching client.** The
  product data is static; reaching for Redux / Zustand / TanStack
  Query is over‑engineering for this surface area.
- **Don't add a CSS framework or component library** (shadcn,
  Material, Chakra). Tailwind 4 + design tokens is the system.
- **Don't break the route ↔ image folder mapping.** `SolutionCards`
  derives the image folder from the URL prefix; if you add a route,
  update `getImageCategory()` in the same change.
- **Don't enable `base: '/ensoltech_prod/'`** in `vite.config.ts` while
  Vercel is the primary host. Every asset 404s.
- **Don't push to `master` directly.** PR or feature branches only.
- **Don't commit `.env`** or hard‑code `VITE_WEB3FORMS_ACCESS_KEY`.

Inside those lines you have wide local autonomy — refactor, restyle,
swap implementations as long as the behaviour and the public surface
hold.

## Verification loop

The agent isn't done until these pass. Run them in order:

```bash
npx tsc --noEmit --pretty false   # type sensor
npm run build                     # build sensor (catches Tailwind / plugin breaks)
npm run dev                       # eyeball the affected screens
```

For nav / dropdown changes, also:

```bash
npm run test:visual               # Puppeteer screenshots at 1024 / 1440
```

If you cannot run a sensor (sandbox restriction, missing browser),
**say so explicitly** in your final summary. Do not claim success on
unverified work.

## Pre‑existing TypeScript noise

`npx tsc --noEmit` will complain about:

- `src/App.tsx:1` — unused `React` import.
- `src/components/SolutionDropdown.tsx:43` — unused `e` parameter.

These predate your edits. Don't fix them in unrelated PRs (touching
those files for a one‑word change drags in extra review burden); do
clean them up if your task already opens those files.

## Mobile budget

The site has a 150 kB gzipped JS budget for the landing page (per
`.claude/rules/web/performance.md`). Current bundle is ~109 kB
gzipped. Adding a heavy dependency that pushes you near the budget is
a signal to dynamic‑import it instead.

Always test changes at **320 / 375 / 768 / 1024 / 1440** — that's the
breakpoint set for this codebase.

## When in doubt

- Prefer **editing existing files** over creating new ones.
- Prefer **CSS variables** over hex literals.
- Prefer **inline ternaries / a `COPY` object** over an i18n library.
- Prefer **native scroll‑snap** over JS transform sliders.
- Prefer **deleting code** over adding feature flags.
- Prefer **a one‑line summary** over a five‑bullet status.

If the task is ambiguous, write the change you'd actually defend in
review and call out the assumption in your summary.
