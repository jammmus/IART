import Image from "next/image";
import { basePath } from "@/lib/base-path";

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

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" />
      <path d="M8 5H4v1a4 4 0 0 0 4 4M16 5h4v1a4 4 0 0 1-4 4" />
      <path d="M12 12v3M9 20h6M10 15h4v3a2 2 0 0 1-4 0v-3z" />
    </svg>
  );
}

const stats = [
  { icon: CalendarIcon, title: "October 8–12, 2026", subtitle: "Five days of competition" },
  { icon: PinIcon, title: "Vaughan & Downsview", subtitle: "Multiple tournament venues" },
  { icon: TrophyIcon, title: "Four sports", subtitle: "One international community" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[90vh] flex-col border-b border-[var(--hairline)] bg-[var(--ink)]"
    >
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 lg:w-full lg:px-10 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            October 8&ndash;12, 2026 &middot; Vaughan &amp; Downsview
          </p>
          <h1 className="font-display mt-5 text-4xl leading-[1.1] font-medium text-cream sm:text-5xl lg:text-6xl">
            United in sport.
            <br />
            Inspired by faith.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Welcome to the International Ahmadiyya Racquetball
            Tournament&mdash;five days of competition, brotherhood and
            excellence on and off the court.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              title="Jump to registration"
              className="cursor-pointer rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:bg-forest-light"
            >
              Register now
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden bg-forest lg:min-h-[560px]">
          <Image
            src={`${basePath}/images/hero.webp`}
            alt="Players competing in table tennis, badminton, squash and tennis"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/50 via-transparent to-transparent"
          />
          <div className="absolute right-5 bottom-5 flex h-28 w-28 -rotate-6 items-center justify-center rounded-full bg-terracotta text-center shadow-2xl sm:h-36 sm:w-36">
            <p className="font-display rotate-6 px-3 text-base leading-snug font-medium text-cream sm:text-xl">
              Play with purpose.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 divide-y divide-[var(--hairline)] border-t border-[var(--hairline)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center justify-center gap-3 px-6 py-6 lg:px-10">
            <span className="text-terracotta">
              <Icon />
            </span>
            <div>
              <p className="text-sm font-medium text-cream">{title}</p>
              <p className="text-sm text-muted">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
