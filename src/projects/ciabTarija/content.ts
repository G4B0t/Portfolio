export const ciabTarijaCaseStudy = {
  title: 'CIAB Tarija',
  category: 'Client project · Membership operations',
  subtitle:
    'A role-aware platform for member administration and institutional operations.',
  summary:
    'CIAB Tarija is a web platform supporting member records, administrative operations, fees and income, institutional documents, and certificate verification for the Colegio de Ingenieros Agrónomos de Bolivia, Filial Tarija.',
  technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Sequelize', 'MySQL'],
  pillars: [
    {
      title: 'Member lifecycle',
      copy: 'Member records connect registration, status, professional information, account history, documents, and verification workflows.',
    },
    {
      title: 'Administrative operations',
      copy: 'Institutional maintenance covers users, roles, boards, reference data, fees, income, news, and general organization settings.',
    },
    {
      title: 'Operational outputs',
      copy: 'Printable reports, receipts, certificates, and QR-based verification turn administrative records into usable institutional artifacts.',
    },
  ],
  decisions: [
    {
      problem:
        'A member record has financial and administrative consequences from its first registration.',
      decision:
        'Connect member creation to an initial fee record within the backend workflow.',
      why: 'The initial operational state is established together with the member record instead of depending on a separate manual step.',
    },
    {
      problem:
        'Different administrative responsibilities need focused access to a large operational surface.',
      decision:
        'Organize the interface around role-aware navigation and protected administrative routes.',
      why: 'The system can present relevant tools while the backend applies authentication and role checks to protected operations.',
    },
    {
      problem:
        'Institutional documents need a way to be checked outside the administrative workspace.',
      decision:
        'Provide certificate and member-verification flows using signed verification tokens.',
      why: 'A document can be checked through a dedicated public verification experience without opening the full back-office interface.',
    },
  ],
  contributionGroups: [
    {
      title: 'Client collaboration',
      items: [
        'Led negotiations and maintained the working relationship with CIAB Tarija',
        'Translated operational feedback between the client and the development team',
        'Continues contracted technical support for defects and minor corrections',
      ],
    },
    {
      title: 'Frontend delivery',
      items: [
        'Contributed member dashboard views and associated operational surfaces',
        'Contributed CRUD interfaces for administrative workflows',
        'Supported iterative adjustments as institutional requirements evolved',
      ],
    },
    {
      title: 'Delivery timeline',
      items: [
        'Technical preparation began in 2024',
        'Formal CIAB Tarija engagement began in July 2024',
        'The platform went live in February 2025 and remains under technical support',
      ],
    },
  ],
  confidentialityNote:
    'This case study uses original portfolio diagrams and fictional records. It does not expose the production interface, source code, personal data, infrastructure configuration, documents, or live verification links.',
} as const;
