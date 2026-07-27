import { defineField, defineType } from 'sanity';

export const legalPage = defineType({
  name: 'legalPage',
  title: 'Página legal',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título (H1)', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (ruta)',
      type: 'slug',
      description: 'aviso-legal, politica-de-cookies o politica-de-privacidad',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'eyebrow', title: 'Etiqueta superior', type: 'string', initialValue: 'Legal' }),
    defineField({
      name: 'sections',
      title: 'Secciones',
      type: 'array',
      of: [{ type: 'legalSection' }],
    }),
    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
