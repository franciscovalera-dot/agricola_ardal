'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        setHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 72) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 bg-verde-noche border-b border-blanco/10 text-blanco transition-transform duration-300 ease-in-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="w-full px-6 md:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl md:text-3xl tracking-tight">
          Agrícola Ardal
        </Link>

        <ul className="hidden md:flex items-center gap-10 font-body text-sm uppercase tracking-widest">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors duration-300 hover:text-verde-lima"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer font-body text-sm uppercase tracking-widest">
            Menú
          </summary>
          <ul className="absolute right-0 mt-4 bg-blanco text-negro shadow-lg rounded-md py-3 px-6 min-w-[180px] font-body text-sm uppercase tracking-widest space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-verde-oscuro transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
