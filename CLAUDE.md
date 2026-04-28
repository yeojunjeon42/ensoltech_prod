# CLAUDE.md

Operating manual for Claude Code (and any other coding agent) working
on this repo. This is the project's *harness*: the rules that stay
true across sessions. Component‑level details live in
[`/docs`](docs/README.md) — read the doc that matches your task before
editing.

## What this repo is

Ensoltech corporate site — a bilingual (EN / KO) marketing SPA for a
Korean industrial equipment supplier. Static product data, no backend
except a Web3Forms endpoint for the contact form.

Stack: **React 18 + TypeScript + Vite 7 + Tailwind 4 + Framer Motion**.
Hosted on Vercel (primary) and GitHub Pages (secondary).

## Commands you can trust

```bash
npm run dev          # Vite dev server on :3000
npm run build        # Production build to dist/
npm run preview      # Serve dist/ locally
npm run deploy       # Build + push dist/ to gh-pages branch
npm run test:visual  # Puppeteer screenshots of nav dropdowns

npx tsc --noEmit --pretty false   # Type check
```

There is **no** unit/E2E test runner, lint script, or formatter wired
into `package.json`. Don't fabricate one in error messages.

## Verification loop (the sensors)

A change is not "done" until these pass, in order:

1. `npx tsc --noEmit --pretty false`
2. `npm run build`
3. Eyeball the affected screen at **320 / 375 / 768 / 1024 / 1440** in
   `npm run dev`.
4. `npm run test:visual` if the change touches `Navbar` /
   `SolutionDropdown`.

If a sensor cannot run (sandbox, no browser, missing env), **say so
explicitly** in your final summary instead of claiming success.

Pre‑existing TypeScript noise (do not "fix" in unrelated PRs):

- `src/App.tsx:1` — unused `React` import.
- `src/components/SolutionDropdown.tsx:43` — unused `e` parameter.

## Hard boundaries

These are central, project‑wide rules. Don't cross them without an
explicit user request:

- **No state libraries.** No Redux / Zustand / TanStack Query / SWR.
  All state is local React state + the language `Context`.
- **No new CSS frameworks / component libraries.** Tailwind 4 + the
  CSS variables in `src/styles/styles.css` is the system. See
  [`docs/styling.md`](docs/styling.md).
- **No i18n library.** Two languages, hand‑rolled via `useLanguage()`.
  See [`docs/i18n.md`](docs/i18n.md).
- **Don't break the route ↔ image folder mapping.** `SolutionCards`
  derives the image folder from the URL prefix; new routes need
  matching updates in `getImageCategory()`.
- **Don't re‑enable** `base: '/ensoltech_prod/'` in `vite.config.ts`.
  Vercel is the primary host and that line breaks every asset path.
- **Don't commit `.env`** or hard‑code the Web3Forms key.

Inside those lines you have local autonomy — refactor, restyle, swap
implementations as long as observable behaviour and the public surface
hold.

## Bundle and performance budgets

Per `.claude/rules/web/performance.md`:

| Metric | Target |
|--------|--------|
| Landing‑page JS (gzipped) | **< 150 kB** (current ~109 kB) |
| LCP | < 2.5 s |
| INP | < 200 ms |
| CLS | < 0.1 |

If a new dependency would push you near the JS budget, dynamic‑import
it instead.

## Where to read next

| Task | Doc |
|------|-----|
| Understand the runtime | [`docs/architecture.md`](docs/architecture.md) |
| Run / build / verify | [`docs/development.md`](docs/development.md) |
| Ship | [`docs/deployment.md`](docs/deployment.md) |
| Add or edit a product | [`docs/data-model.md`](docs/data-model.md), [`docs/recipes.md`](docs/recipes.md) |
| Bilingual copy | [`docs/i18n.md`](docs/i18n.md) |
| Tailwind / tokens / motion | [`docs/styling.md`](docs/styling.md) |
| Common change recipes | [`docs/recipes.md`](docs/recipes.md) |
| Agent‑specific rules | [`docs/agent-guide.md`](docs/agent-guide.md) |
| Existing rule bundles | [`.claude/rules/`](.claude/rules/) |

## Working style

- **Editing > creating.** Prefer editing existing files; this codebase
  is small and lives in `src/components/`.
- **Comments only when WHY isn't obvious.** Don't restate WHAT the
  code does. The docs are the right place for context that would
  otherwise rot in a comment.
- **One‑sentence end‑of‑turn summary.** What changed, what's next.
- **Surface unverified claims.** If you couldn't run the build, say so
  rather than asserting "tests pass".
- **Update the docs in the same PR** when you change an invariant. The
  harness drifts from the code only if you let it.

## Conventional commits

```
<type>: <short description>

<optional body>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`,
`ci`. Don't sign commits with the AI co‑author footer — the global
attribution rule already disables it.
