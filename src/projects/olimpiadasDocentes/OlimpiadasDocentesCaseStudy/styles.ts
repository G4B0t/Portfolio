import styled from 'styled-components';

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
    max-width: 42rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    line-height: 1.8;
  }
`;

export const Kicker = styled.span`
  color: #73e6db;
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
  max-width: 40rem;
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
    radial-gradient(circle at 62% 27%, rgba(247, 190, 68, 0.3), transparent 13%),
    radial-gradient(circle at 68% 54%, rgba(58, 226, 211, 0.23), transparent 23%),
    linear-gradient(145deg, #071927, #07111d 62%, #10222d);
  box-shadow: ${({ theme }) => theme.shadows.card};

  &::before,
  &::after {
    position: absolute;
    inset: 0;
    content: '';
    pointer-events: none;
  }

  &::before {
    background-image:
      linear-gradient(rgba(120, 226, 219, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(120, 226, 219, 0.08) 1px, transparent 1px);
    background-size: 3.2rem 3.2rem;
  }

  &::after {
    background: linear-gradient(180deg, transparent 54%, rgba(4, 10, 18, 0.62));
  }

  .podium {
    position: absolute;
    z-index: 1;
    right: 12%;
    bottom: 11%;
    display: flex;
    align-items: end;
    gap: 0.85rem;
    height: 52%;
  }

  .podium i {
    display: block;
    width: clamp(3.5rem, 8vw, 5.75rem);
    height: 58%;
    border: 1px solid rgba(119, 233, 225, 0.5);
    border-radius: 0.75rem 0.75rem 0.2rem 0.2rem;
    background: linear-gradient(180deg, rgba(31, 101, 110, 0.7), rgba(6, 22, 35, 0.95));
    box-shadow: 0 0 2rem rgba(60, 224, 213, 0.16);
  }

  .podium i:nth-child(2) {
    height: 100%;
    border-color: rgba(255, 204, 93, 0.7);
    background: linear-gradient(180deg, rgba(125, 89, 20, 0.82), rgba(20, 25, 23, 0.94));
    box-shadow: 0 0 2.25rem rgba(247, 190, 68, 0.24);
  }

  .podium i:nth-child(3) {
    height: 43%;
    border-color: rgba(205, 216, 222, 0.6);
  }

  .signal {
    position: absolute;
    z-index: 1;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: #7dfff2;
    box-shadow: 0 0 1.2rem rgba(88, 239, 224, 0.9);
  }

  .signal::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7rem;
    height: 1px;
    background: linear-gradient(90deg, rgba(116, 243, 232, 0.72), transparent);
    content: '';
    transform: translateY(-50%);
  }

  .signal-one { top: 19%; right: 24%; }
  .signal-two { top: 48%; right: 55%; }
  .signal-three { right: 13%; bottom: 17%; }

  .hero-readout {
    position: absolute;
    z-index: 1;
    top: 12%;
    left: 10%;
    display: grid;
    gap: 0.35rem;
    padding: 0.9rem 1rem;
    border: 1px solid rgba(131, 233, 225, 0.36);
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(5, 18, 29, 0.72);
  }

  .hero-readout span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hero-readout strong {
    color: #a7fff5;
    font-family: ${({ theme }) => theme.typography.display};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  article {
    padding: 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(12, 16, 36, 0.68);
  }

  svg { color: #73e6db; }
  h3 { margin: 1rem 0 0.6rem; font-size: ${({ theme }) => theme.typography.sizes.lg}; }
  p { margin: 0; color: ${({ theme }) => theme.colors.textSecondary}; font-size: ${({ theme }) => theme.typography.sizes.sm}; line-height: 1.7; }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

export const DemoFrame = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(145deg, rgba(10, 27, 42, 0.9), rgba(7, 12, 27, 0.92));
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const DemoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem clamp(1rem, 3vw, 1.75rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  span { color: #73e6db; font-size: ${({ theme }) => theme.typography.sizes.xs}; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
  h3 { margin: 0.35rem 0 0; font-size: ${({ theme }) => theme.typography.sizes.lg}; }
  svg { color: #f7be44; }
`;

export const Standings = styled.div`
  display: grid;
  padding: clamp(0.75rem, 2vw, 1.3rem);

  article {
    display: grid;
    grid-template-columns: 3rem minmax(9rem, 1fr) auto;
    align-items: center;
    gap: 1rem;
    padding: 0.95rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  article:last-child { border-bottom: 0; }
  article > strong { color: #73e6db; font-family: ${({ theme }) => theme.typography.display}; }
  article > span { font-weight: 700; }
  article > div { display: flex; gap: 0.5rem; align-items: center; }
  b, em { display: grid; width: 2.2rem; height: 2.2rem; border-radius: 50%; font-size: ${({ theme }) => theme.typography.sizes.sm}; font-style: normal; place-items: center; }
  .gold { background: rgba(247, 190, 68, 0.23); color: #ffdc7f; }
  .silver { background: rgba(196, 212, 224, 0.2); color: #d7e3eb; }
  .bronze { background: rgba(198, 125, 73, 0.23); color: #f1b480; }
  em { margin-left: 0.35rem; border: 1px solid rgba(115, 230, 219, 0.5); color: #a7fff5; }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    article { grid-template-columns: 2rem 1fr; }
    article > div { grid-column: 2; }
  }
`;

export const ActionButton = styled.button`
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(115, 230, 219, 0.56);
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(42, 185, 173, 0.14);
  color: #b7fff6;
  font: inherit;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: 700;
  cursor: pointer;
`;

export const AthleteForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.75rem);

  label { display: grid; gap: 0.45rem; color: ${({ theme }) => theme.colors.textSecondary}; font-size: ${({ theme }) => theme.typography.sizes.sm}; }
  input, select { width: 100%; padding: 0.8rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.sm}; background: rgba(4, 15, 26, 0.8); color: ${({ theme }) => theme.colors.text}; font: inherit; }
  .review-card { display: grid; gap: 0.3rem; padding: 1rem; border: 1px solid rgba(115, 230, 219, 0.38); border-radius: ${({ theme }) => theme.radii.sm}; background: rgba(42, 185, 173, 0.1); }
  .review-card span { color: #73e6db; font-size: ${({ theme }) => theme.typography.sizes.xs}; letter-spacing: 0.08em; text-transform: uppercase; }
  .review-card strong { color: #d6fffb; }
  .review-card small { color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.5; }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

export const RolePanel = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(7, 15, 28, 0.9);
`;

export const RoleTabs = styled.div`
  display: flex;
  gap: 0.6rem;
  padding: 1rem;
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  button { padding: 0.6rem 0.8rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.sm}; background: transparent; color: ${({ theme }) => theme.colors.textSecondary}; font: inherit; cursor: pointer; white-space: nowrap; }
  button[data-active='true'] { border-color: #73e6db; background: rgba(42, 185, 173, 0.14); color: #c9fff8; }
`;

export const RoleNav = styled.div`
  display: grid;
  grid-template-columns: minmax(12rem, 0.45fr) minmax(0, 1fr);
  min-height: 18rem;

  .identity { display: grid; align-content: center; gap: 0.3rem; padding: 1.5rem; border-right: 1px solid ${({ theme }) => theme.colors.border}; background: linear-gradient(180deg, rgba(15, 40, 57, 0.75), rgba(8, 16, 28, 0.3)); }
  .identity span, .workspace-copy span { color: #73e6db; font-size: ${({ theme }) => theme.typography.sizes.xs}; letter-spacing: 0.08em; text-transform: uppercase; }
  .identity strong { font-size: ${({ theme }) => theme.typography.sizes.lg}; }
  nav { display: grid; align-content: start; gap: 0.35rem; padding: 1rem; }
  nav button { padding: 0.85rem; border: 1px solid transparent; border-radius: ${({ theme }) => theme.radii.sm}; background: transparent; color: ${({ theme }) => theme.colors.textSecondary}; font: inherit; text-align: left; }
  nav button.active { border-color: rgba(115, 230, 219, 0.4); background: rgba(42, 185, 173, 0.13); color: #d6fffb; }
  .workspace-copy { grid-column: 2; padding: 0 1rem 1.5rem; }
  .workspace-copy h3 { margin: 0.5rem 0; }
  .workspace-copy p { max-width: 36rem; margin: 0; color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.65; }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; .identity { border-right: 0; border-bottom: 1px solid ${({ theme }) => theme.colors.border}; } .workspace-copy { grid-column: 1; } }
`;

export const DocumentList = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  button { display: flex; align-items: center; gap: 1rem; width: 100%; padding: 0.9rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.sm}; background: rgba(5, 15, 27, 0.7); color: ${({ theme }) => theme.colors.text}; font: inherit; text-align: left; cursor: pointer; }
  button span { color: #f7be44; font-family: ${({ theme }) => theme.typography.display}; }
  button b { margin-left: auto; color: #73e6db; font-size: ${({ theme }) => theme.typography.sizes.xs}; letter-spacing: 0.08em; }
`;

export const CredentialPreview = styled.div`
  display: grid;
  grid-template-columns: minmax(16rem, 22rem) minmax(0, 1fr);
  align-items: center;
  gap: clamp(1.25rem, 4vw, 3.5rem);
  padding: clamp(1rem, 3vw, 1.5rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  > p { max-width: 28rem; margin: 0; color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.7; }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 1fr; }
`;

export const Credential = styled.article`
  overflow: hidden;
  border: 1px solid rgba(247, 190, 68, 0.7);
  border-radius: ${({ theme }) => theme.radii.sm};
  background: linear-gradient(135deg, #18342d, #173139 55%, #6a511c);
  box-shadow: 0 0 2rem rgba(247, 190, 68, 0.14);
  .credential-top, .credential-footer { display: flex; align-items: center; gap: 0.5rem; padding: 0.6rem 0.75rem; background: rgba(3, 15, 21, 0.36); color: #fce7ac; font-size: ${({ theme }) => theme.typography.sizes.xs}; letter-spacing: 0.08em; }
  .credential-body { display: grid; grid-template-columns: 4.5rem 1fr; gap: 0.85rem; padding: 0.9rem; }
  .credential-body > i { width: 4.5rem; height: 5rem; border-radius: 0.35rem; background: linear-gradient(145deg, #8dc5bf, #355f6d); }
  .credential-body div { display: grid; align-content: center; gap: 0.25rem; }
  .credential-body strong { font-size: ${({ theme }) => theme.typography.sizes.sm}; }
  .credential-body span, .credential-body small { color: rgba(235, 255, 251, 0.76); font-size: ${({ theme }) => theme.typography.sizes.xs}; }
  .credential-footer { font-size: 0.62rem; }
`;

export const Note = styled.aside`
  padding: 1.15rem 1.35rem;
  border-left: 2px solid #73e6db;
  background: rgba(42, 185, 173, 0.08);
  p { max-width: 68rem; margin: 0; color: ${({ theme }) => theme.colors.textSecondary}; font-size: ${({ theme }) => theme.typography.sizes.sm}; line-height: 1.75; }
`;
