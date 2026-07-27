import { defineField, defineType } from 'sanity';

export const nosotrosPage = defineType({
  name: 'nosotrosPage',
  title: 'Página: Nosotros',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'intro', title: 'Introducción' },
    { name: 'cuidado', title: 'Cuidado y constancia' },
    { name: 'entorno', title: 'Entorno agrícola' },
    { name: 'calidad', title: 'Calidad desde el origen' },
    { name: 'productos', title: 'Sección productos' },
    { name: 'cta', title: 'CTA de cierre' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroImage', title: 'Imagen', type: 'image', group: 'hero' }),
    defineField({ name: 'heroImageAlt', title: 'Alt de la imagen', type: 'string', group: 'hero' }),
    defineField({ name: 'heroHeading', title: 'Título (H1)', type: 'string', group: 'hero' }),

    defineField({ name: 'introBody', title: 'Texto', type: 'array', of: [{ type: 'block' }], group: 'intro' }),
    defineField({ name: 'introImage', title: 'Imagen', type: 'image', group: 'intro' }),
    defineField({ name: 'introImageAlt', title: 'Alt de la imagen', type: 'string', group: 'intro' }),

    defineField({ name: 'cuidadoImageA', title: 'Imagen A', type: 'image', group: 'cuidado' }),
    defineField({ name: 'cuidadoImageAAlt', title: 'Alt de la imagen A', type: 'string', group: 'cuidado' }),
    defineField({ name: 'cuidadoImageB', title: 'Imagen B', type: 'image', group: 'cuidado' }),
    defineField({ name: 'cuidadoImageBAlt', title: 'Alt de la imagen B', type: 'string', group: 'cuidado' }),
    defineField({ name: 'cuidadoHeading', title: 'Título', type: 'string', group: 'cuidado' }),
    defineField({ name: 'cuidadoBody', title: 'Texto', type: 'array', of: [{ type: 'block' }], group: 'cuidado' }),

    defineField({ name: 'entornoBackgroundImage', title: 'Imagen de fondo', type: 'image', group: 'entorno' }),
    defineField({ name: 'entornoBackgroundImageAlt', title: 'Alt de la imagen de fondo', type: 'string', group: 'entorno' }),
    defineField({ name: 'entornoHeading', title: 'Título', type: 'string', group: 'entorno' }),
    defineField({
      name: 'entornoBodyMobile',
      title: 'Texto (móvil, resumido)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'entorno',
    }),
    defineField({
      name: 'entornoBodyDesktop',
      title: 'Texto (escritorio, completo)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'entorno',
    }),

    defineField({ name: 'calidadImage', title: 'Imagen', type: 'image', group: 'calidad' }),
    defineField({ name: 'calidadImageAlt', title: 'Alt de la imagen', type: 'string', group: 'calidad' }),
    defineField({ name: 'calidadHeading', title: 'Título', type: 'string', initialValue: 'Calidad desde el origen', group: 'calidad' }),
    defineField({ name: 'calidadBody', title: 'Texto', type: 'array', of: [{ type: 'block' }], group: 'calidad' }),

    defineField({ name: 'productosHeading', title: 'Título', type: 'string', initialValue: 'Nuestros productos', group: 'productos' }),

    defineField({ name: 'ctaDecorativeImage', title: 'Imagen decorativa', type: 'image', group: 'cta' }),
    defineField({ name: 'ctaHeading', title: 'Título', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaParagraph', title: 'Texto', type: 'text', rows: 3, group: 'cta' }),

    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: () => ({ title: 'Página: Nosotros' }),
  },
});
