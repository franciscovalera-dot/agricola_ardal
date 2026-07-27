import { defineField, defineType } from 'sanity';

export const fruitProduct = defineType({
  name: 'fruitProduct',
  title: 'Producto (fruta)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'teasers', title: 'Textos de listado' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      group: 'content',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (ruta)',
      type: 'slug',
      description: 'Debe coincidir con la ruta: albaricoques, nectarinas, naranjas o limones.',
      options: { source: 'name' },
      group: 'content',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden de listado',
      type: 'number',
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen principal',
      type: 'image',
      group: 'content',
    }),
    defineField({ name: 'heroImageAlt', title: 'Alt de la imagen principal', type: 'string', group: 'content' }),

    defineField({ name: 'introTitle', title: 'Título de introducción', type: 'string', group: 'content' }),
    defineField({ name: 'introBody', title: 'Texto de introducción', type: 'array', of: [{ type: 'block' }], group: 'content' }),

    defineField({ name: 'aboutTitle', title: 'Título "Sobre nuestros/as..."', type: 'string', group: 'content' }),
    defineField({ name: 'aboutBody', title: 'Texto "Sobre nuestros/as..."', type: 'array', of: [{ type: 'block' }], group: 'content' }),

    defineField({ name: 'orchardImage', title: 'Imagen del huerto', type: 'image', group: 'content' }),
    defineField({ name: 'orchardImageAlt', title: 'Alt de la imagen del huerto', type: 'string', group: 'content' }),

    defineField({
      name: 'cultivoTitle',
      title: 'Título de cultivo',
      type: 'string',
      initialValue: 'Cultivo en el campo de Murcia',
      group: 'content',
    }),
    defineField({ name: 'cultivoBody', title: 'Texto de cultivo', type: 'array', of: [{ type: 'block' }], group: 'content' }),

    defineField({ name: 'contactCtaTitle', title: 'Título del CTA de contacto', type: 'string', group: 'content' }),
    defineField({ name: 'contactCtaDescription', title: 'Descripción del CTA de contacto', type: 'text', rows: 2, group: 'content' }),

    defineField({
      name: 'homeTeaser',
      title: 'Descripción breve (portada)',
      type: 'text',
      rows: 3,
      group: 'teasers',
    }),
    defineField({
      name: 'productosTeaser',
      title: 'Descripción breve (página Productos)',
      type: 'text',
      rows: 3,
      group: 'teasers',
    }),
    defineField({
      name: 'nosotrosTeaser',
      title: 'Descripción breve (página Nosotros)',
      type: 'text',
      rows: 3,
      group: 'teasers',
    }),

    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    select: { title: 'name', media: 'heroImage' },
  },
});
