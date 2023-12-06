import { FaToolbox } from 'react-icons/fa6';

import type { DevToolIconProps } from './types';
import type { FC } from 'react';

const DevToolIcon: FC<DevToolIconProps> = ({ position }: DevToolIconProps) => {
  return (
    <div>
      <FaToolbox />
    </div>
  );
};

export { DevToolIcon };
export type { DevToolIconProps } from './types';
