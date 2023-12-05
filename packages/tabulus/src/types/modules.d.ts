import '@emotion/react';

import type { Theme as TabulusTheme } from '@tabulus/types';

/**
 * Inject custom theme into @emotion to allow auto-complete for theme properties.
 */
declare module '@emotion/react' {
  export type Theme = TabulusTheme;
}
