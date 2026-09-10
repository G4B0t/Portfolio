import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  border-top: 1px solid rgba(81, 75, 131, 0.3);
  border-bottom: 1px solid rgba(81, 75, 131, 0.3);
  background-image:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(5, 6, 17, 0.76) 22%,
      rgba(5, 6, 17, 0.72) 78%,
      ${({ theme }) => theme.colors.background} 100%
    ),
    linear-gradient(
      90deg,
      rgba(5, 6, 17, 0.78) 0%,
      rgba(5, 6, 17, 0.26) 52%,
      rgba(5, 6, 17, 0.72) 100%
    ),
    url('/assets/skills-workbench-backdrop.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const List = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[5]};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(13, 16, 34, 0.86);
  backdrop-filter: blur(8px);
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }
  h3 {
    margin: 0;
    font-size: 1rem;
  }
  p {
    margin: 0.2rem 0 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;
export const Icon = styled.span`
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 2.7rem;
  height: 2.7rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(135deg, rgba(42, 40, 104, 0.9), rgba(10, 12, 28, 0.9));
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: 700;
`;
