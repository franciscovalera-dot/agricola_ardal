'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Product = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export default function NosotrosProductosSection({ products }: { products: Product[] }) {
  const ref = useRef<HTMLElement | null>(null);
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
    <section ref={ref} className="bg-ink px-6 pb-24 md:px-12 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <h2
          className="text-center font-heading text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight text-cream transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          Nuestros productos
        </h2>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-16 md:mt-16 lg:grid-cols-4 lg:gap-24">
          {products.map((p, index) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col items-center text-center text-cream transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: visible ? `${150 + index * 120}ms` : '0ms',
              }}
            >
              <div className="relative h-40 w-40 transition-transform duration-300 ease-out group-hover:scale-125 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-80 lg:w-80">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-6 font-heading text-2xl md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
