export type ProjectVisualKey =
  'enterprise' | 'api' | 'simulation' | 'sports' | 'association';
export interface ProjectDefinition {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  technologies: string[];
  featured: boolean;
  visual: ProjectVisualKey;
  year?: number;
  role?: string;
}
