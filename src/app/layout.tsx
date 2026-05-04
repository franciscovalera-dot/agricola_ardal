import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agrícola Ardal — Fruta cultivada en el campo de Murcia',
  description:
    'Agrícola Ardal cultiva fruta de temporada en Murcia con tradición familiar y respeto por la tierra. Descubre nuestros albaricoques, naranjas y limones.',
  metadataBase: new URL('https://agricolaardal.com'),
  openGraph: {
    title: 'Agrícola Ardal',
    description: 'Fruta cultivada en el campo de Murcia.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-body bg-blanco text-negro antialiased">{children}</body>
    </html>
  );
}
