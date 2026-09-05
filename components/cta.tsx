import { links } from "@/lib/site";

export function Cta() {
  return (
    <section
      id="updates"
      className="border-b border-line"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
            06 / Early access
          </p>
          <h2
            id="cta-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-[0.08em] uppercase sm:text-4xl"
          >
            Coming soon
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
            A public Windows release is not listed on any store yet. Follow the
            game repository for development updates and early access news.
          </p>
        </div>
        <a
          href={links.gameRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-amber px-5 py-3 text-sm font-semibold tracking-wide text-ink uppercase transition-colors hover:bg-amber-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
        >
          View the game on GitHub
        </a>
      </div>
    </section>
  );
}
