// One-off migration script: pushes the site's current hardcoded copy into Sanity.
// Run with: node sanity/seed.mjs
import { createClient } from '@sanity/client';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';

function readCliToken() {
  const configPath = path.join(homedir(), '.config', 'sanity', 'config.json');
  const config = JSON.parse(readFileSync(configPath, 'utf8'));
  if (!config.authToken) throw new Error('No Sanity CLI auth token found — run `npx sanity@3.99.0 login` first.');
  return config.authToken;
}

const client = createClient({
  projectId: 'nf95vj6r',
  dataset: 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_WRITE_TOKEN || readCliToken(),
  useCdn: false,
});

const imagesDir = path.join(process.cwd(), 'public', 'images');
const assetCache = new Map();

async function uploadImage(filename) {
  if (assetCache.has(filename)) return assetCache.get(filename);
  const filePath = path.join(imagesDir, filename);
  const buffer = readFileSync(filePath);
  const asset = await client.assets.upload('image', buffer, { filename });
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  assetCache.set(filename, ref);
  console.log(`  uploaded ${filename}`);
  return ref;
}

const key = () => crypto.randomBytes(8).toString('hex');

function block(text, { listItem } = {}) {
  return {
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [],
    ...(listItem ? { listItem, level: 1 } : {}),
    children: [{ _type: 'span', _key: key(), text, marks: [] }],
  };
}

const paragraphs = (texts) => texts.map((t) => block(t));
const bulletList = (texts) => texts.map((t) => block(t, { listItem: 'bullet' }));

