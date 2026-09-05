const features = [
  {
    index: "02",
    title: "Hex tactics",
    body: "Plot movement on a hex grid, spend speed, then fire. Altitude, radar, and weather change the fight. Wargame logic — not a stick-and-rudder sim.",
  },
  {
    index: "03",
    title: "Eras and aircraft",
    body: "From early jets of 1945 to modern types. Core airframes plus nation packs cover US, Soviet/Russian, French, British, and more.",
  },
  {
    index: "04",
    title: "Campaigns",
    body: "Linear hops such as Rolling Thunder and Sinai Run, plus standalone missions and custom packages. Finish the last hop to close the campaign.",
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-line"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.28em] text-amber uppercase">
          Features
        </p>
        <h2
          id="features-heading"
          className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-[0.08em] uppercase sm:text-4xl"
        >
          Fight the map, not the stick
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col border border-line bg-panel p-6"
            >
              <span className="font-mono text-[11px] tracking-[0.22em] text-steel-dim uppercase">
                {feature.index}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[0.08em] uppercase">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel sm:text-[15px]">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
