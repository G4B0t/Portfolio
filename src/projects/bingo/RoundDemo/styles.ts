import styled from 'styled-components';

export const Frame = styled.div`
  padding: clamp(1rem, 4vw, 2rem);
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const Workspace = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: start;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[5]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CardTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: ${({ theme }) => theme.spacing[1]};
  text-align: center;
  font-variant-numeric: tabular-nums;

  caption {
    padding-bottom: ${({ theme }) => theme.spacing[3]};
    text-align: left;
    font-weight: 700;
  }
  th {
    color: ${({ theme }) => theme.colors.accentBright};
  }
  td {
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: ${({ theme }) => theme.colors.backgroundElevated};
  }
  td[data-called='true'] {
    background: ${({ theme }) => theme.colors.surfaceElevated};
    border-color: ${({ theme }) => theme.colors.accentBright};
  }
  small {
    display: block;
    font-size: 0.6rem;
    line-height: 1;
  }
`;

export const Readout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  min-width: 0;
  h3,
  p {
    margin: 0;
  }
`;

export const LastCall = styled.strong`
  display: grid;
  place-items: center;
  width: 5.5rem;
  height: 5.5rem;
  border: 2px solid ${({ theme }) => theme.colors.accentBright};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  font-size: ${({ theme }) => theme.typography.sizes.xl};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  button {
    min-height: 2.75rem;
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.text};
  }
  button:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accentBright};
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const History = styled.details`
  margin-top: ${({ theme }) => theme.spacing[5]};
  summary {
    cursor: pointer;
    padding-block: ${({ theme }) => theme.spacing[2]};
  }
  ol {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: 0;
    list-style: none;
  }
  li {
    padding: ${({ theme }) => theme.spacing[2]};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
