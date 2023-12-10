import type { DevToolUIProps } from '../DevToolUI';

/** Props for the DevTool that can be passed regardless of other props. */
interface DevToolBaseProps extends DevToolUIProps {
  /** Whether to ignore the default behavior and display the DevTool even in production. */
  showInProduction?: boolean;
}

/** Props for the DevTool in manual mode. */
interface DevToolManualProps {}

/** Props for the DevTool in auto mode. */
interface DevToolAutoProps {}

/** Props for the DevTool component. */
type DevToolProps = DevToolBaseProps & (DevToolAutoProps | DevToolManualProps);

export type { DevToolProps };
