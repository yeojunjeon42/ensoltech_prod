# Ensoltech Docs

Reference material for humans and agents working on this repo. Read
[`/CLAUDE.md`](../CLAUDE.md) first for the high‑level rules of the road,
then dive into the doc that matches your task.

## Map

| File | When to read |
|------|--------------|
| [`architecture.md`](architecture.md) | Understand routing, layout, and data flow |
| [`development.md`](development.md) | Run, build, type‑check, visual‑test locally |
| [`deployment.md`](deployment.md) | Ship to Vercel or GitHub Pages |
| [`data-model.md`](data-model.md) | Add or modify a solution item |
| [`i18n.md`](i18n.md) | Add or change bilingual copy |
| [`styling.md`](styling.md) | Design tokens, Tailwind, responsive rules |
| [`recipes.md`](recipes.md) | Step‑by‑step recipes for common changes |
| [`agent-guide.md`](agent-guide.md) | Harness rules for AI coding agents |
| [`nav-dropdown-thumbnails.md`](nav-dropdown-thumbnails.md) | Nav thumbnail contract |

## Doc style

- Each doc opens with a one‑sentence purpose statement.
- Treat every snippet as runnable, not illustrative — broken commands
  break the agent's verification loop.
- Link to source files with relative paths (`src/components/Navbar.tsx`)
  so callers can jump straight in.
- Don't restate `package.json` scripts; link to them.

## Why this folder exists

These docs are the project's *harness*: the durable context an agent
(or a new contributor) needs to do useful work without reading every
file. Architecture rules live here once and only once; component files
shouldn't carry essay‑length comments restating them.
