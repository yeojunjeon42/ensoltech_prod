# Architecture

A bilingual (EN/KO) marketing site for Ensoltech, a Korean industrial
equipment supplier. Single‑page React app, static product data, no
backend except a Web3Forms endpoint for the contact form.

## Stack

| Concern | Choice |
|---------|--------|
| Build | Vite 7 |
| UI | React 18 + TypeScript |
| Routing | React Router v6 (SPA, all paths rewritten to `index.html`) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Animation | Framer Motion |
| Hosting (primary) | Vercel |
| Hosting (secondary) | GitHub Pages via `gh-pages -d dist` |
| Form backend | Web3Forms (`https://api.web3forms.com/submit`) |
| Visual testing | puppeteer‑core + headless Chromium |

## Module map

```
src/
├── main.tsx                     React entry, mounts <App/>
├── App.tsx                      Router + LanguageProvider + AnimatePresence
├── components/
│   ├── Navbar.tsx               Sticky header + mobile drawer (Framer Motion)
│   ├── SolutionDropdown.tsx     Desktop hover dropdown for one category
│   ├── Hero.tsx                 Home eyebrow + headline + intro
│   ├── Carousel.tsx             Native scroll-snap product carousel
│   ├── Contact.tsx              Web3Forms-backed bilingual form
│   ├── Footer.tsx               Address, phone, email, copyright
│   ├── Home.tsx                 Composes Hero + Carousel + Contact
│   ├── SolutionCards.tsx        Detail page for one product (any category)
│   └── AnimatedRoute.tsx        Framer Motion fade wrapper around routes
├── contexts/
│   └── LanguageContext.tsx      'en' | 'ko' toggle (default 'ko')
├── data/
│   └── solutionData.ts          Static product catalog (3 arrays, ~24 items)
├── styles/
│   └── styles.css               Tailwind import + design tokens + utilities
└── vite-env.d.ts                Vite ambient types
```

## Runtime topology

```
index.html
  └─ <RouterProvider>
       ├─ <Navbar />        (sticky, fixed top)
       ├─ <Routes>
       │    ├─ /                       → <Home>
       │    ├─ /equipment/:id          → <SolutionCards>
       │    ├─ /enproductive/:id       → <SolutionCards>
       │    └─ /encycle/:id            → <SolutionCards>
       └─ <Footer />
```

`vercel.json` rewrites every path to `/index.html` so React Router can
take over on the client.

## Data flow

1. All product data is **static, in‑repo, in TypeScript**:
   `src/data/solutionData.ts` exports `equipmentData`,
   `enproductiveData`, `encycleData` and the helper
   `getSolutionItem(id)`.
2. `SolutionCards` reads `:id` from `useParams()` and the category from
   `location.pathname`, then looks up the item.
3. Image URLs are derived from the path:
   `/img/${category}/${item.images[i]}` — files live under `public/img/`.
4. The contact form POSTs JSON to Web3Forms with the access key from
   `VITE_WEB3FORMS_ACCESS_KEY`.

There is no client store, no fetch layer, no backend.

## Routing rules

- Three category prefixes, all sharing one detail component:
  `/equipment/:id`, `/enproductive/:id`, `/encycle/:id`.
- The category is **not** part of the data — `SolutionCards` derives it
  from `location.pathname`. If you add a category, update both the
  routes in `App.tsx` and the `getImageCategory` switch in
  `SolutionCards.tsx`.
- IDs are slug strings (e.g. `horizontal-inline-desmear-pth-flash-cu`).
  They must be unique across **all three** arrays because `getSolutionItem`
  searches all of them.

## Layout invariants

- The `Navbar` is `position: fixed` + `z-50`. Pages use `pt-20 sm:pt-24`
  to clear it. Don't add another fixed bar without re‑computing this.
- `Carousel` uses native CSS scroll‑snap (`.snap-rail` in `styles.css`),
  not JS `transform`. Touch swipe relies on browser scroll.
- The mobile drawer locks body scroll via
  `document.body.dataset.scrollLocked` (CSS handles the lock).

## Styling system

See [`styling.md`](styling.md). Design tokens are CSS custom properties
in `src/styles/styles.css` (`--color-primary-dark` is the brand action
color). Tailwind 4 picks up classes from `index.html` and `src/**/*.tsx`
per `tailwind.config.js`.

## What does NOT exist (don't go looking)

- No Redux / Zustand / TanStack Query — all state is local React state.
- No CSS‑in‑JS — Tailwind utilities + a small `styles.css` only.
- No SSR — Vite SPA only.
- No automated unit tests — only the Puppeteer visual harness in
  `tests/screenshot-nav.cjs`.
- No CMS — product data lives in `solutionData.ts`.
