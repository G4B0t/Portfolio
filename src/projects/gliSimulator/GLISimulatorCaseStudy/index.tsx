import {
  Activity,
  ArrowLeft,
  ChartNoAxesCombined,
  FlaskConical,
  Gauge,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudySection } from '@/components/common/CaseStudySection';
import { Badge } from '@/components/ui/Badge';
import { CycleExplorerDemo } from '@/projects/gliSimulator/CycleExplorerDemo';
import { gliSimulatorCaseStudy } from '@/projects/gliSimulator/content';
import {
  Architecture,
  ArchitectureNode,
  CardGrid,
  Closing,
  CodeBlock,
  ContributionGrid,
  DecisionGrid,
  Hero,
  HeroCopy,
  HeroVisual,
  Kicker,
  Lead,
  ModelDiagram,
  ModelLine,
  Note,
  Page,
  Signal,
  Tags,
  TextGrid,
  Title,
} from './styles';

export function GLISimulatorCaseStudy() {
  return (
    <Page>
      <Hero>
        <HeroCopy>
          <Kicker>{gliSimulatorCaseStudy.category}</Kicker>
          <Title>{gliSimulatorCaseStudy.title}</Title>
          <Lead>{gliSimulatorCaseStudy.subtitle}</Lead>
          <p>{gliSimulatorCaseStudy.summary}</p>
          <Tags aria-label="Technology stack">
            {gliSimulatorCaseStudy.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Tags>
        </HeroCopy>
        <HeroVisual aria-label="Abstract diagram of a staged gas-lift simulation cycle">
          <ModelDiagram>
            <div className="wellbore">
              <span className="tubing" />
              <span className="annulus" />
              <span className="valve" />
              <span className="fluid" />
            </div>
            <ModelLine />
            <Signal $position="one">P</Signal>
            <Signal $position="two">Q</Signal>
            <Signal $position="three">t</Signal>
            <div className="readout">
              <span>Stage-aware solver</span>
              <strong>cycle → state → output</strong>
            </div>
          </ModelDiagram>
        </HeroVisual>
      </Hero>

      <CaseStudySection
        eyebrow="01 / Scientific problem"
        title="Intermittent lift is a dynamic system, not a single calculation."
      >
        <TextGrid>
          <p>
            Conventional intermittent gas lift evolves through changing pressure, flow,
            valve, and liquid-column conditions. A useful simulator needs to represent
            those changes as a connected physical cycle.
          </p>
          <p>
            GLI Simulator was built as my academic engineering project: I implemented and
            evolved the simulation model, the service layer, and the interface used to
            explore its results.
          </p>
        </TextGrid>
        <CardGrid>
          {gliSimulatorCaseStudy.pillars.map((pillar, index) => {
            const Icon = [FlaskConical, Activity, ChartNoAxesCombined][index];
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
        eyebrow="02 / Engineering system"
        title="One product connects model execution with engineering interpretation."
        introduction="The public architecture map shows the product boundary without reproducing internal source or stored project data."
      >
        <Architecture aria-label="User inputs move through the React interface, simulation API, numerical model and persistence layer before returning engineering results.">
          {[
            'Engineering inputs',
            'React workspace',
            'Simulation API',
            'Numerical model',
            'Results & saved runs',
          ].map((label, index) => (
            <ArchitectureNode key={label} $accent={index === 2 || index === 3}>
              {label}
            </ArchitectureNode>
          ))}
        </Architecture>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Physical model"
        title="Stage transitions keep the simulation aligned with changing conditions."
        introduction="Each stage describes a distinct part of the cycle, while event conditions determine when the next physical state begins."
      >
        <Architecture aria-label="Gas injection proceeds through valve response and liquid displacement to cycle recovery.">
          {[
            'Gas injection',
            'Valve response',
            'Liquid displacement',
            'Cycle recovery',
          ].map((label, index) => (
            <ArchitectureNode key={label} $accent={index === 1 || index === 2}>
              {label}
            </ArchitectureNode>
          ))}
        </Architecture>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Interactive cycle"
        title="Explore how a dynamic cycle is organized."
        introduction="This local visualization is an original explanatory model. Its values are normalized and fictional; it does not execute the research solver."
      >
        <CycleExplorerDemo />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Scientific interface"
        title="Inputs, outputs, and diagnostics belong in the same engineering workspace."
      >
        <CardGrid>
          <article>
            <Gauge aria-hidden="true" size={21} />
            <h3>Parameter workspace</h3>
            <p>
              Well, fluid, geometry, and operating inputs are organized before a run is
              evaluated.
            </p>
          </article>
          <article>
            <ChartNoAxesCombined aria-hidden="true" size={21} />
            <h3>Interpretable results</h3>
            <p>
              Time-series charts, metrics, and data views make a simulation result
              inspectable rather than opaque.
            </p>
          </article>
          <article>
            <ShieldCheck aria-hidden="true" size={21} />
            <h3>Diagnostics and units</h3>
            <p>
              Validation feedback, unit-aware views, and scenario context support
              meaningful engineering interpretation.
            </p>
          </article>
        </CardGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="06 / Verification"
        title="Scientific confidence is designed into the product boundary."
      >
        <TextGrid>
          <p>
            The project separates model behavior, API contracts, and presentation concerns
            so they can be checked independently. Reference scenarios and validation paths
            help keep changes grounded in expected behavior.
          </p>
          <p>
            Automated tests support physical units, staged transitions, solver outcomes,
            service contracts, and the frontend representation of a simulation run.
          </p>
        </TextGrid>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="07 / Engineering decisions"
        title="A simulator becomes more useful when the model and its explanation evolve together."
      >
        <DecisionGrid>
          {gliSimulatorCaseStudy.decisions.map((item) => (
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
        eyebrow="08 / My contribution"
        title="End-to-end ownership across model, service, and interface."
        introduction="I developed this academic project end-to-end, from the physical simulation through the API and the interactive engineering workspace."
      >
        <ContributionGrid>
          {gliSimulatorCaseStudy.contributionGroups.map((group) => (
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
        eyebrow="09 / Code insight"
        title="A state transition is explicit, testable, and explainable."
        introduction="This original pseudocode illustrates the staged design pattern; it is not taken from the project source."
      >
        <CodeBlock>{`type CycleState = 'injection' | 'transfer' | 'lift' | 'recovery';

function advanceCycle(state: CycleState, eventReached: boolean): CycleState {
  if (!eventReached) return state;

  const next: Record<CycleState, CycleState> = {
    injection: 'transfer',
    transfer: 'lift',
    lift: 'recovery',
    recovery: 'injection',
  };

  return next[state];
}`}</CodeBlock>
      </CaseStudySection>

      <Note>
        <p>{gliSimulatorCaseStudy.confidentialityNote}</p>
      </Note>

      <Closing>
        <p>Scientific computing and product engineering.</p>
        <h2>
          Good engineering software makes a complex model usable, inspectable, and
          testable.
        </h2>
        <span>
          GLI Simulator reflects my end-to-end approach to turning a scientific model into
          an interactive engineering product.
        </span>
      </Closing>

      <Link to="/#work" aria-label="Return to selected work">
        <ArrowLeft size={16} /> Return to selected work
      </Link>
    </Page>
  );
}
