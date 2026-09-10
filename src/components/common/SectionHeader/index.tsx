import type { ReactNode } from 'react';
import { Heading } from '@/components/ui/Heading';
import { Copy, Eyebrow, Wrap } from './styles';
export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Wrap>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading>{title}</Heading>
      {children && <Copy>{children}</Copy>}
    </Wrap>
  );
}
