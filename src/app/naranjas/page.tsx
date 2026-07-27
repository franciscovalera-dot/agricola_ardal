import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TextSection } from "@/components/TextSection";
import { OrchardImage } from "@/components/OrchardImage";
import { ContactCTA } from "@/components/ContactCTA";
import { CTAButton } from "@/components/CTAButton";
import { getFruitProductBySlug, getSiteSettings } from "../../../sanity/lib/fetchers";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;

export async function generateMetadata() {
  const fruit = await getFruitProductBySlug("naranjas");
  return { title: fruit?.seoTitle, description: fruit?.seoDescription };
}

export default async function NaranjasPage() {
  const [fruit, siteSettings] = await Promise.all([
    getFruitProductBySlug("naranjas"),
    getSiteSettings(),
  ]);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <Hero
        imageSrc={urlFor(fruit.heroImage).url()}
        imageAlt={fruit.heroImageAlt}
        gradientClassName="bg-gradient-to-b from-naranjaOrange to-naranjaOrange/0 to-60%"
        imageShadowClassName="drop-shadow-[0_25px_30px_rgba(220,130,50,0.35)]"
      />

      <TextSection title={fruit.introTitle}>
        <PortableText value={fruit.introBody} />
        <CTAButton bgClassName="bg-naranjaOrange" arrowColorClassName="text-naranjaOrange" />
      </TextSection>

      <TextSection title={fruit.aboutTitle} id="sobre">
        <PortableText value={fruit.aboutBody} />
      </TextSection>

      <OrchardImage imageSrc={urlFor(fruit.orchardImage).url()} imageAlt={fruit.orchardImageAlt} />

      <TextSection title={fruit.cultivoTitle} id="cultivo">
        <PortableText value={fruit.cultivoBody} />
      </TextSection>

      <ContactCTA
        title={fruit.contactCtaTitle}
        description={fruit.contactCtaDescription}
        phone={siteSettings.contactoPhone}
        phoneHref={siteSettings.contactoPhoneHref}
        address={siteSettings.contactoAddress}
        addressUrl={siteSettings.contactoMapUrl}
      />

      <Footer
        brandName={siteSettings.footerBrandName}
        tagline={siteSettings.footerTagline}
        kitDigitalImageUrl={urlFor(siteSettings.kitDigitalImage).url()}
        kitDigitalImageAlt={siteSettings.kitDigitalImageAlt}
      />
    </main>
  );
}
