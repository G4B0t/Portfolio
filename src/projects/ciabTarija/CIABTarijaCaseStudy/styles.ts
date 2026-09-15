import styled, { css } from 'styled-components';

export const Page = styled.div`
  display: grid;
  gap: clamp(4.5rem, 10vw, 8.5rem);
  padding-block: clamp(2rem, 6vw, 5rem) clamp(4.5rem, 10vw, 8rem);
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.9fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
  min-height: 30rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const HeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};

  > p {
    max-width: 43rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    line-height: 1.8;
  }
`;

export const Kicker = styled.span`
  color: #e7a77d;
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.5rem);
  letter-spacing: -0.065em;
  line-height: 0.94;
`;

export const Lead = styled.p`
  max-width: 43rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: clamp(1.3rem, 2.4vw, 1.9rem);
  line-height: 1.35;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const HeroVisual = styled.div`
  position: relative;
  min-height: 29rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background:
    radial-gradient(circle at 73% 29%, rgba(226, 142, 94, 0.31), transparent 18%),
    radial-gradient(circle at 21% 77%, rgba(111, 95, 238, 0.33), transparent 25%),
    linear-gradient(145deg, #121936, #171331 62%, #28182f);
  box-shadow: ${({ theme }) => theme.shadows.card};

  &::before {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(216, 201, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(216, 201, 255, 0.07) 1px, transparent 1px);
    background-size: 3.25rem 3.25rem;
    content: '';
  }

  .hero-grid {
    position: absolute;
    inset: 2.85rem 2.4rem 4.6rem;
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 1.1rem;
  }

  .panel {
    position: relative;
    display: block;
    overflow: hidden;
    border: 1px solid rgba(224, 220, 255, 0.38);
    border-radius: 0.7rem;
    background: linear-gradient(145deg, rgba(18, 24, 56, 0.84), rgba(8, 12, 33, 0.66));
    box-shadow:
      inset 0 1px rgba(239, 230, 255, 0.04),
      0 1.2rem 2.5rem rgba(0, 0, 0, 0.12);
  }

  .registry {
    grid-row: span 2;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background:
      radial-gradient(circle at 18% 76%, rgba(116, 98, 239, 0.22), transparent 26%),
      linear-gradient(145deg, rgba(18, 24, 56, 0.92), rgba(8, 12, 33, 0.68)) !important;
  }

  .registry::after {
    position: absolute;
    right: -1.6rem;
    bottom: -1.6rem;
    width: 8rem;
    height: 8rem;
    border: 1px solid rgba(192, 174, 255, 0.19);
    border-radius: 50%;
    content: '';
  }

  .profile-mark {
    position: relative;
    display: block;
    width: 4.8rem;
    height: 4.8rem;
    border: 1px solid rgba(230, 211, 255, 0.64);
    border-radius: 1rem;
    background: linear-gradient(
      145deg,
      rgba(132, 113, 255, 0.42),
      rgba(223, 141, 94, 0.16)
    );
    box-shadow: 0 0 2rem rgba(112, 93, 236, 0.25);
  }

  .profile-mark::before,
  .profile-mark::after {
    position: absolute;
    left: 50%;
    content: '';
    transform: translateX(-50%);
  }

  .profile-mark::before {
    top: 0.95rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: rgba(248, 231, 255, 0.88);
  }

  .profile-mark::after {
    right: 0;
    bottom: 0.8rem;
    width: 2.6rem;
    height: 1.25rem;
    border-radius: 1.4rem 1.4rem 0.5rem 0.5rem;
    background: rgba(248, 231, 255, 0.88);
  }

  .registry-copy,
  .document > div,
  .verification > div {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 0.42rem;
  }

  .registry-copy > span,
  .document > div > span,
  .verification > div > span {
    color: rgba(219, 211, 245, 0.68);
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .registry-copy strong,
  .document strong,
  .verification strong {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  .registry-copy i {
    display: block;
    width: 88%;
    height: 2px;
    margin-top: 0.15rem;
    background: linear-gradient(
      90deg,
      rgba(208, 194, 255, 0.8),
      rgba(208, 194, 255, 0.14)
    );
  }

  .registry-copy i + i {
    width: 62%;
    opacity: 0.55;
  }

  .status-chip {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    z-index: 1;
    padding: 0.28rem 0.48rem;
    border: 1px solid rgba(138, 229, 200, 0.42);
    border-radius: 999px;
    background: rgba(63, 174, 143, 0.14);
    color: #98e8cf;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .document,
  .verification {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
  }

  .document-mark {
    position: relative;
    display: block;
    width: 2.8rem;
    height: 3.5rem;
    border: 1px solid rgba(233, 218, 255, 0.72);
    border-radius: 0.3rem;
    background:
      linear-gradient(90deg, rgba(223, 211, 255, 0.65) 68%, transparent 68%) 0.55rem
        1rem / 1.65rem 1px no-repeat,
      linear-gradient(90deg, rgba(223, 211, 255, 0.44) 48%, transparent 48%) 0.55rem
        1.55rem / 1.65rem 1px no-repeat,
      linear-gradient(135deg, transparent 74%, rgba(226, 144, 98, 0.9) 75%);
  }

  .check-mark {
    position: relative;
    display: block;
    width: 3.05rem;
    height: 3.05rem;
    border: 2px solid #e5a17b;
    border-radius: 50%;
    box-shadow: 0 0 1.7rem rgba(229, 161, 123, 0.32);
  }

  .check-mark::after {
    position: absolute;
    top: 42%;
    left: 50%;
    width: 1.05rem;
    height: 0.56rem;
    border-bottom: 2px solid #e5a17b;
    border-left: 2px solid #e5a17b;
    content: '';
    transform: translate(-50%, -65%) rotate(-45deg);
  }

  .readout {
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    display: grid;
    gap: 0.35rem;
    padding: 0.85rem 1rem;
    border: 1px solid rgba(230, 184, 151, 0.4);
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(12, 12, 31, 0.8);
  }

  .readout span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    text-transform: uppercase;
  }

  .readout strong {
    color: #f1b48d;
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 24rem;
  }
`;

export const Signal = styled.span<{ $position: 'first' | 'second' | 'third' }>`
  position: absolute;
  z-index: 1;
  display: grid;
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(245, 190, 154, 0.72);
  border-radius: 50%;
  background: rgba(37, 22, 44, 0.88);
  box-shadow: 0 0 1.2rem rgba(229, 161, 123, 0.35);
  color: #ffcaab;
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  place-items: center;

  ${({ $position }) =>
    ({
      first: css`
        top: 18%;
        left: 11%;
      `,
      second: css`
        top: 39%;
        right: 20%;
      `,
      third: css`
        bottom: 17%;
        left: 41%;
      `,
    })[$position]}
`;

export const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 4rem);

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const threeColumnGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  ${threeColumnGrid}

  article {
    padding: 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(13, 16, 38, 0.68);
  }

  svg {
    color: #e5a17b;
  }

  h3 {
    margin: 1rem 0 0.6rem;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.7;
  }
`;

export const Architecture = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.75rem;

  > * {
    flex: 1 1 0;
  }

  > * + *::before {
    position: absolute;
    top: 50%;
    right: calc(100% + 0.1rem);
    width: 0.55rem;
    height: 1px;
    background: #e5a17b;
    content: '';
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > * + *::before {
      display: none;
    }
  }
`;

export const ArchitectureNode = styled.div<{ $accent: boolean }>`
  position: relative;
  display: grid;
  min-height: 6rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(10, 15, 36, 0.76);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  place-items: center;
  text-align: center;

  ${({ $accent }) =>
    $accent &&
    css`
      border-color: rgba(229, 161, 123, 0.68);
      background: rgba(174, 93, 73, 0.16);
      color: ${({ theme }) => theme.colors.text};
    `}
`;

export const Workflow = styled.div`
  ${threeColumnGrid}

  article {
    position: relative;
    padding: 1.35rem;
    border-top: 2px solid #e5a17b;
    background: rgba(13, 16, 38, 0.68);
  }

  svg {
    color: #e5a17b;
  }

  span {
    display: block;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
  }

  h3 {
    margin: 0.35rem 0 0.6rem;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.7;
  }
`;

export const DecisionGrid = styled.div`
  ${threeColumnGrid}

  article {
    display: grid;
    gap: 0.55rem;
    padding: 1.35rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(13, 16, 38, 0.68);
  }

  span {
    color: #e5a17b;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    margin-bottom: 0.55rem;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.65;
  }
`;

export const ContributionGrid = styled.div`
  ${threeColumnGrid}

  article {
    padding: 1.35rem;
    border-top: 2px solid #e5a17b;
    background: rgba(13, 16, 38, 0.68);
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  ul {
    display: grid;
    gap: 0.8rem;
    margin: 1.1rem 0 0;
    padding-left: 1.15rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.6;
  }

  li::marker {
    color: #e5a17b;
  }
`;

export const Note = styled.aside`
  padding: 1.15rem 1.35rem;
  border-left: 2px solid #e5a17b;
  background: rgba(180, 94, 72, 0.09);

  p {
    max-width: 68rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    line-height: 1.75;
  }
`;

export const Closing = styled.section`
  display: grid;
  justify-items: center;
  gap: 1.1rem;
  max-width: 52rem;
  margin-inline: auto;
  text-align: center;

  p {
    margin: 0;
    color: #e5a17b;
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }

  h2 {
    margin: 0;
    font-size: clamp(2rem, 5vw, 3.9rem);
    letter-spacing: -0.055em;
    line-height: 1;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.7;
  }
`;
