import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Página: Inicio',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'productos', title: 'Sección productos' },
    { name: 'whyChoose', title: 'Por qué elegirnos' },
    { name: 'empresa', title: 'Empresa' },
    { name: 'contacto', title: 'Contacto (CTA)' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroImage', title: 'Imagen', type: 'image', group: 'hero' }),
    defineField({ name: 'heroImageAlt', title: 'Alt de la imagen', type: 'string', group: 'hero' }),
    defineField({ name: 'heroHeading', title: 'Título (H1)', type: 'string', group: 'hero' }),
    defineField({
      name: 'heroBodyDesktop',
      title: 'Texto (escritorio)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    }),
    defineField({
      name: 'heroBodyMobile',
      title: 'Texto (móvil)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    }),
    defineField({ name: 'heroCtaLabel', title: 'Texto del botón', type: 'string', initialValue: 'Conoce nuestros productos', group: 'hero' }),
    defineField({ name: 'heroCtaHref', title: 'Enlace del botón', type: 'string', initialValue: '/productos', group: 'hero' }),

    defineField({ name: 'productosHeading', title: 'Título', type: 'string', initialValue: 'Nuestros productos', group: 'productos' }),
    defineField({ name: 'productosIntro', title: 'Texto introductorio', type: 'text', rows: 3, group: 'productos' }),

    defineField({ name: 'whyChooseHeading', title: 'Título', type: 'string', initialValue: 'Por qué elegir Agrícola Ardal', group: 'whyChoose' }),
    defineField({ name: 'whyChooseDecorativeImage', title: 'Imagen decorativa', type: 'image', group: 'whyChoose' }),
    defineField({
      name: 'whyChooseAdvantages',
      title: 'Ventajas',
      type: 'array',
      of: [{ type: 'advantage' }],
      group: 'whyChoose',
    }),

    defineField({ name: 'empresaImage', title: 'Imagen', type: 'image', group: 'empresa' }),
    defineField({ name: 'empresaImageAlt', title: 'Alt de la imagen', type: 'string', group: 'empresa' }),
    defineField({ name: 'empresaHeading', title: 'Título', type: 'string', group: 'empresa' }),
    defineField({ name: 'empresaBody', title: 'Texto', type: 'array', of: [{ type: 'block' }], group: 'empresa' }),
    defineField({ name: 'empresaCtaLabel', title: 'Texto del botón', type: 'string', initialValue: 'Conócenos', group: 'empresa' }),
    defineField({ name: 'empresaCtaHref', title: 'Enlace del botón', type: 'string', initialValue: '/nosotros', group: 'empresa' }),

    defineField({ name: 'contactoDecorativeImage', title: 'Imagen decorativa', type: 'image', group: 'contacto' }),
    defineField({ name: 'contactoHeading', title: 'Título', type: 'string', initialValue: 'Contacta con Agrícola Ardal', group: 'contacto' }),
    defineField({ name: 'contactoParagraph', title: 'Texto', type: 'text', rows: 3, group: 'contacto' }),

    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: () => ({ title: 'Página: Inicio' }),
  },
});
