import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';

import * as Stories from './Row.stories';

const { HeaderRow, TableRow } = composeStories(Stories);

describe('Row Component Tests', () => {
  describe('Accessibility Tests', () => {
    it('should pass accessibility checks - HeaderRow', async () => {
      expect.assertions(1);
      const { container } = render(<HeaderRow />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    });

    it('should pass accessibility checks - TableRow', async () => {
      expect.assertions(1);
      const { container } = render(<TableRow />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    });
  });

  describe.todo('Component Tests', () => {});
});
