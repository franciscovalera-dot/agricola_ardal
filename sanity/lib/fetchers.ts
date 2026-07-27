import { client } from './client';
import {
  ALL_FRUIT_PRODUCTS_QUERY,
  CONTACTO_PAGE_QUERY,
  FRUIT_PRODUCT_BY_SLUG_QUERY,
  HOME_PAGE_QUERY,
  LEGAL_PAGE_BY_SLUG_QUERY,
  NOSOTROS_PAGE_QUERY,
  PRODUCTOS_PAGE_QUERY,
  SITE_SETTINGS_QUERY,
} from './queries';

export const getSiteSettings = () => client.fetch(SITE_SETTINGS_QUERY);
export const getHomePage = () => client.fetch(HOME_PAGE_QUERY);
export const getProductosPage = () => client.fetch(PRODUCTOS_PAGE_QUERY);
export const getContactoPage = () => client.fetch(CONTACTO_PAGE_QUERY);
export const getNosotrosPage = () => client.fetch(NOSOTROS_PAGE_QUERY);
export const getAllFruitProducts = () => client.fetch(ALL_FRUIT_PRODUCTS_QUERY);
export const getFruitProductBySlug = (slug: string) =>
  client.fetch(FRUIT_PRODUCT_BY_SLUG_QUERY, { slug });
export const getLegalPageBySlug = (slug: string) =>
  client.fetch(LEGAL_PAGE_BY_SLUG_QUERY, { slug });
