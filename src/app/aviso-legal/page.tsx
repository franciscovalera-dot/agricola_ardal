import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CONTACTO } from '@/lib/contacto';

export const metadata = {
  title: 'Aviso Legal — Agrícola Ardal',
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="px-6 pt-20 pb-8 md:px-12 md:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-verde-oscuro mb-4">
            Legal
          </p>
          <h1 className="font-heading text-[clamp(3rem,8vw,96px)] leading-[0.95] text-ink">
            Aviso Legal
          </h1>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-3xl space-y-10 font-body text-base leading-relaxed text-ink/80">

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">1. Identificación del titular</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es:
            </p>
            <ul className="space-y-1 pl-4 border-l-2 border-ardalGreen/40">
              <li><span className="text-ink font-medium">Denominación social:</span> Agrícola Ardal</li>
              <li><span className="text-ink font-medium">Domicilio social:</span> {CONTACTO.direccion.replace('\n', ', ')}</li>
              <li><span className="text-ink font-medium">Teléfono:</span> {CONTACTO.telefono}</li>
              <li><span className="text-ink font-medium">Correo electrónico:</span> {CONTACTO.email}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso y la utilización del sitio web de Agrícola Ardal. El acceso al sitio web implica la aceptación plena y sin reservas de las presentes condiciones de uso.
            </p>
            <p>
              Agrícola Ardal se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presentación y configuración del sitio web, así como las presentes condiciones de uso.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web —incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y código fuente— son propiedad intelectual de Agrícola Ardal o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, comunicación pública y transformación, total o parcial, de los contenidos de este sitio web sin la autorización expresa y por escrito de Agrícola Ardal.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">4. Exclusión de responsabilidad</h2>
            <p>
              Agrícola Ardal no se responsabiliza de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del uso del sitio web, incluyendo fallos técnicos, interrupciones del servicio o la presencia de virus u otros elementos dañinos en los contenidos.
            </p>
            <p>
              El sitio web puede contener enlaces a páginas de terceros. Agrícola Ardal no asume responsabilidad alguna por los contenidos, informaciones o servicios que aparezcan en dichos sitios.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">5. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones de uso se rigen por la legislación española vigente. Para la resolución de cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales de Murcia, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
