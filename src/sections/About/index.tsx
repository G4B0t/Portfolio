import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { Bridge, Education, Principles, Section } from './styles';

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader eyebrow={profile.about.eyebrow} title={profile.about.title}>
          {profile.about.narrative[0]}
        </SectionHeader>
        <p>{profile.about.narrative[1]}</p>
        <Education>
          <span>Academic foundation</span>
          <p>{profile.about.education}</p>
        </Education>
        <Principles aria-label="Engineering principles">
          {profile.about.principles.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </div>
            </article>
          ))}
        </Principles>
        <Bridge>{profile.about.bridge}</Bridge>
      </Container>
    </Section>
  );
}
