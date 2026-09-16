const SERVICES = [
  {
    title: "Custom Home Design",
    description:
      "[Placeholder] From lot evaluation to architectural plans, we shape a design around your budget, site, and lifestyle.",
  },
  {
    title: "New Home Construction",
    description:
      "[Placeholder] Full-service ground-up building with a single point of contact and a schedule you can actually trust.",
  },
  {
    title: "Renovations & Additions",
    description:
      "[Placeholder] Room additions, second stories, and whole-home renovations handled with the same care as new builds.",
  },
  {
    title: "Design-Build Consulting",
    description:
      "[Placeholder] Early-stage budgeting and feasibility guidance before you commit to plans or a piece of land.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            What We Do
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
            Services built for the whole journey.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="rounded-2xl border border-line bg-surface p-8"
            >
              <span className="font-serif text-sm text-brand">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
