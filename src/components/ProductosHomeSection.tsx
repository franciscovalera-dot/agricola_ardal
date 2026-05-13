'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const productos = [
  {
    nombre: 'Albaricoque',
    href: '/albaricoques',
    descripcion:
      'De piel dorada y pulpa jugosa. Recogido en su punto justo de maduración para conservar todo su aroma.',
    imagen: '/images/Albaricoque 2.svg',
  },
  {
    nombre: 'Nectarina',
    href: '/nectarinas',
    descripcion:
      'Dulce, firme y con un toque ácido. Una fruta de hueso que conquista por su sabor intenso y su frescura.',
    imagen: '/images/Nectarina.svg',
  },
  {
    nombre: 'Naranja',
    href: '/naranjas',
    descripcion:
      'Cultivada al sol de Murcia, llena de zumo y vitamina. Sabor clásico, fresco y honesto.',
    imagen: '/images/Naranja.svg',
  },
  {
    nombre: 'Limones',
    href: '/limones',
    descripcion:
      'Aromáticos, ácidos y siempre listos para realzar cualquier receta. Cosechados todo el año.',
    imagen: '/images/Limon.svg',
  },
];

export default function ProductosHomeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-blanco">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 pb-20 md:pb-28">

        <div
          className="text-center max-w-[420px] mx-auto mt-8 md:mt-12 mb-10 md:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 className="font-heading text-[54px] leading-[0.95] text-[#0B2407] md:text-[72px]">
            Nuestros
            <br />
            productos
          </h2>
          <p className="font-body mt-4 max-w-[340px] mx-auto text-[14px] leading-[1.35] text-[#0B2407] md:max-w-[360px]">
            Trabajamos diferentes variedades de fruta cultivada en Murcia, adaptándonos a los ciclos naturales
            de cada cultivo y poniendo el foco en la calidad, la recolección y el cuidado del campo.
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
          {productos.map((p, index) => (
            <article
              key={p.nombre}
              className="text-center transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: visible ? `${150 + index * 100}ms` : '0ms',
              }}
            >
              <Link href={p.href} className="group flex flex-col items-center">
                <div className="relative h-56 w-56 transition-transform duration-300 ease-out group-hover:scale-125 md:h-72 md:w-72 lg:h-[18rem] lg:w-[18rem] xl:h-[19rem] xl:w-[19rem]">
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-6 font-heading text-[28px] leading-none text-negro transition-colors duration-300 group-hover:text-verde-oscuro md:text-[34px]">
                  {p.nombre}
                </h3>
                <p className="mt-3 max-w-[220px] font-body text-[14px] leading-[1.25] text-negro/75 md:max-w-[240px]">
                  {p.descripcion}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
