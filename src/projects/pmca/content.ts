export const pmcaCaseStudy = {
  title: 'PMCA',
  category: 'Enterprise application · publication-safe case study',
  subtitle: 'Designing dependable interfaces for data-heavy financial workflows.',
  summary:
    'PMCA is a large enterprise web application whose frontend brings together modular React screens, reusable interface primitives, asynchronous state, and operationally dense workflows. This case study deliberately describes engineering patterns—not client data, proprietary rules, or internal screens.',
  technologies: [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'React Router',
    'MUI DataGridPro',
    'React Hook Form',
    'REST / Axios',
  ],
  highlights: [
    {
      title: 'Modular product surface',
      copy: 'Feature pages, shared UI, typed models, APIs, hooks, and store slices are separated so complex product areas can evolve without becoming one monolith.',
    },
    {
      title: 'Data-intensive interaction',
      copy: 'Reusable table infrastructure supports dense records, filtering, selection, exports, custom renderers, and controlled row updates.',
    },
    {
      title: 'Stateful workflows',
      copy: 'Async actions connect validation and UI intent to API calls, state reconciliation, loading states, and user feedback.',
    },
  ],
  areas: [
    'Accounting-oriented operations and dashboards',
    'Journal-entry and schedule management',
    'Hedge-accounting administration',
    'Trade and company-centered workflows',
    'Market-data and reporting surfaces',
  ],
  confirmedFeatureContributions: [
    'Deals and contingent-analysis workflows',
    'FX and interest-rate analysis',
    'Hedge-accounting administration',
    'Trade notifications and market-curve calculations',
    'Initial design and iteration for deliverable workflows',
  ],
  featureAreas: [
    {
      title: 'Operations & deals',
      copy: 'Data-heavy operational views and deal-focused workflows.',
    },
    {
      title: 'Analysis',
      copy: 'FX, interest-rate, and contingent-analysis product areas.',
    },
    {
      title: 'Market data',
      copy: 'Market-curve visualizations and reusable calculation cards.',
    },
    {
      title: 'Workflows',
      copy: 'Notifications, journals, and deliverable-oriented flows.',
    },
    {
      title: 'Shared UI',
      copy: 'Components and interaction primitives used across the product.',
    },
  ],
  confirmedSharedContributions: [
    'Card, tile, step, accordion, and file-upload components',
    'Improvements and corrections to buttons, tables, modals, inputs, autocomplete, checkboxes, and date pickers',
    'Corrections in journal-entry workflows',
  ],
  uiSystem: [
    {
      title: 'Composition primitives',
      items: ['Card', 'TileCard', 'Steps', 'Accordion'],
      copy: 'Reusable building blocks for structured information and guided flows.',
    },
    {
      title: 'Data & file interaction',
      items: ['Table', 'FileS3Uploader', 'Modal'],
      copy: 'Common interaction surfaces for dense records, supporting actions, and file-based work.',
    },
    {
      title: 'Form experience',
      items: ['Button', 'Input', 'AutoComplete', 'Checkbox', 'DatePicker'],
      copy: 'Improvements and corrections to controls that make complex forms more dependable.',
    },
  ],
  engineeringDecisions: [
    {
      problem: 'Dense records need safe edits.',
      decision:
        'Keep the changed value, validation result, and pending row lifecycle visible in the interface.',
      why: 'Operators can see what still needs attention before a save or downstream action.',
    },
    {
      problem: 'Workflow queues can hide the overall state.',
      decision:
        'Use explicit status tabs with counts, focused record lists, and a clear selected state.',
      why: 'The interface communicates both the current task and the surrounding workload.',
    },
    {
      problem: 'Repeated interface behavior drifts across feature areas.',
      decision: 'Build on shared table, form, modal, and feedback primitives.',
      why: 'Improvements become repeatable and interaction expectations remain familiar.',
    },
  ],
  contributionNote:
    'Gabriel confirmed contributions across these feature areas and shared interface components. Dates, measurable outcomes, exact client terminology, and business impact remain intentionally unspecified until separately confirmed for publication.',
} as const;
