import { useContext, useEffect, useState } from 'react';

import { TabulusRegistryContext } from '@tabulus/contexts';

import type { TableRegister } from '@tabulus/contexts';

interface UseDevToolProps {
  showInProduction?: boolean;
}

interface UseDevToolReturn {
  isDevToolEnabled: boolean;
  tables: TableRegister;
}

const isProduction = () => process.env.NODE_ENV === 'production';
const IS_PROD = isProduction();

// TODO: Sort this out properly
const useDevTool = (props?: UseDevToolProps): UseDevToolReturn => {
  const { showInProduction = false } = props ?? {};
  const [isDevToolEnabled, setIsDevToolEnabled] = useState(false);
  const { tables } = useContext(TabulusRegistryContext);

  useEffect(() => {
    if ((!IS_PROD || showInProduction) && Object.keys(tables).length > 0) {
      setIsDevToolEnabled(true);
    } else {
      setIsDevToolEnabled(false);
    }
  }, [showInProduction, tables]);

  return { isDevToolEnabled, tables };
};

export { useDevTool };
