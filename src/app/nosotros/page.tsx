import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ParallaxImagePair } from "@/components/ParallaxImagePair";
import { CONTACTO } from "@/lib/contacto";

export const metadata = {
  title: "Nosotros — Agrícola Ardal",
  description:
    "La historia, los valores y las personas detrás de Agrícola Ardal en Mula, Murcia.",
};

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const products = [
  {
    href: "/albaricoques",
    imageSrc: "/images/Albaricoque 2.svg",
    imageAlt: "Albaricoque",
    title: "Albaricoques",
    description:
      "Cultivamos albaricoques con el cuidado que requiere una fruta de temporada, buscando siempre un producto de calidad, con sabor y con el valor de su origen en el campo murciano.",
  },
  {
    href: "/nectarinas",
    imageSrc: "/images/Nectarina.svg",
    imageAlt: "Nectarina",
    title: "Nectarinas",
    description:
      "Producimos nectarinas cultivadas en Murcia, atendiendo cada fase del proceso para obtener una fruta bien cuidada, fresca y con una recolección realizada en el momento adecuado.",
  },
  {
    href: "/naranjas",
    imageSrc: "/images/Naranja.svg",
    imageAlt: "Naranja",
    title: "Naranjas",
    description:
      "Nuestras naranjas forman parte de una producción agrícola trabajada con dedicación y compromiso con la calidad, ofreciendo fruta cultivada en Murcia con atención al detalle desde el campo.",
  },
  {
    href: "/limones",
    imageSrc: "/images/Limon.svg",
    imageAlt: "Limón",
    title: "Limones",
    description:
      "Cultivamos limones en un entorno agrícola marcado por la tradición y la experiencia en el campo, apostando por un producto de calidad y por una agricultura vinculada al territorio.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section
        aria-label="Sobre Agrícola Ardal"
        className="relative h-[calc(100vh-72px)] w-full overflow-hidden"
      >
        <Image
          src="/images/Cerezos.png"
          alt="Campo de cerezos en flor en Mula, Murcia"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end">
          <h1 className="w-full whitespace-nowrap px-2 pb-6 text-center font-heading text-[clamp(2.5rem,14vw,222px)] leading-[0.95] text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:pb-10">
            Sobre Agrícola Ardal
          </h1>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[2fr_3fr] md:items-center md:gap-32">
          <div className="space-y-4 text-xl leading-relaxed text-ink md:max-w-md">
            <p>
              Agrícola Ardal es una empresa agrícola ubicada en Mula, Murcia,
              centrada en el cultivo de fruta y en el valor de una producción
              ligada al campo. Nuestra actividad nace del compromiso con la
              tierra, con el trabajo bien hecho y con una forma de cultivar
              basada en la experiencia y el respeto por cada cosecha.
            </p>
            <p>
              Desde nuestra constitución como sociedad en 2021, desarrollamos
              una actividad enfocada en el cultivo de albaricoques, nectarinas,
              naranjas y limones, trabajando cada producto con atención,
              seguimiento y criterio agrícola.
            </p>
          </div>
          <div className="relative aspect-[910/826] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/cortando-limones.png"
              alt="Recolección de limones a mano"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 md:items-center md:gap-24">
          <ParallaxImagePair />

          <div className="space-y-6 md:pl-16 lg:pl-24">
            <h2 className="font-heading text-4xl leading-tight text-ink text-balance md:text-5xl">
              Una agricultura basada en el cuidado y la constancia
            </h2>
            <div className="space-y-4 text-xl leading-relaxed text-ink">
              <p>
                En Agrícola Ardal entendemos la agricultura como un proceso
                que requiere tiempo, dedicación y conocimiento del terreno.
                Cada cultivo tiene sus necesidades, sus ritmos y sus momentos,
                y nuestro trabajo consiste en acompañar cada fase con el
                cuidado necesario para obtener un producto de calidad.
              </p>
              <p>
                No trabajamos desde la prisa, sino desde la constancia.
                Apostamos por una producción bien gestionada, donde el
                seguimiento del cultivo y el respeto por la tierra marcan la
                diferencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-20 w-full bg-cream md:mt-32 lg:mt-44">
        <div className="relative aspect-[1920/1280] w-full">
          <Image
            src="/images/mano-naranja.png"
            alt="Mano cogiendo una naranja entre muchas"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-10 px-6 md:px-12">
            <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-2 md:items-start md:gap-24 md:pl-24 lg:pl-40">
              <h2 className="font-heading text-[64px] leading-tight text-ink text-balance md:-mt-16 md:pl-8 lg:-mt-24 lg:pl-16">
                Un entorno agrícola con identidad propia
              </h2>
              <div className="space-y-4 text-xl leading-relaxed text-ink md:-mt-16 md:max-w-xl md:pl-8 lg:-mt-24 lg:pl-16">
                <p>
                  Nuestra actividad se desarrolla en la zona del Ardal, en el
                  término municipal de Mula, Murcia. Se trata de un entorno
                  caracterizado por paisajes de secano, donde predominan
                  cultivos tradicionales como el almendro, la vid o los
                  cereales.
                </p>
                <p>
                  Este paisaje agrícola define no solo el entorno, sino
                  también la forma de trabajar el campo. Grandes extensiones,
                  fincas abiertas y una relación directa con la tierra marcan
                  el ritmo de la actividad agrícola en la zona.
                </p>
                <p>
                  El Ardal es un ejemplo del carácter agrícola de Mula, donde
                  la estacionalidad, el clima y la tradición siguen teniendo
                  un papel clave en el desarrollo de los cultivos. Formar
                  parte de este entorno refuerza nuestro compromiso con una
                  agricultura conectada con el territorio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:gap-16">
          <div className="relative aspect-[1205/666] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/albaricoque-arbol.png"
              alt="Rama de albaricoques en el árbol"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 1152px, 100vw"
            />
          </div>

          <div className="w-full max-w-2xl space-y-6 text-center text-cream">
            <h2 className="font-heading text-[64px] leading-tight">
              Calidad desde el origen
            </h2>
            <p className="text-xl leading-relaxed">
              En Agrícola Ardal trabajamos con el objetivo de ofrecer fruta
              cultivada en Murcia con un estándar de calidad basado en el
              cuidado del producto desde el campo.
            </p>
            <p className="text-xl leading-relaxed">
              Nuestro enfoque no se basa únicamente en producir, sino en
              hacerlo bien: controlando el cultivo, respetando los tiempos de
              cada fruta y manteniendo una línea de trabajo coherente con el
              entorno agrícola en el que nos encontramos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="text-center font-heading text-[64px] leading-tight text-cream">
            Nuestros productos
          </h2>
          <div className="mt-16 grid gap-32 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-40">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col items-center text-center text-cream"
              >
                <div className="relative h-60 w-60 transition-transform duration-300 ease-out group-hover:scale-125 md:h-80 md:w-80 lg:h-96 lg:w-96">
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

      <section className="bg-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center text-ardalGreen md:gap-10">
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            <Image
              src="/images/Group 798.svg"
              alt=""
              fill
              aria-hidden
              className="object-contain"
            />
          </div>
          <h2 className="font-heading text-4xl leading-tight md:whitespace-nowrap md:text-[96px]">
            Agricultura con raíces en Murcia
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed md:text-[24px]">
            Agrícola Ardal representa una forma de entender la agricultura
            desde el origen, el territorio y el compromiso con el trabajo bien
            hecho. Desde Mula, desarrollamos una actividad agrícola que pone
            en valor el campo y la calidad del producto.
          </p>

          <div className="mt-4 flex flex-col items-stretch justify-center gap-20 sm:flex-row">
            <a
              href={CONTACTO.telefonoHref}
              className="inline-flex items-center justify-center gap-3 rounded-[20px] border border-[#FAF7F5]/50 bg-ardalGreenDeep px-8 py-5 text-lg font-medium text-ardalGreen transition hover:bg-ardalGreen hover:text-ardalGreenDeep"
            >
              <PhoneIcon />
              {CONTACTO.telefono}
            </a>
            <a
              href={CONTACTO.direccionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-[20px] border border-[#FAF7F5]/50 bg-ardalGreenDeep px-8 py-5 text-lg font-medium text-ardalGreen transition hover:bg-ardalGreen hover:text-ardalGreenDeep"
            >
              <PinIcon />
              <span className="text-left leading-tight whitespace-pre-line">
                {CONTACTO.direccion}
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
