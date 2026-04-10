# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ensoltech production website — a bilingual (EN/KO) corporate site showcasing three solution categories: Equipment, Enproductive, and Encycle. Built with React 18 + TypeScript + Vite + Tailwind CSS 4, deployed to Vercel (with GitHub Pages as secondary).

## Commands

```bash
npm run dev          # Vite dev server on port 3000
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm run deploy       # Deploy to GitHub Pages (runs build + gh-pages)
```

No test runner is configured.

## Architecture

**Routing**: React Router v6 in `App.tsx`. Three dynamic solution routes (`/equipment/:id`, `/enproductive/:id`, `/encycle/:id`) plus a home route. Vercel rewrites all paths to `index.html` for SPA support (`vercel.json`).

**Data layer**: All product data is static in `src/data/solutionData.ts` — three arrays (`equipmentData`, `enproductiveData`, `encycleData`) with ~24 items total. `getSolutionItem(category, id)` does lookups. Each item has bilingual `name`/`nameKorean`, `description`, `specifications`, and image paths.

**i18n**: `src/contexts/LanguageContext.tsx` provides a React Context toggle between `"en"` and `"ko"`. Components read language state via `useLanguage()` hook and conditionally render Korean/English content.

**Page transitions**: `AnimatedRoute` wraps route content with Framer Motion fade (opacity 0→1, 0.3s).

**Contact form**: `Contact.tsx` posts to Web3Forms API. Access key comes from `VITE_WEB3FORMS_ACCESS_KEY` env var.

**Styling**: Tailwind CSS 4 via Vite plugin. Brand color `#2694BF` defined as CSS custom property in `src/styles/styles.css`. Poppins font loaded globally.

## Environment Variables

Copy `.env.example` to `.env` and set:
- `VITE_WEB3FORMS_ACCESS_KEY` — required for contact form

## Static Assets

Product images live in `public/img/{equipment,enproductive,encycle}/` and are referenced by path strings in `solutionData.ts`.
