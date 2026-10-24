import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/images/hero-portrait.png";

function Hero() {
  return (
    <section className="relative isolate min-h-[48rem] overflow-hidden rounded-2xl ">
      {/* Background image */}
      <Image
        src={hero}
        alt="Fresh groceries including vegetables and meat"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black/85 via-black/40 to-black/30" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[48rem] flex-col items-start justify-center p-6 text-white sm:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-200">
          Fresh food. Better living.
        </p>

        <h1 className="max-w-[32rem] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Quality Groceries Delivered to Your Doorstep
        </h1>

        <p className="mt-4 max-w-[28rem] text-base leading-relaxed text-white/90">
          From fresh produce to daily essentials, TheFridge brings you quality
          groceries, anytime, anywhere.
        </p>

        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#145A3A] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#10482e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Shop Now
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
