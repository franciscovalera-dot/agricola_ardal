import Image from "next/image";

type OrchardImageProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function OrchardImage({
  imageSrc = "/images/Rectangle 183.png",
  imageAlt = "Albaricoques en el árbol, campo de Murcia",
}: OrchardImageProps = {}) {
  return (
    <section aria-label="Cultivo" className="px-6">
      <div className="mx-auto max-w-3xl">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_-25px_rgba(14,26,43,0.4)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 720px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
