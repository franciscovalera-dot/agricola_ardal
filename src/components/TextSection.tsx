import { ReactNode } from "react";

type TextSectionProps = {
  title: ReactNode;
  children: ReactNode;
  id?: string;
};

export function TextSection({ title, children, id }: TextSectionProps) {
  return (
    <section id={id} className="px-6 py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight text-ink text-balance">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70 text-pretty">
          {children}
        </div>
      </div>
    </section>
  );
}
