import { ArrowLeft, CalendarRange, ClipboardCheck, Medal, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { dbEncuentroCaseStudy as content, dbEncuentroProject } from '../content';
import { OperationsDemo } from '../OperationsDemo';
import { Cards, Contribution, Hero, HeroMap, Kicker, Note, Page, Tags } from './styles';

const capabilityIcons = [CalendarRange, ClipboardCheck, Medal, QrCode];

export function DBEncuentroCaseStudy() {
  return (
    <Page>
      <Hero>
        <div className="hero-copy">
          <Kicker>
            {dbEncuentroProject.category} · {dbEncuentroProject.role}
          </Kicker>
          <h1>{dbEncuentroProject.title}</h1>
          <h2>{content.headline}</h2>
          <p>{content.introduction}</p>
          <Tags aria-label="Technology stack">
            {dbEncuentroProject.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Tags>
        </div>
        <HeroMap aria-label="Illustration of the event workflow">
          <div className="map-label">
            <span>Event flow</span>
            <strong>prepare → compete → receive</strong>
          </div>
          <div className="orbit orbit-one">
            <i />
            <i />
            <i />
          </div>
          <div className="orbit orbit-two">
            <i />
            <i />
          </div>
          <div className="core">
            <Medal size={32} aria-hidden="true" />
          </div>
        </HeroMap>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Contribution"
        title="Complete software development across the platform."
      >
        <Contribution>
          <span>Scope</span>
          <p>{content.contribution}</p>
        </Contribution>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="02 / Product workflow"
        title="From event setup to the reception desk."
        introduction="The platform connects administrative preparation, delegation work, competition operations, and public information in one event lifecycle."
      >
        <Cards>
          {content.capabilities.map((item, index) => {
            const Icon = capabilityIcons[index];
            return (
              <article key={item.title}>
                <Icon size={20} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </Cards>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Interactive example"
        title={content.demo.title}
        introduction={content.demo.description}
      >
        <OperationsDemo />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Implementation"
        title="Business rules, data, and field operations work as one product."
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
