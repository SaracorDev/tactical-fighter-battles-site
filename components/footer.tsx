import { HexMark } from "@/components/hex-mark";
import { links, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <HexMark className="mt-0.5 size-6 shrink-0 text-amber" />
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-steel">
              © {site.copyrightYear} {site.copyrightName}. All rights reserved.
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 text-sm text-steel sm:items-end">
          <li>
            <a
              href={links.demoDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            >
              Download Windows demo
            </a>
          </li>
          <li>
            <a
              href={links.gameRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            >
              Demo repository
            </a>
          </li>
          <li>
            <a
              href={links.siteRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            >
              Site source
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
