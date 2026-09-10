import { useMemo, useState } from 'react';
import { Activity, Gauge, Timer } from 'lucide-react';
import {
  Chart,
  ChartGrid,
  ChartLine,
  Demo,
  Header,
  Insight,
  Metric,
  MetricGrid,
  PhaseButton,
  PhaseList,
  Plot,
  Readout,
} from './styles';

const phases = [
  {
    id: 'injection',
    label: 'Gas injection',
    detail: 'Annular pressure builds while the system approaches the next valve event.',
    metric: 'Pressure rises',
    curve: 'M0 86 C35 82 52 70 80 66 S132 42 164 37 S220 20 280 16',
  },
  {
    id: 'transfer',
    label: 'Valve response',
    detail: 'The cycle transitions when the modeled valve condition is reached.',
    metric: 'Event detected',
    curve: 'M0 78 C25 78 42 76 67 61 S105 20 137 31 S172 68 207 47 S245 28 280 25',
  },
  {
    id: 'lift',
    label: 'Liquid displacement',
    detail: 'Gas energy displaces the liquid column and changes the cycle flow state.',
    metric: 'Lift in progress',
    curve: 'M0 35 C24 40 45 55 69 60 S113 78 145 66 S192 32 225 23 S260 18 280 14',
  },
  {
    id: 'recovery',
    label: 'Cycle recovery',
    detail: 'The modeled system settles into conditions used to evaluate the next cycle.',
    metric: 'Next cycle ready',
    curve: 'M0 26 C39 27 56 36 86 51 S132 84 166 76 S213 47 242 43 S269 42 280 42',
  },
] as const;

export function CycleExplorerDemo() {
  const [activeId, setActiveId] = useState<(typeof phases)[number]['id']>('injection');
  const activePhase = useMemo(
    () => phases.find((phase) => phase.id === activeId) ?? phases[0],
    [activeId],
  );

  return (
    <Demo>
      <Header>
        <div>
          <span>Original local demonstration</span>
          <h3>Explore a simulated cycle state.</h3>
        </div>
        <Activity aria-hidden="true" size={22} />
      </Header>

      <PhaseList aria-label="Fictional gas-lift cycle phases">
        {phases.map((phase, index) => (
          <PhaseButton
            key={phase.id}
            type="button"
            $active={phase.id === activeId}
            aria-pressed={phase.id === activeId}
            onClick={() => setActiveId(phase.id)}
          >
            <span>0{index + 1}</span>
            {phase.label}
          </PhaseButton>
        ))}
      </PhaseList>

      <Chart>
        <Plot aria-label={`Normalized cycle response for ${activePhase.label}`}>
          <ChartGrid />
          <ChartLine viewBox="0 0 280 100" preserveAspectRatio="none" aria-hidden="true">
            <path d={activePhase.curve} />
          </ChartLine>
          <span>Normalized cycle response</span>
        </Plot>
        <Readout>
          <span>Current phase</span>
          <strong>{activePhase.label}</strong>
          <p>{activePhase.detail}</p>
        </Readout>
      </Chart>

      <MetricGrid>
        <Metric>
          <Gauge aria-hidden="true" size={18} />
          <span>Model signal</span>
          <strong>{activePhase.metric}</strong>
        </Metric>
        <Metric>
          <Timer aria-hidden="true" size={18} />
          <span>Cycle view</span>
          <strong>Stage-aware</strong>
        </Metric>
        <Metric>
          <Activity aria-hidden="true" size={18} />
          <span>Data type</span>
          <strong>Illustrative</strong>
        </Metric>
      </MetricGrid>

      <Insight>
        This visualization uses fictional, normalized values to explain how the simulator
        organizes a dynamic cycle. It does not execute the research model.
      </Insight>
    </Demo>
  );
}
