import { useCallback } from 'react';

import { AlignmentIcon } from '../../UI';

import { AlignmentIconOptions, SettingsWrapper } from './styled';

import type { SettingsPageProps } from './types';
import type { MaximisedPosition, MinimisedPosition } from '@devtools/types';
import type { FC } from 'react';

const MINIMISED_POSITIONS = ['bottom-left', 'bottom-right', 'top-left', 'top-right'] as const;
const MAXIMISED_POSITIONS = ['bottom', 'left', 'right', 'top'] as const;

const SettingsPage: FC<SettingsPageProps> = ({ actions, state }: SettingsPageProps) => {
  const handleClosedPositionClick = useCallback(
    (position: MinimisedPosition) => actions.setClosedPosition(position),
    [actions],
  );
  const handleMaximisedPositionClick = useCallback(
    (position: MaximisedPosition) => actions.setMaximisedPosition(position),
    [actions],
  );
  const handleMinimisedPositionClick = useCallback(
    (position: MinimisedPosition) => actions.setMinimisedPosition(position),
    [actions],
  );

  return (
    <SettingsWrapper>
      <div>Closed Position</div>
      <div>The position of the DevTool icon when closed</div>
      <AlignmentIconOptions>
        {MINIMISED_POSITIONS.map(position => (
          <AlignmentIcon
            alignment={position}
            key={position}
            onClick={handleClosedPositionClick}
            selected={state.settings.closedPosition === position}
          />
        ))}
      </AlignmentIconOptions>
      <div>Maximised Position</div>
      <div>The position of the DevTool when in maximised state</div>
      <AlignmentIconOptions>
        {MAXIMISED_POSITIONS.map(position => (
          <AlignmentIcon
            alignment={position}
            key={position}
            onClick={handleMaximisedPositionClick}
            selected={state.settings.maximisedPosition === position}
          />
        ))}
      </AlignmentIconOptions>
      <div>Minimised Position</div>
      <div>The position of the DEvTool when in minimised state</div>
      <AlignmentIconOptions>
        {MINIMISED_POSITIONS.map(position => (
          <AlignmentIcon
            alignment={position}
            key={position}
            onClick={handleMinimisedPositionClick}
            selected={state.settings.minimisedPosition === position}
          />
        ))}
      </AlignmentIconOptions>
      <div>Show Internal Events</div>
      <div>Whether to include internal Tabulus events in the event log output</div>
      <input name='showInternal' type='checkbox' />
    </SettingsWrapper>
  );
};

export { SettingsPage };
export type { SettingsPageProps } from './types';
