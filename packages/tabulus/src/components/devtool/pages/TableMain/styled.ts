import { styled } from '@tabulus/utils';

import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** A line of table details including a label and value. */
const TableDetails = styled.div<BaseStyledProps>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }): CSSProperties['padding'] => theme.padding.lg};
`;

/** The label for an piece of table information in the DevTool. */
const Label = styled.span`
  font-weight: bold;
`;

/** The value in the DevTool. */
const Value = styled.span``;

/** Wrapper for the raw data displayed as code. */
const RawValue = styled.code`
  white-space: pre;
`;

export { Label, RawValue, TableDetails, Value };
