import { describe, expect, it } from 'vitest';

import { getHorizontalAlignProperty, getVerticalAlignProperty } from '../cell';

describe('Cell Util Tests', () => {
  describe('Tests for `getHorizontalAlignProperty`', () => {
    it('should return `horizontalAlign` when `type` is `cell`', () => {
      expect.assertions(1);
      const result = getHorizontalAlignProperty('cell');
      expect(result).toBe('horizontalAlign');
    });

    it('should return `headerHorizontalAlign` when `type` is `header`', () => {
      expect.assertions(1);
      const result = getHorizontalAlignProperty('header');
      expect(result).toBe('headerHorizontalAlign');
    });
  });

  describe('Tests for `getVerticalAlignProperty`', () => {
    it('should return `verticalAlign` when `type` is `cell`', () => {
      expect.assertions(1);
      const result = getVerticalAlignProperty('cell');
      expect(result).toBe('verticalAlign');
    });

    it('should return `headerVerticalAlign` when `type` is `header`', () => {
      expect.assertions(1);
      const result = getVerticalAlignProperty('header');
      expect(result).toBe('headerVerticalAlign');
    });
  });
});
