"use client";

import { useActionState } from "react";
import { sendInquiry, type InquiryState } from "@/app/actions";

const INITIAL_STATE: InquiryState = { status: "idle" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(sendInquiry, INITIAL_STATE);
  // After a failed send, refill the form so nothing typed is lost.
  const values = state.status === "error" ? state.fields : undefined;

  if (state.status === "sent") {
    return (
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-ink px-8 py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold text-white">
            Thanks — we&apos;ve got your message.
          </h2>
          <p className="mt-4 text-white/70">
            We&apos;ll follow up within one business day to schedule a
            discovery call.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 rounded-3xl bg-ink px-8 py-14 sm:px-14 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
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
              <a href="tel:+12146036879" className="hover:text-brand-light">
                (214) 603-6879
              </a>
            </p>
            <p>
              <span className="text-white/50">Email: </span>
              <a href="mailto:office@leskhomes.com" className="hover:text-brand-light">
                office@leskhomes.com
              </a>
            </p>
          </div>
        </div>

        <form
          className="space-y-4"
          aria-label="Project inquiry form"
          action={formAction}
        >
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={200}
                defaultValue={values?.name}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-brand-light"
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
                required
                maxLength={320}
                defaultValue={values?.email}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-brand-light"
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
              defaultValue={values?.budget ?? ""}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none focus:border-brand-light"
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
              required
              maxLength={5000}
              defaultValue={values?.message}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-brand-light"
              placeholder="Lot location, timeline, must-haves..."
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-brand-light px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send Inquiry"}
          </button>

          {state.status === "error" && (
            <p role="alert" className="text-sm text-red-300">
              {state.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
