import type { ProjectDefinition } from '@/types/project';
export const projects: ProjectDefinition[] = [
  {
    slug: 'pmca',
    title: 'PMCA',
    subtitle: 'Enterprise frontend engineering',
    category: 'Professional work',
    summary: 'Frontend architecture for data-intensive enterprise workflows.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'DataGridPro'],
    featured: true,
    visual: 'enterprise',
  },
  {
    slug: 'viva-aerobus',
    title: 'Viva Aerobus',
    subtitle: 'API delivery and validation',
    category: 'Professional work',
    summary:
      'API change delivery supported by contract validation and regression evidence.',
    technologies: ['C#', 'ASP.NET Core', 'REST APIs', 'Postman / Newman'],
    featured: true,
    visual: 'api',
  },
  {
    slug: 'gli-simulator',
    title: 'GLI Simulator',
    subtitle: 'Scientific simulation platform',
    category: 'Academic project',
    summary:
      'End-to-end software for simulating and interpreting intermittent gas-lift cycles.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript'],
    featured: true,
    visual: 'simulation',
  },
];
export const featuredProjects = projects.filter((project) => project.featured);
