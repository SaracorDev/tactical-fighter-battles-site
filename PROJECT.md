# Tactical Fighter Battles — Site

## 1. What this is

Marketing landing page for **Tactical Fighter Battles**, a turn-based tactical hex wargame of jet fighters from 1945 to the modern day. The app is one page: pitch, features, screenshots, gameplay videos, and download calls to action.

Owner: BSC Networks

Copy, copyright (`BSC Networks`, 2026), and outbound links live in `lib/site.ts`. The page offers a Windows demo zip and links to the demo repository. The footer also links to this site's source.

- This repository: https://github.com/SaracorDev/tactical-fighter-battles-site
- Demo repository linked from the page: https://github.com/SaracorDev/Tactical-Fighter-Battles-Demo
- Game repository named in the README: https://github.com/SaracorDev/Tactical-Fighter-Battles

## 2. Tech stack and structure

- Next.js 16.3.4 (App Router), React 19.2.8, TypeScript (`strict`), Tailwind CSS 4
- Fonts via `next/font/google`: Barlow Condensed, IBM Plex Sans, IBM Plex Mono
- ESLint 9 with `eslint-config-next` (core web vitals and TypeScript)
- Path alias `@/*` maps to the repo root (`tsconfig.json`)
- `next.config.ts` exports an empty Next.js config

| Path | Role |
| --- | --- |
| `app/page.tsx` | Home page |
| `app/layout.tsx` | Root layout, metadata, viewport |
| `app/globals.css` | Tailwind theme and base styles |
| `app/icon.tsx` | Generated favicon |
| `app/opengraph-image.tsx` | Generated Open Graph image |
| `components/` | Header, hero, pitch, features, screenshots, videos, CTA, footer, hex mark |
| `lib/site.ts` | Site name, description, copyright, and links |
| `public/images/` | Hero image `runway_strike.jpg` |
| `public/screenshots/` | Six in-game PNGs (title, briefing, library, dogfight, ground war, carrier) |
| `public/videos/` | `fulda_strike.mp4`, `mig_alley.mp4` |

## 3. Run, test, and deploy

The README requires Node.js 20+. `package.json` has no `engines` field.

```bash
npm install
npm run dev
```

Dev server: http://localhost:3000

```bash
npm run lint
npm run build
npm start
```

Scripts in `package.json`: `dev`, `build`, `start`, `lint`. There is no test script and no test files in the repo.

The README says to deploy on Vercel with the default Next.js settings. There is no `vercel.json` and no CI workflow in the repo.

## 4. Vercel project and domains

The repository does not name a Vercel project, project id, or domain list.

Deployment context from the owner (not set in repo config): the site is served at `fighter.aegypt.org` and `www.aegypt.org`. Nothing in the repo config contradicts those hosts.

## 5. Environment variables

Names only. `app/layout.tsx` reads these for `metadataBase`. No values are stored in the repo. `.env*` is gitignored, and no env example file is committed.

- `VERCEL_PROJECT_PRODUCTION_URL`
- `VERCEL_URL`

If neither is set, metadata falls back to `http://localhost:3000`.

## 6. Current status

Package version is `0.1.0` (`private: true`).

The landing page is in the tree. It links a Windows demo zip, `TacticalFighterBattles-DEMO-1.2.0-windows.zip`, from the demo repo's GitHub Releases, and says Android and the full game are still in the works. This app has no store page.

Metadata allows indexing (`robots.index` and `follow` are true). Theme color is `#08090b`.

## 7. Open decisions and known TODOs

No `TODO` or `FIXME` comments in the source.

- The README still says there is no download URL and that the primary CTA points at the game repository for updates. The page now downloads the Windows demo and links to the demo repository.
- `components/pitch.tsx` still says Windows and Android builds are in the works. The hero, site description, and CTA say a Windows demo is available and Android is in the works.
- `links.demoReleases` in `lib/site.ts` is unused.
- No automated tests.

## 8. Last updated

Last updated: 2026-10-17
