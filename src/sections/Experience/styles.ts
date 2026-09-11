import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  min-height: clamp(40rem, 52vw, 52rem);
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  background-image:
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(5, 6, 17, 0.91) 42%,
      rgba(5, 6, 17, 0.32) 74%,
      rgba(5, 6, 17, 0.16) 100%
    ),
    linear-gradient(
      180deg,
      rgba(5, 6, 17, 0.12),
      ${({ theme }) => theme.colors.background} 100%
    ),
    url('/assets/experience-journey-backdrop.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    display: grid;
    gap: ${({ theme }) => theme.spacing[5]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 50rem;
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
      url('/assets/experience-journey-backdrop.png');
    background-position: 62% center;
  }
`;

export const Timeline = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 52rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  article {
    display: grid;
    grid-template-columns: minmax(8rem, 0.35fr) minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing[5]};
    padding: ${({ theme }) => theme.spacing[5]} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  article > div > p {
    margin-top: 0.4rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    article {
      grid-template-columns: 1fr;
      gap: ${({ theme }) => theme.spacing[3]};
    }
  }
`;

export const Meta = styled.div`
  display: grid;
  align-content: start;
  gap: 0.35rem;

  span {
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.45;
  }
`;

export const Highlights = styled.ul`
  display: grid;
  gap: 0.65rem;
  margin: ${({ theme }) => theme.spacing[4]} 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.6;
  }

  li::before {
    position: absolute;
    top: 0.67em;
    left: 0;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accentBright};
    box-shadow: 0 0 0.6rem rgba(180, 138, 255, 0.72);
    content: '';
  }
`;

export const Bridge = styled.p`
  max-width: 52rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: 1.7;
`;
