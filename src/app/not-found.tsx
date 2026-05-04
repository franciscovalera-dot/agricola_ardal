import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-crema flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-xl">
        <p className="font-body uppercase tracking-[0.3em] text-xs text-verde-oscuro mb-4">404</p>
        <h1 className="font-heading text-5xl md:text-7xl text-verde-oscuro leading-tight">
          Página no encontrada
        </h1>
        <p className="font-body mt-6 text-lg text-negro/70">
          La página que buscas se ha caído del árbol. Vuelve al inicio para seguir explorando.
        </p>
        <Link
          href="/"
          className="inline-block mt-10 bg-verde-oscuro text-blanco font-body uppercase tracking-widest text-sm px-8 py-4 hover:bg-verde-lima hover:text-negro transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
