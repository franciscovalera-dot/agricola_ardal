import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  groups: [
    { name: 'contacto', title: 'Contacto', default: true },
    { name: 'footer', title: 'Pie de página' },
  ],
  fields: [
    defineField({ name: 'contactoPhone', title: 'Teléfono (texto)', type: 'string', group: 'contacto' }),
    defineField({
      name: 'contactoPhoneHref',
      title: 'Teléfono (enlace tel:)',
      type: 'string',
      description: 'Ej. tel:+34999696969',
      group: 'contacto',
    }),
    defineField({ name: 'contactoEmail', title: 'Correo electrónico', type: 'string', group: 'contacto' }),
    defineField({
      name: 'contactoAddress',
      title: 'Dirección',
      type: 'text',
      rows: 3,
      description: 'Los saltos de línea se respetan tal cual.',
      group: 'contacto',
    }),
    defineField({ name: 'contactoMapUrl', title: 'Enlace a Google Maps', type: 'url', group: 'contacto' }),

    defineField({
      name: 'footerBrandName',
      title: 'Nombre de marca (pie)',
      type: 'string',
      initialValue: 'Agricola Ardal',
      group: 'footer',
    }),
    defineField({ name: 'footerTagline', title: 'Eslogan del pie', type: 'text', rows: 2, group: 'footer' }),
    defineField({ name: 'kitDigitalImage', title: 'Imagen Kit Digital', type: 'image', group: 'footer' }),
    defineField({
      name: 'kitDigitalImageAlt',
      title: 'Alt de la imagen Kit Digital',
      type: 'string',
      initialValue: 'Kit Digital, red.es y financiación por la Unión Europea',
      group: 'footer',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Ajustes del sitio' }),
  },
});
