import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getLegalPageBySlug, getSiteSettings } from '../../../sanity/lib/fetchers';
import { urlFor } from '../../../sanity/lib/image';
import { LegalPortableText } from '../../../sanity/lib/LegalPortableText';

export async function generateMetadata() {
  const page = await getLegalPageBySlug('politica-de-privacidad');
  return { title: page?.seoTitle };
}

export default async function PoliticaPrivacidadPage() {
  const [page, siteSettings] = await Promise.all([
    getLegalPageBySlug('politica-de-privacidad'),
    getSiteSettings(),
  ]);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="px-6 pt-20 pb-8 md:px-12 md:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-verde-oscuro mb-4">
            {page.eyebrow}
          </p>
          <h1 className="font-heading text-[clamp(3rem,8vw,96px)] leading-[0.95] text-ink">
            {page.title}
          </h1>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-3xl space-y-10 font-body text-base leading-relaxed text-ink/80">
          {page.sections.map((section: any, index: number) => (
            <div key={section._key} className="space-y-3">
              <h2 className="font-body text-lg font-semibold text-ink">
                {index + 1}. {section.heading}
              </h2>
              <LegalPortableText value={section.body} />
            </div>
          ))}
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
