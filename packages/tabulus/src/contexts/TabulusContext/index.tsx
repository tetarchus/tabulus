import { createContext } from 'react';

import type { TabulusContextProviderProps } from './types';
import type { FC } from 'react';

const initialValue = {};

const TabulusContext = createContext(initialValue);
TabulusContext.displayName = 'TabulusContext';

const TabulusContextProvider: FC<TabulusContextProviderProps> = ({
  children,
}: TabulusContextProviderProps) => {
  return <TabulusContext.Provider value={initialValue}>{children}</TabulusContext.Provider>;
};

export { TabulusContext, TabulusContextProvider };
export type { TabulusContextProviderProps } from './types';
