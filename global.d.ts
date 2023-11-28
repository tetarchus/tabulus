import 'vitest';

import type { AxeMatchers } from 'vitest-axe/matchers';

declare module 'eslint-plugin-*' {
  import type { TSESLint } from '@typescript-eslint/utils';

  const defaultExport: TSESLint.Linter.Plugin;
  export default defaultExport;
}

declare module '@eslint/js' {
  import type { TSESLint } from '@typescript-eslint/utils';

  const defaultExport: TSESLint.Linter.Plugin;
  export default defaultExport;
}

declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
