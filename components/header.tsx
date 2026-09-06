import { HexMark } from "@/components/hex-mark";
import { links, site } from "@/lib/site";

const nav = [
  { href: "#pitch", label: "The game" },
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#videos", label: "Videos" },
  { href: "#updates", label: "Demo" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-paper">
          <HexMark className="size-7 text-amber" />
          <span className="font-display text-lg font-semibold tracking-[0.12em] uppercase sm:text-xl">
            {site.shortName}
          </span>
        </a>
        <nav aria-label="Page" className="hidden items-center gap-6 text-sm text-steel md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={links.demoDownload}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-amber/70 px-3 py-1.5 text-xs font-medium tracking-wide text-amber uppercase transition-colors hover:bg-amber hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
        >
          Download
        </a>
      </div>
    </header>
  );
}
