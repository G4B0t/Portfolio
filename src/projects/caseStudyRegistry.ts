import type { ComponentType } from 'react';
import { GLISimulatorCaseStudy } from '@/projects/gliSimulator/GLISimulatorCaseStudy';
import { PMCACaseStudy } from '@/projects/pmca/PMCACaseStudy';
import { VivaAerobusCaseStudy } from '@/projects/vivaAerobus/VivaAerobusCaseStudy';
import { OlimpiadasDocentesCaseStudy } from '@/projects/olimpiadasDocentes/OlimpiadasDocentesCaseStudy';
import { CIABTarijaCaseStudy } from '@/projects/ciabTarija/CIABTarijaCaseStudy';

type CaseStudyComponent = ComponentType;

export const caseStudyRegistry: Record<string, CaseStudyComponent> = {
  'gli-simulator': GLISimulatorCaseStudy,
  pmca: PMCACaseStudy,
  'viva-aerobus': VivaAerobusCaseStudy,
  'olimpiadas-docentes': OlimpiadasDocentesCaseStudy,
  'ciab-tarija': CIABTarijaCaseStudy,
};
