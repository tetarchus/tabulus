import { objectEntries } from '@tetarchus/utils/core';
import { AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

import { IconButton, TitleBarContainer } from '../styled';

import { PageSelect, PageSelectMenu, PageSelectMenuItem } from './styled';

import type { PageSelectBarProps } from './types';
import type { DevToolPage } from '@devtools/types';
import type { FC } from 'react';

const pages: Record<DevToolPage, string> = {
  settings: 'DevTool Settings',
  main: 'Table List',
  table: 'Table Home',
};

const PageSelectBar: FC<PageSelectBarProps> = ({ actions, state }: PageSelectBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSettingsClick = useCallback(() => actions.setPage('settings'), [actions]);
  const handlePageSelect = useCallback(
    (page: typeof state.page) => actions.setPage(page),
    [actions, state],
  );

  return (
    <TitleBarContainer>
      <PageSelect onClick={() => setMenuOpen(currentState => !currentState)}>
        {pages[state.page]}
        <FaCaretDown size={20} />
      </PageSelect>
      <AnimatePresence>
        {menuOpen && (
          <PageSelectMenu>
            {objectEntries(pages).map(([pageId, pageName]) => (
              <PageSelectMenuItem key={pageId} onClick={() => handlePageSelect(pageId)}>
                {pageName}
              </PageSelectMenuItem>
            ))}
          </PageSelectMenu>
        )}
      </AnimatePresence>
      <IconButton onClick={handleSettingsClick}>
        <IoMdSettings size={20} />
      </IconButton>
    </TitleBarContainer>
  );
};

export { PageSelectBar };
export type { PageSelectBarProps } from './types';
