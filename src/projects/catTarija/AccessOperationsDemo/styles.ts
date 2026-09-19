import styled, { css } from 'styled-components';

export const DemoFrame = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(145deg, #101a37, #0a0d22 62%, #21162e);
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const RoleTabs = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(4, 7, 21, 0.48);

  button {
    padding: 0.5rem 0.7rem;
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.radii.sm};
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    font: inherit;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  button[data-active='true'] {
    border-color: rgba(232, 179, 107, 0.56);
    background: rgba(213, 148, 73, 0.18);
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Workspace = styled.div`
  display: grid;
  grid-template-columns: minmax(11rem, 0.3fr) minmax(0, 1fr);

  > aside {
    display: grid;
    align-content: start;
    gap: 0.55rem;
    min-height: 30rem;
    padding: 1.2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    background: rgba(7, 10, 29, 0.48);
  }

  .workspace-label,
  header > div,
  .section-heading > div {
    display: grid;
    gap: 0.24rem;
  }

  .workspace-label {
    grid-template-columns: auto 1fr;
    align-items: center;
    color: #e7b16f;
  }

  .workspace-label span,
  aside small,
  .section-heading span,
  header span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  aside > strong {
    font-family: ${({ theme }) => theme.typography.display};
  }

  aside nav {
    display: grid;
    gap: 0.25rem;
    margin-top: 1rem;
  }

  aside nav button {
    padding: 0.55rem;
    border: 0;
    border-left: 2px solid transparent;
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    font: inherit;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    text-align: left;
  }

  aside nav button.active {
    border-left-color: #e7b16f;
    background: rgba(206, 136, 70, 0.12);
    color: ${({ theme }) => theme.colors.text};
  }

  .fictional-note {
    margin-top: auto;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.68rem;
  }

  main {
    display: grid;
    align-content: start;
    gap: 1rem;
    min-width: 0;
    padding: 1.2rem;
  }

  header,
  .section-heading {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
  }

  h3,
  h4 {
    margin: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }

  .overview,
  .content-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem;
  }

  .content-grid {
    grid-template-columns: minmax(0, 1fr) minmax(13rem, 0.82fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;

    > aside {
      min-height: auto;
      border-right: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    aside nav {
      display: flex;
      overflow-x: auto;
    }

    aside nav button {
      flex: 0 0 auto;
    }

    .fictional-note {
      display: none;
    }
  }

  @media (max-width: 38rem) {
    .overview,
    .content-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const Status = styled.span`
  width: fit-content;
  padding: 0.28rem 0.5rem;
  border: 1px solid rgba(131, 225, 184, 0.38);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(72, 184, 143, 0.12);
  color: #91e3c2;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 700;
`;

export const ActivityCard = styled.article`
  display: grid;
  gap: 0.35rem;
  min-width: 0;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(9, 14, 37, 0.55);

  svg {
    color: #e7b16f;
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

export const UserList = styled.div`
  display: grid;
  gap: 0.35rem;
  margin-top: 0.65rem;
`;

export const UserRow = styled.button<{ $selected: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.6rem;
  width: 100%;
  padding: 0.68rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(8, 12, 31, 0.5);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font: inherit;
  text-align: left;

  small {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: rgba(231, 177, 111, 0.7);
      background: rgba(191, 117, 59, 0.14);
    `}
`;

export const DetailPanel = styled.section`
  display: grid;
  align-content: start;
  gap: 0.75rem;
  padding: 0.9rem;
  border: 1px solid rgba(231, 177, 111, 0.44);
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(135deg, rgba(174, 96, 54, 0.15), rgba(25, 23, 60, 0.54));

  .section-heading > svg {
    color: #e7b16f;
  }

  label {
    display: grid;
    gap: 0.35rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  select {
    padding: 0.55rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
  }

  > p {
    margin: 0;
    color: #f1c187;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
`;

export const PermissionList = styled.ul`
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    gap: 0.42rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  svg {
    color: #91e3c2;
  }
`;
