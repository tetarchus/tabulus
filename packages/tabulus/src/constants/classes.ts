import { PREFIX } from './tabulus';

const CLASSES = {
  BASE: PREFIX,

  BODY: {
    BASE: `${PREFIX}-body`,
  },
  COLUMN: {
    BASE: `${PREFIX}-col`,
    TITLE: `${PREFIX}-col-title`,
  },
  HEADER: {
    BASE: `${PREFIX}-head`,
    ROW: `${PREFIX}-head-row`,
  },
  ROW: {
    BASE: `${PREFIX}-row`,
    EVEN: `${PREFIX}-row-even`,
    ODD: `${PREFIX}-row-odd`,
  },
} as const;

export { CLASSES };
