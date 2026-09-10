import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  background-image:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(5, 6, 17, 0.74) 22%,
      rgba(5, 6, 17, 0.66) 80%,
      ${({ theme }) => theme.colors.background} 100%
    ),
    linear-gradient(
      90deg,
      rgba(5, 6, 17, 0.78) 0%,
      rgba(5, 6, 17, 0.24) 48%,
      rgba(5, 6, 17, 0.68) 100%
    ),
    url('/assets/work-showcase-backdrop.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Showcase = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: minmax(0, 38rem) auto;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export const Slide = styled.div`
  width: 100%;
`;
export const Controls = styled.div`
  display: grid;
  justify-items: end;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
`;
export const Counter = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  letter-spacing: 0.12em;
`;
export const DirectionButton = styled.button`
  display: inline-grid;
  place-items: center;
  width: 2.85rem;
  height: 2.85rem;
  margin-left: ${({ theme }) => theme.spacing[2]};
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: 50%;
  background: rgba(11, 13, 31, 0.78);
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  transition:
    transform ${({ theme }) => theme.transitions.default},
    border-color ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default};
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accentBright};
    background: rgba(99, 69, 189, 0.48);
  }
`;
