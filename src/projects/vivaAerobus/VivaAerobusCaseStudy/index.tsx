import {
  ArrowLeft,
  Braces,
  CheckCircle2,
  Database,
  GitPullRequest,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { ApiValidationDemo } from '@/projects/vivaAerobus/ApiValidationDemo';
import { vivaAerobusCaseStudy } from '@/projects/vivaAerobus/content';
import {
  CardGrid,
  Closing,
  CodeBlock,
  ContributionGrid,
  DecisionGrid,
  EvidenceList,
  Flow,
  FlowNode,
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

export function VivaAerobusCaseStudy() {
  return (
    <Page>
      <Hero>
        <HeroCopy>
          <Kicker>{vivaAerobusCaseStudy.category}</Kicker>
          <Title>{vivaAerobusCaseStudy.title}</Title>
          <Lead>{vivaAerobusCaseStudy.subtitle}</Lead>
          <p>{vivaAerobusCaseStudy.summary}</p>
          <Tags aria-label="Technology stack">
            {vivaAerobusCaseStudy.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Tags>
        </HeroCopy>
        <HeroVisual>
          <img
            src="/assets/api_network_operation.png"
            alt="Abstract aviation operations network with connected data nodes and API validation panels."
          />
        </HeroVisual>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Engineering context"
        title="Operational APIs need delivery practices that make change observable."
      >
        <TextGrid>
          <p>
            The platform is a modular HTTP API supporting travel and booking-oriented
            operations. Its architecture combines controllers, domain-focused concepts,
            infrastructure, integrations, and a dedicated test suite.
          </p>
          <p>
            My delivery work paired API changes with contract validation and durable test
            evidence. The aim was to make both expected behavior and regression coverage
            easier to verify.
          </p>
        </TextGrid>
        <CardGrid>
          {vivaAerobusCaseStudy.pillars.map((pillar, index) => {
            const Icon = [Braces, ShieldCheck, GitPullRequest][index];
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
        eyebrow="02 / API architecture"
        title="A request moves through explicit application layers."
        introduction="This original system map communicates the recurring architecture without reproducing internal routes, integrations, or implementation details."
      >
        <Flow aria-label="Client request flows through API controllers, domain concepts, infrastructure and integrations, then response contracts.">
          {[
            'Client request',
            'API controllers',
            'Domain concepts',
            'Infrastructure & integrations',
            'Response contract',
          ].map((label, index) => (
            <FlowNode key={label} $accent={index === 2}>
              {label}
            </FlowNode>
          ))}
        </Flow>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Change validation"
        title="A request is only one part of an API delivery."
        introduction="The delivery loop connects implementation, scenario coverage, assertions, regression checks, and reviewable evidence."
      >
        <Flow aria-label="Change delivery progresses through implementation, scenario design, contract assertions, regression checks, and evidence review.">
          {[
            'Implementation',
            'Scenario design',
            'Contract assertions',
            'Regression checks',
            'Evidence review',
          ].map((label, index) => (
            <FlowNode key={label} $accent={index === 2 || index === 3}>
              {label}
            </FlowNode>
          ))}
        </Flow>
        <EvidenceList>
          <div>
            <b>Ticket-scoped</b>
            <p>Collections and checks stay focused on the behavior being delivered.</p>
          </div>
          <div>
            <b>Repeatable</b>
            <p>Scripts, mocks, and smoke checks make scenario execution reproducible.</p>
          </div>
          <div>
            <b>Reviewable</b>
            <p>
              Before-and-after evidence helps communicate what changed and how it was
              checked.
            </p>
          </div>
        </EvidenceList>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Interactive evidence"
        title="Explore a fictional API contract check."
        introduction="This local demo represents the validation pattern behind the delivery workflow. It uses invented scenarios and has no connection to production services or internal endpoints."
      >
        <ApiValidationDemo />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Test automation"
        title="Regression confidence comes from scenarios, not a single response."
      >
        <CardGrid>
          <article>
            <CheckCircle2 aria-hidden="true" size={21} />
            <h3>Contract assertions</h3>
            <p>
              Request and response expectations turn behavior into explicit, repeatable
              checks.
            </p>
          </article>
          <article>
            <Database aria-hidden="true" size={21} />
            <h3>Scenario matrices</h3>
            <p>
              Positive, negative, and regression scenarios capture the behavior around a
              change instead of only its happy path.
            </p>
          </article>
          <article>
            <ShieldCheck aria-hidden="true" size={21} />
            <h3>Delivery evidence</h3>
            <p>
              Structured outputs and comparison evidence support review without exposing
              the original system.
            </p>
          </article>
        </CardGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="06 / Engineering decisions"
        title="API delivery becomes clearer when validation is designed with the change."
      >
        <DecisionGrid>
          {vivaAerobusCaseStudy.decisions.map((item) => (
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
        eyebrow="07 / My contribution"
        title="API change delivery, validation automation, and evidence."
        introduction="These areas reflect the ticket-scoped implementation and validation artifacts I maintained for the project."
      >
        <ContributionGrid>
          {vivaAerobusCaseStudy.contributionGroups.map((group) => (
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
        eyebrow="08 / Code insight"
        title="A small contract check makes expected behavior executable."
        introduction="This original example demonstrates the test design principle used throughout the case study. It is not copied from the project source."
      >
        <CodeBlock>{`type ContractResult = {
  status: number;
  hasRequiredValue: boolean;
};

function validateContract(result: ContractResult) {
  return result.status === 200 && result.hasRequiredValue;
}

const isValid = validateContract({
  status: 200,
  hasRequiredValue: true,
});`}</CodeBlock>
      </CaseStudySection>

      <Note>
        <p>{vivaAerobusCaseStudy.confidentialityNote}</p>
      </Note>

      <Closing>
        <p>API engineering and delivery confidence.</p>
        <h2>Reliable API changes need both implementation discipline and evidence.</h2>
        <span>
          This work reflects my experience connecting operational API delivery with
          validation automation and regression-focused review.
        </span>
      </Closing>

      <Link to="/#work" aria-label="Return to selected work">
        <ArrowLeft size={16} /> Return to selected work
      </Link>
    </Page>
  );
}
