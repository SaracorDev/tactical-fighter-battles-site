export function Screenshots() {
  const frames = ["Briefing", "Hex map", "Package"] as const;

  return (
    <section
      id="screenshots"
      className="border-b border-line"
      aria-labelledby="screenshots-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
          05 / Gallery
        </p>
        <h2
          id="screenshots-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-[0.08em] uppercase sm:text-4xl"
        >
          Screenshots
        </h2>
        <p className="mt-4 max-w-xl text-steel">
          In-game captures will land here. These frames are placeholders — no
          mock shots.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {frames.map((label) => (
            <li
              key={label}
              className="relative aspect-16/10 overflow-hidden border border-dashed border-line bg-panel"
            >
              <div
                className="hex-grid absolute inset-0 opacity-40"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
                <span className="font-mono text-[10px] tracking-[0.24em] text-steel-dim uppercase">
                  {label}
                </span>
                <span className="text-sm text-steel">Screenshots coming soon</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
