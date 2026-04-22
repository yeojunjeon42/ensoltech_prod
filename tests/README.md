# Tests

Visual regression screenshots for the Ensoltech site.

## Nav dropdown thumbnails

`screenshot-nav.cjs` opens each navbar dropdown (Equipment, EnProductive,
EnSave) at 1440px and 1024px widths, then writes a PNG into
`tests/screenshots/` for each combination. Use it to visually verify the
thumbnail grid after changes to the nav dropdown.

### Run

```bash
npm run dev          # in one terminal
node tests/screenshot-nav.cjs   # in another
```

The script uses `puppeteer-core` against a pre-installed Chromium at
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Override via
`BASE_URL=http://... node tests/screenshot-nav.cjs` to target a different
server (e.g. a preview deploy).

### Output

- `home-<viewport>.png` — baseline home page
- `dropdown-<equipment|enproductive|encycle>-<viewport>.png` — dropdown open
