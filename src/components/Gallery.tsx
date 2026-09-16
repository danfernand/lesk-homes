import Image from "next/image";
import { ph } from "@/lib/placeholder";

const PROJECTS = [
  { name: "The Alder Residence", tag: "New Build · 4,200 sqft" },
  { name: "Birchwood Addition", tag: "Addition · 900 sqft" },
  { name: "Cedar Ridge Remodel", tag: "Renovation · Whole Home" },
  { name: "The Hollow Farmhouse", tag: "New Build · 3,600 sqft" },
  { name: "Maple Street Cottage", tag: "New Build · 1,800 sqft" },
  { name: "Riverbend Retreat", tag: "New Build · 5,100 sqft" },
];

export default function Gallery() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex max-w-2xl flex-col">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Our Work
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
          A sample of recent builds.
        </h2>
        <p className="mt-4 text-ink-soft">
          [Placeholder] Replace these tiles with real project photography and
          names once the client shares their portfolio.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <div key={project.name} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={ph(900, 675, project.name, i)}
                alt={`Placeholder photo for ${project.name}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
              {project.name}
            </h3>
            <p className="text-sm text-ink-soft">{project.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
