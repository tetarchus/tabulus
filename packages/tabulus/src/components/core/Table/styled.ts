import { setBorderCss, styled } from '@tabulus/utils';

import type { TableWrapperProps } from './types';

/**
 * The container for the whole table. Equivalent to a `<table>` in standard HTML tags.
 * @private
 */
const TableWrapper = styled.div<TableWrapperProps>(({ horizontalAlign, theme }) => {
  const { colors } = theme;
  const borderDefinition = setBorderCss(theme, 'table');

  //== CSS Return Value ===============
  return {
    //== Static Properties ==============
    width: '50%', // TODO: This should be controlled by the options

    //== Theme Properties ===============
    backgroundColor: colors.backgroundColor,
    color: colors.textColor,
    ...borderDefinition,

    //== Dynamic Properties =============
    marginLeft: horizontalAlign === 'left' ? 0 : 'auto',
    marginRight: horizontalAlign === 'right' ? 0 : 'auto',
  };
});

/** Full width container for the table to allow positioning. */
const TablePositioner = styled.div`
  position: relative;
  border: none;
  overflow: hidden;

  width: 100%;

  //== Theme Properties ===============
  /* font-size
  */

  //== Layout Properties ==============
  /* ? Layout === 'fitDataTable' => display: inline-block */
`;

export { TablePositioner, TableWrapper };
