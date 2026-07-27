import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getContactoPage, getSiteSettings } from "../../../sanity/lib/fetchers";
import { urlFor } from "../../../sanity/lib/image";

export const revalidate = 30;

export async function generateMetadata() {
  const page = await getContactoPage();
  return { title: page?.seoTitle, description: page?.seoDescription };
}

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className="h-7 w-7 flex-shrink-0"
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
    className="h-7 w-7 flex-shrink-0"
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

export default async function ContactoPage() {
  const [page, siteSettings] = await Promise.all([getContactoPage(), getSiteSettings()]);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="flex items-center px-4 py-4 md:px-8 md:py-12">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="relative grid gap-6 md:min-h-[90vh] md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col rounded-3xl bg-sand p-6 pt-10 sm:p-8 sm:pt-14 md:p-12 md:pt-20 lg:p-16 lg:pt-28">
              <h1
                className="animate-slide-in-left font-heading text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] leading-[1.1] text-ink whitespace-pre-line"
                style={{ animationDelay: '0ms' }}
              >
                {page.heading}
              </h1>
              <p
                className="animate-slide-in-left mt-10 max-w-lg text-base leading-relaxed text-ink md:mt-12"
                style={{ animationDelay: '150ms' }}
              >
                {page.paragraph}
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-8 md:pt-12">
                <a
                  href={siteSettings.contactoPhoneHref}
                  className="animate-slide-in-left inline-flex w-full max-w-lg items-center gap-4 rounded-[20px] bg-paper px-5 py-4 text-base text-ink shadow-sm transition hover:shadow-md sm:px-8 sm:py-6 sm:text-lg"
                  style={{ animationDelay: '300ms' }}
                >
                  <PhoneIcon />
                  {siteSettings.contactoPhone}
                </a>
                <a
                  href={siteSettings.contactoMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-slide-in-left inline-flex w-full max-w-lg items-center gap-4 rounded-[20px] bg-paper px-5 py-4 text-base text-ink shadow-sm transition hover:shadow-md sm:px-8 sm:py-6 sm:text-lg"
                  style={{ animationDelay: '420ms' }}
                >
                  <PinIcon />
                  <span className="text-left leading-tight whitespace-pre-line">
                    {siteSettings.contactoAddress}
                  </span>
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl md:aspect-auto">
              <Image
                src={urlFor(page.image).url()}
                alt={page.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 z-10 hidden h-72 w-72 -translate-x-1/2 md:block md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
              <Image
                src="/images/Group 798.svg"
                alt=""
                fill
                aria-hidden
                className="object-contain"
              />
            </div>
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
