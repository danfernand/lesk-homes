import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS, getProject } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} | Lesk Custom Homes`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <Link
          href="/#work"
          className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-dark"
        >
          ← All projects
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
            {project.tag}
          </p>
          <h1 className="mt-3 font-serif text-5xl font-semibold text-ink">
            {project.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            {project.summary}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {project.photos.map((photo, i) => (
            <figure
              key={photo.src.src}
              className={i === 0 ? "sm:col-span-2" : undefined}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-surface-muted ${
                  i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  preload={i === 0}
                  sizes={i === 0 ? "(min-width: 1152px) 1104px, 100vw" : "(min-width: 1152px) 540px, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-soft">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 rounded-3xl bg-ink px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-white">
              Planning a project like this?
            </h2>
            <p className="mt-2 text-white/70">
              Tell us about your lot, budget and timeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-brand-light px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Start Your Project
            </Link>
            {next !== project && (
              <Link
                href={`/work/${next.slug}`}
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Next: {next.name} →
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
