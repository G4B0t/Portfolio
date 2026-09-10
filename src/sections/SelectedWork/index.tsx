import { motion, useReducedMotion } from 'framer-motion';
import { ProjectCard } from '@/components/common/ProjectCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { featuredProjects } from '@/content/projects';
import { Grid, Section } from './styles';
export function SelectedWork() { const reducedMotion = useReducedMotion(); return <Section id="work"><Container><SectionHeader eyebrow="02 / Selected work" title="Projects with intent.">A growing collection of work, with public-facing details added only after careful review.</SectionHeader><Grid>{featuredProjects.map((project, index) => <motion.div key={project.slug} initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .4, delay: index * .08 }}><ProjectCard project={project} /></motion.div>)}</Grid></Container></Section>; }
