# Ely Asaf - Bilingual Portfolio (EN/HE)

Live: https://ely-portfolio.vercel.app

A crisp, bilingual (English/Hebrew) Next.js portfolio with RTL support, Tailwind styling, and dynamic project pages.

## Tech
- Next.js (App Router), TypeScript
- Tailwind CSS, Framer-ready
- i18n by locale segment `/en` `/he` + JSON dictionaries
- RTL support, Heebo for Hebrew

## Develop
```bash
npm i
npm run dev
```

## Structure
- `app/[locale]/*` - Pages per locale (EN/HE)
- `messages/*.json` - Translation dictionaries
- `components/*` - Navigation, language switch
- `lib/i18n.ts` - Locale helpers
- `middleware.ts` - Redirect `/` to `/en`
