import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FALLBACK_IMAGES } from '@/lib/images';
import { CONTACTO } from '@/lib/contacto';

const productos = [
  {
    nombre: 'Albaricoque',
    descripcion:
      'De piel dorada y pulpa jugosa. Recogido en su punto justo de maduración para conservar todo su aroma.',
    imagen: FALLBACK_IMAGES.albaricoque,
  },
  {
    nombre: 'Nectarina',
    descripcion:
      'Dulce, firme y con un toque ácido. Una fruta de hueso que conquista por su sabor intenso y su frescura.',
    imagen: FALLBACK_IMAGES.nectarina,
  },
  {
    nombre: 'Naranja',
    descripcion:
      'Cultivada al sol de Murcia, llena de zumo y vitamina. Sabor clásico, fresco y honesto.',
    imagen: FALLBACK_IMAGES.naranja,
  },
  {
    nombre: 'Limones',
    descripcion:
      'Aromáticos, ácidos y siempre listos para realzar cualquier receta. Cosechados todo el año.',
    imagen: FALLBACK_IMAGES.limon,
  },
];

const ventajas = [
  {
    titulo: 'Tradición agrícola',
    texto: 'Tres generaciones cuidando la misma tierra con el conocimiento heredado de nuestra familia.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20" />
        <path d="M12 8c-3 0-6-2-6-5 3 0 6 2 6 5z" />
        <path d="M12 12c3 0 6-2 6-5-3 0-6 2-6 5z" />
        <path d="M12 16c-3 0-6-2-6-5 3 0 6 2 6 5z" />
      </svg>
    ),
  },
  {
    titulo: 'Producto de Murcia',
    texto: 'Origen 100% local. Trazabilidad total: del árbol a tu mesa, sin intermediarios.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    titulo: 'Calidad y cuidado',
    texto: 'Selección manual y control en cada etapa. Solo la mejor fruta lleva nuestro nombre.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 7 9 18l-5-5" />
      </svg>
    ),
  },
  {
    titulo: 'Compromiso con el origen',
    texto: 'Cuidamos la tierra que nos da de comer con métodos respetuosos y sostenibles.',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 12a5 5 0 0 1 5-5h5" />
        <path d="M12 12a5 5 0 0 0-5-5H2" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="bg-blanco">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[calc(100vh-72px)] min-h-[600px] overflow-hidden">
        <Image
          src={FALLBACK_IMAGES.heroNaranjos}
          alt="Campo de naranjos en Murcia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-x-0 bottom-10 md:bottom-16 px-6 md:px-12">
          <div
            className="w-full max-w-4xl rounded-[20px] p-10 md:p-14"
            style={{ backgroundColor: 'rgba(252, 249, 240, 0.80)' }}
          >
            <h1
              className="font-heading text-6xl md:text-[96px] leading-[1.05]"
              style={{ color: '#0B2407' }}
            >
              Fruta cultivada en el campo de Murcia.
            </h1>
            <p
              className="font-body mt-8 text-base leading-relaxed"
              style={{ color: '#0B2407' }}
            >
              En Agrícola Ardal cultivamos fruta en Mula, Murcia, con una forma de trabajar ligada
              al campo, a la tierra y al respeto por cada cosecha. Apostamos por una producción
              cuidada de albaricoques, nectarinas y cítricos, buscando siempre la calidad del
              producto y el valor de hacer las cosas como se han hecho toda la vida.
            </p>
            <p
              className="font-body mt-4 text-base leading-relaxed"
              style={{ color: '#0B2407' }}
            >
              Nuestro entorno forma parte del paisaje agrícola del Ardal, una zona muleña
              vinculada históricamente al campo y a los cultivos tradicionales, donde la
              agricultura sigue marcando el ritmo de cada temporada.
            </p>
            <Link
              href="/productos"
              className="group mt-7 inline-flex items-center gap-3 font-body text-xs md:text-sm tracking-wide pl-5 pr-2 py-2 rounded-full transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: '#8DC83E', color: '#0B2407' }}
            >
              Conoce nuestros productos
              <span
                className="flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-300 group-hover:translate-x-1"
                style={{ backgroundColor: '#0B2407' }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1193 18.106L19.1193 6.03538L7.04868 6.03538"
                    stroke="#8DC83E"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19.1184 6.03457L6.03448 19.1185"
                    stroke="#8DC83E"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* NUESTROS PRODUCTOS */}
      <section className="bg-blanco">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="font-heading text-4xl md:text-6xl text-negro leading-tight">
              Nuestros productos
            </h2>
            <p className="font-body mt-6 text-base md:text-lg text-negro/70 leading-relaxed">
              Trabajamos únicamente variedades de fruta cultivada en Murcia, recogidas en su punto óptimo
              de sabor y propiedades nutricionales para llegar a tu mesa con la frescura del campo.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {productos.map((p) => (
              <article key={p.nombre} className="text-center">
                <div className="relative aspect-square w-full mb-6 flex items-center justify-center">
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-negro mb-3">
                  {p.nombre}
                </h3>
                <p className="font-body text-sm md:text-base text-negro/70 leading-relaxed px-2">
                  {p.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIR */}
      <section className="bg-crema/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid gap-14 md:grid-cols-2 items-center">
          <div className="relative">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-verde-oscuro leading-[1.05] max-w-md">
              Por qué elegir <br className="hidden md:block" />
              Agrícola Ardal
            </h2>
            <svg
              viewBox="0 0 200 80"
              className="mt-8 w-48 h-20 text-verde-oscuro/70"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 60 C 40 20, 90 20, 130 50 C 100 55, 60 60, 30 70 Z" opacity="0.7" />
              <path d="M70 50 C 100 15, 150 15, 190 35 C 160 45, 120 50, 90 60 Z" opacity="0.5" />
              <path d="M50 55 L 120 35" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <ul className="space-y-4">
            {ventajas.map((v) => (
              <li
                key={v.titulo}
                className="bg-blanco rounded-md px-6 py-5 flex items-start gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-verde-lima/15 text-verde-oscuro flex items-center justify-center">
                  {v.icono}
                </span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-verde-oscuro mb-1">
                    {v.titulo}
                  </h3>
                  <p className="font-body text-sm md:text-base text-negro/70 leading-relaxed">
                    {v.texto}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EMPRESA VINCULADA AL CAMPO */}
      <section className="bg-crema/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-32">
          <div className="relative grid gap-6 md:grid-cols-12 items-stretch">
            <div className="relative md:col-span-7 aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden rounded-md">
              <Image
                src={FALLBACK_IMAGES.campoMurcia}
                alt="Pueblo de Murcia con su entorno natural"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="md:col-span-5 md:-ml-20 md:self-center bg-verde-oscuro text-blanco rounded-md p-8 md:p-10 lg:p-12 relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
                Una empresa vinculada al campo y a su entorno
              </h2>
              <p className="font-body mt-6 text-sm md:text-base text-blanco/85 leading-relaxed">
                En Agrícola Ardal nos sentimos parte del paisaje que nos rodea. Trabajamos con respeto
                por la tierra que nos da de comer, manteniendo un vínculo estrecho con los pueblos,
                las personas y las costumbres de Murcia.
              </p>
              <Link
                href="/nosotros"
                className="inline-block mt-8 font-body uppercase tracking-widest text-xs text-verde-lima border-b border-verde-lima pb-1 hover:text-blanco hover:border-blanco transition-colors duration-300"
              >
                Conoce nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-verde-lima/35">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-full overflow-hidden">
            <Image
              src={FALLBACK_IMAGES.flor}
              alt="Flor de almendro"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-negro leading-tight">
            Contacta con Agrícola Ardal
          </h2>
          <p className="font-body mt-6 text-base md:text-lg text-negro/75 max-w-2xl mx-auto leading-relaxed">
            Estamos encantados de saber de ti. Si tienes una pregunta, quieres trabajar con nosotros
            o probar nuestra fruta, escríbenos o llámanos.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            <a
              href={CONTACTO.telefonoHref}
              className="bg-blanco rounded-md px-6 py-5 flex items-center gap-4 text-left hover:shadow-md transition-shadow duration-300"
            >
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-verde-oscuro/10 text-verde-oscuro flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="font-body uppercase tracking-widest text-[10px] text-negro/50">
                  Teléfono
                </p>
                <p className="font-body text-base text-negro">
                  {CONTACTO.telefono}
                </p>
              </div>
            </a>

            <a
              href={CONTACTO.direccionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blanco rounded-md px-6 py-5 flex items-center gap-4 text-left hover:shadow-md transition-shadow duration-300"
            >
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-verde-oscuro/10 text-verde-oscuro flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <p className="font-body uppercase tracking-widest text-[10px] text-negro/50">
                  Dirección
                </p>
                <p className="font-body text-sm text-negro whitespace-pre-line">
                  {CONTACTO.direccion}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
