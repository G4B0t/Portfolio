import styled, { css } from 'styled-components';

export const DemoFrame = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(145deg, rgba(15, 17, 42, 0.96), rgba(9, 10, 26, 0.98));
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const RoleTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.8rem;
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  button {
    flex: 0 0 auto;
    padding: 0.55rem 0.8rem;
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.radii.sm};
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    font: inherit;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  button[data-active='true'] {
    border-color: rgba(177, 164, 255, 0.62);
    background: rgba(116, 92, 240, 0.18);
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Workspace = styled.div`
  display: grid;
  grid-template-columns: minmax(11rem, 0.32fr) minmax(0, 1fr);

  > aside {
    display: grid;
    align-content: start;
    gap: 0.65rem;
    padding: 1.25rem;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    background: rgba(7, 10, 28, 0.5);
  }

  aside > span,
  main header span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  aside > strong {
    margin-bottom: 0.8rem;
    font-family: ${({ theme }) => theme.typography.display};
  }

  aside nav {
    display: grid;
    gap: 0.3rem;
  }

  aside button {
    padding: 0.6rem;
    border: 0;
    border-radius: ${({ theme }) => theme.radii.sm};
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    font: inherit;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    text-align: left;
  }

  aside button.active {
    background: rgba(132, 113, 255, 0.16);
    color: ${({ theme }) => theme.colors.text};
  }

  aside small {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    line-height: 1.5;
  }

  main {
    display: grid;
    gap: 1rem;
    min-width: 0;
    padding: clamp(1rem, 3vw, 1.6rem);
  }

  main > header,
  main > header > div {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 0.8rem;
  }

  main > header h3,
  h4 {
    margin: 0.2rem 0 0;
    font-family: ${({ theme }) => theme.typography.display};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;

    > aside {
      border-right: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    aside nav {
      display: flex;
      overflow-x: auto;
    }

    aside button {
      flex: 0 0 auto;
    }

    aside small {
      display: none;
    }
  }
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;

  @media (max-width: 34rem) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.article`
  display: grid;
  gap: 0.35rem;
  min-width: 0;
  padding: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(20, 22, 52, 0.5);

  svg {
    color: #e39a72;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  strong {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.35;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  label {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 0.55rem;
    max-width: 22rem;
    padding: 0.6rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(6, 9, 24, 0.58);
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  > span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    text-align: right;
  }
`;

export const MemberList = styled.div`
  display: grid;
  gap: 0.4rem;
`;

export const MemberRow = styled.button<{ $selected: boolean }>`
  display: grid;
  grid-template-columns: minmax(4.2rem, 0.3fr) minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(10, 13, 34, 0.52);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font: inherit;
  text-align: left;

  > span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  > strong {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: rgba(220, 144, 102, 0.75);
      background: rgba(156, 81, 66, 0.16);
    `}
`;

export const Status = styled.span<{ $status: 'Al día' | 'Requiere seguimiento' }>`
  display: inline-flex;
  width: fit-content;
  padding: 0.25rem 0.45rem;
  border-radius: 999px;
  background: ${({ $status }) =>
    $status === 'Al día' ? 'rgba(76, 204, 171, 0.17)' : 'rgba(235, 160, 91, 0.17)'};
  color: ${({ $status }) => ($status === 'Al día' ? '#8ce7cc' : '#ffc07a')};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 700;
  white-space: nowrap;
`;

export const DetailPanel = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1fr);
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgba(220, 144, 102, 0.42);
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(115deg, rgba(157, 76, 65, 0.16), rgba(45, 35, 79, 0.28));

  > div > span,
  small,
  dt {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  dl {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem;
    margin: 0;
  }

  dl div {
    min-width: 0;
  }

  dt,
  dd {
    margin: 0;
  }

  dd {
    margin-top: 0.3rem;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    line-height: 1.4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    dl {
      grid-template-columns: 1fr;
    }
  }
`;
