import type { StaticImageData } from "next/image";

import buenaVista01 from "@/assets/projects/buena-vista/01.jpg";
import buenaVista02 from "@/assets/projects/buena-vista/02.jpg";
import buenaVista03 from "@/assets/projects/buena-vista/03.jpg";
import buenaVista04 from "@/assets/projects/buena-vista/04.jpg";
import buenaVista05 from "@/assets/projects/buena-vista/05.jpg";
import buenaVista06 from "@/assets/projects/buena-vista/06.jpg";
import buenaVista07 from "@/assets/projects/buena-vista/07.jpg";
import buenaVista08 from "@/assets/projects/buena-vista/08.jpg";
import buenaVista09 from "@/assets/projects/buena-vista/09.jpg";
import darvany01 from "@/assets/projects/darvany/01.jpg";
import darvany02 from "@/assets/projects/darvany/02.jpg";
import darvany03 from "@/assets/projects/darvany/03.jpg";
import darvany04 from "@/assets/projects/darvany/04.jpg";
import darvany05 from "@/assets/projects/darvany/05.jpg";
import darvany06 from "@/assets/projects/darvany/06.jpg";
import darvany07 from "@/assets/projects/darvany/07.jpg";
import westfieldLane01 from "@/assets/projects/westfield-lane/01.jpg";
import westfieldLane02 from "@/assets/projects/westfield-lane/02.jpg";
import westfieldLane03 from "@/assets/projects/westfield-lane/03.jpg";
import westfieldLane04 from "@/assets/projects/westfield-lane/04.jpg";
import westfieldLane05 from "@/assets/projects/westfield-lane/05.jpg";
import westfieldLane06 from "@/assets/projects/westfield-lane/06.jpg";
import westfieldLane07 from "@/assets/projects/westfield-lane/07.jpg";

export type ProjectPhoto = {
  src: StaticImageData;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  tag: string;
  summary: string;
  // The first photo is the cover on the home page grid.
  photos: ProjectPhoto[];
};

// Marquis Drive and Weeburn join this list once their photos arrive.
export const PROJECTS: Project[] = [
  {
    slug: "darvany",
    name: "Darvany",
    tag: "Ground-Up New Build",
    summary:
      "A ground-up custom home in Dallas, built from the slab up: white board-and-batten siding, black trim and roofline, a two-car garage and a vaulted great room inside. The photos follow the build from framing and full wall sheathing to the finished home.",
    photos: [
      {
        src: darvany01,
        alt: "Darvany at dusk: white board-and-batten home with a black garage door, wood front doors, and landscape lighting",
      },
      {
        src: darvany02,
        alt: "Darvany's finished board-and-batten exterior and detached garage before landscaping",
      },
      {
        src: darvany03,
        alt: "Vaulted great room at Darvany with clerestory windows, a fireplace, and a marble-topped island",
      },
      {
        src: darvany04,
        alt: "Crew sheathing the front of Darvany, with roof framing going up above",
      },
      {
        src: darvany05,
        alt: "Darvany's walls framed and sheathed, with window openings along the side of the house",
      },
      {
        src: darvany06,
        alt: "Darvany fully sheathed with roof decking on, behind the job-site fence",
      },
      {
        src: darvany07,
        alt: "Early framing at Darvany behind the job-site fence, with lumber staged on the lot",
      },
    ],
  },
  {
    slug: "westfield-lane",
    name: "Westfield Lane",
    tag: "Custom Home",
    summary:
      "A new single-story home built from the ground up, from a formed foundation through framing and sheathing to finished siding, a covered front porch and an open living area with wood floors.",
    photos: [
      {
        src: westfieldLane01,
        alt: "Finished Westfield Lane home with white lap siding, a stone wainscot, a covered front porch, and a rear deck",
      },
      {
        src: westfieldLane02,
        alt: "Westfield Lane with a covered front porch and a wide lawn",
      },
      {
        src: westfieldLane03,
        alt: "Open living area at Westfield Lane with wood floors and a sliding glass door to the yard",
      },
      {
        src: westfieldLane04,
        alt: "Westfield Lane with siding going on and the porch framed in",
      },
      {
        src: westfieldLane05,
        alt: "Roof trusses and sheathed walls going up on the Westfield Lane build",
      },
      {
        src: westfieldLane06,
        alt: "Westfield Lane framing and roof trusses under a blue sky",
      },
      {
        src: westfieldLane07,
        alt: "Formed and reinforced foundation ready for the Westfield Lane slab pour",
      },
    ],
  },
  {
    slug: "buena-vista",
    name: "Buena Vista",
    tag: "High-End Renovation",
    summary:
      "A full-scope transformation of an existing home. The interior was opened up and rebuilt with a new kitchen, an open-riser staircase, three fully tiled bathrooms and a new rear deck.",
    photos: [
      {
        src: buenaVista01,
        alt: "Renovated kitchen at Buena Vista with white cabinets, quartz counters, and dark hardwood floors",
      },
      {
        src: buenaVista02,
        alt: "Living area at Buena Vista with a new staircase and an interior window to the room beyond",
      },
      {
        src: buenaVista03,
        alt: "Open-riser staircase with wood treads and a steel stringer",
      },
      {
        src: buenaVista04,
        alt: "Bathroom with marble-look tile, a glass walk-in shower, and a double vanity",
      },
      {
        src: buenaVista05,
        alt: "Bathroom with a subway-tile walk-in shower and a pebble shower floor",
      },
      {
        src: buenaVista06,
        alt: "Bathroom with a tiled tub surround and a gray shaker vanity",
      },
      {
        src: buenaVista07,
        alt: "Upstairs room with a row of tall windows and a vaulted ceiling",
      },
      {
        src: buenaVista08,
        alt: "New rear deck and stair framed in pressure-treated lumber",
      },
      {
        src: buenaVista09,
        alt: "Interior opened up to the studs during the Buena Vista renovation",
      },
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
