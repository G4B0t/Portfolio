import type { ProjectDefinition } from '@/types/project';

export const dbEncuentroProject: ProjectDefinition = {
  slug: 'db-encuentro',
  title: 'DBEncuentro',
  subtitle: 'University sports event operations',
  category: 'Client project',
  summary:
    'A full-stack platform connecting event setup, delegation registration, competition operations, credentials, and attendance control.',
  technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Sequelize', 'MySQL'],
  featured: true,
  visual: 'encuentro',
  role: 'Full-stack Developer',
};

export const dbEncuentroCaseStudy = {
  headline: 'One operational system for the complete life of a sports encounter.',
  introduction:
    'DBEncuentro supports a university sports event from preparation and participant enrollment through schedules, results, accreditation, and on-site reception.',
  contribution:
    'I handled the complete software development across the React interface, backend APIs, relational data model, business rules, and operational document workflows. Negotiation with the end client was handled by someone else.',
  capabilities: [
    {
      title: 'Configure the encounter',
      copy: 'Manage event phases, universities, representatives, disciplines, categories, venues, and the dates that govern registration and competition.',
    },
    {
      title: 'Register each delegation',
      copy: 'Enroll athletes, technical staff, guests, and committee members, with spreadsheet imports and eligibility rules based on the event configuration.',
    },
    {
      title: 'Operate the competition',
      copy: 'Publish schedules and news, record results, and consolidate medals into public discipline and university views.',
    },
    {
      title: 'Accredit and receive',
      copy: 'Generate printable credentials with QR codes, scan participants on arrival, and review attendance through operational reports.',
    },
  ],
  implementation: [
    {
      title: 'Role-aware React workspace',
      copy: 'React, Redux Toolkit, and React Router organize public views and protected workspaces for system administration, event management, university representatives, discipline administrators, and reception staff.',
    },
    {
      title: 'Express API and relational model',
      copy: 'Node.js, Express, Sequelize, and MySQL connect users, roles, universities, participants, disciplines, registrations, fixtures, venues, news, and medal records.',
    },
    {
      title: 'Operational rules and transactions',
      copy: 'Registration flows apply event phase, age, category, and participation constraints while transactional updates keep related enrollment and participant states consistent.',
    },
    {
      title: 'Documents and field operations',
      copy: 'Spreadsheet imports, filtered reports, browser-generated PDF credentials, QR generation, camera scanning, and attendance records support work before and during the encounter.',
    },
  ],
  demo: {
    title: 'Explore the event control center',
    description:
      'Switch between a fictional event overview, accreditation desk, and reception station. Select participants and simulate credential scans to inspect how the operational views stay connected.',
    note: 'Interactive portfolio demo · Fictional data · No external connection',
  },
  publicationNote:
    'This case study describes the implemented product and my confirmed contribution. All names, institutions, event records, results, and credentials in the demo are fictional; no client data, source code, credentials, or private infrastructure details are included.',
} as const;
