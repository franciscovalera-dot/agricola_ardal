import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TextSection } from "@/components/TextSection";
import { OrchardImage } from "@/components/OrchardImage";
import { ContactCTA } from "@/components/ContactCTA";
import { CTAButton } from "@/components/CTAButton";

export const metadata = {
  title: "Limones — Agrícola Ardal",
  description:
    "Limones cultivados en Mula, Murcia. Producción agrícola centrada en la calidad y el origen.",
};

export default function LimonesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <Hero
        imageSrc="/images/Limon.svg"
        imageAlt="Limón"
        gradientClassName="bg-gradient-to-b from-limonYellow to-limonYellow/0 to-60%"
        imageShadowClassName="drop-shadow-[0_25px_30px_rgba(200,170,40,0.35)]"
      />

      <TextSection title="Limones cultivados en Murcia">
        <p>
          En Agrícola Ardal cultivamos limones en Mula, Murcia, dentro de una
          producción agrícola centrada en la calidad, el origen y el cuidado
          de cada cosecha.
        </p>
        <p>
          Nuestro trabajo nace del compromiso con el campo y con una forma de
          cultivar vinculada a la tierra.
        </p>
        <CTAButton
          bgClassName="bg-limonYellow"
          arrowColorClassName="text-limonYellow"
        />
      </TextSection>

      <TextSection title="Sobre nuestros limones" id="sobre">
        <p>
          El limón es un producto muy ligado a la agricultura murciana. En
          Agrícola Ardal trabajamos su cultivo con atención y seguimiento,
          cuidando cada fase para obtener un fruto de calidad, cultivado en
          Murcia y conectado con nuestro entorno agrícola.
        </p>
        <p>
          Cada campaña requiere constancia, conocimiento del cultivo y respeto
          por los tiempos del campo.
        </p>
      </TextSection>

      <OrchardImage
        imageSrc="/images/arbol-limon.jpg"
        imageAlt="Limones en el árbol, campo de Murcia"
      />

      <TextSection title="Cultivo en el campo de Murcia" id="cultivo">
        <p>
          Cultivamos nuestros limones en Mula, dentro de un entorno agrícola
          donde la tierra, el clima y la tradición del campo forman parte de
          la identidad de cada producto.
        </p>
        <p>
          Desde este origen, apostamos por una producción seria, cuidada y
          comprometida con la calidad.
        </p>
      </TextSection>

      <ContactCTA
        title="¿Quieres más información sobre nuestros limones?"
        description="Contacta con Agrícola Ardal para conocer mejor nuestra producción de limones cultivados en Murcia."
      />

      <Footer />
    </main>
  );
}
