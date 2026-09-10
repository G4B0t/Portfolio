import styled, { css } from 'styled-components';

export const Panel = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(145deg, rgba(21, 41, 84, 0.72), rgba(7, 9, 25, 0.94));
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const DemoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.blueAccent};

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: ${({ theme }) => theme.spacing[2]} 0 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

export const ScenarioList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
`;

export const ScenarioButton = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  padding: 0.55rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(6, 8, 24, 0.72);
  color: ${({ theme }) => theme.colors.textMuted};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.blueAccent};
      background: rgba(74, 117, 232, 0.18);
      color: ${theme.colors.text};
    `}
`;

export const Summary = styled.div<{ $accepted: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing[4]};
  border-left: 2px solid ${({ theme }) => theme.colors.blueAccent};
  background: rgba(74, 117, 232, 0.1);
  color: #91b1ff;

  span {
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  p {
    margin: ${({ theme }) => theme.spacing[1]} 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ${({ $accepted }) =>
    !$accepted &&
    css`
      border-color: #e5aa76;
      background: rgba(229, 170, 118, 0.1);
      color: #f0c796;
    `}
`;

export const TestLine = styled.p<{ $accepted: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  margin: 0;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  svg {
    color: ${({ $accepted }) => ($accepted ? '#8ae0b9' : '#f0c796')};
  }
`;
