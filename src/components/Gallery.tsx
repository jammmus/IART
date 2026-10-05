import Image from "next/image";
import { basePath } from "@/lib/base-path";

function ImagePlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M21 16l-5-5-4 4-2-2-5 5" />
    </svg>
  );
}

type Tile = {
  label: string;
  layoutClassName: string;
  bgClassName: string;
  image?: { src: string; alt: string; position?: string };
};

const tiles: Tile[] = [
  {
    label: "Hero action photograph",
    layoutClassName: "aspect-[4/3] md:col-span-4 md:aspect-auto",
    bgClassName: "bg-[linear-gradient(135deg,var(--forest-light),var(--terracotta))]",
    image: {
      src: "/images/gallery-hero-action.jpg",
      alt: "A badminton player leaping to smash the shuttlecock in a packed arena",
      position: "object-[38%_50%]",
    },
  },
  {
    label: "Match intensity",
    layoutClassName: "aspect-[2/1] md:col-span-8 md:aspect-[2.55/1]",
    bgClassName: "bg-terracotta",
    image: {
      src: "/images/match-intensity.webp",
      alt: "Two table tennis players locked in a rally across the net",
    },
  },
  {
    label: "Players together",
    layoutClassName: "aspect-[2/1] md:col-span-6",
    bgClassName: "bg-[linear-gradient(135deg,var(--forest),var(--forest-light))]",
    image: {
      src: "/images/players-together.jpg",
      alt: "Four players in matching green kits with their arms around each other on a badminton court",
    },
  },
  {
    label: "Venue and crowd atmosphere",
    layoutClassName: "aspect-[2/1] md:col-span-6",
    bgClassName: "bg-[linear-gradient(135deg,var(--terracotta),var(--forest))]",
    image: {
      src: "/images/venue-atmosphere.jpg",
      alt: "A packed indoor arena with spectators watching a badminton match under stage lighting",
      position: "object-[62%_50%]",
    },
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

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              title={tile.label}
              className={`group relative flex items-end overflow-hidden rounded-2xl p-5 ${tile.layoutClassName}`}
            >
              <div
                className={`absolute inset-0 scale-100 transition-transform duration-300 group-hover:scale-105 ${tile.bgClassName}`}
              >
                {tile.image && (
                  <Image
                    src={`${basePath}${tile.image.src}`}
                    alt={tile.image.alt}
                    fill
                    sizes="100vw"
                    className={`object-cover ${tile.image.position ?? ""}`}
                  />
                )}
              </div>
              {tile.image && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />
              )}
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
