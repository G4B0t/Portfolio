import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import styled from 'styled-components';
const Element = styled.div`
  width: min(100% - 2rem, ${({ theme }) => theme.layout.pageMax});
  margin-inline: auto;
`;
export function Container({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) {
  return <Element {...props}>{children}</Element>;
}
