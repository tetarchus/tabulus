import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, expect } from 'vitest';
import * as axeMatchers from 'vitest-axe/matchers';

HTMLCanvasElement.prototype.getContext = (): null => null;

beforeAll(() => {
  expect.extend(axeMatchers);
});

afterEach(() => {
  cleanup();
});
