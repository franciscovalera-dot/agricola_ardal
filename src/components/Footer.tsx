import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#062B05] text-blanco">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-10 px-8 py-12 md:px-16 lg:min-h-[250px] lg:flex-row lg:items-center lg:gap-12 xl:px-20">
        <div className="flex flex-col gap-6 lg:flex-[1.65] xl:flex-row xl:items-center xl:gap-10">
          <Link
            href="/"
            className="block font-heading text-[64px] leading-none text-[#8DC83E] md:text-[96px] lg:text-[110px] xl:text-[124px]"
          >
            Agricola Ardal
          </Link>

          <p className="max-w-[250px] font-body text-[15px] leading-[1.15] text-blanco/90 md:text-[16px]">
            Comprometidos con la excelencia agricola y la tradicion murciana desde hace decadas.
          </p>
        </div>

        <div className="hidden h-[150px] w-px bg-blanco/70 lg:block" />

        <div className="flex flex-col gap-8 lg:flex-1">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-body text-[13px] text-blanco/90">
            <a href="https://www.chillypills.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#8DC83E]">Diseno web Chillypills</a>
            <Link href="/aviso-legal" className="transition-colors hover:text-[#8DC83E]">
              Aviso Legal
            </Link>
            <Link href="/politica-de-privacidad" className="transition-colors hover:text-[#8DC83E]">
              Politica de Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="transition-colors hover:text-[#8DC83E]">
              Politica de Cookies
            </Link>
          </nav>

          <div className="relative h-[52px] w-full max-w-[500px]">
            <Image
              src="/images/kit_digital.svg"
              alt="Kit Digital, red.es y financiacion por la Union Europea"
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              className="object-contain object-left"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}
