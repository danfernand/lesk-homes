import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export default function Gallery() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex max-w-2xl flex-col">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
          Our Work
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
          Signature builds and high-end remodels.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={project.photos[0].src}
                alt={project.photos[0].alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink group-hover:text-brand-dark">
              {project.name}
            </h3>
            <p className="text-sm text-ink-soft">
              {project.tag} · {project.photos.length} photos
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
