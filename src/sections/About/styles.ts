import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: grid;
  align-items: center;
  min-height: clamp(28rem, 36vw, 36rem);
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  background-image:
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(5, 6, 17, 0.88) 36%,
      rgba(5, 6, 17, 0.28) 72%,
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 32rem;
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
