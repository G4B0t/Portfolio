import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ProjectCard } from '@/components/common/ProjectCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { featuredProjects } from '@/content/projects';
import { Counter, Controls, DirectionButton, Showcase, Slide, Section } from './styles';

export function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeProject = featuredProjects[activeIndex];
  const total = featuredProjects.length;
  const showPrevious = () => setActiveIndex((index) => (index - 1 + total) % total);
  const showNext = () => setActiveIndex((index) => (index + 1) % total);

  return (
    <Section id="work">
      <Container>
        <SectionHeader eyebrow="02 / Selected work" title="Projects with intent.">
          A growing collection of work, with public-facing details added only after
          careful review.
        </SectionHeader>
        <Showcase>
          <AnimatePresence mode="wait" initial={false}>
            <Slide
              key={activeProject.slug}
              as={motion.div}
              initial={reducedMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, x: -18 }}
              transition={{ duration: 0.28 }}
            >
              <ProjectCard project={activeProject} />
            </Slide>
          </AnimatePresence>
          <Controls>
            <Counter aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </Counter>
            <div>
              <DirectionButton
                type="button"
                onClick={showPrevious}
                aria-label="Show previous project"
              >
                <ArrowLeft size={18} />
              </DirectionButton>
              <DirectionButton
                type="button"
                onClick={showNext}
                aria-label="Show next project"
              >
                <ArrowRight size={18} />
              </DirectionButton>
            </div>
          </Controls>
        </Showcase>
      </Container>
    </Section>
  );
}
