import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { skills } from '@/content/skills';
import { Card, Icon, List, Section } from './styles';
export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader
          eyebrow="03 / Skills & technologies"
          title="Tools for thoughtful systems."
        >
          A focused technology landscape across interface, services, automation, and
          engineering work.
        </SectionHeader>
        <List>
          {skills.map((skill) => (
            <Card key={skill.name}>
              <Icon>{skill.mark}</Icon>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </Card>
          ))}
        </List>
      </Container>
    </Section>
  );
}
