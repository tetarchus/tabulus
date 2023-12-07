import { useEffect, useState } from 'react';

import { createMaximisedAnimation } from '@devtools/utils';

import { SettingsPage } from '../../pages';
import { PageContainer, PageSelectBar, TitleBar } from '../../UI';

import { DevToolContainer } from './styled';

import type { DevToolWindowProps } from './types';
import type { FC } from 'react';

const DevToolWindow: FC<DevToolWindowProps> = ({ actions, state, size }: DevToolWindowProps) => {
  const {
    page,
    settings: { maximisedPosition, minimisedPosition },
  } = state;

  const [animateProps, setAnimateProps] = useState(createMaximisedAnimation(maximisedPosition));

  useEffect(
    () => setAnimateProps(createMaximisedAnimation(maximisedPosition)),
    [maximisedPosition],
  );

  return (
    <DevToolContainer
      {...animateProps}
      position={size === 'max' ? maximisedPosition : minimisedPosition}
      size={size}
    >
      <TitleBar actions={actions} state={state} />
      <PageSelectBar actions={actions} state={state} />
      <PageContainer>
        {page === 'settings' && <SettingsPage actions={actions} state={state} />}
      </PageContainer>
    </DevToolContainer>
  );
};

export { DevToolWindow };
export type { DevToolWindowProps } from './types';
