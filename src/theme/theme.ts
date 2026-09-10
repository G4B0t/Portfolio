export const theme = {
  colors: { background: '#060812', backgroundElevated: '#090d1a', surface: '#0e1224', surfaceElevated: '#151a31', text: '#f4f1fa', textSecondary: '#aaa4c4', textMuted: '#77738f', textOnAccent: '#f9f7ff', border: '#242b4e', borderStrong: '#343c6a', accent: '#7c63ff', accentBright: '#9b78ff', accentSoft: '#6354c7', blueAccent: '#5368d8', focus: '#b9aaff' },
  spacing: { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.5rem', 6: '2rem', 7: '3rem', 8: '4.5rem', 9: '6.5rem' },
  typography: { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", display: "'DM Mono', Consolas, monospace", sizes: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.25rem', xl: '1.75rem', '3xl': 'clamp(3.25rem, 8vw, 6.75rem)' } },
  breakpoints: { tablet: '48rem', laptop: '80rem', desktop: '90rem' }, radii: { sm: '0.375rem', md: '0.75rem', lg: '1.25rem', pill: '999px' }, shadows: { card: '0 18px 48px rgba(0, 0, 0, 0.24)', glowSubtle: '0 0 32px rgba(124, 99, 255, 0.16)', glowAccent: '0 12px 36px rgba(124, 99, 255, 0.28)' }, transitions: { default: '180ms ease', slow: '360ms ease' }, layout: { pageMax: '86rem' },
};
export type AppTheme = typeof theme;
