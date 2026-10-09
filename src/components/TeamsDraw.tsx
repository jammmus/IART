import {
  leagueMatches,
  playoffs,
  rounds,
  teamName,
  teams,
  type Team,
} from "@/data/table-tennis";

function Swatch({ team }: { team: Team }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-3 w-3 shrink-0 rounded-full border border-cream/30"
      style={team.swatch ? { backgroundColor: team.swatch } : undefined}
    />
  );
}

const rules = [
  { term: "Format", detail: "Single league, then top 4 playoffs" },
  {
    term: "League stage",
    detail: `Each team plays every other team once: ${leagueMatches.length} matches over ${rounds.length} rounds.`,
  },
  {
    term: "Qualification",
    detail:
      "The four teams with the most team-match wins advance to the semi-finals.",
  },
  {
    term: "Tie-breaker",
    detail:
      "Equal wins are split by total points scored in all individual games during the league round.",
  },
  {
    term: "Team match",
    detail:
      "First team to 3 wins. Each tie is best of 5 games. Order: two singles, one doubles, then up to two more singles if needed.",
  },
];

export default function TeamsDraw() {
  return (
    <section id="draw" className="bg-[var(--ink)] px-6 py-20 lg:px-10">
      <div className="mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          Table tennis team tournament
        </p>
        <h2 className="font-display mt-4 text-3xl font-medium text-cream sm:text-4xl">
          Teams &amp; league draw
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted">
          Nine teams play a single league, and the top four go through to the
          playoffs.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl bg-forest p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-cream">
              Participating teams
            </h3>
            <ol className="mt-4 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {teams.map((team) => (
                <li
                  key={team.id}
                  className="flex items-center gap-3 border-b border-[var(--hairline)] py-3 text-sm text-cream"
                >
                  <span className="w-5 text-xs font-semibold text-terracotta tabular-nums">
                    {team.id}
                  </span>
                  <Swatch team={team} />
                  {team.name}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-forest p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-cream">
              Format &amp; qualification
            </h3>
            <dl className="mt-4 divide-y divide-[var(--hairline)]">
              {rules.map(({ term, detail }) => (
                <div
                  key={term}
                  className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-terracotta">
                    {term}
                  </dt>
                  <dd className="text-sm text-muted">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-medium text-cream">
            Table tennis league draw
          </h3>
          <p className="text-sm text-muted">
            {leagueMatches.length} matches &middot; {rounds.length} rounds
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rounds.map((round) => (
            <article
              key={round.number}
              className="rounded-2xl bg-forest p-6 transition-colors duration-200 hover:bg-forest-light"
            >
              <header className="flex items-baseline justify-between gap-3 border-b border-[var(--hairline)] pb-3">
                <h4 className="text-sm font-semibold text-cream">
                  Round {round.number}
                </h4>
                <p className="text-xs text-muted">
                  Matches {round.matches[0].number}&ndash;
                  {round.matches[round.matches.length - 1].number}
                </p>
              </header>
              <ul className="divide-y divide-[var(--hairline)]">
                {round.matches.map((match) => (
                  <li key={match.number} className="flex gap-3 py-3 text-sm">
                    <span className="w-6 shrink-0 text-xs font-semibold text-terracotta tabular-nums">
                      {match.number}
                    </span>
                    <span className="text-cream">
                      {teamName(match.home)}{" "}
                      <span className="text-xs text-muted">vs.</span>{" "}
                      {teamName(match.away)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-[var(--hairline)] pt-3 text-xs text-muted">
                Bye: {round.bye.name}
              </p>
            </article>
          ))}
        </div>

        <h3 className="font-display mt-14 text-2xl font-medium text-cream">
          Playoff draw
        </h3>
        <p className="mt-2 max-w-xl text-sm text-muted">
          The same team-match format applies to playoff matches unless
          organizers announce otherwise.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {playoffs.map((stage) => (
            <article
              key={stage.stage}
              className={`rounded-2xl p-6 ${
                stage.highlight
                  ? "bg-terracotta text-cream"
                  : "bg-forest text-cream"
              }`}
            >
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] opacity-80">
                {stage.stage}
              </h4>
              <p className="font-display mt-3 text-lg leading-snug font-medium">
                {stage.fixture}
              </p>
              <p
                className={`mt-3 text-sm ${
                  stage.highlight ? "text-cream/90" : "text-muted"
                }`}
              >
                {stage.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
