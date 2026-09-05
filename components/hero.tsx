import { HexMark } from "@/components/hex-mark";
import { links, site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
      aria-labelledby="hero-heading"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/runway_strike.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="hex-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink/40 via-ink/75 to-ink"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
          Windows · Android · 1945–present · Early access
        </p>
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-steel">
            <HexMark className="size-8 text-amber" />
            <span className="h-px flex-1 max-w-16 bg-line" />
          </div>
          <h1
            id="hero-heading"
            className="font-display text-5xl leading-[0.95] font-bold tracking-[0.04em] text-balance uppercase sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-steel sm:text-xl">
            {site.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={links.gameRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber px-5 py-3 text-sm font-semibold tracking-wide text-ink uppercase transition-colors hover:bg-amber-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            Follow development
          </a>
          <a
            href="#updates"
            className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium tracking-wide text-paper uppercase transition-colors hover:border-steel hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            Coming soon
          </a>
        </div>
      </div>
    </section>
  );
}