import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getLegalPageBySlug, getSiteSettings } from '../../../sanity/lib/fetchers';
import { urlFor } from '../../../sanity/lib/image';
import { LegalPortableText } from '../../../sanity/lib/LegalPortableText';

export async function generateMetadata() {
  const page = await getLegalPageBySlug('politica-de-cookies');
  return { title: page?.seoTitle };
}

export default async function PoliticaCookiesPage() {
  const [page, siteSettings] = await Promise.all([
    getLegalPageBySlug('politica-de-cookies'),
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

              {section.table && section.table.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-ardalGreen/10 text-ink">
                        <th className="text-left p-3 border border-ardalGreen/20 font-semibold">Tipo</th>
                        <th className="text-left p-3 border border-ardalGreen/20 font-semibold">Descripción</th>
                        <th className="text-left p-3 border border-ardalGreen/20 font-semibold">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row: any, rowIndex: number) => (
                        <tr key={row._key} className={rowIndex % 2 === 1 ? 'bg-ardalGreen/5' : undefined}>
                          <td className="p-3 border border-ardalGreen/20 font-medium text-ink">{row.label}</td>
                          <td className="p-3 border border-ardalGreen/20">{row.description}</td>
                          <td className="p-3 border border-ardalGreen/20">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.links && section.links.length > 0 && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.links.map((link: any) => (
                    <li key={link._key}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-verde-oscuro underline underline-offset-2 hover:text-ardalGreen transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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
