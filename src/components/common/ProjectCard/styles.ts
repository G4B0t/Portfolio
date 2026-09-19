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
    background:
      linear-gradient(135deg, rgba(7, 8, 24, 0.04), rgba(7, 8, 24, 0.22)),
      url('/assets/pmca_card.png') center 46% / cover;
    .visual-art {
      opacity: 0;
    }
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
      linear-gradient(90deg, rgba(3, 10, 14, 0.28), rgba(3, 10, 14, 0.08)),
      url('/assets/viva_aerobus_card.png') center / cover;
    .visual-art {
      opacity: 0;
    }
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
      linear-gradient(90deg, rgba(3, 10, 17, 0.26), rgba(3, 10, 17, 0.06)),
      url('/assets/gli_simulator_card.png') center / cover;
    .visual-art {
      opacity: 0;
    }
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
  sports: css`
    background:
      linear-gradient(90deg, rgba(2, 8, 15, 0.12), rgba(2, 8, 15, 0.02)),
      url('/assets/olimpiadas_card.png') center / cover;
    .visual-art {
      opacity: 0;
    }
  `,
  association: css`
    background:
      linear-gradient(90deg, rgba(4, 8, 21, 0.46), rgba(5, 8, 23, 0.1)),
      url('/assets/ciab_card.png') center 53% / cover;

    .visual-art {
      opacity: 0;
    }
  `,
  cat: css`
    background:
      radial-gradient(circle at 74% 23%, rgba(226, 162, 91, 0.35), transparent 22%),
      radial-gradient(circle at 27% 78%, rgba(82, 119, 218, 0.38), transparent 31%),
      linear-gradient(135deg, #101b36, #182347 56%, #30203e);

    &::before {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(227, 220, 253, 0.09) 1px, transparent 1px),
        linear-gradient(90deg, rgba(227, 220, 253, 0.09) 1px, transparent 1px);
      background-size: 2.5rem 2.5rem;
      content: '';
    }

    .visual-art {
      grid-template-columns: 1.35fr 0.72fr;
      grid-template-rows: repeat(2, 1fr);
      align-items: stretch;
      gap: 0.65rem;
      opacity: 1;
    }

    .visual-art i {
      border: 1px solid rgba(232, 226, 255, 0.46);
      border-radius: 0.45rem;
      background: rgba(8, 14, 37, 0.66);
      box-shadow: 0 0.8rem 1.8rem rgba(5, 8, 27, 0.28);
    }

    .visual-art i:nth-child(1) {
      grid-row: span 2;
      background:
        linear-gradient(90deg, rgba(244, 230, 255, 0.75) 68%, transparent 68%) 1rem 1.25rem / 66% 2px no-repeat,
        linear-gradient(90deg, rgba(244, 230, 255, 0.38) 48%, transparent 48%) 1rem 1.85rem / 66% 2px no-repeat,
        radial-gradient(circle at 25% 69%, rgba(109, 152, 255, 0.9) 0 0.52rem, transparent 0.56rem),
        rgba(8, 14, 37, 0.7);
    }

    .visual-art i:nth-child(2) {
      background:
        linear-gradient(90deg, #e6b16f 42%, transparent 42%) 0.85rem 0.85rem / 70% 2px no-repeat,
        linear-gradient(90deg, rgba(232, 226, 255, 0.4) 68%, transparent 68%) 0.85rem 1.4rem / 70% 2px no-repeat,
        rgba(8, 14, 37, 0.66);
    }

    .visual-art i:nth-child(3) {
      background:
        radial-gradient(circle at 31% 50%, #85d7b8 0 0.28rem, transparent 0.32rem),
        linear-gradient(90deg, rgba(232, 226, 255, 0.52) 50%, transparent 50%) 1.45rem 50% / 55% 2px no-repeat,
        rgba(8, 14, 37, 0.66);
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
