import { Hero } from "../components/Hero";
import { TextSection } from "../components/TextSection";
import { OrchardImage } from "../components/OrchardImage";
import { ContactCTA } from "../components/ContactCTA";
import { CTAButton } from "../components/CTAButton";

export default function NectarinasPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero
        imageSrc="/images/Nectarina.svg"
        imageAlt="Nectarina"
        gradientClassName="bg-gradient-to-b from-nectarinaPink to-nectarinaPink/0 to-60%"
        imageShadowClassName="drop-shadow-[0_25px_30px_rgba(220,80,80,0.35)]"
        imageContainerClassName="h-80 w-[30rem] md:h-[28rem] md:w-[42rem]"
      />

      <TextSection title="Nectarinas cultivadas en Murcia">
        <p>
          En Agrícola Ardal producimos nectarinas en Mula, Murcia, trabajando
          cada cosecha con atención, experiencia y compromiso con la calidad
          del producto.
        </p>
        <p>
          Nuestra producción está vinculada al campo murciano y a una manera de
          cultivar que respeta los tiempos de la tierra.
        </p>
        <CTAButton
          bgClassName="bg-nectarinaPink"
          arrowColorClassName="text-nectarinaPink"
        />
      </TextSection>

      <TextSection title="Sobre nuestras nectarinas" id="sobre">
        <p>
          La nectarina es una fruta apreciada por su frescura, textura y sabor.
          En Agrícola Ardal cuidamos su cultivo desde el campo, atendiendo cada
          fase del proceso para conseguir una fruta bien desarrollada y
          recolectada en el momento adecuado.
        </p>
        <p>
          Nuestro trabajo se centra en ofrecer nectarinas cultivadas en Murcia
          con calidad, cuidado y regularidad.
        </p>
      </TextSection>

      <OrchardImage
        imageSrc="/images/arbol-nectarina.jpg"
        imageAlt="Nectarinas en el árbol, campo de Murcia"
      />

      <TextSection title="Cultivo en el campo de Murcia" id="cultivo">
        <p>
          Cultivamos nuestras nectarinas en el entorno agrícola de Mula, una
          zona donde el campo sigue teniendo un papel clave en la economía y en
          la identidad local.
        </p>
        <p>
          Desde este origen, trabajamos una producción conectada con la tierra
          y con la tradición agrícola de la Región de Murcia.
        </p>
      </TextSection>

      <ContactCTA
        title="¿Quieres más información sobre nuestras nectarinas?"
        description="Contacta con Agrícola Ardal para conocer mejor nuestra producción de nectarinas cultivadas en Murcia."
      />
    </main>
  );
}
