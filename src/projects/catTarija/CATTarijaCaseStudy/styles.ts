import styled, { css } from 'styled-components';

export const Page = styled.div`
  display: grid;
  gap: clamp(4.5rem, 10vw, 8.5rem);
  padding-block: clamp(2rem, 6vw, 5rem) clamp(4.5rem, 10vw, 8rem);
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.9fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
  min-height: 30rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const HeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};

  > p {
    max-width: 43rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    line-height: 1.8;
  }
`;

export const Kicker = styled.span`
  color: #e7b16f;
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.5rem);
  letter-spacing: -0.065em;
  line-height: 0.94;
`;

export const Lead = styled.p`
  max-width: 43rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: clamp(1.3rem, 2.4vw, 1.9rem);
  line-height: 1.35;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const HeroVisual = styled.div`
  position: relative;
  display: grid;
  min-height: 29rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background:
    radial-gradient(circle at 76% 22%, rgba(230, 171, 85, 0.3), transparent 19%),
    radial-gradient(circle at 18% 78%, rgba(76, 124, 235, 0.34), transparent 28%),
    linear-gradient(145deg, #0d1935, #17234b 58%, #2a1834);
  box-shadow: ${({ theme }) => theme.shadows.card};
  place-items: center;

  &::before {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(226, 218, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(226, 218, 255, 0.07) 1px, transparent 1px);
    background-size: 3.25rem 3.25rem;
    content: '';
  }

  .access-card {
    position: absolute;
    z-index: 1;
    display: grid;
    gap: 0.42rem;
    width: min(13.2rem, 44%);
    padding: 1rem;
    border: 1px solid rgba(234, 226, 255, 0.44);
    border-radius: 0.7rem;
    background: linear-gradient(145deg, rgba(16, 26, 59, 0.9), rgba(8, 13, 35, 0.7));
    box-shadow: 0 1.2rem 2.5rem rgba(3, 6, 22, 0.26);
  }

  .access-card svg {
    color: #e7b16f;
  }

  .access-card span,
  .readout span {
    color: rgba(223, 216, 247, 0.68);
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .access-card strong,
  .readout strong {
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  .identity {
    top: 14%;
    left: 10%;
  }

  .role {
    top: 41%;
    right: 10%;
  }

  .operation {
    bottom: 13%;
    left: 16%;
  }

  .connector {
    position: absolute;
    z-index: 0;
    width: 35%;
    height: 1px;
    background: linear-gradient(90deg, #e7b16f, rgba(231, 177, 111, 0.12));
    transform-origin: left;
  }

  .connector.first {
    top: 37%;
    left: 38%;
    transform: rotate(26deg);
  }

  .connector.second {
    bottom: 30%;
    left: 33%;
    transform: rotate(-20deg);
  }

  .readout {
    position: absolute;
    right: 1.4rem;
    bottom: 1.4rem;
    z-index: 1;
    display: grid;
    gap: 0.35rem;
    padding: 0.8rem 0.9rem;
    border: 1px solid rgba(231, 177, 111, 0.44);
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(7, 11, 30, 0.82);
  }

  .readout strong {
    color: #f0bd82;
  }
`;

export const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 4rem);

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const threeColumnGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  ${threeColumnGrid}

  article {
    padding: 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(13, 16, 38, 0.68);
  }

  svg {
    color: #e7b16f;
  }

  h3 {
    margin: 1rem 0 0.6rem;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.7;
  }
`;

export const Architecture = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.75rem;

  > * {
    flex: 1 1 0;
  }

  > * + *::before {
    position: absolute;
    top: 50%;
    right: calc(100% + 0.1rem);
    width: 0.55rem;
    height: 1px;
    background: #e7b16f;
    content: '';
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > * + *::before {
      display: none;
    }
  }
`;

export const ArchitectureNode = styled.div<{ $accent: boolean }>`
  position: relative;
  display: grid;
  min-height: 6rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(10, 15, 36, 0.76);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  place-items: center;
  text-align: center;

  ${({ $accent }) =>
    $accent &&
    css`
      border-color: rgba(231, 177, 111, 0.68);
      background: rgba(181, 99, 52, 0.16);
      color: ${({ theme }) => theme.colors.text};
    `}
`;

export const DecisionGrid = styled.div`
  ${threeColumnGrid}

  article {
    display: grid;
    gap: 0.55rem;
    padding: 1.35rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(13, 16, 38, 0.68);
  }

  span {
    color: #e7b16f;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    margin-bottom: 0.55rem;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.65;
  }
`;

export const ContributionGrid = styled.div`
  ${threeColumnGrid}

  article {
    padding: 1.35rem;
    border-top: 2px solid #e7b16f;
    background: rgba(13, 16, 38, 0.68);
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  ul {
    display: grid;
    gap: 0.8rem;
    margin: 1.1rem 0 0;
    padding-left: 1.15rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.6;
  }

  li::marker {
    color: #e7b16f;
  }
`;

export const Note = styled.aside`
  padding: 1.15rem 1.35rem;
  border-left: 2px solid #e7b16f;
  background: rgba(190, 119, 57, 0.09);

  p {
    max-width: 68rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.75;
  }
`;

export const Closing = styled.section`
  display: grid;
  justify-items: center;
  gap: 1.1rem;
  max-width: 52rem;
  margin-inline: auto;
  text-align: center;

  p {
    margin: 0;
    color: #e7b16f;
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  h2 {
    margin: 0;
    font-size: clamp(2rem, 5vw, 3.9rem);
    letter-spacing: -0.055em;
    line-height: 1;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
  }
`;
