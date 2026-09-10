import { Braces, ChartNoAxesCombined, Layers3, Waypoints, Workflow } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { skills, type SkillIconKey } from '@/content/skills';
import { Card, Icon, List, Section } from './styles';
const icons: Record<SkillIconKey, typeof Layers3> = { layers: Layers3, braces: Braces, waypoints: Waypoints, workflow: Workflow, chart: ChartNoAxesCombined };
export function Skills() { return <Section id="skills"><Container><SectionHeader eyebrow="03 / Capabilities" title="A practical engineering range.">Focused areas that shape how I approach software systems.</SectionHeader><List>{skills.map((skill) => { const SkillIcon = icons[skill.icon]; return <Card key={skill.name}><Icon><SkillIcon size={21} /></Icon><div><h3>{skill.name}</h3><p>{skill.description}</p></div></Card>; })}</List></Container></Section>; }
