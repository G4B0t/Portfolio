export const theme = {
  colors: { background: '#0c0f14', surface: '#131820', surfaceElevated: '#191f29', text: '#f1f5f9', textMuted: '#9caaba', border: '#2a3442', accent: '#75d7bd', accentMuted: '#b5f0df', focus: '#9cebd6' },
  spacing: { 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem', 5: '1.5rem', 6: '2rem', 7: '3rem', 8: '4.5rem', 9: '6.5rem' },
  typography: { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", display: "'DM Mono', Consolas, monospace", sizes: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.25rem', xl: '1.75rem', '3xl': 'clamp(3.25rem, 8vw, 6.75rem)' } },
  breakpoints: { tablet: '48rem', laptop: '80rem' }, radii: { sm: '0.375rem', md: '0.75rem', lg: '1.25rem', pill: '999px' }, shadows: { card: '0 12px 32px rgba(0, 0, 0, 0.18)' }, transitions: { default: '180ms ease' },
};
export type AppTheme = typeof theme;
