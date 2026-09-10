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
    subtitle: 'Engineering software',
    category: 'Academic project',
    summary:
      'A forthcoming case study for an engineering and scientific software product.',
    technologies: [],
    featured: true,
    visual: 'simulation',
  },
];
export const featuredProjects = projects.filter((project) => project.featured);
