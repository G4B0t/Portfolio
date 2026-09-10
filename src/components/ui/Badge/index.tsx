import type { PropsWithChildren } from 'react'; import styled from 'styled-components';
const Element = styled.span`display:inline-flex;padding:.25rem .55rem;border:1px solid ${({ theme }) => theme.colors.border};border-radius:${({ theme }) => theme.radii.pill};color:${({ theme }) => theme.colors.textMuted};font-size:${({ theme }) => theme.typography.sizes.xs};`;
export function Badge({ children }: PropsWithChildren) { return <Element>{children}</Element>; }
