import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CONTACTO } from '@/lib/contacto';

export const metadata = {
  title: 'Política de Privacidad — Agrícola Ardal',
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="px-6 pt-20 pb-8 md:px-12 md:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-verde-oscuro mb-4">
            Legal
          </p>
          <h1 className="font-heading text-[clamp(3rem,8vw,96px)] leading-[0.95] text-ink">
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-3xl space-y-10 font-body text-base leading-relaxed text-ink/80">

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">1. Responsable del tratamiento</h2>
            <ul className="space-y-1 pl-4 border-l-2 border-ardalGreen/40">
              <li><span className="text-ink font-medium">Denominación social:</span> Agrícola Ardal</li>
              <li><span className="text-ink font-medium">Domicilio:</span> {CONTACTO.direccion.replace('\n', ', ')}</li>
              <li><span className="text-ink font-medium">Teléfono:</span> {CONTACTO.telefono}</li>
              <li><span className="text-ink font-medium">Correo electrónico:</span> {CONTACTO.email}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">2. Datos que recopilamos</h2>
            <p>
              Agrícola Ardal puede recopilar los siguientes datos personales cuando el usuario contacta a través del sitio web o por cualquier otro medio:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Cualquier otra información que el usuario facilite voluntariamente</li>
            </ul>
            <p>
              No recopilamos datos de menores de 14 años. Si detectamos que hemos recibido datos de un menor sin el consentimiento de sus tutores, los eliminaremos inmediatamente.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">3. Finalidad del tratamiento</h2>
            <p>Los datos facilitados serán utilizados para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestionar y responder las consultas o solicitudes de información recibidas.</li>
              <li>Mantener la relación comercial con clientes y proveedores.</li>
              <li>Cumplir con las obligaciones legales aplicables.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">4. Base jurídica del tratamiento</h2>
            <p>
              El tratamiento de los datos se basa en el consentimiento del usuario (art. 6.1.a RGPD) cuando este se pone en contacto con nosotros de forma voluntaria, y en el interés legítimo o la ejecución de un contrato cuando la relación es de carácter comercial (art. 6.1.b y 6.1.f RGPD).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">5. Conservación de los datos</h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y, en su caso, para cumplir con las obligaciones legales aplicables. Una vez concluida la relación, los datos serán bloqueados y posteriormente eliminados conforme a la normativa vigente.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">6. Derechos del usuario</h2>
            <p>
              El usuario puede ejercer en cualquier momento los siguientes derechos reconocidos por el Reglamento General de Protección de Datos (RGPD):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="text-ink font-medium">Acceso:</span> conocer qué datos suyos tratamos.</li>
              <li><span className="text-ink font-medium">Rectificación:</span> corregir datos inexactos o incompletos.</li>
              <li><span className="text-ink font-medium">Supresión:</span> solicitar la eliminación de sus datos.</li>
              <li><span className="text-ink font-medium">Oposición:</span> oponerse al tratamiento de sus datos.</li>
              <li><span className="text-ink font-medium">Limitación:</span> solicitar la restricción del tratamiento.</li>
              <li><span className="text-ink font-medium">Portabilidad:</span> recibir sus datos en formato estructurado.</li>
            </ul>
            <p>
              Para ejercer estos derechos puede dirigirse a nosotros por correo electrónico a <a href={`mailto:${CONTACTO.email}`} className="text-verde-oscuro underline underline-offset-2 hover:text-ardalGreen transition-colors">{CONTACTO.email}</a> o por teléfono al {CONTACTO.telefono}. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">7. Cesión de datos a terceros</h2>
            <p>
              Agrícola Ardal no cederá los datos personales a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación de los servicios contratados, con las garantías adecuadas conforme al RGPD.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-body text-lg font-semibold text-ink">8. Seguridad</h2>
            <p>
              Agrícola Ardal ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales, y para evitar su pérdida, alteración o acceso por parte de terceros no autorizados.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
