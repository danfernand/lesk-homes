import Image from "next/image";
import { ph } from "@/lib/placeholder";

const TESTIMONIALS = [
  { initials: "J.M.", name: "Client Name", detail: "The Alder Residence" },
  { initials: "R.K.", name: "Client Name", detail: "Cedar Ridge Remodel" },
  { initials: "S.T.", name: "Client Name", detail: "Maple Street Cottage" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
            [Placeholder] What clients say.
          </h2>
          <p className="mt-4 text-ink-soft">
            Swap in real quotes, names, and project links from past clients.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.initials}
              className="flex flex-col rounded-2xl border border-line bg-surface p-8"
            >
              <p className="flex-1 text-ink-soft">
                &ldquo;[Placeholder testimonial copy]. This is where a short,
                genuine quote from this client about their build experience
                will go.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative size-11 overflow-hidden rounded-full">
                  <Image
                    src={ph(88, 88, t.initials, 1)}
                    alt="Placeholder client avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
