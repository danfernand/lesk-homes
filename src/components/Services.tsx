const SERVICES = [
  {
    title: "Custom Home Design",
    description:
      "Our in-house design team shapes the home around your site, lifestyle and budget, from early concepts through key selections.",
  },
  {
    title: "Ground-Up Construction",
    description:
      "A coordinated build from site planning and permitting through trades, finishes, inspections and handoff.",
  },
  {
    title: "High-End Renovations",
    description:
      "Thoughtful, full-scope transformations for existing homes, with the same design attention and project leadership as a custom build.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
            What We Do
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
            Luxury custom homes, designed and built in-house.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="rounded-2xl border border-line bg-surface p-8"
            >
              <span className="font-serif text-sm text-brand-dark">
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
