const TESTIMONIALS = [
  {
    name: "Daniel F.",
    initials: "DF",
    quote:
      "Lesk Custom Homes did an excellent job on our home renovation. From the beginning, Matt and his team were responsive, professional, and willing to work through the details with us as the project progressed. Renovations can come with plenty of moving parts, but they stayed focused on getting the work completed and making sure the finished product came together the way it should. We’re very happy with the work and would gladly recommend Lesk Custom Homes.",
  },
  {
    name: "Sam F.",
    initials: "SF",
    quote:
      "Great experience working with Lesk Custom Homes. Our project involved several different trades and a lot of coordination, and the team handled everything professionally from start to finish. Communication was straightforward, questions were addressed quickly, and they worked hard to keep things moving. The quality of the finished work speaks for itself. Five stars from us.",
  },
  {
    name: "Luis L.",
    initials: "LL",
    quote:
      "Working with Lesk has been a very positive experience. Our project required much more than just construction, it involved planning, site work, engineering coordination, city requirements, and several steps before we could even get to the building phase. Matt and the Lesk team have helped guide the process and keep all the different pieces organized. I appreciate having a contractor who understands the bigger picture of a development project and stays involved throughout the process.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
            What clients say.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-surface p-8"
            >
              <p
                role="img"
                aria-label="5 out of 5 stars"
                className="text-lg tracking-[0.15em] text-brand"
              >
                ★★★★★
              </p>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex size-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-brand-light"
                >
                  {t.initials}
                </span>
                <span className="text-sm font-semibold text-ink">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
