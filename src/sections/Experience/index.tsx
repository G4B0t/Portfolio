import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { Bridge, Highlights, Meta, Section, Timeline } from './styles';

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          eyebrow={profile.experience.eyebrow}
          title={profile.experience.title}
        >
          {profile.experience.introduction}
        </SectionHeader>
        <Timeline>
          {profile.experience.roles.map((role) => (
            <article key={`${role.period}-${role.organization}`}>
              <Meta>
                <span>{role.period}</span>
                <p>{role.organization}</p>
              </Meta>
              <div>
                <h3>{role.role}</h3>
                <p>{role.summary}</p>
                <Highlights>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </Highlights>
              </div>
            </article>
          ))}
        </Timeline>
        <Bridge>{profile.experience.bridge}</Bridge>
      </Container>
    </Section>
  );
}
