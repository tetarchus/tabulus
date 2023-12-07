import { Global, ThemeProvider } from '@emotion/react';
import { createStore, StateMachineProvider } from 'little-state-machine';
import { DevTool as SMDevTool } from 'little-state-machine-devtools';

import { defaultState } from '@devtools/config';
import { STATE_KEY } from '@devtools/constants';
import { theme } from '@devtools/theme';

import { DevToolUI } from '../DevToolUI';

import type { DevToolProps } from './types';
import type { DevToolState } from '@devtools/types';
import type { FC } from 'react';

const testMiddleware = (state: DevToolState): DevToolState => {
  console.log('IN MIDDLEWARE', state);
  return state;
};

if (typeof window !== 'undefined') {
  createStore(defaultState, {
    middleWares: [testMiddleware],
    name: STATE_KEY,
    storageType: window.localStorage,
  });
}

const DevTool: FC<DevToolProps> = ({
  closedPosition,
  maximisedPosition,
  minimisedPosition, // showInProduction = false,
}: DevToolProps) => {
  //== DevTool return =================
  // TODO: Return null if production and !showInProduction
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={globalTheme => ({
          body: { fontFamily: (globalTheme as typeof theme).fontFamily.body },
        })}
      />
      <StateMachineProvider>
        <SMDevTool />
        <DevToolUI
          closedPosition={closedPosition}
          maximisedPosition={maximisedPosition}
          minimisedPosition={minimisedPosition}
        />
      </StateMachineProvider>
    </ThemeProvider>
  );
};

export { DevTool };
export type { DevToolProps } from './types';
