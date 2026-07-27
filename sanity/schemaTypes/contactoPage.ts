import { defineField, defineType } from 'sanity';

export const contactoPage = defineType({
  name: 'contactoPage',
  title: 'Página: Contacto',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heading', title: 'Título (H1)', type: 'string', group: 'content' }),
    defineField({ name: 'paragraph', title: 'Texto', type: 'text', rows: 3, group: 'content' }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', group: 'content' }),
    defineField({ name: 'imageAlt', title: 'Alt de la imagen', type: 'string', group: 'content' }),
    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: () => ({ title: 'Página: Contacto' }),
  },
});
