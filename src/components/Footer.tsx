import Image from "next/image";
import { basePath } from "@/lib/base-path";

const exploreLinks = [
  { label: "Live scores", href: "#live-scores" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sports", href: "#sports" },
  { label: "Gallery", href: "#gallery" },
];

export default function Footer() {
  return (
    <footer className="bg-forest px-6 py-14 lg:px-10">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex flex-wrap items-center gap-5">
              <Image
                src={`${basePath}/brand/iart-logo.svg`}
                alt="International Ahmadiyya Racquetball Tournament logo"
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0"
              />
              <Image
                src={`${basePath}/brand/amj-logo.svg`}
                alt="Ahmadiyya Muslim Jama'at Canada logo"
                width={200}
                height={63}
                className="h-14 w-auto"
              />
            </div>
            <p className="font-display mt-5 text-lg font-medium text-cream">
              International Ahmadiyya
              <br />
              Racquetball Tournament
            </p>
            <p className="mt-3 text-sm text-muted">
              United in sport. Inspired by faith.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Explore</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    title={link.label}
                    className="text-sm text-muted transition-colors duration-200 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Contact</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="mailto:majlisesehat@ahmadiyya.ca"
                  title="Email the tournament organizers"
                  className="text-cream transition-colors duration-200 hover:text-terracotta"
                >
                  majlisesehat@ahmadiyya.ca
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ahmadiyyaracquetball"
                  target="_blank"
                  rel="noreferrer"
                  title="Follow on Instagram (opens in a new tab)"
                  className="text-cream transition-colors duration-200 hover:text-terracotta"
                >
                  @ahmadiyyaracquetball
                </a>
              </li>
              <li className="text-muted">Organized by Majlis-e-Sehat Canada</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--hairline)] pt-6">
          <p className="text-sm text-muted">&copy; 2026 Majlis-e-Sehat Canada</p>
          <p className="mt-2 text-sm text-muted">
            International competition &middot; Brotherhood &middot; Excellence
            &middot; Spiritual growth
          </p>
        </div>
      </div>
    </footer>
  );
}
