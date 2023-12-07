import '@emotion/react';
import 'little-state-machine';

import type { DevToolState } from './state';

/**
 * Inject custom state type into LSM to allow auto-complete for state.
 */
declare module 'little-state-machine' {
  interface GlobalState extends DevToolState {}
}

/**
 * Inject custom theme into @emotion to allow auto-complete for theme properties.
 */
declare module '@emotion/react' {
  import type { theme } from '@devtools/theme';
  export type Theme = typeof theme;
}
