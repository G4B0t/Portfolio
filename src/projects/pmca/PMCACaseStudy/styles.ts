import styled, { css } from 'styled-components';

export const Page = styled.article`
  padding: ${({ theme }) => theme.spacing[7]} 0 ${({ theme }) => theme.spacing[9]};
  & > a {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.accentBright};
    font-weight: 700;
  }
`;
export const Hero = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
  gap: ${({ theme }) => theme.spacing[7]};
  align-items: center;
  min-height: 33rem;
  padding: ${({ theme }) => theme.spacing[7]} 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;
export const HeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  & > p:not(:first-child) {
    margin: 0;
    max-width: 42rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;
export const HeroKicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
export const HeroTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  line-height: 0.9;
  letter-spacing: -0.07em;
`;
export const Lead = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.35rem, 2.3vw, 2rem);
  font-weight: 650;
  line-height: 1.2;
`;
export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;
export const DashboardVisual = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 25rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background:
    radial-gradient(circle at 72% 24%, rgba(122, 85, 255, 0.34), transparent 23%),
    linear-gradient(135deg, rgba(47, 40, 111, 0.82), rgba(9, 12, 31, 0.92));
  box-shadow: ${({ theme }) => theme.shadows.card};
  &::before {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        90deg,
        transparent 0 3.8rem,
        rgba(189, 175, 255, 0.045) 3.8rem 3.88rem
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0 3.8rem,
        rgba(189, 175, 255, 0.045) 3.8rem 3.88rem
      );
    content: '';
  }
`;
export const Dashboard = styled.div`
  position: relative;
  z-index: 1;
  width: min(88%, 30rem);
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid rgba(198, 185, 255, 0.3);
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(7, 9, 28, 0.72);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(12px);
`;
export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: 0.65rem;
  letter-spacing: 0.08em;
`;
export const DashboardMeta = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  i {
    height: 0.45rem;
    border-radius: 99px;
    background: rgba(184, 170, 255, 0.32);
  }
  i:first-child {
    background: rgba(184, 170, 255, 0.66);
  }
`;
export const DashboardRows = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.72fr 1.35fr auto;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  padding: 0.7rem;
  border: 1px solid rgba(185, 170, 255, 0.14);
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.72rem;
  span:first-child {
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.typography.display};
  }
`;
export const RowState = styled.span<{ $pending?: boolean }>`
  justify-self: end;
  padding: 0.14rem 0.36rem;
  border-radius: 99px;
  color: #bcefd9;
  background: rgba(64, 193, 131, 0.16);
  font-size: 0.64rem;
  ${({ $pending }) =>
    $pending &&
    css`
      color: #f0c889;
      background: rgba(236, 174, 65, 0.15);
    `}
`;
export const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 68rem;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
  article {
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: linear-gradient(145deg, rgba(27, 29, 67, 0.64), rgba(11, 13, 32, 0.64));
  }
  svg {
    color: ${({ theme }) => theme.colors.accentBright};
  }
  h3 {
    margin: ${({ theme }) => theme.spacing[3]} 0 ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const FeatureVisual = styled.figure`
  margin: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.backgroundElevated};
  box-shadow: ${({ theme }) => theme.shadows.card};

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`;
export const WorkboardCaption = styled.figcaption`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
export const FeatureAreaList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};

  article {
    padding: ${({ theme }) => theme.spacing[3]};
    border-left: 2px solid ${({ theme }) => theme.colors.accentSoft};
    background: rgba(15, 17, 42, 0.62);
  }

  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing[1]};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const ArchitectureFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  & > *:not(:last-child)::after {
    margin-left: ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.colors.accentSoft};
    content: '→';
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    & > *:not(:last-child)::after {
      display: block;
      margin: 0.6rem 0 0;
      content: '↓';
      text-align: center;
    }
  }
`;
export const ArchitectureNode = styled.div<{ $accent: boolean }>`
  padding: 0.85rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(19, 21, 53, 0.68);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  ${({ $accent, theme }) =>
    $accent &&
    css`
      border-color: ${theme.colors.accentSoft};
      background: rgba(120, 85, 255, 0.22);
      color: ${theme.colors.text};
    `}
`;
export const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
  div {
    padding: ${({ theme }) => theme.spacing[5]};
    border-top: 2px solid ${({ theme }) => theme.colors.accentSoft};
    background: rgba(16, 18, 43, 0.75);
  }
  svg {
    color: ${({ theme }) => theme.colors.accentBright};
  }
  h3 {
    margin: ${({ theme }) => theme.spacing[3]} 0 ${({ theme }) => theme.spacing[2]};
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const UISystemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  article {
    display: grid;
    align-content: start;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: linear-gradient(145deg, rgba(25, 28, 64, 0.68), rgba(9, 11, 30, 0.74));
  }

  svg {
    color: ${({ theme }) => theme.colors.accentBright};
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[2]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const WorkflowFlow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[2]};
`;
export const WorkflowStep = styled.div<{ $active: boolean }>`
  flex: 0 0 auto;
  padding: 0.85rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.accentBright};
      color: ${theme.colors.text};
      background: rgba(120, 85, 255, 0.25);
      box-shadow: ${theme.shadows.glowSubtle};
    `} &::after {
    margin-left: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.accentSoft};
    content: '→';
  }
  &:last-child::after {
    content: '';
  }
`;
export const Callout = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: flex-start;
  max-width: 52rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border-left: 2px solid ${({ theme }) => theme.colors.accentBright};
  background: rgba(93, 68, 177, 0.13);
  svg {
    flex: none;
    color: ${({ theme }) => theme.colors.accentBright};
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
export const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const Stack = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(12, 14, 34, 0.72);
  p,
  ul {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  ul {
    padding-left: 1.1rem;
  }
  li + li {
    margin-top: 0.45rem;
  }
`;
export const Subheading = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
`;
export const DecisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
  article {
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: linear-gradient(145deg, rgba(28, 30, 71, 0.7), rgba(8, 10, 28, 0.8));
  }
  span {
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  h3 {
    margin: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
  p {
    margin: ${({ theme }) => theme.spacing[1]} 0 ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
  p:last-child {
    margin-bottom: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const CodeInsight = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(14rem, 0.8fr);
  gap: ${({ theme }) => theme.spacing[5]};
  align-items: center;
  ol {
    display: grid;
    gap: ${({ theme }) => theme.spacing[3]};
    margin: 0;
    padding-left: 1.35rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const CodePanel = styled.pre`
  margin: 0;
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: #070919;
  color: #d6cfff;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: clamp(0.72rem, 1.5vw, 0.86rem);
  line-height: 1.65;
`;
export const Closing = styled.section`
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 52rem;
  margin: ${({ theme }) => theme.spacing[9]} auto ${({ theme }) => theme.spacing[6]};
  text-align: center;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.accentBright};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 4vw, 3.25rem);
    letter-spacing: -0.05em;
    line-height: 1;
  }
  span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
export const ConfidentialityNote = styled.aside`
  max-width: 56rem;
  margin: ${({ theme }) => theme.spacing[7]} auto 0;
  padding: ${({ theme }) => theme.spacing[4]};
  border-left: 2px solid ${({ theme }) => theme.colors.accentSoft};
  background: rgba(93, 68, 177, 0.1);

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;
