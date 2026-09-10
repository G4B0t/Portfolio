import type { ProjectDefinition } from '@/types/project';
export const projects: ProjectDefinition[] = [
  {
    slug: 'pmca',
    title: 'PMCA',
    subtitle: 'Enterprise application',
    category: 'Professional work',
    summary:
      'A forthcoming case study. Details will be added after a careful, publication-safe review.',
    technologies: [],
    featured: true,
    visual: 'enterprise',
  },
  {
    slug: 'viva-aerobus',
    title: 'Viva Aerobus',
    subtitle: 'API engineering',
    category: 'Professional work',
    summary:
      'A forthcoming case study. Public details will be validated before publication.',
    technologies: [],
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
