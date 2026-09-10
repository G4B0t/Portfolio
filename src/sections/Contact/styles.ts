import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 38rem;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  display: grid;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-image:
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(5, 6, 17, 0.94) 32%,
      rgba(5, 6, 17, 0.44) 57%,
      rgba(5, 6, 17, 0.08) 100%
    ),
    linear-gradient(
      180deg,
      rgba(5, 6, 17, 0.1),
      ${({ theme }) => theme.colors.background} 100%
    ),
    url('/assets/gabriel-contact-anime.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 42rem;
    background-image:
      linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.background} 0%,
        rgba(5, 6, 17, 0.9) 64%,
        rgba(5, 6, 17, 0.42) 100%
      ),
      linear-gradient(
        180deg,
        rgba(5, 6, 17, 0.16),
        ${({ theme }) => theme.colors.background} 100%
      ),
      url('/assets/gabriel-contact-anime.png');
    background-position: 60% center;
  }
`;
export const Box = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 42rem;
  padding: ${({ theme }) => theme.spacing[7]};
  border-left: 1px solid ${({ theme }) => theme.colors.accentBright};
  background: linear-gradient(90deg, rgba(5, 6, 17, 0.72), rgba(5, 6, 17, 0.22));
  box-shadow: inset 1rem 0 2rem rgba(5, 6, 17, 0.18);
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;
export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
export const Title = styled.h2`
  max-width: 12ch;
  margin: 0;
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.55);
`;
export const Copy = styled.p`
  max-width: 38rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.75);
`;
