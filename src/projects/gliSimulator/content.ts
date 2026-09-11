export const gliSimulatorCaseStudy = {
  title: 'GLI Simulator',
  category: 'Academic project · Scientific computing',
  subtitle: 'Simulating the dynamics of conventional intermittent gas lift.',
  summary:
    'GLI Simulator is an end-to-end engineering application for exploring conventional intermittent gas-lift cycles: from physical parameters and numerical simulation to interpretable results, diagnostics, and persisted runs.',
  technologies: [
    'Python',
    'FastAPI',
    'NumPy / SciPy',
    'React',
    'TypeScript',
    'Recharts',
    'Pytest',
  ],
  pillars: [
    {
      title: 'Physical model',
      copy: 'The simulator represents fluid properties, well geometry, operating parameters, valve behavior, and the changing conditions of an intermittent-lift cycle.',
    },
    {
      title: 'Numerical execution',
      copy: 'Stage-specific equations, transition events, and numerical integration turn engineering assumptions into a time-resolved simulation.',
    },
    {
      title: 'Engineering interface',
      copy: 'A React workspace makes parameters, metrics, charts, diagnostics, units, and saved runs understandable without hiding the scientific process.',
    },
  ],
  decisions: [
    {
      problem: 'A cycle changes physical behavior over time.',
      decision:
        'Represent the simulation as explicit stages joined by event-based transitions.',
      why: 'Each portion of the cycle can use the assumptions, equations, and termination condition appropriate to that physical state.',
    },
    {
      problem: 'Engineering results need to be interpretable as well as computable.',
      decision:
        'Return time-series outputs together with cycle metrics, diagnostics, and unit-aware presentation.',
      why: 'Users can connect an input choice to both the overall outcome and the behavior observed during the cycle.',
    },
    {
      problem: 'Scientific software needs confidence beyond a successful screen render.',
      decision:
        'Keep the model, API contracts, reference scenarios, and frontend views independently testable.',
      why: 'Verification remains part of the product architecture as the model and interface evolve.',
    },
  ],
  contributionGroups: [
    {
      title: 'Simulation engine',
      items: [
        'Physical parameters, geometry, fluid behavior, and valve-control modelling',
        'Stage-based dynamic simulation and numerical solver integration',
        'Cycle metrics, diagnostics, validation paths, and reference scenarios',
      ],
    },
    {
      title: 'Product and API',
      items: [
        'FastAPI endpoints and typed simulation contracts',
        'Run persistence and retrieval for saved simulations',
        'Input validation and service boundaries around scientific execution',
      ],
    },
    {
      title: 'Scientific interface',
      items: [
        'React simulation workspace, parameter form, and engineering dashboard',
        'Time-series charts, data tables, units, scenarios, and diagnostics',
        'Reusable interface components and testable frontend behavior',
      ],
    },
  ],
  confidentialityNote:
    'The diagrams, code example, and interactive data in this case study are original portfolio recreations. They communicate the engineering approach without exposing project source code, unpublished research material, local configuration, or stored simulation data.',
} as const;
