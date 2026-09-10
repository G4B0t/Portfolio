export const pmcaCaseStudy = {
  title: 'PMCA',
  category: 'Enterprise application',
  subtitle: 'Designing dependable interfaces for data-heavy financial workflows.',
  summary:
    'PMCA is a large enterprise web application built around modular React features, reusable interface primitives, asynchronous state management, and data-intensive operational workflows.',
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
      copy: 'Feature modules remain separated while sharing typed models, UI primitives, API boundaries, and state infrastructure.',
    },
    {
      title: 'Data-intensive interaction',
      copy: 'Dense operational screens combine filtering, selection, controlled edits, validation, exports, and domain-aware table behavior.',
    },
    {
      title: 'Stateful workflows',
      copy: 'User intent progresses through validation, asynchronous actions, API work, state reconciliation, and visible feedback.',
    },
  ],
  confirmedFeatureContributions: [
    'Deals and contingent-analysis workflows',
    'FX analysis and interest-rate analysis',
    'Hedge Accounting administration and its V2 evolution',
    'Trade Notification workflows',
    'Corrections to Journal Entry workflows',
    'Initial UI design and subsequent corrections for Run Deliverables',
    'Initial UI design and subsequent corrections for Scheduled Deliverables',
    'Commodity, FX, and IR market-curve cards',
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
      copy: 'Commodity, FX, and IR market-curve cards alongside reporting surfaces.',
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
  sharedComponentsCreated: ['Card', 'TileCard', 'Steps', 'Accordion', 'FileS3Uploader'],
  sharedUIImprovements: [
    'Button',
    'Table',
    'Modal',
    'Input',
    'AutoComplete',
    'Checkbox',
    'DatePicker',
  ],
  uiSystem: [
    {
      title: 'Components created',
      items: ['Card', 'TileCard', 'Steps', 'Accordion', 'FileS3Uploader'],
      copy: 'New reusable primitives for structured information, guided flows, and file-based interactions.',
    },
    {
      title: 'Shared UI improvements',
      items: [
        'Button',
        'Table',
        'Modal',
        'Input',
        'AutoComplete',
        'Checkbox',
        'DatePicker',
      ],
      copy: 'Corrections and improvements to existing controls used across complex forms and tables.',
    },
  ],
  engineeringDecisions: [
    {
      problem: 'Complex table editing needs explicit state.',
      decision: 'Represent untouched, changed, invalid, and pending rows explicitly.',
      why: 'The interface can communicate what changed and what still requires attention.',
    },
    {
      problem: 'Repeated interaction patterns drift across feature areas.',
      decision: 'Build on shared table, form, modal, and feedback primitives.',
      why: 'Feature code can focus on domain behavior while interaction patterns remain familiar.',
    },
    {
      problem: 'Async workflows can hide loading, errors, and validation state.',
      decision: 'Coordinate transitions through explicit asynchronous state management.',
      why: 'Feedback stays predictable while application state remains easier to trace.',
    },
  ],
  confidentialityNote:
    'Product interfaces and data shown in this case study are original recreations designed to communicate engineering concepts. Proprietary source code, production data, customer information, and confidential implementation details are intentionally excluded.',
} as const;
