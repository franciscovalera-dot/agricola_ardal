'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const CONSENT_KEY = 'ardal_cookie_consent';

export default function CookieBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY)) return;
    setVisible(true);
  }, []);

  if (pathname?.startsWith('/studio') || !visible) return null;

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-verde-noche/10 bg-crema px-4 py-4 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-body text-sm text-verde-noche">
          Usamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptarlas, rechazarlas o
          consultar más información en nuestra{' '}
          <a href="/politica-de-cookies" className="underline hover:text-ardalGreen">
            política de cookies
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-full border border-verde-noche/20 px-4 py-2 font-body text-sm text-verde-noche transition hover:bg-verde-noche/5"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-ardalGreen px-4 py-2 font-body text-sm text-verde-noche transition hover:opacity-90"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
