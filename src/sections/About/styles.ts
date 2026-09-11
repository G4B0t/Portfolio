import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  min-height: clamp(38rem, 49vw, 47rem);
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  background-image:
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(5, 6, 17, 0.91) 42%,
      rgba(5, 6, 17, 0.3) 74%,
      rgba(5, 6, 17, 0.16) 100%
    ),
    linear-gradient(
      180deg,
      rgba(5, 6, 17, 0.12),
      ${({ theme }) => theme.colors.background} 100%
    ),
    url('/assets/about-reflection-backdrop.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    display: grid;
    gap: ${({ theme }) => theme.spacing[5]};
  }

  > div > p {
    max-width: 42rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.75;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.72);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 47rem;
    background-image:
      linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.background} 0%,
        rgba(5, 6, 17, 0.88) 66%,
        rgba(5, 6, 17, 0.4) 100%
      ),
      linear-gradient(
        180deg,
        rgba(5, 6, 17, 0.14),
        ${({ theme }) => theme.colors.background} 100%
      ),
      url('/assets/about-reflection-backdrop.png');
    background-position: 62% center;
  }
`;

export const Education = styled.div`
  display: grid;
  gap: 0.25rem;
  max-width: 42rem;
  padding-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.borderStrong};

  span {
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const Principles = styled.div`
  display: grid;
  gap: 0;
  max-width: 42rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  article {
    display: grid;
    grid-template-columns: 2.75rem minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[4]} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  article > span {
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }

  p {
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.65;
  }
`;

export const Bridge = styled.p`
  max-width: 42rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: 1.7;
`;
