import type { StructureResolver } from 'sanity/structure';

const SINGLETONS: Array<{ id: string; type: string; title: string }> = [
  { id: 'siteSettings', type: 'siteSettings', title: 'Ajustes del sitio' },
  { id: 'homePage', type: 'homePage', title: 'Página: Inicio' },
  { id: 'productosPage', type: 'productosPage', title: 'Página: Productos' },
  { id: 'contactoPage', type: 'contactoPage', title: 'Página: Contacto' },
  { id: 'nosotrosPage', type: 'nosotrosPage', title: 'Página: Nosotros' },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      ...SINGLETONS.map(({ id, type, title }) =>
        S.listItem()
          .id(id)
          .title(title)
          .child(S.document().schemaType(type).documentId(id))
      ),
      S.divider(),
      S.documentTypeListItem('fruitProduct').title('Productos (frutas)'),
      S.documentTypeListItem('legalPage').title('Páginas legales'),
    ]);
