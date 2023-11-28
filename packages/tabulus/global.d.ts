import '@emotion/react';

/**
 * Inject custom theme into @emotion to allow auto-complete for theme properties.
 */
declare module '@emotion/react' {
  export { Theme } from '@tabulus/types';
}
