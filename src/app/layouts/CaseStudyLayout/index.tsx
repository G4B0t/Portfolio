import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { ProjectDefinition } from '@/types/project';
import { Fallback, Kicker, Summary, Wrap } from './styles';
export function CaseStudyLayout({
  project,
  children,
}: PropsWithChildren<{ project?: ProjectDefinition }>) {
  return (
    <Wrap>
      <Container>
        {children ??
          (project && (
            <Fallback>
              <Kicker>{project.category} / case study foundation</Kicker>
              <Heading>{project.title}</Heading>
              <Summary>{project.summary}</Summary>
              <Link to="/">Return home</Link>
            </Fallback>
          ))}
      </Container>
    </Wrap>
  );
}
