export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 rounded-3xl bg-ink px-8 py-14 sm:px-14 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Get In Touch
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-white">
            Let&apos;s talk about your project.
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            Tell us a bit about your lot, budget, and timeline. We&apos;ll
            follow up within one business day to schedule a discovery call.
          </p>

          <div className="mt-10 space-y-3 text-sm text-white/80">
            <p>
              <span className="text-white/50">Phone: </span>
              <a href="tel:+15555550123" className="hover:text-brand">
                (555) 555-0123
              </a>
            </p>
            <p>
              <span className="text-white/50">Email: </span>
              <a href="mailto:hello@leskhomes.com" className="hover:text-brand">
                hello@leskhomes.com
              </a>
            </p>
            <p>
              <span className="text-white/50">Service Area: </span>
              [Placeholder — city / region]
            </p>
          </div>
        </div>

        <form className="space-y-4" aria-label="Project inquiry form">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-brand"
                placeholder="Jordan Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-brand"
                placeholder="jordan@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="mb-1.5 block text-sm text-white/70">
              Estimated Budget
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none focus:border-brand"
            >
              <option value="" disabled className="text-ink">
                Select a range
              </option>
              <option className="text-ink">$400k – $600k</option>
              <option className="text-ink">$600k – $900k</option>
              <option className="text-ink">$900k – $1.2M</option>
              <option className="text-ink">$1.2M+</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-brand"
              placeholder="Lot location, timeline, must-haves..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Send Inquiry
          </button>
          <p className="text-xs text-white/40">
            [Placeholder] Form is not yet wired to a submission endpoint.
          </p>
        </form>
      </div>
    </section>
  );
}
