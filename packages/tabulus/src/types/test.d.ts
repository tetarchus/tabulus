import type { AxeMatchers } from 'vitest-axe/matchers';

/**
 * Extended types for vitest. Not used in the library itself.
 */
declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
