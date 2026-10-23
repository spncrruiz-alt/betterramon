# BetterRamon.org — notes for Claude Code

Independent, volunteer-run information portal for the Municipality of Ramon, Isabela, part of the BetterGov.ph Better LGU directory. It is **not** the official LGU website; LGU Ramon has no website, only the PIO Facebook page.

- Live: https://betterramon.pages.dev (Cloudflare Pages, project `betterramon`, auto-deploys from `main`; build `npm run build`, output `out`)
- Repo: https://github.com/spncrruiz-alt/betterramon (maintainer @spncrruiz-alt)
- Directory listing: PR jmacj/better-lgu-directory#316 (row says 🟡 Work in Progress)
- Derived from BetterSolano (MIT); keep their copyright line in LICENSE.

## Commands

```bash
npm ci
npm run dev      # http://localhost:3000
npm run check    # self-checks for search and deadlines (scripts/check-search.mts)
npx tsc --noEmit --noUnusedLocals
npm run build    # static export to out/
```

Bump `CACHE_VERSION` in `public/sw.js` whenever CSS, logos or other cached assets change, or returning visitors keep the old version.

## Where things live

- `src/data/ramon.ts` — every Ramon fact (officials, contacts, hotlines, stats, barangays, ordinances, fiscal docs). Single source of truth.
- `src/data/pages.ts` — every page: path, title, icon, description, search keywords. Drives search and sitemap.
- `src/data/pages-i18n.ts` — Filipino and Ilocano page titles and descriptions.
- `src/components/L.tsx` — `<L en fil ilo />` picks text by the selected language; `<Tbv />` renders "To be verified".
- `src/components/PageShell.tsx` — breadcrumb and header for inner pages. `Guide.tsx` — the "Guide only" notice.
- `src/lib/search.ts`, `src/lib/deadlines.ts` — site search and the tax/permit deadline countdown.
- `public/assets/css/theme.css` — the BetterRamon design layer on top of the inherited `style.css`.
- `public/assets/images/home/` — Magat Dam, reservoir and rolling hills photos, CC BY-SA 4.0 by Patrickroque01 (see PHOTO-CREDITS.md; credits are shown on the home page and must stay).

## Content rules (from the maintainer)

- Guides only: the site never takes payments, applications or issues documents. Official receipts and permits come only from LGU offices.
- Dated figures (population, income class, budgets, ordinances) are published only if they are from **2025 or later**.
- Every fact must come from a public source. Unverified values stay `null` and are hidden or shown as "To be verified".
- Do not credit politicians on content (e.g. hotline graphics); use neutral source wording.
- No flood control content.
- No per-field source labels and no "Sources" sections on pages; keep sources in code comments, README and git history.
- Everything is in English, Filipino and Ilocano. The FIL/ILO text is a draft; the maintainer is a native speaker and reviews it.
- No parcel-owner or personal data, even if public somewhere.

## Open items

- 2024 PSA population (POPCEN, declared official July 2025): read Ramon's row from PSA Table B and fill `stats.population`.
- CMCI competitiveness page: needs the DTI CMCI link for Ramon.
- Local MSWDO and Rural Health Unit numbers, LGU phone, income class, ordinances, 2025 budget documents.
- Register `betterramon.org` and switch `lgu.site` in `src/data/ramon.ts`; add the domain to PR #316.

## Git

Commit and push to `main`; Cloudflare deploys automatically. Write commit messages in plain prose explaining why.
