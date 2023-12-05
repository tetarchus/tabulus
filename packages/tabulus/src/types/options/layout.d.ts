import type { HorizontalAlign } from '../base';

/** Table options relating to the layout of the table. */
interface TableLayoutOptions {
  /**
   * How to align the table within its parent.
   * @default 'center'
   */
  horizontalAlign: HorizontalAlign;
}

export type { TableLayoutOptions };
