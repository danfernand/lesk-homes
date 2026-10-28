"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

const SLIDE_MS = 7000;
const FADE_MS = 1500;
const ZOOM_SCALE = 1.12;

type Slide = {
  src: StaticImageData;
  alt: string;
};

export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  // Starts false so the first photo renders at full size, then zooms once
  // the page is interactive.
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const frame = requestAnimationFrame(() => setZooming(true));
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      SLIDE_MS,
    );
    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(timer);
    };
  }, [slides.length]);

  return slides.map((slide, i) => {
    const isActive = i === active;
    return (
      <div
        key={slide.src.src}
        aria-hidden={!isActive}
        className="absolute inset-0"
        style={{
          opacity: isActive ? 1 : 0,
          transform: `scale(${isActive && zooming ? ZOOM_SCALE : 1})`,
          // The active slide zooms through its whole turn plus the fade out.
          // An outgoing slide holds its zoom until it has faded, then resets.
          transition: isActive
            ? `opacity ${FADE_MS}ms ease, transform ${SLIDE_MS + FADE_MS}ms linear`
            : `opacity ${FADE_MS}ms ease, transform 0ms linear ${FADE_MS}ms`,
        }}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          preload={i === 0}
          placeholder={i === 0 ? "blur" : "empty"}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    );
  });
}
