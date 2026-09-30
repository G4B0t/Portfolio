import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  padding-block: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[8]};
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  > a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    width: fit-content;
    color: ${({ theme }) => theme.colors.accentBright};
    font-weight: 700;
  }
`;

export const Hero = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(19rem, 0.8fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
  min-height: 32rem;
  .hero-copy {
    display: grid;
    gap: ${({ theme }) => theme.spacing[5]};
  }
  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
    line-height: 0.95;
    letter-spacing: -0.065em;
  }
  h2 {
    max-width: 48rem;
    margin: 0;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    line-height: 1.2;
  }
  p {
    max-width: 46rem;
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    line-height: 1.7;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const Kicker = styled.span`
  color: #6fe8d4;
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const HeroMap = styled.div`
  position: relative;
  min-height: 28rem;
  overflow: hidden;
  border: 1px solid rgba(111, 232, 212, 0.34);
  border-radius: ${({ theme }) => theme.radii.md};
  background:
    radial-gradient(circle at 50% 50%, rgba(38, 191, 166, 0.25), transparent 18%),
    linear-gradient(rgba(111, 232, 212, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(111, 232, 212, 0.06) 1px, transparent 1px),
    linear-gradient(145deg, #071e28, #070b1b);
  background-size:
    auto,
    2.5rem 2.5rem,
    2.5rem 2.5rem,
    auto;
  box-shadow: ${({ theme }) => theme.shadows.card};
  .map-label {
    position: absolute;
    z-index: 3;
    top: 1.2rem;
    left: 1.2rem;
    display: grid;
    gap: 0.25rem;
    padding: 0.75rem 0.85rem;
    border: 1px solid rgba(111, 232, 212, 0.26);
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(5, 17, 27, 0.72);
  }
  .map-label span {
    color: #6fe8d4;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .map-label strong {
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
  .core {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    display: grid;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ffd06d;
    border-radius: 50%;
    background: rgba(89, 62, 15, 0.85);
    color: #ffd06d;
    box-shadow: 0 0 2.5rem rgba(255, 198, 78, 0.28);
    place-items: center;
    transform: translate(-50%, -50%);
  }
  .orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(111, 232, 212, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .orbit-one {
    width: 15rem;
    height: 15rem;
  }
  .orbit-two {
    width: 24rem;
    height: 24rem;
    border-style: dashed;
  }
  .orbit i {
    position: absolute;
    display: block;
    width: 1rem;
    height: 1rem;
    border: 2px solid #07111d;
    border-radius: 50%;
    background: #6fe8d4;
    box-shadow: 0 0 1rem rgba(111, 232, 212, 0.8);
  }
  .orbit-one i:nth-child(1) {
    top: 10%;
    left: 20%;
  }
  .orbit-one i:nth-child(2) {
    right: -0.45rem;
    top: 48%;
  }
  .orbit-one i:nth-child(3) {
    bottom: 9%;
    left: 23%;
  }
  .orbit-two i:nth-child(1) {
    top: 24%;
    right: 5%;
  }
  .orbit-two i:nth-child(2) {
    bottom: 7%;
    left: 29%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 23rem;
    .orbit-two {
      width: 20rem;
      height: 20rem;
    }
  }
`;

export const Contribution = styled.div`
  display: grid;
  grid-template-columns: 8rem minmax(0, 1fr);
  gap: 1.5rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid rgba(111, 232, 212, 0.28);
  border-left: 3px solid #6fe8d4;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(
    90deg,
    rgba(35, 173, 150, 0.1),
    ${({ theme }) => theme.colors.backgroundElevated}
  );
  span {
    color: #6fe8d4;
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
  p {
    max-width: 60rem;
    margin: 0;
    line-height: 1.75;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[5]};
  article {
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: linear-gradient(
      145deg,
      rgba(13, 30, 38, 0.75),
      ${({ theme }) => theme.colors.surface}
    );
  }
  svg {
    color: #6fe8d4;
  }
  h3 {
    margin: 0.9rem 0 0.6rem;
  }
  article:not(:has(svg)) h3 {
    margin-top: 0;
  }
  p {
    margin: 0;
    line-height: 1.7;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Note = styled.aside`
  padding: ${({ theme }) => theme.spacing[5]};
  border-left: 3px solid #6fe8d4;
  background: ${({ theme }) => theme.colors.backgroundElevated};
  p {
    margin: 0;
    line-height: 1.75;
  }
`;
