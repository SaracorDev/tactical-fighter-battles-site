# Tactical Fighter Battles — Site

Marketing landing page for **Tactical Fighter Battles**, a Windows turn-based tactical hex wargame of jet fighters from 1945 to the modern day.

Owner: BSC Networks. Proprietary, all rights reserved (see `LICENSE`).

- Game repository: https://github.com/SaracorDev/Tactical-Fighter-Battles
- Demo repository: https://github.com/SaracorDev/Tactical-Fighter-Battles-Demo
- This site: https://github.com/SaracorDev/tactical-fighter-battles-site

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

This is a standard Next.js App Router app (TypeScript + Tailwind CSS). Deploy on Vercel with the default Next.js settings.

## Notes

The page offers the free Windows demo 1.2.0 (`TacticalFighterBattles-DEMO-1.2.0-windows.zip`, 98.6 MB, SHA-256 `a446f59512846192b41ff808f1220bedb9fc34d9eebf7aeaefc8981c1c97df81`) from the demo repo's GitHub Releases. There is no store page yet. Copy and links live in `lib/site.ts`.
