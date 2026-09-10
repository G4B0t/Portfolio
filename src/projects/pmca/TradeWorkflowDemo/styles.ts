import styled, { css } from 'styled-components';
type WorkflowState =
  'approval' | 'execution' | 'pending' | 'mismatch' | 'executed' | 'cancelled';
export const Panel = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(145deg, rgba(28, 30, 71, 0.72), rgba(7, 9, 26, 0.92));
  box-shadow: ${({ theme }) => theme.shadows.card};
`;
export const DemoLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
export const PrimarySteps = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing[2]} 0;
`;
export const Step = styled.button<{ $active: boolean; $complete: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(4.5rem, 1fr);
  flex: 1 0 8.25rem;
  gap: 0.5rem;
  align-items: center;
  min-width: 8.25rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.sizes.xs};

  b {
    display: grid;
    place-items: center;
    width: 1.65rem;
    height: 1.65rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: 50%;
    background: rgba(7, 9, 28, 0.88);
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  ${({ $active, $complete, theme }) =>
    ($active || $complete) &&
    css`
      color: ${theme.colors.text};
      b {
        border-color: ${theme.colors.accentBright};
        background: ${$active ? 'rgba(120, 85, 255, 0.35)' : 'rgba(120, 85, 255, 0.18)'};
        color: ${theme.colors.accentBright};
      }
    `}
`;
export const StepConnector = styled.i`
  position: absolute;
  top: 0.8rem;
  left: 2rem;
  width: calc(100% - 2rem);
  height: 1px;
  background: ${({ theme }) => theme.colors.borderStrong};
  pointer-events: none;
`;
export const ExceptionRoutes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  text-transform: uppercase;
`;
export const ExceptionRoute = styled.button<{ $active: boolean }>`
  padding: 0.28rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(7, 9, 28, 0.72);
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};

  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.accentBright};
      color: ${theme.colors.text};
    `}
`;
export const Tabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
`;
export const Tab = styled.button<{ $active: boolean }>`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(7, 9, 28, 0.72);
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  b {
    display: grid;
    place-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: rgba(120, 85, 255, 0.24);
    color: ${({ theme }) => theme.colors.accentBright};
  }
  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.accentBright};
      background: rgba(120, 85, 255, 0.2);
      color: ${theme.colors.text};
    `}
`;
export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  label {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    min-width: min(100%, 16rem);
    padding: 0.55rem 0.7rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(4, 6, 20, 0.65);
    color: ${({ theme }) => theme.colors.textMuted};
  }
  input {
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
  }
  & > div {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};
  }
  button {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.55rem 0.7rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(12, 15, 40, 0.9);
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
  button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
export const DemoTable = styled.table`
  width: 100%;
  min-width: 42rem;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  th,
  td {
    padding: 0.7rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    text-align: left;
    white-space: nowrap;
  }
  th {
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
  td:first-child {
    width: 2.5rem;
  }
  td input[type='text'],
  td input:not([type]) {
    width: 100%;
  }
  td input[aria-invalid='true'] {
    border-color: #e99b78;
  }
  td input:not([type='checkbox']) {
    max-width: 7rem;
    padding: 0.35rem 0.45rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(4, 6, 20, 0.65);
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
  }
  small {
    display: block;
    margin-top: 0.25rem;
    color: #e99b78;
    white-space: normal;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;
export const TableViewport = styled.div`
  overflow-x: auto;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
`;
export const Status = styled.span<{ $state: WorkflowState }>`
  display: inline-flex;
  padding: 0.2rem 0.45rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(120, 85, 255, 0.16);
  color: ${({ theme }) => theme.colors.accentBright};
  ${({ $state }) =>
    $state === 'mismatch' &&
    css`
      background: rgba(224, 142, 85, 0.15);
      color: #f0ba7e;
    `} ${({ $state }) =>
    $state === 'executed' &&
    css`
      background: rgba(61, 180, 139, 0.15);
      color: #8ae0b9;
    `}
`;
export const EmptyState = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;
export const ChangeSet = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[3]};
  }
  i {
    color: ${({ theme }) => theme.colors.accentBright};
    font-style: normal;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
