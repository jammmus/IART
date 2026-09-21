function ImagePlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M21 16l-5-5-4 4-2-2-5 5" />
    </svg>
  );
}

const tiles = [
  {
    label: "Hero action photograph",
    layoutClassName: "sm:row-span-2",
    bgClassName: "bg-[linear-gradient(135deg,var(--forest-light),var(--terracotta))]",
  },
  {
    label: "Match intensity",
    layoutClassName: "",
    bgClassName: "bg-terracotta",
  },
  {
    label: "Players together",
    layoutClassName: "",
    bgClassName: "bg-[linear-gradient(135deg,var(--forest),var(--forest-light))]",
  },
  {
    label: "Venue and crowd atmosphere",
    layoutClassName: "sm:col-span-2",
    bgClassName: "bg-[linear-gradient(135deg,var(--terracotta),var(--forest))]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[var(--ink)] px-6 py-20 lg:px-10">
      <div className="mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          The tournament experience
        </p>
        <h2 className="font-display mt-4 text-3xl font-medium text-cream sm:text-4xl">
          Competition, community and connection
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          A glimpse of the energy on court and the brotherhood beyond it.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              title={tile.label}
              className={`group relative flex min-h-[200px] items-end overflow-hidden rounded-2xl p-5 ${tile.layoutClassName}`}
            >
              <div
                className={`absolute inset-0 scale-100 transition-transform duration-300 group-hover:scale-105 ${tile.bgClassName}`}
              />
              <span className="relative flex items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 text-sm text-cream">
                <ImagePlaceholderIcon />
                {tile.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
