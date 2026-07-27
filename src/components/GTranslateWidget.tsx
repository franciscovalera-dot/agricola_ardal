'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function GTranslateWidget() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;

  return (
    <>
      <div className="gtranslate_wrapper" />
      <Script id="gtranslate-settings" strategy="beforeInteractive">
        {`window.gtranslateSettings = {"default_language":"es","native_language_names":true,"languages":["es","en"],"wrapper_selector":".gtranslate_wrapper","float_switcher_open_direction":"bottom"};`}
      </Script>
      <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" strategy="afterInteractive" />
    </>
  );
}
