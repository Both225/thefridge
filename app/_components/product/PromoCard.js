export default function PromoCard({ promo }) {
  const { title, subtitle, label, buttonText, image, href } = promo;

  return (
    <article
      className="relative h-[16rem] w-[30rem] shrink-0 overflow-hidden
        rounded-xl bg-red-700 p-4 text-white snap-start
        sm:w-[34rem]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />

      {/* Red overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r
          from-red-700 via-red-700/90 to-transparent"
        aria-hidden="true"
      />

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col items-start">
        <p className="text-[1rem] font-semibold uppercase tracking-wide">
          {label}
        </p>

        <div className="mt-3">
          <h2 className="text-[2rem] font-bold leading-tight">{title}</h2>

          <p className="mt-1 max-w-[24rem] text-[1.2rem] leading-snug text-white/85">
            {subtitle}
          </p>
        </div>

        <a
          href={href}
          className="mt-auto inline-flex min-h-[4rem] items-center
            justify-center rounded-xl bg-white px-4 py-2
            text-[1.3rem] font-semibold text-red-600
            transition-colors hover:bg-red-50"
        >
          {buttonText}
        </a>
      </div>
    </article>
  );
}
