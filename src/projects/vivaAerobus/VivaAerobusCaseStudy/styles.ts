import styled, { css } from 'styled-components';

export const Page = styled.article`
  padding: ${({ theme }) => theme.spacing[7]} 0 ${({ theme }) => theme.spacing[9]};

  & > a {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.accentBright};
    font-weight: 700;
  }
`;

export const Hero = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
  gap: ${({ theme }) => theme.spacing[7]};
  align-items: center;
  min-height: 33rem;
  padding: ${({ theme }) => theme.spacing[7]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const HeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  & > p:not(:first-child) {
    margin: 0;
    max-width: 42rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

export const Kicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.blueAccent};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  line-height: 0.9;
  letter-spacing: -0.07em;
`;

export const Lead = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.35rem, 2.3vw, 2rem);
  font-weight: 650;
  line-height: 1.2;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const HeroVisual = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 25rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background:
    radial-gradient(circle at 70% 22%, rgba(74, 117, 232, 0.33), transparent 24%),
    linear-gradient(140deg, rgba(17, 39, 87, 0.85), rgba(5, 7, 19, 0.95));
  box-shadow: ${({ theme }) => theme.shadows.card};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 68rem;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  article {
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: linear-gradient(145deg, rgba(18, 39, 81, 0.62), rgba(9, 11, 30, 0.78));
  }

  svg {
    color: ${({ theme }) => theme.colors.blueAccent};
  }

  h3 {
    margin: ${({ theme }) => theme.spacing[3]} 0 ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Flow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;

  & > *:not(:last-child)::after {
    margin-left: ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.colors.blueAccent};
    content: '→';
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    & > *:not(:last-child)::after {
      display: block;
      margin: 0.6rem 0 0;
      content: '↓';
      text-align: center;
    }
  }
`;

export const FlowNode = styled.div<{ $accent?: boolean }>`
  padding: 0.85rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(12, 16, 39, 0.75);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  ${({ $accent, theme }) =>
    $accent &&
    css`
      border-color: ${theme.colors.blueAccent};
      background: rgba(74, 117, 232, 0.18);
      color: ${theme.colors.text};
    `}
`;

export const EvidenceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  div {
    padding: ${({ theme }) => theme.spacing[4]};
    border-top: 2px solid ${({ theme }) => theme.colors.blueAccent};
    background: rgba(16, 26, 57, 0.72);
  }

  b {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    margin: ${({ theme }) => theme.spacing[2]} 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ContributionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  article {
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: rgba(10, 13, 32, 0.78);
  }

  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  ul {
    display: grid;
    gap: ${({ theme }) => theme.spacing[2]};
    margin: 0;
    padding-left: 1.15rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const DecisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  article {
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: rgba(12, 16, 39, 0.74);
  }

  span {
    color: ${({ theme }) => theme.colors.blueAccent};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    margin: ${({ theme }) => theme.spacing[1]} 0 ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CodeBlock = styled.pre`
  margin: 0;
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: #070919;
  color: #d7e3ff;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: clamp(0.72rem, 1.5vw, 0.86rem);
  line-height: 1.65;
`;

export const Note = styled.aside`
  max-width: 56rem;
  margin: ${({ theme }) => theme.spacing[7]} auto 0;
  padding: ${({ theme }) => theme.spacing[4]};
  border-left: 2px solid ${({ theme }) => theme.colors.blueAccent};
  background: rgba(74, 117, 232, 0.1);

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const Closing = styled.section`
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 52rem;
  margin: ${({ theme }) => theme.spacing[9]} auto ${({ theme }) => theme.spacing[6]};
  text-align: center;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.blueAccent};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 4vw, 3.25rem);
    letter-spacing: -0.05em;
    line-height: 1;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
