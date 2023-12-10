import { useContext, useEffect, useState } from 'react';

import { IS } from '@tabulus/constants';
import { TabulusRegistryContext } from '@tabulus/contexts';

import type { TableRegister } from '@tabulus/contexts';

interface UseDevToolProps {
  showInProduction?: boolean;
}

interface UseDevToolReturn {
  isDevToolEnabled: boolean;
  tables: TableRegister;
}

/**
 * Hook to deal with the values and methods for the devtool.
 * @param props Props passed in to allow the dev tool to work.
 * @returns Settings and values for the DevTool.
 */
const useDevTool = (props?: UseDevToolProps): UseDevToolReturn => {
  const { showInProduction = false } = props ?? {};
  const [isDevToolEnabled, setIsDevToolEnabled] = useState(false);
  const { tables } = useContext(TabulusRegistryContext);

  useEffect(() => {
    if ((!IS.PROD || showInProduction) && Object.keys(tables).length > 0) {
      setIsDevToolEnabled(true);
    } else {
      setIsDevToolEnabled(false);
    }
  }, [showInProduction, tables]);

  return { isDevToolEnabled, tables };
};

export { useDevTool };
