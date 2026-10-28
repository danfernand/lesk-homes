import Image from "next/image";
import dhlcLogo from "@/assets/partners/dhlc.png";
import flagstarLogo from "@/assets/partners/flagstar.png";
import northDallasBankLogo from "@/assets/partners/north-dallas-bank.png";
import prosperityLogo from "@/assets/partners/prosperity-bank.svg";
import sofiLogo from "@/assets/partners/sofi.svg";

const STEPS = [
  {
    step: "01",
    title: "Discovery + Site Strategy",
    description:
      "Align on goals, lot and budget. A luxury real-estate consultant brings market and site perspective.",
  },
  {
    step: "02",
    title: "Design + Budget",
    description:
      "The in-house design team develops the concept and selections alongside project scope and cost.",
  },
  {
    step: "03",
    title: "Preconstruction",
    description:
      "Finalize plans, pricing, permits, trades and schedule before work begins.",
  },
  {
    step: "04",
    title: "Build + Handoff",
    description:
      "Maintain clear project updates and quality control through inspections and final walkthrough.",
  },
];

// Logos pulled from each company's website; swap in the official artwork
// from Matt's team when it arrives.
const PARTNERS = [
  { name: "Prosperity Bank", href: "https://www.prosperitybankusa.com", logo: prosperityLogo },
  { name: "North Dallas Bank & Trust", href: "https://ndbt.com", logo: northDallasBankLogo },
  { name: "SoFi", href: "https://www.sofi.com", logo: sofiLogo },
  { name: "Flagstar", href: "https://www.flagstar.com", logo: flagstarLogo },
  { name: "DHLC Investments, Inc.", href: "https://www.dhlc.com", logo: dhlcLogo },
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
            The full team behind a well-managed build.
          </h2>
          <p className="mt-6 text-white/70">
            An in-house design team, a luxury real-estate consultant, and
            approved builder and financing relationships — all working within
            one accountable construction process.
          </p>
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

        <div className="mt-20 border-t border-white/20 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            Approved Builder &amp; Financing Relationships
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {PARTNERS.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${partner.name} (opens in a new tab)`}
                  className="flex h-24 items-center justify-center rounded-xl bg-white px-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    sizes="180px"
                    className="max-h-10 w-auto max-w-full object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
