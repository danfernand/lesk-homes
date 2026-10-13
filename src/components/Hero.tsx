import Image from "next/image";
import heroPhoto from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroPhoto}
          alt="Single-story dark brick home with a covered entry and warm exterior lighting at dusk"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/65 md:bg-transparent md:bg-linear-to-r md:from-ink/85 md:via-ink/60 md:to-ink/25" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          Inspired Luxury. Built with Integrity.
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl">
          Homes built around how you actually live.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Lesk Homes partners with families from first sketch to final walkthrough,
          delivering custom-built homes with honest craftsmanship and no surprises.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-brand-light px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            Start Your Project
          </a>
          <a
            href="#work"
            className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
