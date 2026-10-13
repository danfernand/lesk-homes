import Image from "next/image";
import brickExterior from "@/assets/work-brick-exterior.jpg";
import coveredPatio from "@/assets/work-covered-patio.jpg";
import orchardRidgeGreatRoom from "@/assets/work-orchard-ridge-great-room.jpg";
import orchardRidgeKitchen from "@/assets/work-orchard-ridge-kitchen.jpg";
import orchardRidgeLiving from "@/assets/work-orchard-ridge-living.jpg";
import whiteKitchen from "@/assets/work-white-kitchen.jpg";

const PROJECTS = [
  {
    name: "Orchard Ridge Great Room",
    tag: "Renovation",
    photo: orchardRidgeGreatRoom,
    alt: "Open living and dining area with hardwood floors, a dark ceiling beam, and a kitchen beyond",
  },
  {
    name: "Covered Patio",
    tag: "Addition",
    photo: coveredPatio,
    alt: "Covered patio with a vaulted cedar ceiling, string lights, and outdoor seating and dining",
  },
  {
    name: "Orchard Ridge Kitchen",
    tag: "Renovation",
    photo: orchardRidgeKitchen,
    alt: "Kitchen with navy cabinets, a waterfall-edge island, and herringbone tile backsplash",
  },
  {
    name: "Brick Ranch Exterior",
    tag: "Renovation",
    photo: brickExterior,
    alt: "Light brick ranch home with cedar shutters and a gabled front porch",
  },
  {
    name: "Orchard Ridge Living Room",
    tag: "Renovation",
    photo: orchardRidgeLiving,
    alt: "Living room with a stacked-stone fireplace and reclaimed wood mantel, open to the kitchen",
  },
  {
    name: "White Shaker Kitchen",
    tag: "Renovation",
    photo: whiteKitchen,
    alt: "Kitchen with white shaker cabinets, quartz counters, and dark hardwood floors",
  },
];

export default function Gallery() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex max-w-2xl flex-col">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
          Our Work
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">
          A sample of recent work.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div key={project.name} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={project.photo}
                alt={project.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
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
