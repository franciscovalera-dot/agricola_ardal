import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProductosHomeSection from '@/components/ProductosHomeSection';
import EmpresaSection from '@/components/EmpresaSection';
import { getAllFruitProducts, getHomePage, getSiteSettings } from '../../sanity/lib/fetchers';
import { urlFor } from '../../sanity/lib/image';
import { PortableText } from '@portabletext/react';

export const revalidate = 30;

export async function generateMetadata() {
  const home = await getHomePage();
  return { title: home?.seoTitle, description: home?.seoDescription };
}

export default async function HomePage() {
  const [home, fruits, siteSettings] = await Promise.all([
    getHomePage(),
    getAllFruitProducts(),
    getSiteSettings(),
  ]);

  const productos = fruits.map((fruit: any) => ({
    nombre: fruit.name,
    href: `/${fruit.slug.current}`,
    descripcion: fruit.homeTeaser,
    imagen: urlFor(fruit.heroImage).url(),
  }));

  return (
    <main className="bg-blanco">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[70vh] overflow-hidden md:h-[calc(100vh-72px)]">
        <Image
          src={urlFor(home.heroImage).url()}
          alt={home.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-x-0 bottom-10 md:bottom-16 px-6 md:px-12">
          <div
            className="w-full max-w-4xl rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-14"
            style={{ backgroundColor: 'rgba(252, 249, 240, 0.80)' }}
          >
            <h1
              className="animate-slide-in-left font-heading text-[38px] sm:text-5xl md:text-[96px] leading-[1.05]"
              style={{ color: '#0B2407', animationDelay: '0ms' }}
            >
              {home.heroHeading}
            </h1>
            <div
              className="animate-slide-in-left hidden md:block font-body mt-8 space-y-4 text-base leading-relaxed max-w-xl"
              style={{ color: '#0B2407', animationDelay: '120ms' }}
            >
              <PortableText value={home.heroBodyDesktop} />
            </div>
            <div
              className="animate-slide-in-left font-body mt-4 text-base leading-relaxed md:hidden"
              style={{ color: '#0B2407', animationDelay: '120ms' }}
            >
              <PortableText value={home.heroBodyMobile} />
            </div>
            <Link
              href={home.heroCtaHref}
              className="animate-slide-in-left group mt-7 inline-flex items-center gap-3 font-body text-xs md:text-sm tracking-wide pl-5 pr-2 py-2 rounded-full transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: '#8DC83E', color: '#0B2407', animationDelay: '320ms' }}
            >
              {home.heroCtaLabel}
              <span
                className="flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-300 group-hover:translate-x-1"
                style={{ backgroundColor: '#0B2407' }}
              >
                <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.1193 18.106L19.1193 6.03538L7.04868 6.03538" stroke="#8DC83E" strokeWidth="1.5" />
                  <path d="M19.1184 6.03457L6.03448 19.1185" stroke="#8DC83E" strokeWidth="1.5" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* NUESTROS PRODUCTOS */}
      <ProductosHomeSection heading={home.productosHeading} intro={home.productosIntro} productos={productos} />

      {/* POR QUÉ ELEGIR */}
      <WhyChooseSection
        heading={home.whyChooseHeading}
        decorativeImageUrl={urlFor(home.whyChooseDecorativeImage).url()}
        advantages={home.whyChooseAdvantages.map((a: any) => ({
          titulo: a.title,
          texto: a.text,
          icono: urlFor(a.icon).url(),
        }))}
      />

      {/* EMPRESA VINCULADA AL CAMPO */}
      <EmpresaSection
        imageUrl={urlFor(home.empresaImage).url()}
        imageAlt={home.empresaImageAlt}
        heading={home.empresaHeading}
        body={<PortableText value={home.empresaBody} />}
        ctaLabel={home.empresaCtaLabel}
        ctaHref={home.empresaCtaHref}
      />

      {/* CONTACTO */}
      <section className="bg-[#8DC83E]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-24">
          <div className="relative mx-auto mb-8 h-36 w-44 md:mb-10 md:h-48 md:w-56">
            <Image
              src={urlFor(home.contactoDecorativeImage).url()}
              alt=""
              fill
              sizes="224px"
              className="object-contain"
            />
          </div>
          <h2 className="font-heading text-[48px] leading-[1] text-[#0B2407] md:whitespace-nowrap md:text-[72px] lg:text-[82px]">
            {home.contactoHeading}
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] font-body text-[16px] leading-[1.35] text-[#0B2407] md:mt-7 md:text-[17px]">
            {home.contactoParagraph}
          </p>

          <div className="mx-auto mt-11 grid max-w-[600px] gap-5 sm:grid-cols-[0.9fr,1.35fr] md:mt-14">
            <a
              href={siteSettings.contactoPhoneHref}
              className="flex items-center gap-4 rounded-[10px] border border-[#b5dc6a] bg-[#83BA38] px-5 py-5 text-left text-[#0B2407] transition-colors duration-300 hover:bg-[#8DC83E]"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[#0B2407]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="font-body text-[15px] leading-none md:text-[16px]">
                <p>{siteSettings.contactoPhone}</p>
              </div>
            </a>

            <a
              href={siteSettings.contactoMapUrl}
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
                <p className="whitespace-pre-line">{siteSettings.contactoAddress}</p>
              </div>
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
