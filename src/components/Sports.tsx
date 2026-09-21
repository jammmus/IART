function TableTennisIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BadmintonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M14 3c3 2 6 5 6 8-3 0-6-3-8-6" />
      <path d="M9 15l-5 5" />
      <path d="M9.5 9.5 4 4M14 14l6 6" />
      <path d="M8 14c-2 0-4-1-4-3s2-3 4-3 3 2 3 4-1 2-3 2z" />
    </svg>
  );
}

function SquashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function TennisIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" />
      <path d="M8 5H4v1a4 4 0 0 0 4 4M16 5h4v1a4 4 0 0 1-4 4" />
      <path d="M12 12v3M9 20h6M10 15h4v3a2 2 0 0 1-4 0v-3z" />
    </svg>
  );
}

const sports = [
  {
    icon: TableTennisIcon,
    name: "Table Tennis",
    description: "Fast rallies, sharp reflexes and precision play.",
  },
  {
    icon: BadmintonIcon,
    name: "Badminton",
    description: "Speed, control and competition across the net.",
  },
  {
    icon: SquashIcon,
    name: "Squash",
    description: "High-intensity matches built on skill and stamina.",
  },
  {
    icon: TennisIcon,
    name: "Tennis",
    description: "Powerful serves and memorable matches.",
  },
];

export default function Sports() {
  return (
    <section id="sports" className="bg-[var(--ink)] px-6 py-20 lg:px-10">
      <div className="mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          Four disciplines
        </p>
        <h2 className="font-display mt-4 text-3xl font-medium text-cream sm:text-4xl">
          One international tournament
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sports.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              title={name}
              className="rounded-2xl border border-transparent bg-forest p-6 transition-colors duration-200 hover:border-terracotta/40 hover:bg-forest-light"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-terracotta">
                <Icon />
              </span>
              <h3 className="mt-4 text-base font-medium text-cream">{name}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
