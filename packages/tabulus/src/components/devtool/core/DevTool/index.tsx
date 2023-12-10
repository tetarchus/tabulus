import { StateMachineProvider } from 'little-state-machine';
import { useEffect, useState } from 'react';

import { useDevTool } from '@tabulus/hooks/useDevTool';
import { theme } from '@tabulus/theme/devtool';
import { createGlobalStyle, ThemeProvider } from '@tabulus/utils';
import { initState } from '@tabulus/utils/devtool';

import { DevToolUI } from '../DevToolUI';

import type { DevToolProps } from './types';
import type { DevToolTheme } from '@tabulus/theme/devtool';
import type { Theme } from '@tabulus/types';
import type { FC } from 'react';

/** Create the initial state if it doesn't exist already. */
initState();

const Global = createGlobalStyle<{ theme: DevToolTheme }>(context => ({
  body: { fontFamily: context.theme.fontFamily.body },
}));

/**
 * The main DevTool component. Sets up the state management context and theme.
 */
const DevTool: FC<DevToolProps> = ({
  closedPosition,
  maximisedPosition,
  minimisedPosition,
  showInProduction = false,
  table,
}: DevToolProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const { isDevToolEnabled } = useDevTool({ showInProduction, table });

  useEffect(() => setHasMounted(true), []);

  //== DevTool return =================
  return hasMounted && isDevToolEnabled ? (
    <ThemeProvider theme={theme as unknown as Theme}>
      <Global theme={theme as unknown as Theme & DevToolTheme} />
      <StateMachineProvider>
        <DevToolUI
          closedPosition={closedPosition}
          maximisedPosition={maximisedPosition}
          minimisedPosition={minimisedPosition}
          table={table}
        />
      </StateMachineProvider>
    </ThemeProvider>
  ) : null;
};

export { DevTool };
export type { DevToolProps } from './types';
