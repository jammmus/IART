"use client";

import { useState } from "react";

type Match = {
  time: string;
  sport: string;
  detail: string;
  venue: string;
  tag: string;
};

type Day = {
  key: string;
  weekday: string;
  date: string;
  fullDate: string;
  matches: Match[];
};

const days: Day[] = [
  {
    key: "thu",
    weekday: "Thu",
    date: "Oct 8",
    fullDate: "Thursday, October 8",
    matches: [
      { time: "9:00 AM", sport: "Opening session", detail: "Welcome and tournament briefing", venue: "Aiwan Tahir", tag: "Opening event" },
      { time: "10:30 AM", sport: "Table Tennis", detail: "Opening-round matches", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "12:00 PM", sport: "Badminton", detail: "Opening-round matches", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "2:30 PM", sport: "Squash", detail: "Opening-round matches", venue: "National Squash Academy", tag: "Fixtures TBA" },
    ],
  },
  {
    key: "fri",
    weekday: "Fri",
    date: "Oct 9",
    fullDate: "Friday, October 9",
    matches: [
      { time: "9:00 AM", sport: "Table Tennis", detail: "Group stage matches", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "11:00 AM", sport: "Badminton", detail: "Group stage matches", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "1:30 PM", sport: "Squash", detail: "Group stage matches", venue: "National Squash Academy", tag: "Fixtures TBA" },
      { time: "4:00 PM", sport: "Tennis", detail: "Group stage matches", venue: "Tahir Hall", tag: "Fixtures TBA" },
    ],
  },
  {
    key: "sat",
    weekday: "Sat",
    date: "Oct 10",
    fullDate: "Saturday, October 10",
    matches: [
      { time: "9:00 AM", sport: "Table Tennis", detail: "Quarter-finals", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "11:30 AM", sport: "Badminton", detail: "Quarter-finals", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "2:00 PM", sport: "Squash", detail: "Quarter-finals", venue: "National Squash Academy", tag: "Fixtures TBA" },
      { time: "4:30 PM", sport: "Tennis", detail: "Quarter-finals", venue: "Tahir Hall", tag: "Fixtures TBA" },
    ],
  },
  {
    key: "sun",
    weekday: "Sun",
    date: "Oct 11",
    fullDate: "Sunday, October 11",
    matches: [
      { time: "9:00 AM", sport: "Table Tennis", detail: "Semi-finals", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "11:30 AM", sport: "Badminton", detail: "Semi-finals", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "2:00 PM", sport: "Squash", detail: "Semi-finals", venue: "National Squash Academy", tag: "Fixtures TBA" },
      { time: "4:30 PM", sport: "Tennis", detail: "Semi-finals", venue: "Tahir Hall", tag: "Fixtures TBA" },
    ],
  },
  {
    key: "mon",
    weekday: "Mon",
    date: "Oct 12",
    fullDate: "Monday, October 12",
    matches: [
      { time: "10:00 AM", sport: "Finals", detail: "Championship matches, all sports", venue: "Tahir Hall", tag: "Fixtures TBA" },
      { time: "5:00 PM", sport: "Closing ceremony", detail: "Awards and closing remarks", venue: "Aiwan Tahir", tag: "Closing event" },
    ],
  },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(days[0].key);
  const day = days.find((d) => d.key === activeDay) ?? days[0];

  return (
    <section id="schedule" className="bg-[var(--ink)] px-6 py-20 lg:px-10">
      <div className="mx-auto">
        <div className="rounded-2xl bg-forest p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Match programme
          </p>
          <h2 className="font-display mt-4 text-3xl font-medium text-cream sm:text-4xl">
            Tournament schedule
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted">
            Select a day to view matches, timings and venues. Final fixtures
            will be published once registration closes.
          </p>

          <div className="mt-8 grid grid-cols-5 gap-2 sm:gap-3">
            {days.map((d) => (
              <button
                key={d.key}
                type="button"
                onClick={() => setActiveDay(d.key)}
                aria-pressed={activeDay === d.key}
                title={`View matches for ${d.fullDate}`}
                className={`cursor-pointer rounded-xl px-2 py-3 text-center transition-colors duration-200 sm:px-4 ${
                  activeDay === d.key
                    ? "bg-forest-light text-cream"
                    : "bg-black/20 text-muted hover:bg-black/30 hover:text-cream"
                }`}
              >
                <span className="block text-sm font-medium">{d.weekday}</span>
                <span className="block text-xs">{d.date}</span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="border-b border-[var(--hairline)] pb-3 text-sm text-cream">
              {day.fullDate}
            </p>
            <div className="divide-y divide-[var(--hairline)]">
              {day.matches.map((match) => (
                <div
                  key={`${day.key}-${match.time}-${match.sport}`}
                  className="flex flex-col gap-2 py-4 transition-colors duration-200 hover:bg-black/10 sm:flex-row sm:items-center sm:justify-between sm:rounded-lg sm:px-3"
                >
                  <div className="flex flex-col gap-1 sm:w-32 sm:shrink-0">
                    <span className="text-sm text-cream">{match.time}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-terracotta">{match.sport}</p>
                    <p className="text-sm text-muted">{match.detail}</p>
                  </div>
                  <div className="text-sm text-muted sm:w-40" title={`Venue: ${match.venue}`}>
                    {match.venue}
                  </div>
                  <span className="inline-block w-fit rounded-full bg-black/20 px-3 py-1 text-xs text-cream">
                    {match.tag}
                  </span>
                </div>
              ))}
              {day.matches.length === 0 && (
                <p className="py-8 text-sm text-muted">
                  No matches scheduled for this day yet. Check back once
                  registration closes.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
