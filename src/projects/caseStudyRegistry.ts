import type { ComponentType } from 'react';
import { PMCACaseStudy } from '@/projects/pmca/PMCACaseStudy';

type CaseStudyComponent = ComponentType;

export const caseStudyRegistry: Record<string, CaseStudyComponent> = {
  pmca: PMCACaseStudy,
};
