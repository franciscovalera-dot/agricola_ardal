'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ventajasHome = [
  {
    titulo: 'Tradicion agricola',
    texto:
      'Nuestra forma de trabajar nace del vinculo con el campo y de una manera de cultivar basada en la experiencia, el esfuerzo y el respeto por la tierra.',
    icono: '/images/Icon1.svg',
  },
  {
    titulo: 'Producto de Murcia',
    texto:
      'Cultivamos en Mula, Murcia, en un entorno donde la agricultura forma parte del paisaje y de la identidad del territorio.',
    icono: '/images/Icon2.svg',
  },
  {
    titulo: 'Cuidado en cada cultivo',
    texto:
      'Cada producto requiere atencion, seguimiento y dedicacion. Por eso trabajamos cada cosecha con criterio y compromiso con la calidad.',
    icono: '/images/Icon3.svg',
  },
  {
    titulo: 'Compromiso con el origen',
    texto:
      'Creemos en una agricultura conectada con su entorno, con sus tiempos y con el valor de hacer las cosas bien desde el principio.',
    icono: '/images/Icon4.svg',
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;

    if (!section || prefersReducedMotion) {
      setCardsVisible(true);
      return;
    }

    let frame = 0;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));

      setOffset((clamped - 0.5) * 100);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateParallax);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#F6F3EA]">
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <div className="relative lg:pl-20">
          <h2
            className="relative z-10 max-w-[520px] font-heading text-[36px] sm:text-[48px] leading-[0.95] text-[#062B05] transition-transform duration-100 ease-out md:text-[72px] lg:text-[92px]"
            style={{ transform: `translate3d(0, ${Math.min(offset, 0) * -0.1}px, 0)` }}
          >
            Por que elegir <br className="hidden md:block" />
            Agricola Ardal
          </h2>
          <div
            className="relative z-0 -mt-8 h-64 w-full max-w-[760px] transition-transform duration-75 ease-out md:-mt-12 md:h-80 lg:-mt-16 lg:h-88 lg:max-w-[880px]"
            style={{ transform: `translate3d(0, ${Math.min(offset, 0) * -2.4 - 60}px, 0)` }}
          >
            <Image
              src="/images/Hoja limonero 1.svg"
              alt=""
              fill
              aria-hidden
              className="object-contain object-left-bottom"
            />
          </div>
        </div>

        <ul
          className="space-y-6"
        >
          {ventajasHome.map((v, index) => (
            <li
              key={v.titulo}
              className="flex items-center gap-5 rounded-[18px] bg-blanco px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-700 ease-out sm:gap-8 sm:px-7 sm:py-5"
              style={{
                transform: cardsVisible ? 'translateX(0)' : 'translateX(48px)',
                opacity: cardsVisible ? 1 : 0,
                transitionDelay: cardsVisible ? `${index * 110}ms` : '0ms',
              }}
            >
              <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#EEF0EA] sm:h-14 sm:w-14">
                <Image
                  src={v.icono}
                  alt=""
                  fill
                  aria-hidden
                  sizes="56px"
                  className="object-contain p-3"
                />
              </span>
              <div>
                <h3 className="font-body text-[20px] font-bold leading-none text-[#062B05] md:text-[24px]">
                  {v.titulo}
                </h3>
                <p className="mt-2 max-w-[470px] font-body text-[12px] leading-[1.25] text-[#062B05] md:text-[13px]">
                  {v.texto}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
