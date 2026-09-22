import Image from "next/image";

const navLinks = [
  { label: "Live scores", href: "#live-scores" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sports", href: "#sports" },
  { label: "Gallery", href: "#gallery" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[var(--ink)]/95 backdrop-blur">
      <div className="mx-auto flex items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a
          href="#top"
          title="Back to top"
          className="flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors duration-200 hover:text-terracotta"
        >
          <Image
            src="/brand/iart-logo.svg"
            alt="International Ahmadiyya Racquetball Tournament logo"
            width={48}
            height={48}
            priority
            className="h-9 w-9 sm:h-12 sm:w-12"
          />
          <span className="text-[10px] leading-tight sm:text-sm">
            International Ahmadiyya
            <br />
            Racketball Tournament 2026
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              title={link.label}
              className="text-sm text-muted transition-colors duration-200 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#register"
            className="hidden cursor-pointer rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-200 hover:bg-terracotta-dark sm:inline-block"
          >
            Register now
          </a>
          <button
            type="button"
            aria-label="Share this page"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--hairline)] text-cream transition-colors duration-200 hover:border-cream/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4.5 w-4.5"
            >
              <path d="M12 16V4" />
              <path d="M7 9l5-5 5 5" />
              <path d="M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
