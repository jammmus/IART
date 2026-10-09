export type Team = {
  id: number;
  name: string;
  swatch?: string;
};

export type LeagueMatch = {
  number: number;
  home: number;
  away: number;
};

export const teams: Team[] = [
  { id: 1, name: "Canada Green", swatch: "#3f9b72" },
  { id: 2, name: "Canada Navy", swatch: "#2b4a8a" },
  { id: 3, name: "Canada Maroon", swatch: "#8a2a3b" },
  { id: 4, name: "Canada Red", swatch: "#d9433f" },
  { id: 5, name: "Canada Royal", swatch: "#4466e0" },
  { id: 6, name: "Jamia Canada Grey", swatch: "#9aa5a0" },
  { id: 7, name: "Jamia Canada Purple", swatch: "#8a5bb5" },
  { id: 8, name: "UK" },
  { id: 9, name: "Norway" },
];

const fixtures: [number, number][] = [
  [2, 9], [3, 8], [4, 7], [5, 6],
  [1, 9], [2, 7], [3, 6], [4, 5],
  [1, 8], [9, 7], [2, 5], [3, 4],
  [1, 7], [8, 6], [9, 5], [2, 3],
  [1, 6], [7, 5], [8, 4], [9, 3],
  [1, 5], [6, 4], [7, 3], [8, 2],
  [1, 4], [5, 3], [6, 2], [8, 9],
  [1, 3], [4, 2], [6, 9], [7, 8],
  [1, 2], [4, 9], [5, 8], [6, 7],
];

export const leagueMatches: LeagueMatch[] = fixtures.map(([home, away], i) => ({
  number: i + 1,
  home,
  away,
}));

export const MATCHES_PER_ROUND = 4;

export const teamName = (id: number) =>
  teams.find((t) => t.id === id)?.name ?? "";

export type Round = {
  number: number;
  matches: LeagueMatch[];
  bye: Team;
};

export const rounds: Round[] = Array.from(
  { length: leagueMatches.length / MATCHES_PER_ROUND },
  (_, i) => {
    const matches = leagueMatches.slice(
      i * MATCHES_PER_ROUND,
      (i + 1) * MATCHES_PER_ROUND,
    );
    const playing = new Set(matches.flatMap((m) => [m.home, m.away]));
    return {
      number: i + 1,
      matches,
      bye: teams.find((t) => !playing.has(t.id))!,
    };
  },
);

export const playoffs = [
  {
    stage: "Semi-final 1",
    fixture: "League 1st vs. League 4th",
    outcome: "Winner to final; loser to 3rd-place match",
  },
  {
    stage: "Semi-final 2",
    fixture: "League 2nd vs. League 3rd",
    outcome: "Winner to final; loser to 3rd-place match",
  },
  {
    stage: "3rd-place match",
    fixture: "Loser Semi-final 1 vs. Loser Semi-final 2",
    outcome: "Winner finishes 3rd",
  },
  {
    stage: "Final",
    fixture: "Winner Semi-final 1 vs. Winner Semi-final 2",
    outcome: "Winner is tournament champion",
    highlight: true,
  },
];
