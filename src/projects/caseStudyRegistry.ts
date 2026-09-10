import type { ComponentType } from 'react';
import { PMCACaseStudy } from '@/projects/pmca/PMCACaseStudy';
import { VivaAerobusCaseStudy } from '@/projects/vivaAerobus/VivaAerobusCaseStudy';

type CaseStudyComponent = ComponentType;

export const caseStudyRegistry: Record<string, CaseStudyComponent> = {
  pmca: PMCACaseStudy,
  'viva-aerobus': VivaAerobusCaseStudy,
};
