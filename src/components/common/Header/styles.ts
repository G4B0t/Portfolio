import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(81, 75, 131, 0.62);
  background: rgba(5, 6, 17, 0.84);
  backdrop-filter: blur(18px);
`;
export const Inner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 4.8rem;
  gap: 1rem;
`;
export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-right: auto;
  font-weight: 700;
  letter-spacing: -0.03em;
`;
export const BrandMark = styled.span`
  display: grid;
  place-items: center;
  width: 2.35rem;
  height: 2.35rem;
  border: 1px solid ${({ theme }) => theme.colors.accentBright};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(145deg, rgba(137, 94, 255, 0.55), rgba(23, 20, 65, 0.96));
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  box-shadow:
    0 0 1.25rem rgba(137, 94, 255, 0.45),
    inset 0 0 0.8rem rgba(198, 163, 255, 0.22);
`;
export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;
export const NavLink = styled.a`
  position: relative;
  padding: 0.46rem 0.86rem;
  border: 1px solid rgba(114, 95, 205, 0.72);
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(145deg, rgba(69, 50, 139, 0.42), rgba(13, 16, 40, 0.82));
  box-shadow: inset 0 0 0.7rem rgba(154, 119, 255, 0.13);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  transition:
    color ${({ theme }) => theme.transitions.default},
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};
  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.accentBright};
    box-shadow:
      0 0 1rem rgba(137, 94, 255, 0.34),
      inset 0 0 0.8rem rgba(154, 119, 255, 0.22);
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.62rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.accentBright};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(145deg, rgba(120, 85, 255, 0.46), rgba(22, 21, 59, 0.92));
  box-shadow:
    0 0 1rem rgba(120, 85, 255, 0.24),
    inset 0 0 0.8rem rgba(184, 151, 255, 0.13);
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  transition:
    border-color ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default};
  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 0 1.35rem rgba(137, 94, 255, 0.46),
      inset 0 0 0.8rem rgba(184, 151, 255, 0.2);
  }
`;
export const DesktopCta = styled(PrimaryLink)`
  display: none;
  margin-left: 0.25rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-flex;
  }
`;
export const MobileToggle = styled.button`
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(15, 16, 38, 0.82);
  color: ${({ theme }) => theme.colors.text};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
export const MobileMenu = styled.nav`
  position: absolute;
  top: calc(100% + 0.55rem);
  right: 0;
  left: 0;
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(13, 16, 34, 0.98);
  box-shadow: ${({ theme }) => theme.shadows.card};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
