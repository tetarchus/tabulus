import '@emotion/react';

import type { theme } from '@devtools/theme';

/**
 * Inject custom theme into @emotion to allow auto-complete for theme properties.
 */
declare module '@emotion/react' {
  export type Theme = typeof theme;
}
