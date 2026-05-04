"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MAX_OFFSET_PX = 40;

export function ParallaxImagePair() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const viewportH = window.innerHeight;
          const sectionCenter = rect.top + rect.height / 2;
          setProgress((viewportH / 2 - sectionCenter) / viewportH);
        }
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const upOffset = -progress * MAX_OFFSET_PX;
  const downOffset = progress * MAX_OFFSET_PX;

  return (
    <div ref={ref} className="relative grid grid-cols-2 gap-3 sm:gap-4">
      <div
        className="relative aspect-[440/660] overflow-hidden rounded-2xl will-change-transform"
        style={{ transform: `translateY(${upOffset}px)` }}
      >
        <Image
          src="/images/cesto-melocotones.png"
          alt="Cesto con melocotones recién cosechados"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 25vw, 50vw"
        />
      </div>
      <div
        className="relative mt-10 aspect-[440/660] overflow-hidden rounded-2xl will-change-transform md:mt-16"
        style={{ transform: `translateY(${downOffset}px)` }}
      >
        <Image
          src="/images/flor-cerezo.png"
          alt="Flor de cerezo en primavera"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 25vw, 50vw"
        />
      </div>
    </div>
  );
}
