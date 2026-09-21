function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

const items = [
  {
    icon: CalendarIcon,
    title: "October 8–12, 2026",
    detail: "Full match schedule available above.",
  },
  {
    icon: PinIcon,
    title: "Aiwan Tahir — Baitul Islam Mosque, Vaughan",
    detail: "Opening activities and tournament gathering.",
  },
  {
    icon: PinIcon,
    title: "Tahir Hall",
    detail: "Badminton and table tennis.",
  },
  {
    icon: PinIcon,
    title: "National Squash Academy, Downsview",
    detail: "Squash matches.",
  },
];

export default function Venues() {
  return (
    <section className="border-y border-[var(--hairline)] bg-[var(--ink)] px-6 py-20 lg:px-10">
      <div className="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Plan your visit
          </p>
          <h2 className="font-display mt-4 text-3xl font-medium text-cream sm:text-4xl">
            Dates &amp; venues
          </h2>
          <p className="mt-3 max-w-sm text-base text-muted">
            Everything you need to arrive prepared and get to the right
            court.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {items.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex gap-4">
              <span className="mt-0.5 text-terracotta">
                <Icon />
              </span>
              <div>
                <p className="text-sm font-medium text-cream">{title}</p>
                <p className="text-sm text-muted">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
