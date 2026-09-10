import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { Section } from './styles';

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader eyebrow="About" title="Built around the work.">
          {profile.about}
        </SectionHeader>
      </Container>
    </Section>
  );
}
