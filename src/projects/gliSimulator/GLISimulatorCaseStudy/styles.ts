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
    max-width: 42rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    line-height: 1.8;
  }
`;

export const Kicker = styled.span`
  color: ${({ theme }) => theme.colors.accentBright};
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
  max-width: 40rem;
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
  min-height: 29rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background:
    radial-gradient(circle at 66% 33%, rgba(69, 220, 196, 0.32), transparent 17%),
    linear-gradient(145deg, rgba(11, 28, 52, 0.98), rgba(7, 12, 28, 0.96));
  box-shadow: ${({ theme }) => theme.shadows.card};

  &::before,
  &::after {
    position: absolute;
    inset: 0;
    pointer-events: none;
    content: '';
  }

  &::before {
    background-image:
      linear-gradient(rgba(121, 214, 208, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(121, 214, 208, 0.08) 1px, transparent 1px);
    background-size: 3.25rem 3.25rem;
  }

  &::after {
    background: linear-gradient(180deg, transparent 58%, rgba(6, 10, 24, 0.62));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 24rem;
  }
`;

export const ModelDiagram = styled.div`
  position: absolute;
  inset: 1.5rem;
  z-index: 1;

  .wellbore {
    position: absolute;
    top: 8%;
    bottom: 3%;
    left: 20%;
    width: 5.6rem;
    border: 1px solid rgba(162, 235, 224, 0.56);
    border-radius: 3rem 3rem 0.8rem 0.8rem;
    background: rgba(3, 16, 30, 0.52);
    box-shadow: 0 0 2.5rem rgba(54, 224, 204, 0.12);
  }

  .tubing,
  .annulus,
  .fluid,
  .valve {
    position: absolute;
    display: block;
  }

  .tubing {
    top: 0.75rem;
    bottom: 0;
    left: 50%;
    width: 1.4rem;
    border-inline: 1px solid rgba(231, 255, 252, 0.78);
    transform: translateX(-50%);
  }

  .annulus {
    top: 1rem;
    bottom: 0;
    left: 0.7rem;
    width: 0.5rem;
    border-radius: 999px;
    background: linear-gradient(180deg, #54e4d4 0%, rgba(84, 228, 212, 0.08) 74%);
    box-shadow: 0 0 1rem rgba(84, 228, 212, 0.7);
  }

  .fluid {
    right: 0.7rem;
    bottom: 0;
    left: 0.7rem;
    height: 36%;
    border-radius: 0 0 2rem 2rem;
    background: linear-gradient(
      180deg,
      rgba(105, 115, 255, 0.1),
      rgba(105, 115, 255, 0.6)
    );
  }

  .valve {
    top: 41%;
    left: -0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid #ffb36a;
    border-radius: 50%;
    background: #17142e;
    box-shadow: 0 0 1rem rgba(255, 179, 106, 0.55);
  }

  .readout {
    position: absolute;
    right: 0;
    bottom: 2%;
    display: grid;
    gap: 0.35rem;
    padding: 0.85rem 1rem;
    border: 1px solid rgba(145, 208, 202, 0.32);
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(5, 14, 30, 0.78);

    span {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: ${({ theme }) => theme.typography.sizes.xs};
      text-transform: uppercase;
    }

    strong {
      color: ${({ theme }) => theme.colors.accentBright};
      font-family: ${({ theme }) => theme.typography.display};
      font-size: ${({ theme }) => theme.typography.sizes.sm};
    }
  }
`;

export const ModelLine = styled.div`
  position: absolute;
  top: 27%;
  right: 9%;
  left: 31%;
  height: 13rem;
  border-top: 1px dashed rgba(98, 227, 211, 0.68);
  border-right: 1px dashed rgba(98, 227, 211, 0.68);
  border-radius: 0 2rem 0 0;
  transform: skewY(-14deg);
`;

export const Signal = styled.span<{ $position: 'one' | 'two' | 'three' }>`
  position: absolute;
  display: grid;
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(139, 236, 224, 0.74);
  border-radius: 50%;
  background: rgba(8, 31, 48, 0.88);
  box-shadow: 0 0 1.2rem rgba(84, 228, 212, 0.46);
  color: #bdfcf4;
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  place-items: center;

  ${({ $position }) =>
    ({
      one: css`
        top: 17%;
        right: 15%;
      `,
      two: css`
        top: 43%;
        right: 35%;
      `,
      three: css`
        top: 59%;
        right: 8%;
      `,
    })[$position]}
`;

export const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 4rem);

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.base};
    line-height: 1.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const sharedGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  ${sharedGrid}

  article {
    padding: 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(12, 16, 36, 0.68);
  }

  svg {
    color: ${({ theme }) => theme.colors.accentBright};
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
    background: ${({ theme }) => theme.colors.accentBright};
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
  background: rgba(10, 16, 36, 0.76);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  place-items: center;
  text-align: center;

  ${({ $accent }) =>
    $accent &&
    css`
      border-color: rgba(84, 228, 212, 0.68);
      background: rgba(45, 194, 187, 0.14);
      color: ${({ theme }) => theme.colors.text};
    `}
`;

export const DecisionGrid = styled.div`
  ${sharedGrid}

  article {
    display: grid;
    gap: 0.55rem;
    padding: 1.35rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(12, 16, 36, 0.68);
  }

  span {
    color: ${({ theme }) => theme.colors.accentBright};
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
  ${sharedGrid}

  article {
    padding: 1.35rem;
    border-top: 2px solid ${({ theme }) => theme.colors.accentBright};
    background: rgba(12, 16, 36, 0.68);
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
    color: ${({ theme }) => theme.colors.accentBright};
  }
`;

export const CodeBlock = styled.pre`
  margin: 0;
  padding: clamp(1rem, 3vw, 1.75rem);
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(6, 10, 23, 0.9);
  color: #bdfcf4;
  font-family: 'Cascadia Code', 'Consolas', monospace;
  font-size: clamp(0.74rem, 1.5vw, 0.9rem);
  line-height: 1.75;
`;

export const Note = styled.aside`
  padding: 1.15rem 1.35rem;
  border-left: 2px solid ${({ theme }) => theme.colors.accentBright};
  background: rgba(45, 194, 187, 0.08);

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
    color: ${({ theme }) => theme.colors.accentBright};
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
