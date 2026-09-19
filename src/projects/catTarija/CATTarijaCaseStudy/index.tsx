import {
  ArrowLeft,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { AccessOperationsDemo } from '@/projects/catTarija/AccessOperationsDemo';
import { catTarijaCaseStudy } from '@/projects/catTarija/content';
import {
  Architecture,
  ArchitectureNode,
  CardGrid,
  Closing,
  ContributionGrid,
  DecisionGrid,
  Hero,
  HeroCopy,
  HeroVisual,
  Kicker,
  Lead,
  Note,
  Page,
  Tags,
  TextGrid,
  Title,
} from './styles';

export function CATTarijaCaseStudy() {
  return (
    <Page>
      <Hero>
        <HeroCopy>
          <Kicker>{catTarijaCaseStudy.category}</Kicker>
          <Title>{catTarijaCaseStudy.title}</Title>
          <Lead>{catTarijaCaseStudy.subtitle}</Lead>
          <p>{catTarijaCaseStudy.summary}</p>
          <Tags aria-label="Technology stack">
            {catTarijaCaseStudy.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Tags>
        </HeroCopy>
        <HeroVisual aria-label="Abstract identity and access workflow">
          <div className="access-card identity">
            <LockKeyhole aria-hidden="true" size={24} />
            <span>Authenticated identity</span>
            <strong>Session established</strong>
          </div>
          <div className="access-card role">
            <ShieldCheck aria-hidden="true" size={23} />
            <span>Active role</span>
            <strong>Permissions resolved</strong>
          </div>
          <div className="access-card operation">
            <WalletCards aria-hidden="true" size={23} />
            <span>Operational context</span>
            <strong>Caja 1</strong>
          </div>
          <i className="connector first" aria-hidden="true" />
          <i className="connector second" aria-hidden="true" />
          <div className="readout">
            <span>Access model</span>
            <strong>identity → role → operation</strong>
          </div>
        </HeroVisual>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Project scope"
        title="An institutional platform connects administrative operations in one workspace."
        introduction="C.A.T. Tarija was delivered by a three-developer team to support distinct institutional responsibilities through role-aware operations."
      >
        <TextGrid>
          <p>
            The platform brings together multiple administrative areas while giving each
            institutional responsibility an appropriately focused operational context.
            Identity, access, and navigation are part of the wider product rather than
            the product's complete scope.
          </p>
          <p>
            Development ran from September 2024 through March 2025. The system was
            installed on client-managed infrastructure in March 2025 and remains under
            contracted technical support.
          </p>
        </TextGrid>
        <CardGrid>
          {catTarijaCaseStudy.pillars.map((pillar, index) => {
            const Icon = [KeyRound, Network, ShieldCheck][index];
            return (
              <article key={pillar.title}>
                <Icon aria-hidden="true" size={21} />
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            );
          })}
        </CardGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="02 / My contribution"
        title="Full-stack delivery focused on identity, permissions, and operational context."
        introduction="My contribution covered the complete access lifecycle across backend and frontend; the broader product was delivered with a three-developer team."
      >
        <ContributionGrid>
          {catTarijaCaseStudy.contributionGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </ContributionGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Access architecture"
        title="Roles, processes, sections, and menus resolve into one focused workspace."
        introduction="This original architecture map abstracts the verified access structure without revealing production schemas, endpoints, or infrastructure details."
      >
        <Architecture aria-label="A user session resolves roles and processes which determine menu sections and permitted operations.">
          {[
            'Authenticated user',
            'Assigned roles',
            'Permitted processes',
            'Menu sections',
            'Operational workspace',
          ].map((label, index) => (
            <ArchitectureNode key={label} $accent={index === 1 || index === 2}>
              {label}
            </ArchitectureNode>
          ))}
        </Architecture>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Interactive demo"
        title="Switch the active role to see the permitted workspace change."
        introduction="This original local demonstration is modeled on the verified access structure. Every person, role assignment, process, and state is fictional."
      >
        <AccessOperationsDemo />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Engineering decisions"
        title="Access control is part of the product workflow, not just the sign-in screen."
      >
        <DecisionGrid>
          {catTarijaCaseStudy.decisions.map((item) => (
            <article key={item.problem}>
              <span>Problem</span>
              <h3>{item.problem}</h3>
              <span>Engineering decision</span>
              <p>{item.decision}</p>
              <span>Why it matters</span>
              <p>{item.why}</p>
            </article>
          ))}
        </DecisionGrid>
      </CaseStudySection>

      <Note>
        <p>{catTarijaCaseStudy.confidentialityNote}</p>
      </Note>

      <Closing>
        <p>Client delivery · Identity & access management</p>
        <h2>Good access design gives every operational role a clear place to work.</h2>
        <span>
          C.A.T. Tarija reflects my approach to connecting authentication, permissions,
          navigation, and real operational boundaries across the full stack.
        </span>
      </Closing>

      <Link to="/#work" aria-label="Return to selected work">
        <ArrowLeft size={16} /> Return to selected work
      </Link>
    </Page>
  );
}
