export function Pitch() {
  return (
    <section
      id="pitch"
      className="border-b border-line"
      aria-labelledby="pitch-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
            01 / Pitch
          </p>
          <h2
            id="pitch-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-[0.08em] uppercase sm:text-4xl"
          >
            The game
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-steel sm:text-lg">
          <p>
            Tactical Fighter Battles is a board game that happens to run on a
            computer — not a flight simulator. You command jet packages over a
            hex map with NATO-style counters, plotting headings, altitude, and
            shots one turn at a time.
          </p>
          <p>
            Coverage runs from the first jets of 1945 to today&apos;s front-line
            types. US, Soviet/Russian, French, British, and other air arms share
            the same map. Campaigns string hops into longer fights. Windows and
            Android builds are in the works; a public store page is not up yet.
          </p>
        </div>
      </div>
    </section>
  );
}
