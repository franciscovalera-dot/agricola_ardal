import { type SchemaTypeDefinition } from 'sanity';

import { advantage } from './objects/advantage';
import { legalLink, legalSection, legalTableRow } from './objects/legalSection';
import { siteSettings } from './siteSettings';
import { fruitProduct } from './fruitProduct';
import { legalPage } from './legalPage';
import { homePage } from './homePage';
import { productosPage } from './productosPage';
import { contactoPage } from './contactoPage';
import { nosotrosPage } from './nosotrosPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singletons
    siteSettings,
    homePage,
    productosPage,
    contactoPage,
    nosotrosPage,
    // Documents
    fruitProduct,
    legalPage,
    // Objects
    advantage,
    legalSection,
    legalTableRow,
    legalLink,
  ],
};

export const SINGLETON_TYPES = [
  'siteSettings',
  'homePage',
  'productosPage',
  'contactoPage',
  'nosotrosPage',
] as const;
