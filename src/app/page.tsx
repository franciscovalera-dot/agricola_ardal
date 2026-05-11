import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyChooseSection from '@/components/WhyChooseSection';
import { FALLBACK_IMAGES } from '@/lib/images';
import { CONTACTO } from '@/lib/contacto';

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

const ventajas = [
  {
    titulo: 'Tradición agrícola',
    texto: 'Nuestra forma de trabajar nace del vinculo con el campo y de una manera de cultivar basada en la experiencia, el esfuerzo y el respeto por la tierra.',
    icono: '/images/Icon1.svg',
  },
  {
    titulo: 'Producto de Murcia',
    texto: 'Origen 100% local. Trazabilidad total: del árbol a tu mesa, sin intermediarios.',
    icono: '/images/Icon2.svg',
  },
  {
    titulo: 'Calidad y cuidado',
    texto: 'Selección manual y control en cada etapa. Solo la mejor fruta lleva nuestro nombre.',
    icono: '/images/Icon3.svg',
  },
  {
    titulo: 'Compromiso con el origen',
    texto: 'Cuidamos la tierra que nos da de comer con métodos respetuosos y sostenibles.',
    icono: '/images/Icon4.svg',
  },
];

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
        <div className="hidden">
          <h2 className="font-heading text-[44px] leading-[1] text-[#0B2407] md:text-[64px]">
            Contacta con Agrícola Ardal
          </h2>
          <p className="hidden">
            Si deseas más información sobre nuestros productos o sobre nuestra actividad agrícola, puedes ponerte en contacto con nosotros. Estaremos encantados de atenderte.
          </p>

          <div className="mx-auto mt-10 grid max-w-[480px] gap-4 sm:grid-cols-[0.9fr,1.35fr] md:mt-12">
            <a
              href={CONTACTO.telefonoHref}
              className="flex items-center gap-3 rounded-[10px] border border-[#b5dc6a] bg-[#93CC3A] px-4 py-4 text-left text-[#0B2407] transition-colors duration-300 hover:bg-[#9dd545]"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[#0B2407]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="font-body text-[13px] leading-none">{CONTACTO.telefono}</span>
            </a>

            <a
              href={CONTACTO.direccionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[10px] border border-[#b5dc6a] bg-[#93CC3A] px-4 py-4 text-left text-[#0B2407] transition-colors duration-300 hover:bg-[#9dd545]"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[#0B2407]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="font-body text-[12px] leading-[1.25] whitespace-pre-line">{CONTACTO.direccion}</span>
            </a>
          </div>
        </div>
      </section>

      {/* NUESTROS PRODUCTOS */}
      <section className="bg-blanco">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div className="text-center max-w-[420px] mx-auto mt-12 md:mt-16 mb-16 md:mb-20">
            <h2 className="font-heading text-[54px] leading-[0.95] text-[#0B2407] md:text-[72px]">
              Nuestros
              <br />
              productos
            </h2>
            <p className="hidden">
              Trabajamos únicamente variedades de fruta cultivada en Murcia, recogidas en su punto óptimo
              de sabor y propiedades nutricionales para llegar a tu mesa con la frescura del campo.
            </p>
            <p className="hidden">
              Trabajamos diferentes variedades de fruta cultivada en Murcia, adaptÃ¡ndonos a los ciclos naturales
              de cada cultivo y poniendo el foco en la calidad, la recolecciÃ³n y el cuidado del campo.
            </p>
            <p className="font-body mt-4 max-w-[340px] mx-auto text-[14px] leading-[1.35] text-[#0B2407] md:max-w-[360px]">
              Trabajamos diferentes variedades de fruta cultivada en Murcia, adaptándonos a los ciclos naturales
              de cada cultivo y poniendo el foco en la calidad, la recolección y el cuidado del campo.
            </p>
          </div>

          <div className="grid gap-y-16 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
            {productos.map((p) => (
              <article key={p.nombre} className="text-center">
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

      {/* POR QUÉ ELEGIR */}
      <WhyChooseSection />
      <section className="hidden">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          <div className="relative lg:pl-20">
            <h2 className="relative z-10 max-w-[520px] font-heading text-[58px] leading-[0.95] text-[#062B05] md:text-[82px] lg:text-[92px]">
              Por qué elegir <br className="hidden md:block" />
              Agrícola Ardal
            </h2>
            <div className="relative z-0 -mt-8 h-64 w-full max-w-[760px] md:-mt-12 md:h-80 lg:-mt-16 lg:h-88 lg:max-w-[880px]">
              <Image
                src="/images/Hoja limonero 1.svg"
                alt=""
                fill
                aria-hidden
                className="object-contain object-left-bottom"
              />
            </div>
          </div>

          <ul className="space-y-6">
            {ventajasHome.map((v) => (
              <li
                key={v.titulo}
                className="flex items-center gap-8 rounded-[18px] bg-blanco px-7 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#EEF0EA]">
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

      {/* EMPRESA VINCULADA AL CAMPO */}
      <section className="bg-crema/40">
        <div className="max-w-[1440px] pl-12 pr-6 md:pr-12 pb-28 md:pb-36">
          <div className="relative">
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

            <div className="relative z-10 mx-4 -mt-12 rounded-[22px] bg-[#062B05] px-8 py-7 text-blanco shadow-[0_18px_50px_rgba(6,43,5,0.18)] md:absolute md:-right-[33%] md:top-[54%] md:mx-0 md:mt-0 md:w-[50%] md:-translate-y-1/2 md:px-11 md:py-9 lg:-right-[36%] lg:w-[54%] lg:px-12 lg:py-10 xl:-right-[37%]">
              <h2 className="max-w-none font-heading text-[40px] leading-[0.98] text-[#FCF9F0] md:text-[56px] lg:text-[64px]">
                Una empresa vinculada al campo y a su entorno
              </h2>
              <p className="hidden">
                En Agrícola Ardal nos sentimos parte del paisaje que nos rodea. Trabajamos con respeto
                por la tierra que nos da de comer, manteniendo un vínculo estrecho con los pueblos,
                las personas y las costumbres de Murcia.
              </p>
              <Link
                href="/nosotros"
                className="hidden"
              >
                Conoce nuestra historia
              </Link>
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.1193 18.106L19.1193 6.03538L7.04868 6.03538" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M19.1184 6.03457L6.03448 19.1185" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-[#8DC83E]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-24">
          <div className="relative mx-auto mb-8 h-36 w-44 md:mb-10 md:h-48 md:w-56">
            <Image
              src="/images/Group 798.svg"
              alt=""
              fill
              sizes="224px"
              className="object-contain"
            />
          </div>
          <h2 className="font-heading text-[48px] leading-[1] text-[#0B2407] md:whitespace-nowrap md:text-[72px] lg:text-[82px]">
            Contacta con Agrícola Ardal
          </h2>
          <p className="hidden">
            Si deseas mÃ¡s informaciÃ³n sobre nuestros productos o sobre nuestra actividad agrÃ­cola, puedes ponerte en contacto con nosotros. Estaremos encantados de atenderte.
            o probar nuestra fruta, escríbenos o llámanos.
          </p>

          <p className="mx-auto mt-6 max-w-[520px] font-body text-[16px] leading-[1.35] text-[#0B2407] md:mt-7 md:text-[17px]">
            Si deseas mas informacion sobre nuestros productos o sobre nuestra actividad agricola, puedes ponerte en contacto con nosotros. Estaremos encantados de atenderte.
          </p>

          <div className="mx-auto mt-11 grid max-w-[600px] gap-5 sm:grid-cols-[0.9fr,1.35fr] md:mt-14">
            <a
              href={CONTACTO.telefonoHref}
              className="flex items-center gap-4 rounded-[10px] border border-[#b5dc6a] bg-[#83BA38] px-5 py-5 text-left text-[#0B2407] transition-colors duration-300 hover:bg-[#8DC83E]"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[#0B2407]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="font-body text-[15px] leading-none md:text-[16px]">
                <p className="hidden">
                  Teléfono
                </p>
                <p>
                  {CONTACTO.telefono}
                </p>
              </div>
            </a>

            <a
              href={CONTACTO.direccionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-[10px] border border-[#b5dc6a] bg-[#83BA38] px-5 py-5 text-left text-[#0B2407] transition-colors duration-300 hover:bg-[#8DC83E]"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[#0B2407]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div className="font-body text-[14px] leading-[1.25] md:text-[15px]">
                <p className="hidden">
                  Dirección
                </p>
                <p className="whitespace-pre-line">
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
