export default function LiveScores() {
  return (
    <section id="live-scores" className="bg-[var(--ink)] px-6 py-20 lg:px-10">
      <div className="mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          Tournament centre
        </p>
        <h2 className="font-display mt-4 text-3xl font-medium text-cream sm:text-4xl">
          Live from the court
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          Scores, current games and completed results&mdash;all in one place.
        </p>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-forest p-6 shadow-lg shadow-black/10 transition-shadow duration-200 hover:shadow-black/20 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-6">
            <span
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-terracotta px-3 py-1.5 text-xs font-semibold text-cream"
              title="This match is in progress"
            >
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cream" aria-hidden="true" />
              LIVE
            </span>
            <div className="w-full min-w-[220px] sm:w-80">
              <div className="flex items-center justify-between border-b border-[var(--hairline)] py-2">
                <span className="text-sm text-cream">Player / Team 1</span>
                <span className="font-display text-2xl font-semibold text-cream">18</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-cream">Player / Team 2</span>
                <span className="font-display text-2xl font-semibold text-cream">14</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted sm:text-right">
            <p>Badminton &middot; Court 1</p>
            <p>Game 2 &middot; Best of 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
