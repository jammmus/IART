export default function Cta() {
  return (
    <section id="register" className="bg-terracotta px-6 py-24 text-center lg:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/90">
          Take your place
        </p>
        <h2 className="font-display mt-4 text-3xl leading-tight font-medium text-cream sm:text-5xl">
          Compete internationally. Connect meaningfully.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-cream/85">
          Join athletes from around the world for five memorable days of
          sport, brotherhood and spiritual growth.
        </p>
        <a
          href="#top"
          title="Jump to the top to register"
          className="mt-8 inline-block cursor-pointer rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-200 hover:bg-forest-light"
        >
          Register for the tournament
        </a>
      </div>
    </section>
  );
}
