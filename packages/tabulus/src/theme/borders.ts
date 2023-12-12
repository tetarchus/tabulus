import { BORDER_EDGES } from '@tabulus/constants';

import type { BorderComponentsPlus, BorderMap } from '@tabulus/types';

/**
 * Map of component values to use when determining which borders to display based on settings.
 */
const BORDER_MAP: Record<BorderComponentsPlus, BorderMap> = {
  cell: {
    applyBorderSpacing: 'none',
    collapseEdges: ['right'],
    collapseSkip: 'last',
    externalEdges: [],
    fallbacks: ['column'],
    internalEdges: [...BORDER_EDGES],
    main: 'cell',
    separateEdges: [...BORDER_EDGES],
  },
  column: {
    applyBorderSpacing: 'horizontal',
    collapseEdges: [],
    collapseSkip: 'last',
    externalEdges: [],
    fallbacks: [],
    internalEdges: [],
    main: 'column',
    separateEdges: [],
  },
  header: {
    applyBorderSpacing: 'horizontal',
    collapseEdges: ['bottom'],
    collapseSkip: 'last',
    externalEdges: ['left', 'right', 'top'],
    fallbacks: [],
    internalEdges: ['bottom'],
    main: 'header',
    separateEdges: [...BORDER_EDGES],
  },
  headerCell: {
    applyBorderSpacing: 'none',
    collapseEdges: ['right'],
    collapseSkip: 'last',
    externalEdges: [...BORDER_EDGES],
    fallbacks: ['cell', 'column'],
    internalEdges: [...BORDER_EDGES],
    main: 'headerCell',
    separateEdges: [...BORDER_EDGES],
  },
  row: {
    applyBorderSpacing: 'none',
    collapseEdges: ['bottom'],
    collapseSkip: 'last',
    externalEdges: ['left', 'right'],
    fallbacks: [],
    internalEdges: ['bottom', 'top'],
    main: 'row',
    separateEdges: [...BORDER_EDGES],
  },
  rows: {
    applyBorderSpacing: 'vertical',
    collapseEdges: [],
    collapseSkip: 'last',
    externalEdges: [],
    fallbacks: [],
    internalEdges: [],
    main: 'row',
    separateEdges: [],
  },
  table: {
    applyBorderSpacing: 'none',
    collapseEdges: [...BORDER_EDGES],
    collapseSkip: 'none',
    externalEdges: [...BORDER_EDGES],
    fallbacks: [],
    internalEdges: [],
    main: 'table',
    separateEdges: [...BORDER_EDGES],
  },
};

export { BORDER_MAP };
