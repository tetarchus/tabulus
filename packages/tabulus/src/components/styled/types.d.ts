import type { AriaRole, ReactNode } from 'react';

/** Props used by all stylistic components. */
interface BaseStyledProps {
  /** The contents of the component. */
  children: ReactNode;
  /** Additional classes to pass to the component. */
  className?: string;
  /** The aria role for the component. */
  role?: AriaRole | undefined;
}

export type { BaseStyledProps };
