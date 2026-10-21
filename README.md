# BetterRamon.org

A community-built, independent transparency portal for the Municipality of **Ramon, Isabela** (Region II – Cagayan Valley), part of the [BetterGov.ph](https://bettergov.ph) Better LGU initiative. It is not an official LGU website.

Status: 🔵 Planned / early development. Registered in the [BetterLGU Directory](https://lgu.bettergov.ph).

## Stack

- Next.js 15 (App Router, static export), React 18, TypeScript
- Plain CSS in `public/assets/css`, Bootstrap Icons, Inter font
- English and Filipino UI strings in `src/contexts/LanguageContext.tsx`

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Where the data lives

All facts about Ramon are in [`src/data/ramon.ts`](src/data/ramon.ts): stats, barangays, officials, contact details and hotlines.

- Use public sources only (PSA, PhilAtlas, DOF-BLGF, COA, the LGU's official pages) and note the source next to the value.
- Leave a value `null` until it is verified. The site shows "To be verified" instead of guessing.
- Hotlines with no verified number are hidden from the hotline bar.

## Project structure

```
src/
  app/            pages (home, services/health)
  components/     header, footer, hotline bar, info bar, PWA
  contexts/       language switcher and UI translations
  data/ramon.ts   all Ramon-specific facts
public/
  assets/         CSS and logos
  sw.js           offline service worker
  offline.html    offline fallback page
```

## Deploy (free)

The build is a static site in `out/`, so any static host works.

- **Cloudflare Pages:** build command `npm run build`, output directory `out`.
- **Vercel:** import the repository; it detects Next.js automatically.
- **GitHub Pages:** publish the `out/` folder.

Set `SITE_URL` (default `https://betterramon.org`) if the site is served from another domain.

## Contributing

Issues and pull requests are welcome, especially verified data for `src/data/ramon.ts`. Keep the site independent, accurate and free of personal or non-public information.

## Credits and license

Based on [BetterSolano.org](https://github.com/BetterSolano/bettersolano) by Ramon Logan Jr., used under the MIT License. This project is also MIT-licensed; see [LICENSE](LICENSE).

Population and place data from [PhilAtlas](https://www.philatlas.com/luzon/r02/isabela/ramon.html), citing the PSA 2020 Census of Population and Housing.
