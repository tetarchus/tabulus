import { StateMachineProvider } from 'little-state-machine';
// import { DevTool as SMDevTool } from 'little-state-machine-devtools';

import { theme } from '@devtools/theme';
import { createGlobalStyle, initState, ThemeProvider } from '@devtools/utils';

import { DevToolUI } from '../DevToolUI';

import type { DevToolProps } from './types';
import type { FC } from 'react';

/** Create the initial state if it doesn't exist already. */
initState();

const Global = createGlobalStyle(context => ({
  body: { fontFamily: context.theme.fontFamily.body },
}));

/**
 * The main DevTool component. Sets up the state management context and theme.
 */
const DevTool: FC<DevToolProps> = ({
  closedPosition,
  maximisedPosition,
  minimisedPosition, // showInProduction = false,
}: DevToolProps) => {
  //== DevTool return =================
  // TODO: Return null if production and !showInProduction
  return typeof window === 'undefined' ? null : (
    <ThemeProvider theme={theme}>
      <Global />
      <StateMachineProvider>
        {/* <SMDevTool /> */}
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
