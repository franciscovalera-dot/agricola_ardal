import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductosGrid from "@/components/ProductosGrid";

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
          <h1 className="animate-fade-in w-full px-2 pb-6 text-center font-heading text-[clamp(2.5rem,11vw,160px)] leading-[0.95] text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] md:pb-10" style={{ animationDelay: '200ms' }}>
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
          <ProductosGrid productos={productos} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
