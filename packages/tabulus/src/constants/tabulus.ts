const LIBRARY_NAME = 'Tabulus' as const;

const PREFIX = LIBRARY_NAME.toLowerCase() as Lowercase<typeof LIBRARY_NAME>;

export { LIBRARY_NAME, PREFIX };
