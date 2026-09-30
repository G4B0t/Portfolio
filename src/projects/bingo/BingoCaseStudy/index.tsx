import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { bingoCaseStudy as content, bingoProject } from '../content';
import { RoundDemo } from '../RoundDemo';
import { Cards, Hero, Kicker, Note, Page, Tags } from './styles';

export function BingoCaseStudy() {
  return (
    <Page>
      <Hero>
        <Kicker>
          {bingoProject.category} · {bingoProject.role}
        </Kicker>
        <h1>{bingoProject.title}</h1>
        <h2>{content.headline}</h2>
        <p>{content.introduction}</p>
        <Tags aria-label="Technology stack">
          {bingoProject.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </Tags>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Contribution"
        title="Complete software development across the product."
      >
        <Note>
          <p>{content.contribution}</p>
        </Note>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="02 / Product workflow"
        title="Prepare, operate, and review."
      >
        <Cards>
          {content.capabilities.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </Cards>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Interactive example"
        title={content.demo.title}
        introduction={content.demo.description}
      >
        <RoundDemo />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Implementation"
        title="One product, from interface to persistence."
      >
        <Cards>
          {content.implementation.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </Cards>
      </CaseStudySection>

      <Note>
        <p>{content.publicationNote}</p>
      </Note>
      <Link to="/#work">
        <ArrowLeft size={16} aria-hidden="true" /> Return to selected work
      </Link>
    </Page>
  );
}
