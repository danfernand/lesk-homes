import Image from "next/image";
import { ph } from "@/lib/placeholder";

const STATS = [
  { value: "20+", label: "Years building custom homes" },
  { value: "150+", label: "Homes completed" },
  { value: "4.9/5", label: "Average client rating" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={ph(1200, 900, "Job Site — Framing", 1)}
              alt="Placeholder — crew framing a home on site"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={ph(600, 600, "Founder Portrait", 2)}
              alt="Placeholder — portrait of the founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={ph(600, 600, "Interior Detail", 3)}
              alt="Placeholder — interior finish detail"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            About Lesk Homes
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
            A local builder, run like a craft.
          </h2>
          <p className="mt-6 text-ink-soft">
            [Placeholder copy] Lesk Homes was founded on the idea that a custom
            build should feel personal from day one. Swap in the real founder
            story here — where the company started, what it believes about
            building, and why clients choose to build with us.
          </p>
          <p className="mt-4 text-ink-soft">
            [Placeholder copy] A second paragraph on process, licensing,
            service area, or team size can go here once the client provides
            final copy.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-ink-soft">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
