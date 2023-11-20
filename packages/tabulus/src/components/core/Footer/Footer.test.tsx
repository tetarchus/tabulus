import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';

import * as FooterStories from './Footer.stories';

const { Default } = composeStories(FooterStories);

describe('Footer Component Tests', () => {
  describe('Accessibility Tests', () => {
    it('should pass accessibility checks - Default', async () => {
      expect.assertions(1);
      const { container } = render(<Default />);
      const AxeResults = await axe(container);
      expect(AxeResults).toHaveNoViolations();
    });
  });

  describe.todo('Component Tests', () => {});
});
