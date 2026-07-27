import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ParallaxImagePair } from "@/components/ParallaxImagePair";
import NosotrosProductosSection from "@/components/NosotrosProductosSection";
import { getAllFruitProducts, getNosotrosPage, getSiteSettings } from "../../../sanity/lib/fetchers";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;

export async function generateMetadata() {
  const page = await getNosotrosPage();
  return { title: page?.seoTitle, description: page?.seoDescription };
}

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

export default async function NosotrosPage() {
  const [page, fruits, siteSettings] = await Promise.all([
    getNosotrosPage(),
    getAllFruitProducts(),
    getSiteSettings(),
  ]);

  const products = fruits.map((fruit: any) => ({
    href: `/${fruit.slug.current}`,
    imageSrc: urlFor(fruit.heroImage).url(),
    imageAlt: fruit.heroImageAlt,
    title: fruit.name,
    description: fruit.nosotrosTeaser,
  }));

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section
        aria-label="Sobre Agrícola Ardal"
        className="relative h-[55vh] w-full overflow-hidden md:h-[calc(100vh-72px)]"
      >
        <Image src={urlFor(page.heroImage).url()} alt={page.heroImageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 flex items-end">
          <h1
            className="animate-fade-in w-full px-4 pb-6 text-center font-heading text-[clamp(2.5rem,14vw,222px)] leading-[0.95] text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:whitespace-nowrap md:px-2 md:pb-10"
            style={{ animationDelay: '200ms' }}
          >
            {page.heroHeading}
          </h1>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[2fr_3fr] md:items-center md:gap-32">
          <div className="space-y-4 text-xl leading-relaxed text-ink md:max-w-md">
            <PortableText value={page.introBody} />
          </div>
          <div className="relative aspect-[910/826] w-full overflow-hidden rounded-2xl">
            <Image
              src={urlFor(page.introImage).url()}
              alt={page.introImageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 md:items-center md:gap-24">
          <ParallaxImagePair
            imageAUrl={urlFor(page.cuidadoImageA).url()}
            imageAAlt={page.cuidadoImageAAlt}
            imageBUrl={urlFor(page.cuidadoImageB).url()}
            imageBAlt={page.cuidadoImageBAlt}
          />

          <div className="space-y-6 md:pl-16 lg:pl-24">
            <h2 className="font-heading text-3xl leading-tight text-ink text-balance sm:text-4xl md:text-5xl">
              {page.cuidadoHeading}
            </h2>
            <div className="space-y-4 text-xl leading-relaxed text-ink">
              <PortableText value={page.cuidadoBody} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-16 w-full bg-cream md:mt-32 lg:mt-44">
        <div className="relative w-full md:aspect-[1920/1280]">
          <Image
            src={urlFor(page.entornoBackgroundImage).url()}
            alt={page.entornoBackgroundImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cream/60 md:hidden" />
          <div className="relative z-10 px-6 py-10 md:absolute md:inset-0 md:px-12 md:py-0">
            <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-2 md:items-start md:gap-24 md:pl-24 lg:pl-40">
              <h2 className="font-heading text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight text-ink text-balance md:-mt-16 md:pl-8 lg:-mt-24 lg:pl-16">
                {page.entornoHeading}
              </h2>
              <div className="space-y-4 text-xl leading-relaxed text-ink md:-mt-16 md:max-w-xl md:pl-8 lg:-mt-24 lg:pl-16">
                <div className="space-y-4 md:hidden">
                  <PortableText value={page.entornoBodyMobile} />
                </div>
                <div className="hidden md:block space-y-4">
                  <PortableText value={page.entornoBodyDesktop} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:gap-16">
          <div className="relative aspect-[1205/666] w-full overflow-hidden rounded-2xl">
            <Image
              src={urlFor(page.calidadImage).url()}
              alt={page.calidadImageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 1152px, 100vw"
            />
          </div>

          <div className="w-full max-w-2xl space-y-6 text-center text-cream">
            <h2 className="font-heading text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight">
              {page.calidadHeading}
            </h2>
            <div className="space-y-6 text-xl leading-relaxed">
              <PortableText value={page.calidadBody} />
            </div>
          </div>
        </div>
      </section>

      <NosotrosProductosSection heading={page.productosHeading} products={products} />

      <section className="bg-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center text-ardalGreen md:gap-10">
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            <Image src={urlFor(page.ctaDecorativeImage).url()} alt="" fill aria-hidden className="object-contain" />
          </div>
          <h2 className="font-heading text-4xl leading-tight md:whitespace-nowrap md:text-[96px]">
            {page.ctaHeading}
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed md:text-[24px]">{page.ctaParagraph}</p>

          <div className="mt-4 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:gap-8 md:gap-12">
            <a
              href={siteSettings.contactoPhoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-[20px] border border-[#FAF7F5]/50 bg-ardalGreenDeep px-8 py-5 text-lg font-medium text-ardalGreen transition hover:bg-ardalGreen hover:text-ardalGreenDeep"
            >
              <PhoneIcon />
              {siteSettings.contactoPhone}
            </a>
            <a
              href={siteSettings.contactoMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-[20px] border border-[#FAF7F5]/50 bg-ardalGreenDeep px-8 py-5 text-lg font-medium text-ardalGreen transition hover:bg-ardalGreen hover:text-ardalGreenDeep"
            >
              <PinIcon />
              <span className="text-left leading-tight whitespace-pre-line">{siteSettings.contactoAddress}</span>
            </a>
          </div>
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
