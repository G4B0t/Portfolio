import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  FileText,
  Landmark,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { MemberOperationsDemo } from '@/projects/ciabTarija/MemberOperationsDemo';
import { ciabTarijaCaseStudy } from '@/projects/ciabTarija/content';
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
  Signal,
  Tags,
  TextGrid,
  Title,
  Workflow,
} from './styles';

export function CIABTarijaCaseStudy() {
  return (
    <Page>
      <Hero>
        <HeroCopy>
          <Kicker>{ciabTarijaCaseStudy.category}</Kicker>
          <Title>{ciabTarijaCaseStudy.title}</Title>
          <Lead>{ciabTarijaCaseStudy.subtitle}</Lead>
          <p>{ciabTarijaCaseStudy.summary}</p>
          <Tags aria-label="Technology stack">
            {ciabTarijaCaseStudy.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Tags>
        </HeroCopy>
        <HeroVisual aria-label="Abstract membership operations workflow">
          <div className="hero-grid" aria-hidden="true">
            <div className="registry panel">
              <span className="profile-mark" />
              <div className="registry-copy">
                <span>Member record</span>
                <strong>Operational profile</strong>
                <i />
                <i />
              </div>
              <span className="status-chip">Active</span>
            </div>
            <div className="document panel">
              <span className="document-mark" />
              <div>
                <span>Institutional output</span>
                <strong>Certificate</strong>
              </div>
            </div>
            <div className="verification panel">
              <span className="check-mark" />
              <div>
                <span>Verification</span>
                <strong>Ready to check</strong>
              </div>
            </div>
          </div>
          <Signal $position="first">01</Signal>
          <Signal $position="second">02</Signal>
          <Signal $position="third">03</Signal>
          <div className="readout">
            <span>Member operations</span>
            <strong>register → operate → verify</strong>
          </div>
        </HeroVisual>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Product context"
        title="One operational system connects membership records to institutional work."
        introduction="The platform supports the Colegio de Ingenieros Agrónomos de Bolivia, Filial Tarija, through one connected administrative workspace."
      >
        <TextGrid>
          <p>
            Membership organizations operate through records that have to remain useful
            over time: registration, professional information, financial status,
            documents, and institutional administration all depend on the same operational
            context.
          </p>
          <p>
            CIAB Tarija was developed from 2024, formally engaged in July of that year,
            and launched in February 2025. It remains under contracted technical support
            for defects and minor corrections.
          </p>
        </TextGrid>
        <CardGrid>
          {ciabTarijaCaseStudy.pillars.map((pillar, index) => {
            const Icon = [UsersRound, Building2, FileText][index];
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
        eyebrow="02 / System architecture"
        title="A React operations workspace is backed by an API and relational domain model."
        introduction="This architecture map is original and sanitized; it describes the product boundary without reproducing internal code or deployment details."
      >
        <Architecture aria-label="Administrative users access a React workspace that communicates with an Express API, domain modules and a MySQL database.">
          {[
            'Administrative users',
            'React workspace',
            'Express API',
            'Domain modules',
            'MySQL records',
          ].map((label, index) => (
            <ArchitectureNode key={label} $accent={index === 1 || index === 2}>
              {label}
            </ArchitectureNode>
          ))}
        </Architecture>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Operational workflow"
        title="Member data becomes actionable through connected administrative steps."
        introduction="The product joins registration, financial state, documents, and verification instead of treating them as unrelated forms."
      >
        <Workflow>
          <article>
            <UsersRound aria-hidden="true" size={20} />
            <span>01</span>
            <h3>Register member</h3>
            <p>
              Create and maintain the member record, professional details, and supporting
              information.
            </p>
          </article>
          <article>
            <Landmark aria-hidden="true" size={20} />
            <span>02</span>
            <h3>Establish account state</h3>
            <p>
              Connect registration to the initial fee workflow and later account
              operations.
            </p>
          </article>
          <article>
            <BadgeCheck aria-hidden="true" size={20} />
            <span>03</span>
            <h3>Issue and verify</h3>
            <p>
              Prepare institutional outputs such as certificates, receipts, reports, and
              verification views.
            </p>
          </article>
        </Workflow>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Interactive demo"
        title="Explore a fictional member-operations workspace."
        introduction="This original local demo reflects the system's verified workflow structure. Every name, record, status, and document state is fictional."
      >
        <MemberOperationsDemo />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Engineering decisions"
        title="Operational continuity depends on connected records and explicit boundaries."
      >
        <DecisionGrid>
          {ciabTarijaCaseStudy.decisions.map((item) => (
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

      <CaseStudySection
        eyebrow="06 / My contribution"
        title="Client-facing delivery paired with targeted frontend implementation."
        introduction="The platform was built by a three-developer team. My role combined client collaboration with frontend delivery and continued support."
      >
        <ContributionGrid>
          {ciabTarijaCaseStudy.contributionGroups.map((group) => (
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

      <Note>
        <p>{ciabTarijaCaseStudy.confidentialityNote}</p>
      </Note>

      <Closing>
        <p>Client delivery · Operations software</p>
        <h2>
          Useful administrative software starts with the people who have to operate it.
        </h2>
        <span>
          CIAB Tarija reflects my approach to linking client collaboration, focused
          frontend delivery, and ongoing support.
        </span>
      </Closing>

      <Link to="/#work" aria-label="Return to selected work">
        <ArrowLeft size={16} /> Return to selected work
      </Link>
    </Page>
  );
}
