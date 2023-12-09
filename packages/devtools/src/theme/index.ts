/** The standard theme for the DevTool. */
const theme = {
  colors: {
    black: '#000000',
    border: '#5A5A5B',
    dark: '#2A2A2B',
    light: '#FFFFFF',
    highlight: '#CCCCCC',
    teal: '#00C7AC',
    title: '#1A1A1B',
    white: '#FFFFFF',
  },
  fontFamily: {
    body: "'Open Sans', sans-serif",
    title: "'Smooch Sans', sans-serif",
  },
} as const;

type Theme = typeof theme;

export { theme };
export type { Theme };
