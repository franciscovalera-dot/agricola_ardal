import { defineField, defineType } from 'sanity';

export const productosPage = defineType({
  name: 'productosPage',
  title: 'Página: Productos',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroImage', title: 'Imagen de fondo', type: 'image', group: 'content' }),
    defineField({ name: 'heroImageAlt', title: 'Alt de la imagen', type: 'string', group: 'content' }),
    defineField({ name: 'heading', title: 'Título (H1)', type: 'string', initialValue: 'Nuestros productos', group: 'content' }),
    defineField({ name: 'intro', title: 'Texto introductorio', type: 'text', rows: 3, group: 'content' }),
    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: () => ({ title: 'Página: Productos' }),
  },
});
