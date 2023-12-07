import type { DevToolUIProps } from '../DevToolUI';

interface DevToolBaseProps extends DevToolUIProps {
  showInProduction?: boolean;
}

interface DevToolManualProps {}

interface DevToolAutoProps {}

type DevToolProps = DevToolBaseProps & (DevToolAutoProps | DevToolManualProps);

export type { DevToolProps };
