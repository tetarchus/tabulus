import { arrayIncludes } from '@tetarchus/utils/core';
import { useContext, useEffect, useState } from 'react';

import { ROLES } from '@tabulus/constants';
import { TableManager } from '@tabulus/contexts';
import { getHorizontalAlignProperty, getVerticalAlignProperty } from '@tabulus/utils';

import { CellContainer } from './styled';

import type { CellProps } from './types';
import type { FC } from 'react';

/** A cell in a table. */
const Cell: FC<CellProps> = ({ children, className, cell }: CellProps) => {
  //== Cell Component =================
  const { column, type = 'cell', rowIndex, value } = cell;

  //== Context Values =================
  const { getColumnIndex, getColumnOption } = useContext(TableManager);

  //== State ==========================
  const [visible, setVisible] = useState(getColumnOption(column, 'visible'));
  const [horizontalAlignProperty, setHorizontalAlignProperty] = useState(
    getHorizontalAlignProperty(type),
  );
  const [verticalAlignProperty, setVerticalAlignProperty] = useState(
    getVerticalAlignProperty(type),
  );
  const [verticalAlign, setVerticalAlign] = useState(
    getColumnOption(column, verticalAlignProperty),
  );
  const [horizontalAlign, setHorizontalAlign] = useState(
    getColumnOption(column, horizontalAlignProperty),
  );

  //== Side Effects ===================
  useEffect(() => {
    setHorizontalAlignProperty(getHorizontalAlignProperty(type));
    setVerticalAlignProperty(getVerticalAlignProperty(type));
  }, [type]);

  useEffect(() => {
    setVisible(getColumnOption(column, 'visible'));
    setVerticalAlign(getColumnOption(column, verticalAlignProperty));
    setHorizontalAlign(getColumnOption(column, horizontalAlignProperty));
  }, [column, getColumnOption, horizontalAlignProperty, verticalAlignProperty]);

  //== Component Return ===============
  return (
    <CellContainer
      aria-colindex={getColumnIndex(column)}
      {...(arrayIncludes(['footer', 'header'], rowIndex) ? {} : { 'aria-rowindex': rowIndex })}
      className={className}
      horizontalAlign={horizontalAlign}
      role={type === 'header' ? ROLES.COLUMN : ROLES.CELL}
      verticalAlign={verticalAlign}
      visible={visible}
    >
      {value ?? children ?? null}
    </CellContainer>
  );
};

export { Cell };
export type { CellProps } from './types';
