import { useContext } from 'react';

import { TabulusRegistryContext } from '@tabulus/contexts';

import type { UseTabulusRegistryReturn } from '@tabulus/types';

/**
 * Hook for accessing the data in the TabulusRegistry context.
 * @returns The public methods made available by the TabulusRegistry.
 */
const useTabulusRegistry = (): UseTabulusRegistryReturn => {
  const { tables, ...contextValue } = useContext(TabulusRegistryContext);

  return contextValue;
};

export { useTabulusRegistry };
