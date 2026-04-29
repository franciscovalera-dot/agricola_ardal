type CTAButtonProps = {
  label?: string;
  href?: string;
  bgClassName?: string;
  arrowColorClassName?: string;
};

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 26 26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M19.1192 18.106L19.1192 6.03538L7.04858 6.03538" />
    <path d="M19.1184 6.03457L6.03445 19.1185" />
  </svg>
);

export function CTAButton({
  label = "Solicitar información",
  href = "#",
  bgClassName = "bg-ardalYellow",
  arrowColorClassName = "text-ardalYellow",
}: CTAButtonProps) {
  return (
    <div className="pt-8 md:pt-10">
      <a
        href={href}
        className={`group inline-flex items-center gap-2 rounded-full ${bgClassName} py-1.5 pl-5 pr-2 text-base font-medium text-ink transition hover:opacity-90`}
      >
        {label}
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full bg-ink transition-transform duration-300 ease-out group-hover:translate-x-1.5 ${arrowColorClassName}`}
        >
          <ArrowIcon />
        </span>
      </a>
    </div>
  );
}
