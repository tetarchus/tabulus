import { createContext } from 'react';

import type { TabulusContextProviderProps, TabulusContextValue } from './types';
import type { FC } from 'react';

const initialValue: TabulusContextValue = {
  columns: [],
  data: [],
  id: '',
};

const TabulusContext = createContext<TabulusContextValue>(initialValue);
TabulusContext.displayName = 'TabulusContext';

const TabulusContextProvider: FC<TabulusContextProviderProps> = ({
  children,
}: TabulusContextProviderProps) => {
  return <TabulusContext.Provider value={initialValue}>{children}</TabulusContext.Provider>;
};

export { TabulusContext, TabulusContextProvider };
export type { TabulusContextProviderProps, TabulusContextValue } from './types';
