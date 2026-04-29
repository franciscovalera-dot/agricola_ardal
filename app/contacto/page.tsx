import Image from "next/image";

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

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen items-center bg-cream px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="relative grid gap-6 md:min-h-[90vh] md:grid-cols-2 md:items-stretch">
          <div className="flex flex-col rounded-3xl bg-sand p-10 pt-16 md:p-16 md:pt-24 lg:p-20 lg:pt-32">
            <h1 className="font-serif text-[64px] leading-[1.1] text-ink">
              Ponte en contacto
              <br />
              con Agrícola Ardal
            </h1>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-ink md:mt-12">
              Si deseas más información sobre nuestra actividad agrícola,
              nuestros productos o nuestra empresa, puedes contactar con
              nosotros a través del formulario o mediante los datos de
              contacto disponibles en esta página. En Agrícola Ardal
              estaremos encantados de atender cualquier consulta relacionada
              con nuestra producción de albaricoques, nectarinas, naranjas y
              limones cultivados en Murcia.
            </p>

            <div className="mt-auto flex flex-col gap-4 pt-12">
              <a
                href="tel:+34999696969"
                className="inline-flex w-full max-w-lg items-center gap-5 rounded-[20px] bg-paper px-8 py-7 text-lg text-ink shadow-sm transition hover:shadow-md"
              >
                <PhoneIcon />
                999 69 69 69
              </a>
              <a
                href="https://maps.google.com/?q=Avenida+Explanada+9+Mula+Murcia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-lg items-center gap-5 rounded-[20px] bg-paper px-8 py-7 text-lg text-ink shadow-sm transition hover:shadow-md"
              >
                <PinIcon />
                <span className="text-left leading-tight">
                  Avenida Explanada, 9 -
                  <br />
                  Piso 3º A 30170, Mula, Murcia
                </span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[900/916] w-full overflow-hidden rounded-3xl md:aspect-auto">
            <Image
              src="/images/arbol-naranja.png"
              alt="Naranjas en el árbol"
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
    </main>
  );
}
