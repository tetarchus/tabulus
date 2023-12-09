import { useCallback } from 'react';

import { POSITIONS_MAX_ARR, POSITIONS_MIN_ARR } from '@devtools/constants';
import { resetState } from '@devtools/utils';

import { AlignmentIcon, Button, Subtitle, Title } from '../../UI';

import { AlignmentIconOptions, Setting, SettingsWrapper } from './styled';

import type { SettingsPageProps } from './types';
import type { MaximisedPosition, MinimisedPosition } from '@devtools/types';
import type { FC } from 'react';

/** Page for managing the user settings for the DevTool. */
const SettingsPage: FC<SettingsPageProps> = ({ actions, state }: SettingsPageProps) => {
  //== Functions ======================
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

  //== Component Return ===============
  return (
    <SettingsWrapper>
      <Setting>
        <Title>Closed Position</Title>
        <Subtitle>The position of the DevTool icon when closed</Subtitle>
        <AlignmentIconOptions>
          {POSITIONS_MIN_ARR.map(position => (
            <AlignmentIcon
              alignment={position}
              key={position}
              onClick={handleClosedPositionClick}
              selected={state.settings.closedPosition === position}
            />
          ))}
        </AlignmentIconOptions>
      </Setting>
      <Setting>
        <Title>Maximised Position</Title>
        <Subtitle>The position of the DevTool when in maximised state</Subtitle>
        <AlignmentIconOptions>
          {POSITIONS_MAX_ARR.map(position => (
            <AlignmentIcon
              alignment={position}
              key={position}
              onClick={handleMaximisedPositionClick}
              selected={state.settings.maximisedPosition === position}
            />
          ))}
        </AlignmentIconOptions>
      </Setting>
      <Setting>
        <Title>Minimised Position</Title>
        <Subtitle>The position of the DEvTool when in minimised state</Subtitle>
        <AlignmentIconOptions>
          {POSITIONS_MIN_ARR.map(position => (
            <AlignmentIcon
              alignment={position}
              key={position}
              onClick={handleMinimisedPositionClick}
              selected={state.settings.minimisedPosition === position}
            />
          ))}
        </AlignmentIconOptions>
      </Setting>
      <Setting>
        <Title>Show Internal Events</Title>
        <Subtitle>Whether to include internal Tabulus events in the event log output</Subtitle>
        <input name='showInternal' type='checkbox' />
      </Setting>
      <Setting>
        <Button
          onClick={() => {
            resetState();
            actions.setIsClosed(true);
          }}
          type='button'
        >
          Reset
        </Button>
      </Setting>
    </SettingsWrapper>
  );
};

export { SettingsPage };
export type { SettingsPageProps } from './types';
