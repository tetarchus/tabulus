/** IIFE to detect check if the current environment is "production". */
const IS_PRODUCTION = () => process.env.NODE_ENV === 'production';
/** IIFE to detect check if the current environment is "development". */
const IS_DEVELOPMENT = () => process.env.NODE_ENV === 'development';
/** IIFE to detect check if the current environment is "test". */
const IS_TEST = () => process.env.NODE_ENV === 'test';

/**
 * Environment checking to allow for different functionality per NODE_ENV.
 * @namespace
 * @private
 */
const IS = {
  /** Whether the current environment is a development environment. */
  DEV: IS_DEVELOPMENT(),
  /** Whether the current environment is a production environment. */
  PROD: IS_PRODUCTION(),
  /** Whether the current environment is a test environment. */
  TEST: IS_TEST(),
} as const;

export { IS };
