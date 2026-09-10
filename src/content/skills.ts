export type SkillIconKey = 'layers' | 'braces' | 'waypoints' | 'workflow' | 'chart';
export interface SkillDefinition { name: string; description: string; icon: SkillIconKey; }
export const skills: SkillDefinition[] = [
  { name: 'Frontend engineering', description: 'Clear, responsive product interfaces', icon: 'layers' },
  { name: 'Full-stack development', description: 'Connected software systems', icon: 'braces' },
  { name: 'API design & testing', description: 'Reliable service integrations', icon: 'waypoints' },
  { name: 'Automation', description: 'Repeatable engineering workflows', icon: 'workflow' },
  { name: 'Engineering software', description: 'Technical and scientific tools', icon: 'chart' },
];
