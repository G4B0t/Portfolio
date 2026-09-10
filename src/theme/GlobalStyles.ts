import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; } html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; color: ${({ theme }) => theme.colors.text}; background: radial-gradient(circle at 74% -10%, rgba(76, 72, 192, .2), transparent 34rem), radial-gradient(circle at 15% 44%, rgba(113, 55, 190, .08), transparent 28rem), ${({ theme }) => theme.colors.background}; font-family: ${({ theme }) => theme.typography.fontFamily}; line-height: 1.6; }
  a { color: inherit; text-decoration: none; } button { font: inherit; cursor: pointer; } :focus-visible { outline: 3px solid ${({ theme }) => theme.colors.focus}; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }
`;
