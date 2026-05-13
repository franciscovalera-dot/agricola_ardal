import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Productos — Agrícola Ardal",
  description:
    "Albaricoques, nectarinas, naranjas y limones cultivados en Mula, Murcia.",
};

const productos = [
  {
    href: "/albaricoques",
    imageSrc: "/images/Albaricoque 2.svg",
    imageAlt: "Albaricoque",
    title: "Albaricoques",
    descripcion:
      "De piel dorada y pulpa jugosa. Recogido en su punto justo de maduración para conservar todo su aroma.",
    bgClassName: "bg-ardalYellowSoft",
  },
  {
    href: "/nectarinas",
    imageSrc: "/images/Nectarina.svg",
    imageAlt: "Nectarina",
    title: "Nectarinas",
    descripcion:
      "Dulce, firme y con un toque ácido. Una fruta de hueso que conquista por su sabor intenso y su frescura.",
    bgClassName: "bg-nectarinaPink/40",
  },
  {
    href: "/naranjas",
    imageSrc: "/images/Naranja.svg",
    imageAlt: "Naranja",
    title: "Naranjas",
    descripcion:
      "Cultivada al sol de Murcia, llena de zumo y vitamina. Sabor clásico, fresco y honesto.",
    bgClassName: "bg-naranjaOrange/40",
  },
  {
    href: "/limones",
    imageSrc: "/images/Limon.svg",
    imageAlt: "Limón",
    title: "Limones",
    descripcion:
      "Aromáticos, ácidos y siempre listos para realzar cualquier receta. Cosechados todo el año.",
    bgClassName: "bg-limonYellow/50",
  },
];

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[55vh] w-full overflow-hidden md:h-[calc(100vh-72px)]">
        <Image
          src="/images/arbol-nectarina.jpg"
          alt="Árbol de nectarinas en Mula, Murcia"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute inset-0 flex items-end">
          <h1 className="w-full px-2 pb-6 text-center font-heading text-[clamp(2.5rem,11vw,160px)] leading-[0.95] text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] md:pb-10">
            Nuestros productos
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-body text-lg sm:text-xl leading-relaxed text-ink max-w-2xl">
            Cultivamos cada fruto en su temporada y lo recogemos en su punto
            justo de maduración. Esta es la familia de sabores que nace en el
            campo del Ardal, en Mula, Murcia.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-cream px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-[1600px]">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {productos.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="group block">
                  <div
                    className={`relative aspect-[3/4] overflow-hidden rounded-[22px] ${p.bgClassName} transition-transform duration-500 ease-out group-hover:-translate-y-2`}
                  >
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 26 26"
                        fill="none"
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M19.1193 18.106L19.1193 6.03538L7.04868 6.03538"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19.1184 6.03457L6.03448 19.1185"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
