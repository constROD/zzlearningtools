export const ROUTES = {
  LOGIN: '/login',

  HOME: '/',
  CHALLENGES: {
    INDEX: '/challenges',
    CHALLENGE1: '/challenges/challenge1',
  },
  LEARN: {
    INDEX: '/learn',
    ABC: '/learn/abc',
    NUMBERS: '/learn/numbers',
    COLORS: '/learn/colors',
    SHAPES: '/learn/shapes',
    ANIMALS: '/learn/animals',
  },
} as const;

export const isServer = typeof window === 'undefined';

export const DEFAULT_ASSET_DOMAIN = '/assets' as const;

/**
 * *Increment this version number when you update the production assets.
 */
export const DEFAULT_ASSET_VERSION = '1.0.0' as const;
