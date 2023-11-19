import '@emotion/react';

import type { AxeMatchers } from 'vitest-axe/matchers';
/**
 * Inject custom theme into @emotion to allow auto-complete for theme properties.
 */
declare module '@emotion/react' {
  export { Theme } from '@tabulus/types';
}

/**
 * Extended types for vitest. Not used in the library itself.
 */
declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}

declare module 'lodash-es' {
  export * from 'lodash';
}
