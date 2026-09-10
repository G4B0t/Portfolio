import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { Background, Content, Copy, Element, Location } from './styles';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <Element ref={footerRef}>
      <Background aria-hidden="true" style={{ y: reducedMotion ? 0 : backgroundY }} />
      <Container>
        <Content>
          <Location>TARIJA · BOLIVIA</Location>
          <Copy>
            © {new Date().getFullYear()} {profile.name}. Building what&apos;s next.
          </Copy>
        </Content>
      </Container>
    </Element>
  );
}
