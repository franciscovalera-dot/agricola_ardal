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

      <section className="pt-16 md:pt-24 pb-20 md:pb-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-body uppercase tracking-[0.3em] text-xs text-verde-oscuro mb-4">
            Catálogo
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-verde-oscuro leading-[1.05] max-w-4xl">
            Nuestros productos
          </h1>
          <p className="font-body mt-8 max-w-2xl text-lg md:text-xl text-negro/80 leading-relaxed">
            Cultivamos cada fruto en su temporada y lo recogemos en su punto.
            Esta es la familia de sabores que nace en el campo del Ardal, en
            Mula, Murcia.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ul className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {productos.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="group block">
                  <div
                    className={`relative aspect-[4/5] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 ${p.bgClassName}`}
                  >
                    <Image
                      src={p.imageSrc}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="pt-5">
                    <h2 className="font-heading text-2xl md:text-3xl text-negro group-hover:text-verde-oscuro transition-colors duration-300">
                      {p.title}
                    </h2>
                    <p className="font-body mt-2 text-sm md:text-base text-negro/70 leading-relaxed">
                      {p.descripcion}
                    </p>
                    <span className="font-body mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-verde-oscuro group-hover:text-verde-lima transition-colors">
                      Ver más
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
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
