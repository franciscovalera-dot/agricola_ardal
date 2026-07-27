import { groq } from 'next-sanity';

export const IMAGE_FIELDS = groq`{ asset, alt }`;

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]{
  contactoPhone,
  contactoPhoneHref,
  contactoEmail,
  contactoAddress,
  contactoMapUrl,
  footerBrandName,
  footerTagline,
  kitDigitalImage,
  kitDigitalImageAlt
}`;

export const HOME_PAGE_QUERY = groq`*[_type == "homePage"][0]`;

export const PRODUCTOS_PAGE_QUERY = groq`*[_type == "productosPage"][0]`;

export const CONTACTO_PAGE_QUERY = groq`*[_type == "contactoPage"][0]`;

export const NOSOTROS_PAGE_QUERY = groq`*[_type == "nosotrosPage"][0]`;

export const ALL_FRUIT_PRODUCTS_QUERY = groq`*[_type == "fruitProduct"] | order(order asc)`;

export const FRUIT_PRODUCT_BY_SLUG_QUERY = groq`*[_type == "fruitProduct" && slug.current == $slug][0]`;

export const LEGAL_PAGE_BY_SLUG_QUERY = groq`*[_type == "legalPage" && slug.current == $slug][0]`;
