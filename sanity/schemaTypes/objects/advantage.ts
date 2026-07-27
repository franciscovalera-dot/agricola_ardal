import { defineField, defineType } from 'sanity';

export const advantage = defineType({
  name: 'advantage',
  title: 'Ventaja',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'text', title: 'Texto', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({
      name: 'icon',
      title: 'Icono',
      type: 'image',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title', media: 'icon' },
  },
});
