const FALLBACKS = {
  CSS: {
    BORDER: {
      borderColor: 'currentColor',
      borderStyle: 'solid',
      borderWidth: '1px',
      sides: 'all',
    },
  },
} as const;

export { FALLBACKS };
