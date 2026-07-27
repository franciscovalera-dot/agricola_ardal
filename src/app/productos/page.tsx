import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductosGrid from "@/components/ProductosGrid";
import { getAllFruitProducts, getProductosPage, getSiteSettings } from "../../../sanity/lib/fetchers";
import { urlFor } from "../../../sanity/lib/image";

export async function generateMetadata() {
  const page = await getProductosPage();
  return { title: page?.seoTitle, description: page?.seoDescription };
}

const BG_CLASS_BY_SLUG: Record<string, string> = {
  albaricoques: "bg-ardalYellowSoft",
  nectarinas: "bg-nectarinaPink/40",
  naranjas: "bg-naranjaOrange/40",
  limones: "bg-limonYellow/50",
};

export default async function ProductosPage() {
  const [page, fruits, siteSettings] = await Promise.all([
    getProductosPage(),
    getAllFruitProducts(),
    getSiteSettings(),
  ]);

  const productos = fruits.map((fruit: any) => ({
    href: `/${fruit.slug.current}`,
    imageSrc: urlFor(fruit.heroImage).url(),
    imageAlt: fruit.heroImageAlt,
    title: fruit.name,
    descripcion: fruit.productosTeaser,
    bgClassName: BG_CLASS_BY_SLUG[fruit.slug.current] ?? "bg-cream",
  }));

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[55vh] w-full overflow-hidden md:h-[calc(100vh-72px)]">
        <Image
          src={urlFor(page.heroImage).url()}
          alt={page.heroImageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute inset-0 flex items-end">
          <h1
            className="animate-fade-in w-full px-2 pb-6 text-center font-heading text-[clamp(2.5rem,11vw,160px)] leading-[0.95] text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] md:pb-10"
            style={{ animationDelay: "200ms" }}
          >
            {page.heading}
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-body text-lg sm:text-xl leading-relaxed text-ink max-w-2xl">{page.intro}</p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-cream px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-[1600px]">
          <ProductosGrid productos={productos} />
        </div>
      </section>

      <Footer
        brandName={siteSettings.footerBrandName}
        tagline={siteSettings.footerTagline}
        kitDigitalImageUrl={urlFor(siteSettings.kitDigitalImage).url()}
        kitDigitalImageAlt={siteSettings.kitDigitalImageAlt}
      />
    </main>
  );
}
