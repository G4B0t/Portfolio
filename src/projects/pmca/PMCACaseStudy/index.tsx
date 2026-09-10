import {
  ArrowLeft,
  CheckCircle2,
  Component,
  Layers3,
  SlidersHorizontal,
  TableProperties,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { pmcaCaseStudy } from '@/projects/pmca/content';
import { TradeWorkflowDemo } from '@/projects/pmca/TradeWorkflowDemo';
import {
  ArchitectureFlow,
  ArchitectureNode,
  ChallengeGrid,
  Closing,
  CodeInsight,
  CodePanel,
  ConfidentialityNote,
  Dashboard,
  DashboardHeader,
  DashboardMeta,
  DashboardRows,
  DashboardVisual,
  DecisionGrid,
  FeatureAreaList,
  FeatureVisual,
  Hero,
  HeroCopy,
  HeroKicker,
  HeroTitle,
  Highlights,
  Lead,
  Page,
  Row,
  RowState,
  Stack,
  StackGrid,
  Subheading,
  TagList,
  TextGrid,
  UISystemGrid,
  WorkflowFlow,
  WorkflowStep,
  WorkboardCaption,
} from './styles';

const lifecycle = ['Loaded', 'Edited', 'Validated', 'Pending update', 'Persisted'];

export function PMCACaseStudy() {
  return (
    <Page>
      <Hero>
        <HeroCopy>
          <HeroKicker>{pmcaCaseStudy.category}</HeroKicker>
          <HeroTitle>{pmcaCaseStudy.title}</HeroTitle>
          <Lead>{pmcaCaseStudy.subtitle}</Lead>
          <p>{pmcaCaseStudy.summary}</p>
          <TagList aria-label="Technology stack">
            {pmcaCaseStudy.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </TagList>
        </HeroCopy>
        <DashboardVisual aria-hidden="true">
          <Dashboard>
            <DashboardHeader>
              <span>OPERATIONS / RECORDS</span>
              <span>03 ACTIVE</span>
            </DashboardHeader>
            <DashboardMeta>
              <i /> <i /> <i />
            </DashboardMeta>
            <DashboardRows>
              <Row>
                <span>OP-204</span>
                <span>Scheduled record</span>
                <RowState>Validated</RowState>
              </Row>
              <Row>
                <span>OP-205</span>
                <span>Review queue</span>
                <RowState $pending>Edited</RowState>
              </Row>
              <Row>
                <span>OP-206</span>
                <span>Calculation set</span>
                <RowState>Ready</RowState>
              </Row>
            </DashboardRows>
          </Dashboard>
        </DashboardVisual>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Engineering context"
        title="Enterprise software has to keep complexity legible."
      >
        <TextGrid>
          <p>
            The application is organized around many feature areas, with shared components
            and typed boundaries supporting demanding operational interfaces.
          </p>
          <p>
            Its technical shape favors a clear path from user action to validation,
            asynchronous work, reconciled state, and visible feedback—an essential pattern
            when a screen carries many records and dependent actions.
          </p>
        </TextGrid>
        <Highlights>
          {pmcaCaseStudy.highlights.map((highlight) => (
            <article key={highlight.title}>
              <Layers3 aria-hidden="true" size={20} />
              <h3>{highlight.title}</h3>
              <p>{highlight.copy}</p>
            </article>
          ))}
        </Highlights>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="02 / Product surface"
        title="A large application built from connected engineering domains."
        introduction="PMCA spans multiple functional areas rather than behaving like a single isolated frontend screen. The diagram summarizes that breadth without reproducing the production interface."
      >
        <FeatureVisual>
          <img
            src="/assets/features_areas.png"
            alt="Abstract diagram connecting operations, analysis, market data, workflows, and a shared interface system."
            loading="lazy"
          />
        </FeatureVisual>
        <FeatureAreaList>
          {pmcaCaseStudy.featureAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </FeatureAreaList>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Frontend architecture"
        title="Feature modules connected through explicit layers."
        introduction="Interface concerns stay close to each feature while shared state and service boundaries keep cross-cutting behavior consistent."
      >
        <ArchitectureFlow aria-label="React UI flows through feature modules, state management, asynchronous orchestration, API services, and backend services.">
          {[
            'React UI',
            'Feature modules · Forms, tables, workflows',
            'State management · Redux Toolkit, selectors',
            'Async orchestration · Thunks, transformations',
            'API services · REST, Axios',
            'Backend services',
          ].map((label, index) => (
            <ArchitectureNode key={label} $accent={index === 2 || index === 3}>
              {label}
            </ArchitectureNode>
          ))}
        </ArchitectureFlow>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Data-intensive interfaces"
        title="Tables are an interaction system, not just a data display."
        introduction="A reusable DataGridPro-based table layer and feature-specific compositions support dense operational work."
      >
        <ChallengeGrid>
          <div>
            <CheckCircle2 aria-hidden="true" size={21} />
            <h3>Controlled edits</h3>
            <p>
              Row updates, validation, selection, and custom cells require explicit state
              transitions rather than treating the table as passive display data.
            </p>
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={21} />
            <h3>Useful density</h3>
            <p>
              Filtering, export tools, summaries, and domain-aware columns help users work
              efficiently across large record sets.
            </p>
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={21} />
            <h3>Shared behavior</h3>
            <p>
              Reusable table helpers and rendering patterns keep interaction rules
              consistent across feature areas.
            </p>
          </div>
        </ChallengeGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Workflow & state orchestration"
        title="Make state transitions visible, validated, and recoverable."
        introduction="This local interactive demo recreates the engineering pattern behind data-heavy operational interfaces: queue state, selection, editable records, validation, and explicit row lifecycle. All records and values are fictional."
      >
        <TradeWorkflowDemo />
        <Subheading>State orchestration</Subheading>
        <WorkflowFlow aria-label="Generic record lifecycle from loaded to persisted">
          {lifecycle.map((step, index) => (
            <WorkflowStep key={step} $active={index === 2}>
              {step}
            </WorkflowStep>
          ))}
        </WorkflowFlow>
        <ArchitectureFlow aria-label="User interaction flows through local state, validation, Redux actions, API services, state reconciliation, and UI feedback.">
          {[
            'User interaction',
            'Local / grid state',
            'Validation',
            'Redux action / thunk',
            'API service',
            'State reconciliation',
            'UI feedback',
          ].map((label, index) => (
            <ArchitectureNode key={label} $accent={index === 2 || index === 3}>
              {label}
            </ArchitectureNode>
          ))}
        </ArchitectureFlow>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="06 / Reusable UI system"
        title="Shared components make complex work more consistent."
        introduction="Feature delivery was supported by shared interface primitives. My work included both building new reusable components and improving existing controls used across multiple product areas."
      >
        <UISystemGrid>
          {pmcaCaseStudy.uiSystem.map((group, index) => {
            const Icon = [Component, TableProperties, SlidersHorizontal][index];
            return (
              <article key={group.title}>
                <Icon aria-hidden="true" size={21} />
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <p>{group.copy}</p>
              </article>
            );
          })}
        </UISystemGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="07 / Engineering decisions"
        title="Complex interfaces become safer when their state is deliberate."
      >
        <DecisionGrid>
          {pmcaCaseStudy.engineeringDecisions.map((item) => (
            <article key={item.problem}>
              <span>Problem</span>
              <h3>{item.problem}</h3>
              <span>Decision</span>
              <p>{item.decision}</p>
              <span>Why it matters</span>
              <p>{item.why}</p>
            </article>
          ))}
        </DecisionGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="08 / My contribution"
        title="Feature delivery and shared frontend engineering."
      >
        <StackGrid>
          <Stack>
            <Subheading>Feature engineering</Subheading>
            <ul>
              {pmcaCaseStudy.confirmedFeatureContributions.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </Stack>
          <Stack>
            <Subheading>Shared components created</Subheading>
            <ul>
              {pmcaCaseStudy.sharedComponentsCreated.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </Stack>
          <Stack>
            <Subheading>Shared UI improvements</Subheading>
            <ul>
              {pmcaCaseStudy.sharedUIImprovements.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </Stack>
        </StackGrid>
        <FeatureVisual>
          <img
            src="/assets/PMCA_workboard.png"
            alt="Fictional engineering workboard showing generic task states, review, and progress."
            loading="lazy"
          />
          <WorkboardCaption>
            Fictional engineering workboard · no real tickets or project data
          </WorkboardCaption>
        </FeatureVisual>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="09 / Code insight"
        title="A small state model makes table changes inspectable."
        introduction="This simplified, original example shows the interaction principle used in the demo: validate locally, retain the user’s input, and record the row’s pending lifecycle explicitly."
      >
        <CodeInsight>
          <CodePanel>{`type Lifecycle = 'new' | 'updated' | 'deleted';

type WorkflowRow = {
  id: string;
  amount: string;
  lifecycle: Lifecycle;
  isValid: boolean;
};

function updateRecord(current: WorkflowRow, amount: string): WorkflowRow {
  const isValid = /^[0-9]+(,[0-9]{3})*$/.test(amount);

  return {
    ...current,
    amount,
    isValid,
    lifecycle: current.lifecycle === 'new' ? 'new' : 'updated',
  };
}`}</CodePanel>
          <ol>
            <li>Preserve the edited value.</li>
            <li>Validate the next state.</li>
            <li>Track the row lifecycle explicitly.</li>
            <li>Reconcile it during persistence.</li>
          </ol>
        </CodeInsight>
      </CaseStudySection>

      <ConfidentialityNote>
        <p>{pmcaCaseStudy.confidentialityNote}</p>
      </ConfidentialityNote>

      <Closing>
        <p>Engineering at enterprise scale.</p>
        <h2>
          Complex React systems become easier to trust when their interfaces stay clear.
        </h2>
        <span>
          PMCA reflects my experience across frontend architecture, data-intensive
          interfaces, reusable systems, and stateful enterprise workflows.
        </span>
      </Closing>

      <Link to="/#work" aria-label="Return to selected work">
        <ArrowLeft size={16} /> Return to selected work
      </Link>
    </Page>
  );
}
