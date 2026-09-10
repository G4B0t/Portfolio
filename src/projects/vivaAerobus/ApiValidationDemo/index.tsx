import { CheckCircle2, CircleAlert, Play } from 'lucide-react';
import { useState } from 'react';
import {
  DemoHeader,
  Panel,
  ScenarioButton,
  ScenarioList,
  Summary,
  TestLine,
} from './styles';

type ScenarioId = 'valid' | 'missing' | 'unsupported';

const scenarios: Record<
  ScenarioId,
  { label: string; status: 'Accepted' | 'Rejected'; detail: string; checks: string[] }
> = {
  valid: {
    label: 'Valid payload',
    status: 'Accepted',
    detail: 'A fictional request satisfies the required contract shape.',
    checks: ['Schema is valid', 'Response shape matches', 'Regression check passes'],
  },
  missing: {
    label: 'Missing field',
    status: 'Rejected',
    detail:
      'A fictional request omits a required value and returns a clear validation result.',
    checks: [
      'Required value is detected',
      'Validation response is explicit',
      'No downstream action is simulated',
    ],
  },
  unsupported: {
    label: 'Unsupported state',
    status: 'Rejected',
    detail:
      'A fictional request is blocked when its state does not support the requested action.',
    checks: [
      'State rule is evaluated',
      'Response remains deterministic',
      'Regression check passes',
    ],
  },
};

export function ApiValidationDemo() {
  const [activeScenario, setActiveScenario] = useState<ScenarioId>('valid');
  const scenario = scenarios[activeScenario];
  const isAccepted = scenario.status === 'Accepted';

  return (
    <Panel>
      <DemoHeader>
        <div>
          <span>Local contract validation demo</span>
          <h3>Run a fictional API scenario.</h3>
        </div>
        <Play aria-hidden="true" size={20} />
      </DemoHeader>
      <ScenarioList aria-label="Fictional API scenarios">
        {(Object.keys(scenarios) as ScenarioId[]).map((id) => (
          <ScenarioButton
            key={id}
            type="button"
            $active={activeScenario === id}
            aria-pressed={activeScenario === id}
            onClick={() => setActiveScenario(id)}
          >
            {scenarios[id].label}
          </ScenarioButton>
        ))}
      </ScenarioList>
      <Summary $accepted={isAccepted} aria-live="polite">
        {isAccepted ? (
          <CheckCircle2 aria-hidden="true" size={20} />
        ) : (
          <CircleAlert aria-hidden="true" size={20} />
        )}
        <div>
          <span>{scenario.status}</span>
          <p>{scenario.detail}</p>
        </div>
      </Summary>
      <div aria-label="Scenario assertions">
        {scenario.checks.map((check) => (
          <TestLine key={check} $accepted={isAccepted}>
            <CheckCircle2 aria-hidden="true" size={16} />
            {check}
          </TestLine>
        ))}
      </div>
    </Panel>
  );
}
