import styled, { css } from 'styled-components';

export const Demo = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background:
    radial-gradient(circle at 75% 0%, rgba(45, 194, 187, 0.18), transparent 34%),
    rgba(9, 15, 33, 0.88);
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0.35rem 0 0;
    font-size: clamp(1.25rem, 2vw, 1.75rem);
  }

  > svg {
    color: ${({ theme }) => theme.colors.accentBright};
  }
`;

export const PhaseList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const PhaseButton = styled.button<{ $active: boolean }>`
  display: grid;
  gap: 0.35rem;
  min-height: 4.6rem;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(7, 11, 27, 0.64);
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: left;
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default},
    color ${({ theme }) => theme.transitions.default};

  span {
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  ${({ $active }) =>
    $active &&
    css`
      border-color: rgba(62, 221, 203, 0.72);
      background: rgba(45, 194, 187, 0.16);
      color: ${({ theme }) => theme.colors.text};
    `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBright};
  }
`;

export const Chart = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(12rem, 0.75fr);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Plot = styled.div`
  position: relative;
  min-height: 13rem;
  padding: 1.25rem;
  overflow: hidden;
  background: linear-gradient(145deg, rgba(11, 23, 41, 0.94), rgba(5, 11, 25, 0.98));

  > span {
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
`;

export const ChartGrid = styled.div`
  position: absolute;
  inset: 2.8rem 1.25rem 1.25rem;
  background-image:
    linear-gradient(rgba(161, 183, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(161, 183, 255, 0.1) 1px, transparent 1px);
  background-size: 20% 25%;
`;

export const ChartLine = styled.svg`
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
  left: 1.25rem;
  width: calc(100% - 2.5rem);
  height: calc(100% - 4rem);
  overflow: visible;

  path {
    fill: none;
    stroke: #54e4d4;
    stroke-linecap: round;
    stroke-width: 2.5;
    filter: drop-shadow(0 0 7px rgba(84, 228, 212, 0.6));
    transition: d ${({ theme }) => theme.transitions.slow};
  }
`;

export const Readout = styled.div`
  display: grid;
  align-content: center;
  gap: 0.65rem;
  padding: 1.5rem;
  background: rgba(14, 20, 43, 0.88);

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.65;
  }
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Metric = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.6rem;
  padding: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(9, 15, 33, 0.55);

  svg {
    grid-row: span 2;
    color: ${({ theme }) => theme.colors.accentBright};
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  strong {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

export const Insight = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: 1.7;
`;
