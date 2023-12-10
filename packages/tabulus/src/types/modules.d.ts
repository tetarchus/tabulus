import 'little-state-machine';
import 'styled-components';

import type { Theme } from '@tabulus/types';
import type { DevToolState } from '@tabulus/types/devtool';

/**
 * Inject custom state type into LSM to allow auto-complete for state.
 */
declare module 'little-state-machine' {
  interface GlobalState extends DevToolState {}
}

/**
 * Inject custom theme into @emotion to allow auto-complete for theme properties.
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
