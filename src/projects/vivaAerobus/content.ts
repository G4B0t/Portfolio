export const vivaAerobusCaseStudy = {
  title: 'Viva Aerobus',
  category: 'Professional work · API engineering',
  subtitle: 'Delivering dependable API changes for operational airline workflows.',
  summary:
    'Viva Aerobus is a large API platform supporting operational travel workflows. My contribution combined API change delivery with reproducible contract validation, regression checks, and evidence-driven verification.',
  technologies: [
    'C#',
    'ASP.NET Core',
    '.NET Core 3.1',
    'REST APIs',
    'NUnit',
    'Moq',
    'Postman / Newman',
  ],
  pillars: [
    {
      title: 'Operational API surface',
      copy: 'A modular HTTP API supports multiple travel and booking-oriented flows through versioned endpoints, typed contracts, and domain-focused modules.',
    },
    {
      title: 'Change validation',
      copy: 'Each delivery needs more than an implementation: expected behavior, edge cases, regression checks, and observable evidence must remain aligned.',
    },
    {
      title: 'Evidence-driven delivery',
      copy: 'Ticket-scoped collections, repeatable scripts, test matrices, and before/after evidence make API behavior easier to review and reproduce.',
    },
  ],
  decisions: [
    {
      problem: 'A contract change can affect several operational scenarios.',
      decision:
        'Exercise the change through focused, repeatable scenario collections instead of relying on a single happy-path response.',
      why: 'Expected behavior and regression coverage remain visible while the API evolves.',
    },
    {
      problem: 'A passing request alone is weak delivery evidence.',
      decision:
        'Pair implementation validation with test-case matrices, assertions, and before/after evidence.',
      why: 'Reviewers can reason about the change without reconstructing the full environment.',
    },
    {
      problem:
        'Operational APIs connect domain behavior, integrations, and infrastructure concerns.',
      decision:
        'Keep the public case study centered on generic request, validation, and contract patterns.',
      why: 'The engineering method is clear without exposing proprietary endpoints or business rules.',
    },
  ],
  contributionGroups: [
    {
      title: 'API change delivery',
      items: [
        'Ticket-scoped API changes for operational travel workflows',
        'Implementation follow-up supported by issue evidence and regression validation',
        'Scenario coverage across booking-oriented, ancillary, and disruption-related flows',
      ],
    },
    {
      title: 'Contract validation',
      items: [
        'Postman collections organized by delivery ticket',
        'Test-case matrices and assertion-driven request validation',
        'Smoke, mock, and reproducible regression checks',
      ],
    },
    {
      title: 'Delivery evidence',
      items: [
        'Before-and-after test evidence for issue verification',
        'Structured execution outputs and written test guides',
        'Ticket exports used to preserve delivery context and traceability',
      ],
    },
  ],
  confidentialityNote:
    'Requests, responses, technical examples, and visuals in this case study are original recreations. Proprietary source code, production data, customer information, internal endpoints, ticket details, and confidential implementation rules are excluded.',
} as const;
