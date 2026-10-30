const videos = [
  {
    src: "/videos/fulda_strike.mp4",
    poster: "/videos/fulda_strike.jpg",
    caption: "Fulda Strike",
  },
  {
    src: "/videos/mig_alley.mp4",
    poster: "/videos/mig_alley.jpg",
    caption: "MiG Alley",
  },
] as const;

export function Videos() {
  return (
    <section
      id="videos"
      className="border-b border-line"
      aria-labelledby="videos-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
          06 / Gameplay
        </p>
        <h2
          id="videos-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-[0.08em] uppercase sm:text-4xl"
        >
          Gameplay
        </h2>
        <p className="mt-4 max-w-xl text-steel">
          In-action footage from Tactical Fighter Battles — Fulda Strike and MiG
          Alley.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {videos.map(({ src, poster, caption }) => (
            <li
              key={src}
              className="group overflow-hidden border border-line bg-panel"
            >
              <div className="relative aspect-video overflow-hidden bg-ink">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="none"
                  poster={poster}
                  aria-label={`Tactical Fighter Battles — ${caption}`}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
              <div className="border-t border-line px-3 py-2">
                <span className="font-mono text-[10px] tracking-[0.24em] text-amber uppercase">
                  {caption}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
