import Image from "next/image";
import darvanyFramingPhoto from "@/assets/about-darvany-framing.jpg";
import westfieldFramingPhoto from "@/assets/about-westfield-framing.jpg";
import westfieldInteriorPhoto from "@/assets/about-westfield-interior.jpg";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={darvanyFramingPhoto}
              alt="Crew framing and sheathing the walls of Darvany, a ground-up custom home"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={westfieldFramingPhoto}
              alt="Roof trusses and sheathed walls going up on the Westfield Lane new build"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={westfieldInteriorPhoto}
              alt="Finished open living area at Westfield Lane with wood floors and a sliding glass door"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
            About Lesk Custom Homes
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
            A Dallas builder shaped by service and experience.
          </h2>
          <p className="mt-6 text-ink-soft">
            Matt Kowalewski is a Dallas builder, developer and U.S. Army
            veteran. He served in Kuwait and Baghdad, and brings a steady,
            people-first approach to leadership on every project.
          </p>
          <p className="mt-4 text-ink-soft">
            After military service, Matt worked with large construction
            companies, learning how complex residential projects are planned
            and delivered. He went on to build his own construction and
            development business, bringing that experience directly to clients.
          </p>
          <p className="mt-4 text-ink-soft">
            Today, Lesk Custom Homes focuses on luxury ground-up homes and
            select high-end renovations across Dallas and North Texas. Matt
            stays involved from early planning through construction, with a
            team focused on thoughtful design, clear communication and
            craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
