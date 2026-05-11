import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CONTACTO } from '@/lib/contacto';

export const metadata = {
  title: 'Política de Cookies — Agrícola Ardal',
};

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="px-6 pt-20 pb-8 md:px-12 md:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-verde-oscuro mb-4">
            Legal
          </p>
          <h1 className="font-heading text-[clamp(3rem,8vw,96px)] leading-[0.95] text-ink">
            Política de Cookies
          </h1>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-3xl space-y-10 font-body text-base leading-relaxed text-ink/80">

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando este los visita. Sirven para recordar preferencias, analizar el comportamiento de navegación y mejorar la experiencia de uso.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">2. Cookies utilizadas en este sitio web</h2>
            <p>Este sitio web puede utilizar los siguientes tipos de cookies:</p>

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
                  <tr>
                    <td className="p-3 border border-ardalGreen/20 font-medium text-ink">Técnicas</td>
                    <td className="p-3 border border-ardalGreen/20">Necesarias para el funcionamiento básico del sitio. No requieren consentimiento.</td>
                    <td className="p-3 border border-ardalGreen/20">Sesión</td>
                  </tr>
                  <tr className="bg-ardalGreen/5">
                    <td className="p-3 border border-ardalGreen/20 font-medium text-ink">Analíticas</td>
                    <td className="p-3 border border-ardalGreen/20">Permiten medir el tráfico y analizar el comportamiento de los usuarios para mejorar el sitio.</td>
                    <td className="p-3 border border-ardalGreen/20">Hasta 2 años</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-ardalGreen/20 font-medium text-ink">Preferencias</td>
                    <td className="p-3 border border-ardalGreen/20">Guardan las preferencias del usuario, como el idioma o la región seleccionada.</td>
                    <td className="p-3 border border-ardalGreen/20">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">3. Cookies de terceros</h2>
            <p>
              Este sitio web puede utilizar servicios de terceros que instalan sus propias cookies, como herramientas de analítica web (por ejemplo, Google Analytics). Estos servicios están sujetos a sus propias políticas de privacidad y cookies, sobre las que Agrícola Ardal no tiene control directo.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">4. Cómo gestionar o desactivar las cookies</h2>
            <p>
              El usuario puede configurar su navegador para aceptar, rechazar o eliminar las cookies en cualquier momento. A continuación se indican los enlaces de configuración de los principales navegadores:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-verde-oscuro underline underline-offset-2 hover:text-ardalGreen transition-colors">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-verde-oscuro underline underline-offset-2 hover:text-ardalGreen transition-colors">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-verde-oscuro underline underline-offset-2 hover:text-ardalGreen transition-colors">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-verde-oscuro underline underline-offset-2 hover:text-ardalGreen transition-colors">Microsoft Edge</a></li>
            </ul>
            <p>
              Ten en cuenta que deshabilitar las cookies puede afectar al funcionamiento correcto de algunas secciones del sitio web.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">5. Actualización de esta política</h2>
            <p>
              Agrícola Ardal se reserva el derecho a modificar esta Política de Cookies en cualquier momento para adaptarla a cambios legislativos o a nuevas funcionalidades del sitio. Se recomienda revisarla periódicamente.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">6. Contacto</h2>
            <p>
              Para cualquier consulta sobre el uso de cookies en este sitio web, puede contactar con nosotros en{' '}
              <a href={`mailto:${CONTACTO.email}`} className="text-verde-oscuro underline underline-offset-2 hover:text-ardalGreen transition-colors">
                {CONTACTO.email}
              </a>{' '}
              o llamando al {CONTACTO.telefono}.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
