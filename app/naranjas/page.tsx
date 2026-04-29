import { Hero } from "../components/Hero";
import { TextSection } from "../components/TextSection";
import { OrchardImage } from "../components/OrchardImage";
import { ContactCTA } from "../components/ContactCTA";
import { CTAButton } from "../components/CTAButton";

export default function NaranjasPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero
        imageSrc="/images/Naranja.svg"
        imageAlt="Naranja"
        gradientClassName="bg-gradient-to-b from-naranjaOrange to-naranjaOrange/0 to-60%"
        imageShadowClassName="drop-shadow-[0_25px_30px_rgba(220,130,50,0.35)]"
      />

      <TextSection title="Naranjas cultivadas en Murcia">
        <p>
          En Agrícola Ardal cultivamos naranjas en Mula, Murcia, con una
          producción basada en el cuidado del campo, la experiencia agrícola y
          el compromiso con la calidad.
        </p>
        <p>
          Trabajamos cada cultivo con seriedad, buscando una fruta bien cuidada
          desde su origen.
        </p>
        <CTAButton
          bgClassName="bg-naranjaOrange"
          arrowColorClassName="text-naranjaOrange"
        />
      </TextSection>

      <TextSection title="Sobre nuestras naranjas" id="sobre">
        <p>
          Las naranjas forman parte de nuestra producción agrícola y
          representan una línea de cultivo trabajada con dedicación. En
          Agrícola Ardal cuidamos el desarrollo del fruto y cada etapa del
          proceso para ofrecer naranjas cultivadas en Murcia con garantías de
          origen y calidad.
        </p>
        <p>
          Nuestro objetivo es mantener una producción responsable, ligada al
          campo y al valor del producto bien trabajado.
        </p>
      </TextSection>

      <OrchardImage
        imageSrc="/images/arbol-naranja.jpg"
        imageAlt="Naranjas en el árbol, campo de Murcia"
      />

      <TextSection title="Cultivo en el campo de Murcia" id="cultivo">
        <p>
          Nuestras naranjas se cultivan en el entorno de Mula, dentro de una
          zona agrícola con identidad propia.
        </p>
        <p>
          Este vínculo con el territorio nos permite trabajar desde el origen,
          respetando los ciclos del cultivo y el carácter del campo murciano.
        </p>
      </TextSection>

      <ContactCTA
        title="¿Quieres más información sobre nuestras naranjas?"
        description="Contacta con Agrícola Ardal para conocer mejor nuestra producción de naranjas cultivadas en Murcia."
      />
    </main>
  );
}
