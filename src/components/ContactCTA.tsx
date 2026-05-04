import Image from "next/image";
import { CONTACTO } from "@/lib/contacto";

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className="h-4 w-4"
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
    className="h-4 w-4"
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

type ContactCTAProps = {
  title: string;
  description: string;
  variant?: "light" | "dark";
};

export function ContactCTA({ title, description, variant = "light" }: ContactCTAProps) {
  const isDark = variant === "dark";
  const containerBg = isDark ? "bg-ardalGreenDeep" : "bg-ardalGreen";
  const containerShadow = isDark
    ? "shadow-[0_25px_50px_-25px_rgba(0,0,0,0.5)]"
    : "shadow-[0_25px_50px_-25px_rgba(111,160,51,0.6)]";
  const titleColor = isDark ? "text-ardalGreen" : "text-ink";
  const descriptionColor = isDark ? "text-ardalGreen/80" : "text-ink/75";
  const buttonClass = isDark
    ? "bg-ink text-ardalGreen hover:bg-ardalGreen hover:text-ink"
    : "bg-ardalGreenDark text-ink hover:bg-ink hover:text-ardalGreenDark";

  return (
    <section className="px-6 pb-24 pt-40 md:pt-48">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute -top-20 left-1/2 z-10 h-40 w-40 -translate-x-1/2 md:-top-[6.5rem] md:h-52 md:w-52">
          <Image
            src="/images/Group 798.svg"
            alt=""
            fill
            className="object-contain drop-shadow-[0_8px_15px_rgba(14,26,43,0.2)]"
          />
        </div>
        <div
          className={`rounded-2xl px-8 pb-12 pt-32 text-center md:px-12 md:pb-16 md:pt-40 ${containerBg} ${containerShadow}`}
        >
          <h3 className={`mx-auto max-w-[720px] font-heading text-[64px] leading-tight text-balance ${titleColor}`}>
            {title}
          </h3>
          <p className={`mx-auto mt-4 max-w-sm text-base leading-relaxed ${descriptionColor}`}>
            {description}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={CONTACTO.telefonoHref}
              className={`inline-flex items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-base font-medium shadow-sm transition ${buttonClass}`}
            >
              <PhoneIcon />
              {CONTACTO.telefono}
            </a>
            <a
              href={CONTACTO.direccionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-base font-medium shadow-sm transition ${buttonClass}`}
            >
              <PinIcon />
              <span className="text-left leading-tight whitespace-pre-line">
                {CONTACTO.direccion}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
