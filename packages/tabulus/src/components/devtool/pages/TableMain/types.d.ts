import type { BaseProps, DevToolRegister } from '@tabulus/types/devtool';

/** Props for the TableMainPage. */
interface TableMainPageProps extends BaseProps {
  /** Table Registry object. */
  tables: DevToolRegister;
}

export type { TableMainPageProps };
