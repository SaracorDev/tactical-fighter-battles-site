import Image from "next/image";

const shots = [
  { src: "/screenshots/01-title.png", caption: "Title" },
  { src: "/screenshots/02-briefing.png", caption: "Briefing" },
  { src: "/screenshots/03-library.png", caption: "Library" },
  { src: "/screenshots/04-dogfight.png", caption: "Dogfight" },
  { src: "/screenshots/05-ground-war.png", caption: "Ground War" },
  { src: "/screenshots/06-carrier.png", caption: "Carrier" },
] as const;

export function Screenshots() {
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
          In-game captures from Tactical Fighter Battles — title, briefing,
          library, dogfight, ground war, and carrier ops.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map(({ src, caption }) => (
            <li
              key={src}
              className="group overflow-hidden border border-line bg-panel"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={src}
                  alt={`Tactical Fighter Battles — ${caption}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
