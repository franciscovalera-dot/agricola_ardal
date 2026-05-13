'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function EmpresaSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setOffset((clamped - 0.5) * 100);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="bg-crema/40 overflow-hidden">
      <div className="max-w-[1440px] px-6 pt-16 pb-16 sm:pl-10 md:pl-12 md:pr-12 md:pt-28 md:pb-28 lg:pt-36 lg:pb-36">
        <div ref={sectionRef} className="relative">

          {/* Imagen — estática */}
          <div className="relative aspect-[16/11.5] overflow-hidden rounded-[22px] md:aspect-[16/10.4] lg:aspect-[16/8.8]">
            <div className="absolute inset-y-0 left-[-2%] w-[104%] md:left-[-4%] md:w-[108%] lg:left-[-5%] lg:w-[110%]">
              <Image
                src="/images/Pueblo.png"
                alt="Pueblo de Murcia con su entorno natural"
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover object-left"
              />
            </div>
          </div>

          {/* Caja de texto — div exterior: posicionamiento / div interior: parallax */}
          <div className="relative z-10 mx-4 -mt-12 md:absolute md:-right-[33%] md:top-[54%] md:mx-0 md:mt-0 md:w-[50%] md:-translate-y-1/2 lg:-right-[36%] lg:w-[54%] xl:-right-[37%]">
          <div
            className="rounded-[22px] bg-[#062B05] px-8 py-7 text-blanco shadow-[0_18px_50px_rgba(6,43,5,0.18)] md:px-11 md:py-9 lg:px-12 lg:py-10"
            style={{ transform: `translateX(${offset * -0.5}px)` }}
          >
            <h2 className="max-w-none font-heading text-[40px] leading-[0.98] text-[#FCF9F0] md:text-[56px] lg:text-[64px]">
              Una empresa vinculada al campo y a su entorno
            </h2>
            <p className="font-body mt-7 max-w-[29rem] text-[13px] leading-[1.34] text-[#FCF9F0]/88 md:max-w-[31rem] md:text-[14px]">
              Agrícola Ardal es una empresa agrícola de Mula, Murcia, centrada en el cultivo de fruta y en el valor de una producción arraigada al territorio. Nuestra actividad se desarrolla en una zona donde el paisaje agrícola sigue formando parte de la vida, de la economía y de la identidad local.
            </p>
            <p className="font-body mt-5 max-w-[27rem] text-[13px] leading-[1.34] text-[#FCF9F0]/88 md:max-w-[29rem] md:text-[14px]">
              Trabajamos desde el compromiso con la tierra, con una visión basada en la calidad del producto y en la continuidad de una forma de cultivar ligada al campo de siempre.
            </p>
            <Link
              href="/nosotros"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#8DC83E] py-2 pl-5 pr-2 font-body text-sm text-[#0B2407] transition-opacity duration-300 hover:opacity-90"
            >
              Conócenos
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2407] text-[#8DC83E] transition-transform duration-300 group-hover:translate-x-1">
                <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
                  <path d="M19.1193 18.106L19.1193 6.03538L7.04868 6.03538" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M19.1184 6.03457L6.03448 19.1185" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </Link>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
