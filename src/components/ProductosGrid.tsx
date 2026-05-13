'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Producto = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  descripcion: string;
  bgClassName: string;
};

export default function ProductosGrid({ productos }: { productos: Producto[] }) {
  const ref = useRef<HTMLUListElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {productos.map((p, index) => (
        <li
          key={p.href}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: visible ? `${index * 120}ms` : '0ms',
          }}
        >
          <Link href={p.href} className="group block">
            <div className={`relative aspect-[3/4] overflow-hidden rounded-[22px] ${p.bgClassName} transition-transform duration-500 ease-out group-hover:-translate-y-2`}>
              <Image
                src={p.imageSrc}
                alt={p.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-6 sm:p-8 md:p-10 transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="pt-6">
              <h2 className="font-heading text-[26px] sm:text-[30px] md:text-[34px] leading-none text-ink transition-colors duration-300 group-hover:text-verde-oscuro">
                {p.title}
              </h2>
              <p className="font-body mt-3 text-base leading-relaxed text-ink/65">
                {p.descripcion}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-body text-sm text-verde-oscuro transition-colors duration-300 group-hover:text-ardalGreen">
                Ver más
                <svg width="16" height="16" viewBox="0 0 26 26" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M19.1193 18.106L19.1193 6.03538L7.04868 6.03538" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M19.1184 6.03457L6.03448 19.1185" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
