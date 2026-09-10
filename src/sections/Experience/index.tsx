import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { Section } from './styles';

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader eyebrow="Experience" title="Context before claims.">
          Professional experience details are intentionally being validated before
          publication.
        </SectionHeader>
      </Container>
    </Section>
  );
}
