import Image from "next/image";

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  gradientClassName?: string;
  backgroundImageSrc?: string;
  imageShadowClassName?: string;
  imageContainerClassName?: string;
};

const DEFAULT_IMAGE_CONTAINER = "h-80 w-80 md:h-[28rem] md:w-[28rem]";

export function Hero({
  imageSrc,
  imageAlt,
  gradientClassName,
  backgroundImageSrc,
  imageShadowClassName,
  imageContainerClassName,
}: HeroProps) {
  return (
    <section
      aria-label="Imagen principal"
      className={`relative w-full overflow-hidden ${gradientClassName ?? ""} pt-24 pb-4 md:pt-32 md:pb-8`}
    >
      {backgroundImageSrc && (
        <Image
          src={backgroundImageSrc}
          alt=""
          aria-hidden
          fill
          className="object-cover"
        />
      )}
      <div className="relative mx-auto flex max-w-3xl items-center justify-center px-6">
        <div className={`relative ${imageContainerClassName ?? DEFAULT_IMAGE_CONTAINER}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className={`animate-fade-in object-contain ${imageShadowClassName ?? ""}`}
          />
        </div>
      </div>
    </section>
  );
}
