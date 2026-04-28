# Development

How to run and verify changes locally.

## First‑time setup

```bash
nvm use 18           # or any Node ≥18
npm install
cp .env.example .env # set VITE_WEB3FORMS_ACCESS_KEY for the contact form
```

The contact form silently fails without `VITE_WEB3FORMS_ACCESS_KEY`,
but every other page works fine without it.

## Daily commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server on `http://localhost:3000` (HMR) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve `dist/` locally to sanity‑check the build |
| `npm run deploy` | Build + push `dist/` to the `gh-pages` branch |
| `npm run test:visual` | Puppeteer screenshots of nav dropdowns at 1024 / 1440 |
| `npx tsc --noEmit --pretty false` | Type‑check the whole project |

There is no `npm test` and no linter wired into `package.json`.

## Verification loop (the harness sensors)

When changing code, the agent‑friendly verification loop is:

1. `npx tsc --noEmit --pretty false` — pure type check.
2. `npm run build` — catches Tailwind / Vite‑plugin issues type check
   misses.
3. `npm run dev` and check the affected screen at 320 / 375 / 768 /
   1024 / 1440 widths.
4. `npm run test:visual` if the change touches `Navbar` or
   `SolutionDropdown` — see [`tests/README.md`](../tests/README.md).

A change is **not** "done" until at least step 1 and step 2 pass.

### Known pre‑existing TypeScript warnings

`noUnusedLocals` flags two things you didn't break:

- `src/App.tsx` — `'React' is declared but its value is never read`
- `src/components/SolutionDropdown.tsx:43` — unused `e` parameter

Don't try to "fix" these in unrelated PRs — they're load‑bearing for
the legacy JSX transform / desktop dropdown signature. If you're
already editing those files, clean them up; otherwise leave them.

## Hot reload gotchas

`vite.config.ts` enables `server.watch.usePolling: true` so HMR works
inside containers and on networked filesystems. On bare metal this is
slower than inotify but harmless. Don't remove it without checking that
the docker / Vercel preview workflow still picks up changes.

## Adding a dependency

1. `npm install <pkg>` — npm only; no pnpm / yarn lockfiles in this
   repo.
2. Confirm the gzipped JS bundle stays under the **150 kB landing‑page
   budget** documented in `.claude/rules/web/performance.md`.
3. Re‑run the verification loop above.
