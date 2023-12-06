import type { DevToolUIProps } from '../DevToolUI';

interface DevToolBaseProps extends DevToolUIProps {}

interface DevToolManualProps {}

interface DevToolAutoProps {}

type DevToolProps = DevToolBaseProps & (DevToolAutoProps | DevToolManualProps);

export type { DevToolProps };
