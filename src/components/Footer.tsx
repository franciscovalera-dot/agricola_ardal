import Link from 'next/link';
import { CONTACTO } from '@/lib/contacto';

export default function Footer() {
  return (
    <footer className="bg-verde-oscuro text-blanco">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid gap-10 md:grid-cols-2 items-end">
        <div>
          <Link
            href="/"
            className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none block"
          >
            Agrícola Ardal
          </Link>
          <p className="font-body mt-6 text-xs md:text-sm text-blanco/70 max-w-md leading-relaxed">
            Una empresa familiar arraigada en Murcia.
            Trabajamos con respeto por la tierra y por las personas que la cultivan.
          </p>
        </div>

        <div className="md:text-right">
          <ul className="font-body flex flex-wrap md:justify-end gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-blanco/80">
            <li>
              <Link href="/" className="hover:text-verde-lima transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-verde-lima transition-colors">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-verde-lima transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-verde-lima transition-colors">
                Contacto
              </Link>
            </li>
          </ul>

          <div className="mt-8 flex md:justify-end items-center gap-4 flex-wrap">
            <span className="font-body text-[10px] uppercase tracking-widest text-blanco/50">
              Certificaciones
            </span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-blanco/30 text-[9px] uppercase tracking-widest text-blanco/80">
                Eco
              </span>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-blanco/30 text-[9px] uppercase tracking-widest text-blanco/80">
                IGP
              </span>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-blanco/30 text-[9px] uppercase tracking-widest text-blanco/80">
                ISO
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blanco/15">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 font-body text-[11px] text-blanco/55 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Agrícola Ardal. Todos los derechos reservados.</span>
          <span className="flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACTO.email}`}
              className="hover:text-verde-lima transition-colors"
            >
              {CONTACTO.email}
            </a>
            <span>Hecho con cariño en Murcia.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
