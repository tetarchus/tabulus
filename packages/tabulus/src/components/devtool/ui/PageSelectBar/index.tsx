import { objectEntries } from '@tetarchus/utils/core';
import { AnimatePresence } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

import { PAGES } from '@tabulus/constants/devtool';
import { useOnClickOutside } from '@tabulus/hooks';

import { IconButton, TitleBarContainer } from '../styled';

import { PageSelect, PageSelectMenu, PageSelectMenuItem, SelectWrapper } from './styled';

import type { PageSelectBarProps } from './types';
import type { FC } from 'react';

/** Main window section for selecting the current page. */
const PageSelectBar: FC<PageSelectBarProps> = ({ actions, state }: PageSelectBarProps) => {
  //== Refs ===========================
  const ref = useRef<HTMLDivElement>(null);
  //== State ==========================
  const [menuOpen, setMenuOpen] = useState(false);

  //== Functions ======================
  const handleSettingsClick = useCallback(() => actions.setPage('settings'), [actions]);

  const handlePageSelect = useCallback(
    (page: typeof state.page) => {
      actions.setPage(page);
      setMenuOpen(false);
    },
    [actions, state],
  );

  const handleClickOutside = useCallback(() => setMenuOpen(false), []);

  useOnClickOutside(ref, true, handleClickOutside);

  //== Component Return ===============
  return (
    <TitleBarContainer>
      <SelectWrapper ref={ref}>
        <PageSelect onClick={() => setMenuOpen(currentState => !currentState)}>
          {PAGES[state.page]}
          <FaCaretDown size={20} />
        </PageSelect>
        <AnimatePresence>
          {menuOpen && (
            <PageSelectMenu>
              {objectEntries(PAGES).map(([pageId, pageName]) => (
                <PageSelectMenuItem key={pageId} onClick={() => handlePageSelect(pageId)}>
                  {pageName}
                </PageSelectMenuItem>
              ))}
            </PageSelectMenu>
          )}
        </AnimatePresence>
      </SelectWrapper>
      <IconButton onClick={handleSettingsClick}>
        <IoMdSettings size={20} />
      </IconButton>
    </TitleBarContainer>
  );
};

export { PageSelectBar };
export type { PageSelectBarProps } from './types';
