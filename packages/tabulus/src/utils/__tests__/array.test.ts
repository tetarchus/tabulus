import { describe, expect, it } from 'vitest';

import { arrayIncludes } from '../array';

describe('Array Util Tests', () => {
  describe('Tests for `arrayIncludes`', () => {
    it.todo('should return `true` when the value is included in the array', () => {
      expect.assertions(1);
      const result = arrayIncludes(['test', 'values'], 'test');
      expect(result).toBeTruthy();
    });

    it.todo('should return `false` when the value is not included in the array', () => {
      expect.assertions(1);
      const result = arrayIncludes(['test', 'values'], 'new');
      expect(result).toBeFalsy();
    });
  });
});
