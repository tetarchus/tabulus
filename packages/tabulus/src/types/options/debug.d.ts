/** Options relating to debugging during development with Tabulus. */
interface DebuggingOptions {
  /**
   * Whether to display warnings when default options are passed.
   * @default true (development) / false (production)
   */
  debugInvalidOptions: boolean;
}

export type { DebuggingOptions };
