import { defineField, defineType } from 'sanity';

export const legalTableRow = defineType({
  name: 'legalTableRow',
  title: 'Fila de tabla',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Tipo', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 2 }),
    defineField({ name: 'duration', title: 'Duración', type: 'string' }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'duration' },
  },
});

export const legalLink = defineType({
  name: 'legalLink',
  title: 'Enlace',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Texto', type: 'string' }),
    defineField({ name: 'url', title: 'URL', type: 'url' }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'url' },
  },
});

export const legalSection = defineType({
  name: 'legalSection',
  title: 'Sección',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Contenido', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'table',
      title: 'Tabla (opcional, ej. tipos de cookies)',
      type: 'array',
      of: [{ type: 'legalTableRow' }],
    }),
    defineField({
      name: 'links',
      title: 'Enlaces (opcional, ej. enlaces a navegadores)',
      type: 'array',
      of: [{ type: 'legalLink' }],
    }),
  ],
  preview: {
    select: { title: 'heading' },
  },
});
