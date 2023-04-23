export const ROUTES = {
  LOGIN: '/login',

  HOME: '/',
  ABC: '/abc',
  NUMBERS: '/numbers',
  COLORS: '/colors',
  SHAPES: '/shapes',
  ANIMALS: '/animals',
} as const;

export const isServer = typeof window === 'undefined';

export const DEFAULT_ASSET_DOMAIN = '/assets' as const;

/**
 * *Increment this version number when you update the production assets.
 */
export const DEFAULT_ASSET_VERSION = '1.0.0' as const;
