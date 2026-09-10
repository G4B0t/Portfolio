import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import {
  Actions,
  CapabilityList,
  Eyebrow,
  HeroContent,
  HeroSection,
  HeroVisual,
  Lead,
  Signal,
  Title,
} from './styles';

export function Hero() {
  const reducedMotion = useReducedMotion();
  const entrance = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55 },
      };
  return (
    <HeroSection>
      <HeroVisual aria-hidden="true" />
      <Container>
        <HeroContent as={motion.div} {...entrance}>
          <Eyebrow>Hello, I&apos;m Gabriel</Eyebrow>
          <Title>
            Software
            <br />
            <span>Engineer.</span>
          </Title>
          <Lead>{profile.introduction}</Lead>
          <CapabilityList aria-label="Core capabilities">
            {['Clean code', 'Thoughtful systems', 'Real impact'].map((item) => (
              <Signal key={item}>{item}</Signal>
            ))}
          </CapabilityList>
          <Actions>
            <ButtonLink href="#work">
              View projects <ArrowDown size={18} />
            </ButtonLink>
            <ButtonLink href="#contact" data-variant="quiet">
              Contact <ArrowUpRight size={18} />
            </ButtonLink>
          </Actions>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}
