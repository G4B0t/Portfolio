import type { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/theme/GlobalStyles'; import { theme } from '@/theme/theme';
export function ThemeProvider({ children }: PropsWithChildren) { return <StyledThemeProvider theme={theme}><GlobalStyles />{children}</StyledThemeProvider>; }
