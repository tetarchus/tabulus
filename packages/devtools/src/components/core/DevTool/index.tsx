import { Global, ThemeProvider } from '@emotion/react';
import { StateMachineProvider } from 'little-state-machine';
import { DevTool as SMDevTool } from 'little-state-machine-devtools';

import { theme } from '@devtools/theme';
import { initState } from '@devtools/utils';

import { DevToolUI } from '../DevToolUI';

import type { DevToolProps } from './types';
import type { FC } from 'react';

/** Create the initial state if it doesn't exist already. */
initState();

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