async function seed() {
  console.log('Uploading images...');
  const [
    heroNaranjos,
    pueblo,
    hojaLimonero,
    icon1,
    icon2,
    icon3,
    icon4,
    group798,
    arbolNectraninaJpg,
    arbolNaranjaPng,
    cerezos,
    cortandoLimones,
    cestoMelocotones,
    florCerezo,
    manoNaranja,
    albaricoqueArbol,
    kitDigital,
    albaricoque2,
    nectarina,
    naranja,
    limon,
    rectangle183,
    arbolLimonJpg,
    arbolNaranjaJpg,
  ] = await Promise.all(
    [
      'hero-naranjos.jpg',
      'Pueblo.png',
      'Hoja limonero 1.svg',
      'Icon1.svg',
      'Icon2.svg',
      'Icon3.svg',
      'Icon4.svg',
      'Group 798.svg',
      'arbol-nectarina.jpg',
      'arbol-naranja.png',
      'Cerezos.png',
      'cortando-limones.png',
      'cesto-melocotones.png',
      'flor-cerezo.png',
      'mano-naranja.png',
      'albaricoque-arbol.png',
      'kit_digital.svg',
      'Albaricoque 2.svg',
      'Nectarina.svg',
      'Naranja.svg',
      'Limon.svg',
      'Rectangle 183.png',
      'arbol-limon.jpg',
      'arbol-naranja.jpg',
    ].map(uploadImage)
  );

  console.log('Writing siteSettings...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    contactoPhone: '999 69 69 69',
    contactoPhoneHref: 'tel:+34999696969',
    contactoEmail: 'hola@agricolaardal.com',
    contactoAddress: 'Avenida Explanada, 9 -\nPiso 3º A 30170, Mula, Murcia',
    contactoMapUrl: 'https://maps.google.com/?q=Avenida+Explanada+9+Mula+Murcia',
    footerBrandName: 'Agricola Ardal',
    footerTagline: 'Comprometidos con la excelencia agricola y la tradicion murciana desde hace decadas.',
    kitDigitalImage: kitDigital,
    kitDigitalImageAlt: 'Kit Digital, red.es y financiación por la Unión Europea',
  });

  console.log('Writing homePage...');
  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroImage: heroNaranjos,
    heroImageAlt: 'Campo de naranjos en Murcia',
    heroHeading: 'Fruta cultivada en el campo de Murcia.',
    heroBodyDesktop: paragraphs([
      'En Agrícola Ardal cultivamos fruta en Mula, Murcia, con una forma de trabajar ligada al campo, a la tierra y al respeto por cada cosecha. Apostamos por una producción cuidada de albaricoques, nectarinas y cítricos, buscando siempre la calidad del producto y el valor de hacer las cosas como se han hecho toda la vida.',
      'Nuestro entorno forma parte del paisaje agrícola del Ardal, una zona muleña vinculada históricamente al campo y a los cultivos tradicionales, donde la agricultura sigue marcando el ritmo de cada temporada.',
    ]),
    heroBodyMobile: paragraphs([
      'Agrícola Ardal es una explotación familiar en Mula, Murcia, dedicada al cultivo tradicional de albaricoques, nectarinas y cítricos, con un enfoque en la calidad y el respeto por las formas de trabajar ligadas a la tierra y al paisaje agrícola de la zona del Ardal.',
    ]),
    heroCtaLabel: 'Conoce nuestros productos',
    heroCtaHref: '/productos',
    productosHeading: 'Nuestros productos',
    productosIntro:
      'Trabajamos diferentes variedades de fruta cultivada en Murcia, adaptándonos a los ciclos naturales de cada cultivo y poniendo el foco en la calidad, la recolección y el cuidado del campo.',
    whyChooseHeading: 'Por que elegir Agricola Ardal',
    whyChooseDecorativeImage: hojaLimonero,
    whyChooseAdvantages: [
      {
        _key: key(),
        _type: 'advantage',
        title: 'Tradicion agricola',
        text: 'Nuestra forma de trabajar nace del vinculo con el campo y de una manera de cultivar basada en la experiencia, el esfuerzo y el respeto por la tierra.',
        icon: icon1,
      },
      {
        _key: key(),
        _type: 'advantage',
        title: 'Producto de Murcia',
        text: 'Cultivamos en Mula, Murcia, en un entorno donde la agricultura forma parte del paisaje y de la identidad del territorio.',
        icon: icon2,
      },
      {
        _key: key(),
        _type: 'advantage',
        title: 'Cuidado en cada cultivo',
        text: 'Cada producto requiere atencion, seguimiento y dedicacion. Por eso trabajamos cada cosecha con criterio y compromiso con la calidad.',
        icon: icon3,
      },
      {
        _key: key(),
        _type: 'advantage',
        title: 'Compromiso con el origen',
        text: 'Creemos en una agricultura conectada con su entorno, con sus tiempos y con el valor de hacer las cosas bien desde el principio.',
        icon: icon4,
      },
    ],
    empresaImage: pueblo,
    empresaImageAlt: 'Pueblo de Murcia con su entorno natural',
    empresaHeading: 'Una empresa vinculada al campo y a su entorno',
    empresaBody: paragraphs([
      'Agrícola Ardal es una empresa agrícola de Mula, Murcia, centrada en el cultivo de fruta y en el valor de una producción arraigada al territorio. Nuestra actividad se desarrolla en una zona donde el paisaje agrícola sigue formando parte de la vida, de la economía y de la identidad local.',
      'Trabajamos desde el compromiso con la tierra, con una visión basada en la calidad del producto y en la continuidad de una forma de cultivar ligada al campo de siempre.',
    ]),
    empresaCtaLabel: 'Conócenos',
    empresaCtaHref: '/nosotros',
    contactoDecorativeImage: group798,
    contactoHeading: 'Contacta con Agrícola Ardal',
    contactoParagraph:
      'Si deseas mas informacion sobre nuestros productos o sobre nuestra actividad agricola, puedes ponerte en contacto con nosotros. Estaremos encantados de atenderte.',
    seoTitle: 'Agrícola Ardal — Fruta cultivada en el campo de Murcia',
    seoDescription:
      'Agrícola Ardal cultiva fruta de temporada en Murcia con tradición familiar y respeto por la tierra. Descubre nuestros albaricoques, naranjas y limones.',
  });

  console.log('Writing productosPage...');
  await client.createOrReplace({
    _id: 'productosPage',
    _type: 'productosPage',
    heroImage: arbolNectraninaJpg,
    heroImageAlt: 'Árbol de nectarinas en Mula, Murcia',
    heading: 'Nuestros productos',
    intro:
      'Cultivamos cada fruto en su temporada y lo recogemos en su punto justo de maduración. Esta es la familia de sabores que nace en el campo del Ardal, en Mula, Murcia.',
    seoTitle: 'Productos — Agrícola Ardal',
    seoDescription: 'Albaricoques, nectarinas, naranjas y limones cultivados en Mula, Murcia.',
  });

  console.log('Writing contactoPage...');
  await client.createOrReplace({
    _id: 'contactoPage',
    _type: 'contactoPage',
    heading: 'Ponte en contacto\ncon Agrícola Ardal',
    paragraph:
      'Si deseas más información sobre nuestra actividad agrícola, nuestros productos o nuestra empresa, puedes contactar con nosotros a través de los datos disponibles en esta página. En Agrícola Ardal estaremos encantados de atender cualquier consulta relacionada con nuestra producción de albaricoques, nectarinas, naranjas y limones cultivados en Murcia.',
    image: arbolNaranjaPng,
    imageAlt: 'Naranjas en el árbol',
    seoTitle: 'Contacto — Agrícola Ardal',
    seoDescription: 'Ponte en contacto con Agrícola Ardal. Estamos en Mula, Murcia.',
  });

  console.log('Writing nosotrosPage...');
  await client.createOrReplace({
    _id: 'nosotrosPage',
    _type: 'nosotrosPage',
    heroImage: cerezos,
    heroImageAlt: 'Campo de cerezos en flor en Mula, Murcia',
    heroHeading: 'Sobre Agrícola Ardal',
    introBody: paragraphs([
      'Agrícola Ardal es una empresa agrícola ubicada en Mula, Murcia, centrada en el cultivo de fruta y en el valor de una producción ligada al campo. Nuestra actividad nace del compromiso con la tierra, con el trabajo bien hecho y con una forma de cultivar basada en la experiencia y el respeto por cada cosecha.',
      'Desde nuestra constitución como sociedad en 2021, desarrollamos una actividad enfocada en el cultivo de albaricoques, nectarinas, naranjas y limones, trabajando cada producto con atención, seguimiento y criterio agrícola.',
    ]),
    introImage: cortandoLimones,
    introImageAlt: 'Recolección de limones a mano',
    cuidadoImageA: cestoMelocotones,
    cuidadoImageAAlt: 'Cesto con melocotones recién cosechados',
    cuidadoImageB: florCerezo,
    cuidadoImageBAlt: 'Flor de cerezo en primavera',
    cuidadoHeading: 'Una agricultura basada en el cuidado y la constancia',
    cuidadoBody: paragraphs([
      'En Agrícola Ardal entendemos la agricultura como un proceso que requiere tiempo, dedicación y conocimiento del terreno. Cada cultivo tiene sus necesidades, sus ritmos y sus momentos, y nuestro trabajo consiste en acompañar cada fase con el cuidado necesario para obtener un producto de calidad.',
      'No trabajamos desde la prisa, sino desde la constancia. Apostamos por una producción bien gestionada, donde el seguimiento del cultivo y el respeto por la tierra marcan la diferencia.',
    ]),
    entornoBackgroundImage: manoNaranja,
    entornoBackgroundImageAlt: 'Mano cogiendo una naranja entre muchas',
    entornoHeading: 'Un entorno agrícola con identidad propia',
    entornoBodyMobile: paragraphs([
      'Nuestra actividad se desarrolla en la zona del Ardal, en Mula, Murcia. Un entorno de secano donde cultivos tradicionales como el almendro o la vid marcan el paisaje.',
      'Este entorno define nuestra forma de trabajar el campo y refuerza nuestro compromiso con una agricultura conectada al territorio.',
    ]),
    entornoBodyDesktop: paragraphs([
      'Nuestra actividad se desarrolla en la zona del Ardal, en el término municipal de Mula, Murcia. Se trata de un entorno caracterizado por paisajes de secano, donde predominan cultivos tradicionales como el almendro, la vid o los cereales.',
      'Este paisaje agrícola define no solo el entorno, sino también la forma de trabajar el campo. Grandes extensiones, fincas abiertas y una relación directa con la tierra marcan el ritmo de la actividad agrícola en la zona.',
      'El Ardal es un ejemplo del carácter agrícola de Mula, donde la estacionalidad, el clima y la tradición siguen teniendo un papel clave en el desarrollo de los cultivos. Formar parte de este entorno refuerza nuestro compromiso con una agricultura conectada con el territorio.',
    ]),
    calidadImage: albaricoqueArbol,
    calidadImageAlt: 'Rama de albaricoques en el árbol',
    calidadHeading: 'Calidad desde el origen',
    calidadBody: paragraphs([
      'En Agrícola Ardal trabajamos con el objetivo de ofrecer fruta cultivada en Murcia con un estándar de calidad basado en el cuidado del producto desde el campo.',
      'Nuestro enfoque no se basa únicamente en producir, sino en hacerlo bien: controlando el cultivo, respetando los tiempos de cada fruta y manteniendo una línea de trabajo coherente con el entorno agrícola en el que nos encontramos.',
    ]),
    productosHeading: 'Nuestros productos',
    ctaDecorativeImage: group798,
    ctaHeading: 'Agricultura con raíces en Murcia',
    ctaParagraph:
      'Agrícola Ardal representa una forma de entender la agricultura desde el origen, el territorio y el compromiso con el trabajo bien hecho. Desde Mula, desarrollamos una actividad agrícola que pone en valor el campo y la calidad del producto.',
    seoTitle: 'Nosotros — Agrícola Ardal',
    seoDescription: 'La historia, los valores y las personas detrás de Agrícola Ardal en Mula, Murcia.',
  });

  console.log('Writing fruitProduct documents...');
  const fruits = [
    {
      _id: 'fruitProduct-albaricoques',
      name: 'Albaricoques',
      slug: { _type: 'slug', current: 'albaricoques' },
      order: 1,
      heroImage: albaricoque2,
      heroImageAlt: 'Albaricoque',
      introTitle: 'Albaricoques cultivados en Murcia',
      introBody: paragraphs([
        'Cultivamos albaricoques en el corazón de la huerta murciana, donde el sol y la tierra dan a nuestra fruta su sabor característico. Producimos pensando en la calidad, el aroma y la dulzura de cada ejemplar que llega a tu mesa.',
      ]),
      aboutTitle: 'Sobre nuestros albaricoques',
      aboutBody: paragraphs([
        'Seleccionamos cuidadosamente cada variedad para garantizar un fruto de piel suave, pulpa jugosa y un equilibrio perfecto entre dulzor y acidez. Trabajamos siguiendo las técnicas tradicionales del cultivo mediterráneo, combinadas con prácticas modernas de control de calidad.',
        'Nuestros albaricoques se recogen en su punto óptimo de maduración para asegurar el mejor sabor y una textura inmejorable.',
      ]),
      orchardImage: rectangle183,
      orchardImageAlt: 'Albaricoques en el árbol, campo de Murcia',
      cultivoBody: paragraphs([
        'Nuestras fincas se encuentran en zonas privilegiadas de la Región de Murcia, donde el clima cálido y seco crea las condiciones ideales para el desarrollo del albaricoque. Cuidamos cada árbol durante todo el año, respetando los ciclos naturales de la planta.',
      ]),
      contactCtaTitle: '¿Quieres más información sobre nuestros albaricoques?',
      contactCtaDescription:
        'Contacta con Agrícola Ardal para conocer mejor nuestra producción de albaricoques cultivados en Murcia.',
      homeTeaser: 'De piel dorada y pulpa jugosa. Recogido en su punto justo de maduración para conservar todo su aroma.',
      productosTeaser: 'De piel dorada y pulpa jugosa. Recogido en su punto justo de maduración para conservar todo su aroma.',
      nosotrosTeaser:
        'Cultivamos albaricoques con el cuidado que requiere una fruta de temporada, buscando siempre un producto de calidad, con sabor y con el valor de su origen en el campo murciano.',
      seoTitle: 'Albaricoques — Agrícola Ardal',
      seoDescription: 'Albaricoques cultivados en Mula, Murcia. Calidad, sabor y tradición agrícola.',
    },
    {
      _id: 'fruitProduct-nectarinas',
      name: 'Nectarinas',
      slug: { _type: 'slug', current: 'nectarinas' },
      order: 2,
      heroImage: nectarina,
      heroImageAlt: 'Nectarina',
      introTitle: 'Nectarinas cultivadas en Murcia',
      introBody: paragraphs([
        'En Agrícola Ardal producimos nectarinas en Mula, Murcia, trabajando cada cosecha con atención, experiencia y compromiso con la calidad del producto.',
        'Nuestra producción está vinculada al campo murciano y a una manera de cultivar que respeta los tiempos de la tierra.',
      ]),
      aboutTitle: 'Sobre nuestras nectarinas',
      aboutBody: paragraphs([
        'La nectarina es una fruta apreciada por su frescura, textura y sabor. En Agrícola Ardal cuidamos su cultivo desde el campo, atendiendo cada fase del proceso para conseguir una fruta bien desarrollada y recolectada en el momento adecuado.',
        'Nuestro trabajo se centra en ofrecer nectarinas cultivadas en Murcia con calidad, cuidado y regularidad.',
      ]),
      orchardImage: arbolNectraninaJpg,
      orchardImageAlt: 'Nectarinas en el árbol, campo de Murcia',
      cultivoBody: paragraphs([
        'Cultivamos nuestras nectarinas en el entorno agrícola de Mula, una zona donde el campo sigue teniendo un papel clave en la economía y en la identidad local.',
        'Desde este origen, trabajamos una producción conectada con la tierra y con la tradición agrícola de la Región de Murcia.',
      ]),
      contactCtaTitle: '¿Quieres más información sobre nuestras nectarinas?',
      contactCtaDescription:
        'Contacta con Agrícola Ardal para conocer mejor nuestra producción de nectarinas cultivadas en Murcia.',
      homeTeaser: 'Dulce, firme y con un toque ácido. Una fruta de hueso que conquista por su sabor intenso y su frescura.',
      productosTeaser: 'Dulce, firme y con un toque ácido. Una fruta de hueso que conquista por su sabor intenso y su frescura.',
      nosotrosTeaser:
        'Producimos nectarinas cultivadas en Murcia, atendiendo cada fase del proceso para obtener una fruta bien cuidada, fresca y con una recolección realizada en el momento adecuado.',
      seoTitle: 'Nectarinas — Agrícola Ardal',
      seoDescription: 'Nectarinas cultivadas en Mula, Murcia. Producción agrícola con compromiso con la calidad.',
    },
    {
      _id: 'fruitProduct-naranjas',
      name: 'Naranjas',
      slug: { _type: 'slug', current: 'naranjas' },
      order: 3,
      heroImage: naranja,
      heroImageAlt: 'Naranja',
      introTitle: 'Naranjas cultivadas en Murcia',
      introBody: paragraphs([
        'En Agrícola Ardal cultivamos naranjas en Mula, Murcia, con una producción basada en el cuidado del campo, la experiencia agrícola y el compromiso con la calidad.',
        'Trabajamos cada cultivo con seriedad, buscando una fruta bien cuidada desde su origen.',
      ]),
      aboutTitle: 'Sobre nuestras naranjas',
      aboutBody: paragraphs([
        'Las naranjas forman parte de nuestra producción agrícola y representan una línea de cultivo trabajada con dedicación. En Agrícola Ardal cuidamos el desarrollo del fruto y cada etapa del proceso para ofrecer naranjas cultivadas en Murcia con garantías de origen y calidad.',
        'Nuestro objetivo es mantener una producción responsable, ligada al campo y al valor del producto bien trabajado.',
      ]),
      orchardImage: arbolNaranjaJpg,
      orchardImageAlt: 'Naranjas en el árbol, campo de Murcia',
      cultivoBody: paragraphs([
        'Nuestras naranjas se cultivan en el entorno de Mula, dentro de una zona agrícola con identidad propia.',
        'Este vínculo con el territorio nos permite trabajar desde el origen, respetando los ciclos del cultivo y el carácter del campo murciano.',
      ]),
      contactCtaTitle: '¿Quieres más información sobre nuestras naranjas?',
      contactCtaDescription:
        'Contacta con Agrícola Ardal para conocer mejor nuestra producción de naranjas cultivadas en Murcia.',
      homeTeaser: 'Cultivada al sol de Murcia, llena de zumo y vitamina. Sabor clásico, fresco y honesto.',
      productosTeaser: 'Cultivada al sol de Murcia, llena de zumo y vitamina. Sabor clásico, fresco y honesto.',
      nosotrosTeaser:
        'Nuestras naranjas forman parte de una producción agrícola trabajada con dedicación y compromiso con la calidad, ofreciendo fruta cultivada en Murcia con atención al detalle desde el campo.',
      seoTitle: 'Naranjas — Agrícola Ardal',
      seoDescription: 'Naranjas cultivadas en Mula, Murcia. Producción agrícola con experiencia y compromiso con la calidad.',
    },
    {
      _id: 'fruitProduct-limones',
      name: 'Limones',
      slug: { _type: 'slug', current: 'limones' },
      order: 4,
      heroImage: limon,
      heroImageAlt: 'Limón',
      introTitle: 'Limones cultivados en Murcia',
      introBody: paragraphs([
        'En Agrícola Ardal cultivamos limones en Mula, Murcia, dentro de una producción agrícola centrada en la calidad, el origen y el cuidado de cada cosecha.',
        'Nuestro trabajo nace del compromiso con el campo y con una forma de cultivar vinculada a la tierra.',
      ]),
      aboutTitle: 'Sobre nuestros limones',
      aboutBody: paragraphs([
        'El limón es un producto muy ligado a la agricultura murciana. En Agrícola Ardal trabajamos su cultivo con atención y seguimiento, cuidando cada fase para obtener un fruto de calidad, cultivado en Murcia y conectado con nuestro entorno agrícola.',
        'Cada campaña requiere constancia, conocimiento del cultivo y respeto por los tiempos del campo.',
      ]),
      orchardImage: arbolLimonJpg,
      orchardImageAlt: 'Limones en el árbol, campo de Murcia',
      cultivoBody: paragraphs([
        'Cultivamos nuestros limones en Mula, dentro de un entorno agrícola donde la tierra, el clima y la tradición del campo forman parte de la identidad de cada producto.',
        'Desde este origen, apostamos por una producción seria, cuidada y comprometida con la calidad.',
      ]),
      contactCtaTitle: '¿Quieres más información sobre nuestros limones?',
      contactCtaDescription:
        'Contacta con Agrícola Ardal para conocer mejor nuestra producción de limones cultivados en Murcia.',
      homeTeaser: 'Aromáticos, ácidos y siempre listos para realzar cualquier receta. Cosechados todo el año.',
      productosTeaser: 'Aromáticos, ácidos y siempre listos para realzar cualquier receta. Cosechados todo el año.',
      nosotrosTeaser:
        'Cultivamos limones en un entorno agrícola marcado por la tradición y la experiencia en el campo, apostando por un producto de calidad y por una agricultura vinculada al territorio.',
      seoTitle: 'Limones — Agrícola Ardal',
      seoDescription: 'Limones cultivados en Mula, Murcia. Producción agrícola centrada en la calidad y el origen.',
    },
  ];

  for (const fruit of fruits) {
    await client.createOrReplace({
      _type: 'fruitProduct',
      cultivoTitle: 'Cultivo en el campo de Murcia',
      ...fruit,
    });
  }

  console.log('Writing legalPage documents...');
  await client.createOrReplace({
    _id: 'legalPage-aviso-legal',
    _type: 'legalPage',
    title: 'Aviso Legal',
    slug: { _type: 'slug', current: 'aviso-legal' },
    eyebrow: 'Legal',
    seoTitle: 'Aviso Legal — Agrícola Ardal',
    sections: [
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Identificación del titular',
        body: [
          ...paragraphs([
            'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es:',
          ]),
          ...bulletList([
            'Denominación social: Agrícola Ardal',
            'Domicilio social: Avenida Explanada, 9 - Piso 3º A 30170, Mula, Murcia',
            'Teléfono: 999 69 69 69',
            'Correo electrónico: hola@agricolaardal.com',
          ]),
        ],
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Objeto y ámbito de aplicación',
        body: paragraphs([
          'El presente Aviso Legal regula el acceso y la utilización del sitio web de Agrícola Ardal. El acceso al sitio web implica la aceptación plena y sin reservas de las presentes condiciones de uso.',
          'Agrícola Ardal se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presentación y configuración del sitio web, así como las presentes condiciones de uso.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Propiedad intelectual e industrial',
        body: paragraphs([
          'Todos los contenidos del sitio web —incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y código fuente— son propiedad intelectual de Agrícola Ardal o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.',
          'Queda prohibida la reproducción, distribución, comunicación pública y transformación, total o parcial, de los contenidos de este sitio web sin la autorización expresa y por escrito de Agrícola Ardal.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Exclusión de responsabilidad',
        body: paragraphs([
          'Agrícola Ardal no se responsabiliza de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del uso del sitio web, incluyendo fallos técnicos, interrupciones del servicio o la presencia de virus u otros elementos dañinos en los contenidos.',
          'El sitio web puede contener enlaces a páginas de terceros. Agrícola Ardal no asume responsabilidad alguna por los contenidos, informaciones o servicios que aparezcan en dichos sitios.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Legislación aplicable y jurisdicción',
        body: paragraphs([
          'Las presentes condiciones de uso se rigen por la legislación española vigente. Para la resolución de cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales de Murcia, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.',
        ]),
      },
    ],
  });

  await client.createOrReplace({
    _id: 'legalPage-politica-de-cookies',
    _type: 'legalPage',
    title: 'Política de Cookies',
    slug: { _type: 'slug', current: 'politica-de-cookies' },
    eyebrow: 'Legal',
    seoTitle: 'Política de Cookies — Agrícola Ardal',
    sections: [
      {
        _key: key(),
        _type: 'legalSection',
        heading: '¿Qué son las cookies?',
        body: paragraphs([
          'Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando este los visita. Sirven para recordar preferencias, analizar el comportamiento de navegación y mejorar la experiencia de uso.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Cookies utilizadas en este sitio web',
        body: paragraphs(['Este sitio web puede utilizar los siguientes tipos de cookies:']),
        table: [
          {
            _key: key(),
            _type: 'legalTableRow',
            label: 'Técnicas',
            description: 'Necesarias para el funcionamiento básico del sitio. No requieren consentimiento.',
            duration: 'Sesión',
          },
          {
            _key: key(),
            _type: 'legalTableRow',
            label: 'Analíticas',
            description: 'Permiten medir el tráfico y analizar el comportamiento de los usuarios para mejorar el sitio.',
            duration: 'Hasta 2 años',
          },
          {
            _key: key(),
            _type: 'legalTableRow',
            label: 'Preferencias',
            description: 'Guardan las preferencias del usuario, como el idioma o la región seleccionada.',
            duration: '1 año',
          },
        ],
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Cookies de terceros',
        body: paragraphs([
          'Este sitio web puede utilizar servicios de terceros que instalan sus propias cookies, como herramientas de analítica web (por ejemplo, Google Analytics). Estos servicios están sujetos a sus propias políticas de privacidad y cookies, sobre las que Agrícola Ardal no tiene control directo.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Cómo gestionar o desactivar las cookies',
        body: [
          ...paragraphs([
            'El usuario puede configurar su navegador para aceptar, rechazar o eliminar las cookies en cualquier momento. A continuación se indican los enlaces de configuración de los principales navegadores:',
          ]),
          ...paragraphs([
            'Ten en cuenta que deshabilitar las cookies puede afectar al funcionamiento correcto de algunas secciones del sitio web.',
          ]),
        ],
        links: [
          { _key: key(), _type: 'legalLink', label: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
          {
            _key: key(),
            _type: 'legalLink',
            label: 'Mozilla Firefox',
            url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias',
          },
          { _key: key(), _type: 'legalLink', label: 'Safari', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
          {
            _key: key(),
            _type: 'legalLink',
            label: 'Microsoft Edge',
            url: 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
          },
        ],
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Actualización de esta política',
        body: paragraphs([
          'Agrícola Ardal se reserva el derecho a modificar esta Política de Cookies en cualquier momento para adaptarla a cambios legislativos o a nuevas funcionalidades del sitio. Se recomienda revisarla periódicamente.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Contacto',
        body: paragraphs([
          'Para cualquier consulta sobre el uso de cookies en este sitio web, puede contactar con nosotros en hola@agricolaardal.com o llamando al 999 69 69 69.',
        ]),
      },
    ],
  });

  await client.createOrReplace({
    _id: 'legalPage-politica-de-privacidad',
    _type: 'legalPage',
    title: 'Política de Privacidad',
    slug: { _type: 'slug', current: 'politica-de-privacidad' },
    eyebrow: 'Legal',
    seoTitle: 'Política de Privacidad — Agrícola Ardal',
    sections: [
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Responsable del tratamiento',
        body: bulletList([
          'Denominación social: Agrícola Ardal',
          'Domicilio: Avenida Explanada, 9 - Piso 3º A 30170, Mula, Murcia',
          'Teléfono: 999 69 69 69',
          'Correo electrónico: hola@agricolaardal.com',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Datos que recopilamos',
        body: [
          ...paragraphs([
            'Agrícola Ardal puede recopilar los siguientes datos personales cuando el usuario contacta a través del sitio web o por cualquier otro medio:',
          ]),
          ...bulletList([
            'Nombre y apellidos',
            'Dirección de correo electrónico',
            'Número de teléfono',
            'Cualquier otra información que el usuario facilite voluntariamente',
          ]),
          ...paragraphs([
            'No recopilamos datos de menores de 14 años. Si detectamos que hemos recibido datos de un menor sin el consentimiento de sus tutores, los eliminaremos inmediatamente.',
          ]),
        ],
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Finalidad del tratamiento',
        body: [
          ...paragraphs(['Los datos facilitados serán utilizados para:']),
          ...bulletList([
            'Gestionar y responder las consultas o solicitudes de información recibidas.',
            'Mantener la relación comercial con clientes y proveedores.',
            'Cumplir con las obligaciones legales aplicables.',
          ]),
        ],
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Base jurídica del tratamiento',
        body: paragraphs([
          'El tratamiento de los datos se basa en el consentimiento del usuario (art. 6.1.a RGPD) cuando este se pone en contacto con nosotros de forma voluntaria, y en el interés legítimo o la ejecución de un contrato cuando la relación es de carácter comercial (art. 6.1.b y 6.1.f RGPD).',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Conservación de los datos',
        body: paragraphs([
          'Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y, en su caso, para cumplir con las obligaciones legales aplicables. Una vez concluida la relación, los datos serán bloqueados y posteriormente eliminados conforme a la normativa vigente.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Derechos del usuario',
        body: [
          ...paragraphs([
            'El usuario puede ejercer en cualquier momento los siguientes derechos reconocidos por el Reglamento General de Protección de Datos (RGPD):',
          ]),
          ...bulletList([
            'Acceso: conocer qué datos suyos tratamos.',
            'Rectificación: corregir datos inexactos o incompletos.',
            'Supresión: solicitar la eliminación de sus datos.',
            'Oposición: oponerse al tratamiento de sus datos.',
            'Limitación: solicitar la restricción del tratamiento.',
            'Portabilidad: recibir sus datos en formato estructurado.',
          ]),
          ...paragraphs([
            'Para ejercer estos derechos puede dirigirse a nosotros por correo electrónico a hola@agricolaardal.com o por teléfono al 999 69 69 69. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
          ]),
        ],
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Cesión de datos a terceros',
        body: paragraphs([
          'Agrícola Ardal no cederá los datos personales a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación de los servicios contratados, con las garantías adecuadas conforme al RGPD.',
        ]),
      },
      {
        _key: key(),
        _type: 'legalSection',
        heading: 'Seguridad',
        body: paragraphs([
          'Agrícola Ardal ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales, y para evitar su pérdida, alteración o acceso por parte de terceros no autorizados.',
        ]),
      },
    ],
  });

  console.log('Seed complete.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
