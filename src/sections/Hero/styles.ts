import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  align-items: center;
  min-height: clamp(39rem, 55vw, 46rem);
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 38rem;
  padding-top: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: 2rem;
    background: linear-gradient(
      90deg,
      rgba(5, 6, 17, 0.96) 0%,
      rgba(5, 6, 17, 0.76) 70%,
      transparent 100%
    );
  }
`;

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::after {
    content: '';
    width: 3rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.accentSoft};
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 0.84;
  letter-spacing: -0.085em;
  text-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);

  & span {
    background: linear-gradient(
      105deg,
      ${({ theme }) => theme.colors.text} 5%,
      #d0a0ff 50%,
      ${({ theme }) => theme.colors.accentBright}
    );
    background-clip: text;
    color: transparent;
  }
`;

export const Lead = styled.p`
  max-width: 32rem;
  margin: ${({ theme }) => theme.spacing[5]} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.72);
`;
export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[5]};
  & [data-variant='quiet'] {
    background: rgba(5, 6, 17, 0.5);
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }
`;
export const CapabilityList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[5]} 0 0;
  padding: 0;
  list-style: none;
`;
export const Signal = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
  text-transform: uppercase;
  &::before {
    content: '•';
    margin-right: 0.45rem;
    color: ${({ theme }) => theme.colors.accentBright};
  }
`;

export const HeroVisual = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image:
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(5, 6, 17, 0.97) 27%,
      rgba(5, 6, 17, 0.38) 58%,
      rgba(5, 6, 17, 0.1) 78%,
      rgba(5, 6, 17, 0.46) 100%
    ),
    linear-gradient(
      180deg,
      rgba(5, 6, 17, 0.12) 42%,
      ${({ theme }) => theme.colors.background} 100%
    ),
    url('/assets/gabriel-hero-anime.png');
  background-position: center, center, center;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    inset: 0;
    content: '';
    background: radial-gradient(
      circle at 72% 20%,
      rgba(119, 83, 255, 0.16),
      transparent 27rem
    );
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image:
      linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.background} 0%,
        rgba(5, 6, 17, 0.94) 52%,
        rgba(5, 6, 17, 0.48) 90%
      ),
      linear-gradient(
        180deg,
        rgba(5, 6, 17, 0.1) 45%,
        ${({ theme }) => theme.colors.background} 100%
      ),
      url('/assets/gabriel-hero-anime.png');
    background-position:
      center,
      center,
      62% center;
  }
`;
