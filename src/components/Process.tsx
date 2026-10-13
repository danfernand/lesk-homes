const STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "[Placeholder] We talk through your goals, site, budget range, and timeline to see if we're a fit.",
  },
  {
    step: "02",
    title: "Design & Budget",
    description:
      "[Placeholder] Our team develops plans and a real budget together, so there are no surprises later.",
  },
  {
    step: "03",
    title: "Pre-Construction",
    description:
      "[Placeholder] Permits, selections, and a locked schedule get finalized before a single shovel hits the ground.",
  },
  {
    step: "04",
    title: "Build & Handoff",
    description:
      "[Placeholder] Weekly updates and a dedicated site lead through framing, finishes, and your final walkthrough.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
            How It Works
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-white">
            A clear process, start to finish.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => (
            <div key={item.step} className="border-t border-white/20 pt-6">
              <span className="font-serif text-3xl text-brand">{item.step}</span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
