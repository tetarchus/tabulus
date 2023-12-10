import { useContext, useEffect, useState } from 'react';

import { IS } from '@tabulus/constants';
import { TabulusRegistryContext } from '@tabulus/contexts';

import type { UseDevToolProps, UseDevToolReturn } from '@tabulus/types/devtool';

/**
 * Hook to deal with the values and methods for the devtool.
 * @param props Props passed in to allow the dev tool to work.
 * @returns Settings and values for the DevTool.
 */
const useDevTool = (props?: UseDevToolProps): UseDevToolReturn => {
  const { showInProduction = false, table } = props ?? {};
  const [isDevToolEnabled, setIsDevToolEnabled] = useState(false);
  const { initialized, tables } = useContext(TabulusRegistryContext);
  const [manualTableRegister, setManualTableRegister] = useState(
    table ? { [table.tableId]: { current: { ...table, source: 'manual' } } } : {},
  );
  const [registry, setRegistry] = useState(initialized ? tables : manualTableRegister);

  useEffect(
    () =>
      setManualTableRegister(
        table ? { [table.tableId]: { current: { ...table, source: 'manual' } } } : {},
      ),
    [table],
  );

  useEffect(
    () => setRegistry(initialized ? tables : manualTableRegister),
    [initialized, manualTableRegister, tables],
  );

  useEffect(() => {
    if ((!IS.PROD || showInProduction) && Object.keys(registry).length > 0) {
      setIsDevToolEnabled(true);
    } else {
      setIsDevToolEnabled(false);
    }
  }, [showInProduction, registry]);

  return { isDevToolEnabled, tables: registry };
};

export { useDevTool };
