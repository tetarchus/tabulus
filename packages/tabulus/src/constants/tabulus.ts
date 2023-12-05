/** The name of the library as a constant in case it ever changes. */
const LIBRARY_NAME = 'Tabulus' as const;

/** The prefix to add to classnames. */
const PREFIX = LIBRARY_NAME.toLowerCase() as Lowercase<typeof LIBRARY_NAME>;

export { LIBRARY_NAME, PREFIX };
