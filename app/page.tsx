import { Hero } from "./components/Hero";
import { TextSection } from "./components/TextSection";
import { OrchardImage } from "./components/OrchardImage";
import { ContactCTA } from "./components/ContactCTA";
import { CTAButton } from "./components/CTAButton";

export default function AlbaricoquesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero
        imageSrc="/images/Albaricoque 2.svg"
        imageAlt="Albaricoque"
        gradientClassName="bg-gradient-to-b from-ardalYellow via-ardalYellowSoft to-cream to-60%"
        imageShadowClassName="drop-shadow-[0_25px_30px_rgba(168,69,27,0.35)]"
      />

      <TextSection title="Albaricoques cultivados en Murcia">
        <p>
          Cultivamos albaricoques en el corazón de la huerta murciana, donde el
          sol y la tierra dan a nuestra fruta su sabor característico.
          Producimos pensando en la calidad, el aroma y la dulzura de cada
          ejemplar que llega a tu mesa.
        </p>
        <CTAButton />
      </TextSection>

      <TextSection title="Sobre nuestros albaricoques" id="sobre">
        <p>
          Seleccionamos cuidadosamente cada variedad para garantizar un fruto de
          piel suave, pulpa jugosa y un equilibrio perfecto entre dulzor y
          acidez. Trabajamos siguiendo las técnicas tradicionales del cultivo
          mediterráneo, combinadas con prácticas modernas de control de calidad.
        </p>
        <p>
          Nuestros albaricoques se recogen en su punto óptimo de maduración para
          asegurar el mejor sabor y una textura inmejorable.
        </p>
      </TextSection>

      <OrchardImage />

      <TextSection title="Cultivo en el campo de Murcia" id="cultivo">
        <p>
          Nuestras fincas se encuentran en zonas privilegiadas de la Región de
          Murcia, donde el clima cálido y seco crea las condiciones ideales para
          el desarrollo del albaricoque. Cuidamos cada árbol durante todo el
          año, respetando los ciclos naturales de la planta.
        </p>
      </TextSection>

      <ContactCTA
        title="¿Quieres más información sobre nuestros albaricoques?"
        description="Contacta con Agrícola Ardal para conocer mejor nuestra producción de albaricoques cultivados en Murcia."
      />
    </main>
  );
}
