import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Element = styled.footer`
  position: relative;
  isolation: isolate;
  display: grid;
  align-items: center;
  min-height: clamp(15rem, 22vw, 20rem);
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
`;

export const Background = styled(motion.div)`
  position: absolute;
  z-index: -1;
  top: -2rem;
  right: 0;
  bottom: -2rem;
  left: 0;
  background-image:
    linear-gradient(
      90deg,
      rgba(5, 6, 17, 0.78) 0%,
      rgba(5, 6, 17, 0.34) 48%,
      rgba(5, 6, 17, 0.2) 100%
    ),
    linear-gradient(180deg, rgba(5, 6, 17, 0.12) 20%, rgba(5, 6, 17, 0.72) 100%),
    url('/assets/footer-landscape.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
`;

export const Content = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.7rem;
`;

export const Location = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  letter-spacing: 0.16em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
`;

export const Copy = styled.p`
  max-width: 38rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 600;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
`;
