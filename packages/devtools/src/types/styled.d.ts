import 'styled-components';

import type { Theme } from '@devtools/theme';

/**
 * Inject custom theme into @emotion to allow auto-complete for theme properties.
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
