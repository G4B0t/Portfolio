import type { PropsWithChildren } from 'react';
import { Heading } from '@/components/ui/Heading';
import { Copy, Eyebrow, Header, Section } from './styles';

interface CaseStudySectionProps extends PropsWithChildren {
  eyebrow: string;
  title: string;
  introduction?: string;
}

export function CaseStudySection({
  eyebrow,
  title,
  introduction,
  children,
}: CaseStudySectionProps) {
  return (
    <Section>
      <Header>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading>{title}</Heading>
        {introduction && <Copy>{introduction}</Copy>}
      </Header>
      {children}
    </Section>
  );
}
