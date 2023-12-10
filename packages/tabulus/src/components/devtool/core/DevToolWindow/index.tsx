import { arrayIncludes } from '@tetarchus/utils';
import { useCallback, useEffect, useRef, useState } from 'react';

import { POSITIONS_HOZ_ARR, POSITIONS_VERT_ARR } from '@tabulus/constants/devtool';
import {
  calculateWindowSize,
  createWindowAnimation,
  determineActiveResizeEdges,
} from '@tabulus/utils/devtool';

import { SettingsPage, TableListPage, TableMainPage } from '../../pages';
import { PageContainer, PageSelectBar, TitleBar } from '../../ui';

import {
  Content,
  DevToolContainer,
  HorizontalResizePositioner,
  ResizeHandleHorizontal,
  ResizeHandleVertical,
  WindowContent,
} from './styled';

import type { DevToolWindowProps } from './types';
import type { WindowSize } from '@tabulus/types/devtool';
import type { FC, MouseEvent as ReactMouseEvent } from 'react';

/** The DevTool window containing the actual information. Can be in minimised/maximised state. */
const DevToolWindow: FC<DevToolWindowProps> = ({ actions, state, tables }: DevToolWindowProps) => {
  //== Props ==========================
  const {
    mode,
    page,
    settings,
    settings: { maximisedPosition, minimisedPosition },
  } = state;
  //== Refs ===========================
  const rootRef = useRef<HTMLDivElement>(null);
  const mouseDownPosition = useRef({ x: 0, y: 0 });
  const startWindowSize = useRef(calculateWindowSize(mode, settings));
  const previousState = useRef(state);

  //== State ==========================
  const [position, setPosition] = useState(mode === 'max' ? maximisedPosition : minimisedPosition);
  const [resizeEdges, setResizeEdges] = useState(determineActiveResizeEdges(mode, position));
  const [currentWindowSize, setCurrentWindowSize] = useState(calculateWindowSize(mode, settings));
  const [mouseDown, setMouseDown] = useState<'bottom' | 'left' | 'right' | 'top' | false>(false);
  const [animateProps, setAnimateProps] = useState(
    createWindowAnimation(mode, previousState.current, settings),
  );

  //== Side Effects ===================
  useEffect(() => setCurrentWindowSize(calculateWindowSize(mode, settings)), [mode, settings]);
  useEffect(() => setResizeEdges(determineActiveResizeEdges(mode, position)), [mode, position]);

  useEffect(
    () => setPosition(mode === 'max' ? maximisedPosition : minimisedPosition),
    [maximisedPosition, minimisedPosition, mode],
  );

  useEffect(() => {
    setAnimateProps(createWindowAnimation(mode, previousState.current, settings));
    previousState.current = state;
  }, [maximisedPosition, minimisedPosition, mode, settings, state]);

  //== Functions ======================
  const setWindowSize = useCallback(
    (newSize: WindowSize) => {
      if (mode === 'min') {
        actions.setPanelHeight(newSize.y);
        actions.setPanelWidth(newSize.x);
      } else {
        if (mouseDown && arrayIncludes(POSITIONS_VERT_ARR, mouseDown)) {
          actions.setPanelSize(newSize.y);
        } else if (mouseDown) {
          actions.setPanelSize(newSize.x);
        } else {
          // No need to set if the mouse is not currently down.
        }
      }
    },
    [actions, mode, mouseDown],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!mouseDown) return;
      const newSizeX = arrayIncludes(POSITIONS_HOZ_ARR, mouseDown)
        ? startWindowSize.current.x + (e.clientX - mouseDownPosition.current.x)
        : startWindowSize.current.x;
      const newSizeY = arrayIncludes(POSITIONS_VERT_ARR, mouseDown)
        ? startWindowSize.current.y + (e.clientY - mouseDownPosition.current.y)
        : startWindowSize.current.y;
      const newWindowSize = { x: newSizeX, y: newSizeY };

      setWindowSize(newWindowSize);
      setCurrentWindowSize(newWindowSize);
    },
    [mouseDown, setWindowSize],
  );

  const handleMouseUp = useCallback(() => {
    if (!mouseDown) return;
    rootRef && rootRef.current && (rootRef.current.style.userSelect = 'auto');
    setMouseDown(false);
    startWindowSize.current = calculateWindowSize(mode, settings);
  }, [mode, mouseDown, settings]);

  const handleMouseDownOnHandle = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>, edge: 'bottom' | 'left' | 'right' | 'top') => {
      if (!resizeEdges[edge]) return;

      rootRef && rootRef.current && (rootRef.current.style.userSelect = 'none');
      setMouseDown(edge);
      const mousePosition = { x: e.clientX, y: e.clientY };
      mouseDownPosition.current = mousePosition;
    },
    [resizeEdges],
  );

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, handleMouseUp]);

  //== Component Return ===============
  return (
    <DevToolContainer
      {...animateProps}
      position={mode === 'max' ? maximisedPosition : minimisedPosition}
      mode={mode}
      ref={rootRef}
      windowSize={currentWindowSize}
    >
      <WindowContent>
        <ResizeHandleVertical
          $active={resizeEdges.top}
          $edge='top'
          onMouseDown={e => handleMouseDownOnHandle(e, 'top')}
        />
        <HorizontalResizePositioner>
          <ResizeHandleHorizontal
            $active={resizeEdges.left}
            $edge='left'
            onMouseDown={e => handleMouseDownOnHandle(e, 'left')}
          />
          <Content>
            <TitleBar actions={actions} state={state} />
            <PageSelectBar actions={actions} state={state} />
            <PageContainer>
              {page === 'main' && <TableListPage actions={actions} state={state} tables={tables} />}
              {page === 'settings' && <SettingsPage actions={actions} state={state} />}
              {page === 'table' && (
                <TableMainPage actions={actions} state={state} tables={tables} />
              )}
            </PageContainer>
          </Content>
          <ResizeHandleHorizontal
            $active={resizeEdges.right}
            $edge='right'
            onMouseDown={e => handleMouseDownOnHandle(e, 'right')}
          />
        </HorizontalResizePositioner>
        <ResizeHandleVertical
          $active={resizeEdges.bottom}
          $edge='bottom'
          onMouseDown={e => handleMouseDownOnHandle(e, 'bottom')}
        />
      </WindowContent>
    </DevToolContainer>
  );
};

export { DevToolWindow };
export type { DevToolWindowProps } from './types';
