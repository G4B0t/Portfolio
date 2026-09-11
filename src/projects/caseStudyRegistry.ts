import type { ComponentType } from 'react';
import { GLISimulatorCaseStudy } from '@/projects/gliSimulator/GLISimulatorCaseStudy';
import { PMCACaseStudy } from '@/projects/pmca/PMCACaseStudy';
import { VivaAerobusCaseStudy } from '@/projects/vivaAerobus/VivaAerobusCaseStudy';

type CaseStudyComponent = ComponentType;

export const caseStudyRegistry: Record<string, CaseStudyComponent> = {
  'gli-simulator': GLISimulatorCaseStudy,
  pmca: PMCACaseStudy,
  'viva-aerobus': VivaAerobusCaseStudy,
};
