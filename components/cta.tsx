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
            07 / Demo
          </p>
          <h2
            id="cta-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-[0.08em] uppercase sm:text-4xl"
          >
            Play the Windows demo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
            Download the free Windows demo (1.2.0) from GitHub Releases. Unzip
            and run <code className="text-paper">TacticalFighterBattles.exe</code>
            — no Godot install needed. Android and the full game are still in
            the works.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={links.demoDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber px-5 py-3 text-sm font-semibold tracking-wide text-ink uppercase transition-colors hover:bg-amber-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            Download demo zip
          </a>
          <a
            href={links.gameRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-line px-5 py-3 text-sm font-medium tracking-wide text-paper uppercase transition-colors hover:border-steel hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            Demo on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
