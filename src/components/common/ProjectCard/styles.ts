import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import type { ProjectVisualKey } from '@/types/project';

export const Card = styled.article`
  display: grid;
  overflow: hidden;
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(145deg, rgba(15, 17, 39, 0.98), rgba(8, 9, 24, 0.98));
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition:
    transform ${({ theme }) => theme.transitions.slow},
    border-color ${({ theme }) => theme.transitions.slow},
    box-shadow ${({ theme }) => theme.transitions.slow};
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glowSubtle};
  }
`;
const variants = {
  enterprise: css`
    background: linear-gradient(135deg, #28245c, #11162d);
    .visual-art i:nth-child(1) {
      width: 70%;
      height: 40%;
      border: 1px solid rgba(185, 170, 255, 0.55);
    }
    .visual-art i:nth-child(2) {
      width: 46%;
      height: 52%;
      margin-left: auto;
      border-left: 2px solid #b48aff;
    }
    .visual-art i:nth-child(3) {
      width: 34%;
      height: 15%;
      border-top: 2px solid #4a75e8;
    }
  `,
  api: css`
    background:
      radial-gradient(circle at 70% 30%, rgba(83, 104, 216, 0.58), transparent 34%),
      #111833;
    .visual-art i:nth-child(1) {
      width: 70%;
      height: 2px;
      background: #b48aff;
    }
    .visual-art i:nth-child(2) {
      width: 2px;
      height: 66%;
      margin: auto;
      background: #4a75e8;
    }
    .visual-art i:nth-child(3) {
      width: 54%;
      height: 26%;
      margin-left: auto;
      border: 1px solid rgba(185, 170, 255, 0.55);
      border-radius: 999px;
    }
  `,
  simulation: css`
    background:
      radial-gradient(circle at 28% 70%, rgba(124, 99, 255, 0.55), transparent 32%),
      #12152b;
    .visual-art i:nth-child(1) {
      width: 76%;
      height: 56%;
      border-left: 2px solid #b48aff;
      border-bottom: 2px solid #4a75e8;
      clip-path: polygon(0 100%, 17% 70%, 36% 76%, 52% 24%, 72% 54%, 100% 0, 100% 100%);
    }
    .visual-art i:nth-child(2) {
      width: 1px;
      height: 76%;
      background: rgba(244, 241, 250, 0.45);
    }
    .visual-art i:nth-child(3) {
      width: 76%;
      height: 1px;
      background: rgba(244, 241, 250, 0.45);
    }
  `,
};
export const Visual = styled.div<{ $variant: ProjectVisualKey }>`
  position: relative;
  min-height: 11rem;
  padding: 1rem;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ $variant }) => variants[$variant]}.visual-label {
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .visual-art {
    position: absolute;
    inset: 2.5rem 1.5rem 1.5rem;
    display: grid;
    place-content: center;
    gap: 0.65rem;
    opacity: 0.9;
  }
  .visual-art i {
    display: block;
  }
`;
export const Body = styled.div`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
`;
export const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  letter-spacing: -0.035em;
`;
export const Copy = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;
export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;
export const Read = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.accentBright};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: 700;
  & svg {
    display: grid;
    place-items: center;
    box-sizing: content-box;
    padding: 0.42rem;
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: 50%;
    transition:
      background ${({ theme }) => theme.transitions.default},
      transform ${({ theme }) => theme.transitions.default};
  }
  ${Card}:hover & svg {
    transform: translate(2px, -2px);
    background: rgba(120, 85, 255, 0.2);
  }
`;
