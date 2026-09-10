import type { PropsWithChildren } from 'react'; import styled from 'styled-components';
const Element = styled.h2`margin:0;font-size:clamp(2rem,4vw,3.25rem);line-height:1.1;letter-spacing:-.04em;`;
export function Heading({ children }: PropsWithChildren) { return <Element>{children}</Element>; }
