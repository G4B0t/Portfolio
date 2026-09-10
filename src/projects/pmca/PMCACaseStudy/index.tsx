import {
  ArrowLeft,
  CheckCircle2,
  Component,
  Layers3,
  SlidersHorizontal,
  TableProperties,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { pmcaCaseStudy } from '@/projects/pmca/content';
import { TradeWorkflowDemo } from '@/projects/pmca/TradeWorkflowDemo';
import {
  ArchitectureFlow,
  ArchitectureNode,
  Callout,
  ChallengeGrid,
  Closing,
  CodeInsight,
  CodePanel,
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
        eyebrow="02 / Architecture"
        title="Feature modules connected through explicit layers."
        introduction="A sanitized view of a recurring frontend architecture: interface concerns stay close to the feature, while shared state and service boundaries keep cross-cutting behavior consistent."
      >
        <ArchitectureFlow aria-label="React UI flows through feature modules, state management, asynchronous actions, API services, and backend services.">
          {[
            'React UI',
            'Feature modules',
            'State management',
            'Async actions',
            'API services',
            'Backend services',
          ].map((label, index) => (
            <ArchitectureNode key={label} $accent={index === 2 || index === 3}>
              {label}
            </ArchitectureNode>
          ))}
        </ArchitectureFlow>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Feature areas"
        title="A product surface built from connected engineering domains."
        introduction="These publication-safe areas summarize the modules and shared foundations I contributed to. The visual is an original representation, rather than a product screenshot."
      >
        <FeatureVisual>
          <img
            src="/assets/features_areas.png"
            alt="Abstract diagram connecting operations, analysis, market data, workflows, and a shared interface system."
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
        eyebrow="04 / Data-intensive interfaces"
        title="Tables are an interaction system, not just a data display."
        introduction="The source contains a reusable DataGridPro-based table layer and feature-specific table compositions. This original visual represents the engineering concerns without reproducing any real interface or data."
      >
        <ChallengeGrid>
          <div>
            <CheckCircle2 aria-hidden="true" size={21} />
            <h3>Controlled edits</h3>
            <p>
              Row updates, custom cells, selection, and validation need deliberate state
              transitions.
            </p>
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={21} />
            <h3>Useful density</h3>
            <p>
              Filtering, exports, summaries, and domain-aware columns help operators make
              sense of large record sets.
            </p>
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={21} />
            <h3>Shared behavior</h3>
            <p>
              Reusable renderers and table helpers keep repeated interaction rules
              consistent across product areas.
            </p>
          </div>
        </ChallengeGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Interactive workflow"
        title="Explore a fictional notification workflow."
        introduction="This original local demo distills a Trade Notification pattern I contributed to: state-specific queues, selection, editable records, validation, and explicit row lifecycle. Every record, label, date, and count is fictional; there is no API, product logic, or customer data behind it."
      >
        <TradeWorkflowDemo />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="06 / Reusable UI system"
        title="Shared components make complex work more consistent."
        introduction="Alongside feature delivery, I created and improved reusable interaction primitives. This lets product areas share familiar behavior instead of solving the same UI problem repeatedly."
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
        eyebrow="07 / Delivery workflow"
        title="Engineering work benefits from visible progress and feedback."
        introduction="This original workboard illustrates the kind of delivery rhythm around interface work: refinement, validation feedback, and workflow states. All identifiers, names, status counts, and period references inside the visual are fictional."
      >
        <FeatureVisual>
          <img
            src="/assets/PMCA_workboard.png"
            alt="Fictional engineering workboard showing generic task states, review, and progress."
          />
          <WorkboardCaption>
            Fictional delivery-board concept · no real tickets or project data
          </WorkboardCaption>
        </FeatureVisual>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="08 / Workflow engineering"
        title="Make transitions visible, validated, and recoverable."
        introduction="The product includes numerous asynchronous actions and feature slices. The lifecycle below is intentionally generic: it represents the kind of state orchestration visible in the codebase, not a proprietary business process."
      >
        <WorkflowFlow aria-label="Generic record lifecycle from loaded to persisted">
          {lifecycle.map((step, index) => (
            <WorkflowStep key={step} $active={index === 2}>
              {step}
            </WorkflowStep>
          ))}
        </WorkflowFlow>
        <Callout>
          <Workflow aria-hidden="true" size={20} />
          <p>
            Validation, pending states, failures, and success feedback are part of the
            interaction contract—not an afterthought around an API request.
          </p>
        </Callout>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="09 / Engineering decisions"
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
        eyebrow="10 / Scope and publication"
        title="Confirmed contribution, presented with restraint."
      >
        <StackGrid>
          <Stack>
            <Subheading>Feature work</Subheading>
            <ul>
              {pmcaCaseStudy.confirmedFeatureContributions.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </Stack>
          <Stack>
            <Subheading>Shared UI work</Subheading>
            <ul>
              {pmcaCaseStudy.confirmedSharedContributions.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </Stack>
          <Stack>
            <Subheading>Publication boundary</Subheading>
            <p>{pmcaCaseStudy.contributionNote}</p>
            <p>
              Source code, production data, customer information, endpoint details,
              infrastructure, and proprietary financial logic are excluded by design.
            </p>
          </Stack>
        </StackGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="11 / Code insight"
        title="A small state model makes table changes inspectable."
        introduction="This simplified, original example shows the interaction principle used in the demo: validate locally, retain the user’s input, and record the row’s pending lifecycle explicitly."
      >
        <CodeInsight>
          <CodePanel>{`type Lifecycle = 'new' | 'updated' | 'deleted';

function updateRecord(current: Record, amount: string): Record {
  const isValid = /^[0-9]+(,[0-9]{3})*$/.test(amount);

  return {
    ...current,
    amount,
    isValid,
    lifecycle: current.lifecycle === 'new' ? 'new' : 'updated',
  };
}`}</CodePanel>
          <ol>
            <li>Keep a local copy of the changed value.</li>
            <li>Validate before treating it as ready.</li>
            <li>Expose the pending lifecycle until a future save reconciles it.</li>
          </ol>
        </CodeInsight>
      </CaseStudySection>

      <Closing>
        <p>Engineering at enterprise scale.</p>
        <h2>Clear interfaces make complex operational work easier to trust.</h2>
        <span>
          This case study shows only original, publication-safe patterns and confirmed
          contribution areas.
        </span>
      </Closing>

      <Link to="/" aria-label="Return to selected work">
        <ArrowLeft size={16} /> Return to selected work
      </Link>
    </Page>
  );
}
