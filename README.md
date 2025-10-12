
# Ely Portfolio Pro (Bilingual: EN + HE)

A professional, energetic bilingual portfolio built with **Next.js (App Router)** and **Tailwind CSS**. 
Locale segment (`/en`, `/he`) with JSON message dictionaries and RTL/LTR support.

## Quickstart

```bash
npm i
npm run dev
```

Open: http://localhost:3000

## Structure
- `app/[locale]/*` — Pages per locale (EN/HE)
- `messages/*.json` — Translation dictionaries
- `components/*` — Navigation, language switch
- `lib/i18n.ts` — Locale helpers
- `middleware.ts` — Redirect `/` to `/en`

## Customize
- Replace brand title in `components/NavBar.tsx`
- Update text in `messages/en.json` and `messages/he.json`
- Add your `cv.pdf` to `/public/` for the CV button
- Extend projects on `app/[locale]/projects/page.tsx`
