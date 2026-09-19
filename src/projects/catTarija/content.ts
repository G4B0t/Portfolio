export const catTarijaCaseStudy = {
  title: 'C.A.T. Tarija',
  category: 'Client project · Administrative operations',
  subtitle: 'Identity, access, and role-aware operations for the Colegio de Arquitectos de Tarija.',
  summary:
    'C.A.T. Tarija is a web platform for institutional administration. Its access model connects authenticated users, roles, operational processes, and role-specific navigation across the product.',
  technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Sequelize', 'MySQL'],
  pillars: [
    {
      title: 'Identity foundation',
      copy: 'User credentials, password changes, active sessions, and protected requests establish the system boundary.',
    },
    {
      title: 'Process-based access',
      copy: 'Roles are assigned the precise processes they need, rather than granting broad access to unrelated operations.',
    },
    {
      title: 'Focused operations',
      copy: 'Each active role receives a navigation surface aligned with its permitted institutional work.',
    },
  ],
  decisions: [
    {
      problem: 'One person may have more than one institutional responsibility.',
      decision: 'Model users and roles independently, then resolve the active role at session time.',
      why: 'The same account can work within the appropriate operational context without duplicating credentials.',
    },
    {
      problem: 'Navigation alone cannot enforce access boundaries.',
      decision: 'Pair role-aware menus and protected frontend routes with backend authentication and role checks.',
      why: 'The visible interface stays focused while server-side checks protect the operations themselves.',
    },
    {
      problem: 'Cashier operations need a deliberately limited workspace.',
      decision: 'Associate cash operations with the assigned user and expose only the relevant daily cash processes.',
      why: 'Caja 1 can concentrate on opening, daily entries, and closing without receiving system-wide administration access.',
    },
  ],
  contributionGroups: [
    {
      title: 'Full-stack identity and access',
      items: [
        'Implemented authentication, credential handling, user management, and password-change flows',
        'Built role, process, and permission management across frontend and backend',
        'Connected role-aware navigation with protected application routes and API authorization',
      ],
    },
    {
      title: 'Operational experience',
      items: [
        'Designed the role-conditioned menu and the related administrative workflows',
        'Supported limited-access cash operations, including opening, daily entries, and closing for Caja 1',
        'Delivered the work as part of a three-developer team',
      ],
    },
    {
      title: 'Delivery timeline',
      items: [
        'Development period: September 2024 to March 2025',
        'Installed on client-managed infrastructure in March 2025',
        'Ongoing contracted technical support',
      ],
    },
  ],
  confidentialityNote:
    'This case study uses an original portfolio demo and fictional records. It does not expose the production interface, source code, real users, operational data, infrastructure configuration, or live administrative links.',
} as const;
