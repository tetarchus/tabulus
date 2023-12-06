import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';

import * as Stories from './Cell.stories';

const { HeaderCell, TableCell } = composeStories(Stories);

describe('Cell Component Tests', () => {
  describe('Accessibility Tests', () => {
    it('should pass accessibility checks - HeaderCell', async () => {
      expect.assertions(1);
      const { container } = render(<HeaderCell />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    });

    it('should pass accessibility checks - TableCell', async () => {
      expect.assertions(1);
      const { container } = render(<TableCell />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    });
  });

  describe.todo('Component Tests', () => {});
});
