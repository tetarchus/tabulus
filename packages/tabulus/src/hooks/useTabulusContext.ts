import { useContext } from 'react';

import { TabulusContext } from '@tabulus/contexts';

import type { TabulusProviderReturn } from '@tabulus/contexts';
import type { SimpleRowData } from '@tabulus/types';
import type { Context } from 'react';

/**
 * Provides the methods used internally when used within a TabulusProvider.
 * @returns The props passed into the TabulusProvider.
 */
const useTabulusContext = <RowData extends SimpleRowData>() =>
  useContext<TabulusProviderReturn<RowData>>(
    TabulusContext as unknown as Context<TabulusProviderReturn<RowData>>,
  );

export { useTabulusContext };
