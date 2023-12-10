/** The standard theme for the DevTool. */
const theme = {
  borderRadius: {
    sm: '0.1rem',
  },
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
  fontSize: {
    sm: '0.8rem',
    base: '1rem',
    lg: '1.2rem',
  },
  padding: {
    xs: '0.12rem',
    sm: '0.2rem',
    lg: '0.5rem',
    xl: '0.7rem',
  },
  zIndex: {
    button: 99_999_998,
    window: 99_999_999,
  },
} as const;

type DevToolTheme = typeof theme;

export { theme };
export type { DevToolTheme };
