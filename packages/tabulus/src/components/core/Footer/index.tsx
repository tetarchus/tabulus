import { useContext } from 'react';

import { TableManager } from '@tabulus/contexts';

import { TableFooter } from './styled';

import type { FooterProps } from './types';
import type { FC } from 'react';

/** The footer of the table, containing pagination and column calculations. */
const Footer: FC<FooterProps> = () => {
  //== Context Values =================
  const { renderFooter } = useContext(TableManager);

  // TODO: Sort render function
  //== Component Return ===============
  return <TableFooter>{renderFooter(() => null)}</TableFooter>;
};

export { Footer };
export type { FooterProps } from './types';
