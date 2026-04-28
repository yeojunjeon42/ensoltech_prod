# Styling

Tailwind CSS 4 + a small set of CSS custom properties. No CSS modules,
no styled‑components.

## Stack notes

- Tailwind 4 is wired through the official Vite plugin
  (`@tailwindcss/vite`) — see `vite.config.ts`.
- Content sources are `index.html` and `src/**/*.{js,ts,jsx,tsx}` per
  `tailwind.config.js`. Class strings built from template literals are
  fine; classes hidden behind runtime concatenation may not get
  scanned.
- Global styles live in `src/styles/styles.css`. That file imports
  Tailwind, defines design tokens, and holds a few hand‑written
  utilities (see below).

## Design tokens

CSS variables in `:root` (`src/styles/styles.css`). Use these instead
of hard‑coding hex values:

| Variable | Value | Use |
|----------|-------|-----|
| `--color-primary` | `#2694BF` | Brand accent |
| `--color-primary-dark` | `#246CA6` | Buttons, primary CTAs |
| `--color-primary-darkest` | `#243773` | Reserved (dark backgrounds) |
| `--color-accent` | `#1BA2D8` | Highlights |
| `--bg-dark` | `#0D0D0D` | Footer / dark hero (if used) |
| `--border-color` | `#e5e7eb` | Form inputs, dividers |
| `--shadow-{sm,md,lg}` | … | Standard elevation steps |
| `--transition-duration-{fast,normal,slow}` | 150ms / 300ms / 500ms | Motion timing |

Apply via inline `style={{ backgroundColor: 'var(--color-primary-dark)' }}`
or in a `styles.css` rule. The Tailwind palette is also available; the
brand blue does **not** map cleanly to Tailwind's `blue-*`, so prefer
the variable for brand surfaces.

## Custom utilities (in `styles.css`)

| Class | Purpose |
|-------|---------|
| `.snap-rail` | Horizontal CSS scroll‑snap rail (used by `Carousel.tsx`) |
| `.eyebrow-num` | Tabular‑nums + wide letter‑spacing for `01 / 02` editorial labels |
| `body[data-scroll-locked='true']` | Locks scroll while the mobile drawer is open |
| `.fade-*` keyframe classes | Pre‑existing; route fade is now handled by Framer Motion in `AnimatedRoute.tsx` |

## Responsive policy

- **Mobile‑first.** Author for narrow viewports, then add `sm:` (640),
  `md:` (768), `lg:` (1024) overrides.
- The desktop nav is gated on `lg:`; below that, the hamburger drawer
  is the only navigation.
- Fluid type via `clamp()` is used for the hero
  (`text-[clamp(2.5rem,8vw,4.5rem)]`). Prefer `clamp` when a single
  knob would otherwise need three breakpoints.
- Breakpoints to spot‑check: **320 / 375 / 768 / 1024 / 1440** (per
  `.claude/rules/web/testing.md`).

## Animation rules

- Animate **transform**, **opacity**, **clip‑path**, sparingly **filter**.
- Avoid animating layout properties (`width`, `height`, `top`,
  `margin`, `padding`, `font-size`).
- Framer Motion handles route fades and the drawer; native CSS
  transitions handle small UI states (hover, focus, active).
- The carousel auto‑advances every **4500 ms** and pauses for **4 s**
  after any pointer interaction. Adjust constants in `Carousel.tsx`.

## Anti‑patterns to avoid

- **Default Tailwind‑template look.** Uniform card grids, centered
  hero with a gradient blob, identical radii and shadows on
  everything. See `.claude/rules/web/design-quality.md`.
- **Inline pixel values** that should be tokens (e.g. hard‑coded
  `#246CA6` instead of `var(--color-primary-dark)`).
- **Class‑name concatenation** that defeats Tailwind's scanner
  (`'p-' + n` won't generate `p-4`). Use a fixed lookup table or
  `clsx`/`classnames` with whole class names.
