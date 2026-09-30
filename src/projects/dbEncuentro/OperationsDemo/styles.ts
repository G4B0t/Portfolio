import styled from 'styled-components';

export const Demo = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(145deg, rgba(8, 27, 35, 0.96), rgba(8, 11, 28, 0.98));
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const DemoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem clamp(1rem, 3vw, 1.75rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(90deg, rgba(35, 173, 150, 0.13), transparent);
  span {
    color: #6fe8d4;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
  h3 {
    margin: 0.35rem 0 0;
    font-size: clamp(1rem, 2.5vw, 1.35rem);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Phase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.75rem;
  border: 1px solid rgba(111, 232, 212, 0.35);
  border-radius: ${({ theme }) => theme.radii.pill};
  color: #c7fff5;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  i {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    background: #6fe8d4;
    box-shadow: 0 0 0.9rem rgba(111, 232, 212, 0.8);
  }
`;

export const ControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem clamp(1rem, 3vw, 1.75rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  small {
    color: ${({ theme }) => theme.colors.textMuted};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const TabList = styled.div`
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  button {
    padding: 0.58rem 0.75rem;
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.radii.sm};
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    cursor: pointer;
  }
  button[aria-pressed='true'] {
    border-color: rgba(111, 232, 212, 0.42);
    background: rgba(35, 173, 150, 0.13);
    color: #d4fff8;
  }
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.75rem);
  article {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 0.45rem 0.75rem;
    min-width: 0;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(7, 17, 31, 0.7);
  }
  svg {
    grid-row: 1 / span 2;
    color: #6fe8d4;
  }
  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
  strong {
    font-size: 1.7rem;
  }
  small {
    grid-column: 1 / -1;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Leaderboard = styled.section`
  margin: 0 clamp(1rem, 3vw, 1.75rem) clamp(1rem, 3vw, 1.75rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(6, 15, 28, 0.62);
  > header,
  article {
    display: grid;
    grid-template-columns: 3rem minmax(10rem, 1fr) auto;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  > header {
    grid-template-columns: 1fr auto;
  }
  > header span {
    color: #6fe8d4;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  h4 {
    margin: 0.25rem 0 0;
  }
  .legend,
  article > div {
    display: grid;
    grid-template-columns: repeat(3, 2rem);
    gap: 0.35rem;
    text-align: center;
  }
  .legend b {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.7rem;
  }
  article:last-child {
    border-bottom: 0;
  }
  article > strong {
    color: #6fe8d4;
    font-family: ${({ theme }) => theme.typography.display};
  }
  article > span {
    font-weight: 700;
  }
  article b {
    display: grid;
    height: 2rem;
    border-radius: 50%;
    background: rgba(111, 232, 212, 0.09);
    place-items: center;
  }
  article b:first-child {
    color: #ffd773;
  }
  article b:nth-child(2) {
    color: #d5e1e7;
  }
  article b:nth-child(3) {
    color: #dfa276;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    article {
      grid-template-columns: 2rem 1fr;
    }
    article > div {
      grid-column: 2;
    }
  }
`;

export const AccreditationGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(18rem, 1fr) minmax(18rem, 0.82fr);
  gap: clamp(1rem, 3vw, 1.75rem);
  padding: clamp(1rem, 3vw, 1.75rem);
  > div > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
  > div > header b {
    color: #6fe8d4;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ParticipantList = styled.div`
  display: grid;
  gap: 0.5rem;
  button {
    display: grid;
    grid-template-columns: 2.5rem 1fr auto;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.7rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    background: rgba(7, 16, 29, 0.7);
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  button[aria-pressed='true'] {
    border-color: #6fe8d4;
    background: rgba(35, 173, 150, 0.12);
  }
  button > span {
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: linear-gradient(145deg, #315b62, #17313a);
    color: #cffff7;
    font-size: 0.72rem;
    font-weight: 800;
    place-items: center;
  }
  button div {
    display: grid;
    gap: 0.2rem;
  }
  button small {
    color: ${({ theme }) => theme.colors.textMuted};
  }
  button svg {
    color: #6fe8d4;
  }
`;

export const Credential = styled.article`
  align-self: start;
  overflow: hidden;
  border: 1px solid rgba(255, 198, 87, 0.65);
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(145deg, #0c4a49, #14313a 56%, #75551c);
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.32);
  > header,
  > footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0.9rem;
    background: rgba(4, 15, 24, 0.34);
    color: #ffdfa0;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }
  > footer {
    color: rgba(236, 255, 252, 0.68);
    font-weight: 400;
  }
  .credential-body {
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  .portrait {
    display: grid;
    width: 5rem;
    height: 5.8rem;
    border: 1px solid rgba(219, 255, 248, 0.3);
    border-radius: 0.35rem;
    background: linear-gradient(145deg, #7bc9bd, #315267);
    color: rgba(4, 20, 26, 0.72);
    font-size: 2rem;
    font-weight: 800;
    place-items: center;
  }
  .qr {
    display: grid;
    justify-self: end;
    width: 5rem;
    height: 5rem;
    border-radius: 0.35rem;
    background: #f3fffc;
    color: #082329;
    place-items: center;
  }
  .identity {
    grid-column: 1 / -1;
    display: grid;
    gap: 0.25rem;
  }
  .identity span {
    color: #8ffff0;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .identity strong {
    font-size: 1.2rem;
  }
  .identity small {
    color: rgba(236, 255, 252, 0.78);
  }
  dl {
    grid-column: 1 / -1;
    display: grid;
    gap: 0.55rem;
    margin: 0.35rem 0 0;
  }
  dl div {
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 0.7rem;
  }
  dt {
    color: rgba(236, 255, 252, 0.62);
    font-size: 0.72rem;
  }
  dd {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const CheckInList = styled.div`
  display: grid;
  grid-template-columns: minmax(17rem, 0.78fr) minmax(20rem, 1fr);
  gap: clamp(1rem, 3vw, 1.75rem);
  padding: clamp(1rem, 3vw, 1.75rem);
  .scan-panel {
    display: grid;
    align-content: center;
    justify-items: start;
    min-height: 22rem;
    padding: clamp(1rem, 3vw, 2rem);
    border: 1px solid rgba(111, 232, 212, 0.28);
    border-radius: ${({ theme }) => theme.radii.md};
    background:
      radial-gradient(circle at 76% 20%, rgba(35, 173, 150, 0.2), transparent 28%),
      rgba(7, 18, 30, 0.7);
  }
  .scan-panel > svg {
    color: #6fe8d4;
  }
  .scan-panel > span {
    margin-top: 1.25rem;
    color: #6fe8d4;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .scan-panel h4 {
    margin: 0.5rem 0;
    font-size: clamp(1.2rem, 3vw, 1.7rem);
  }
  .scan-panel p {
    max-width: 26rem;
    margin: 0 0 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
  .reset {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.85rem;
    padding: 0;
    border: 0;
    background: none;
    color: ${({ theme }) => theme.colors.textMuted};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    cursor: pointer;
  }
  .reception-log {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: rgba(7, 16, 29, 0.65);
  }
  .reception-log > header {
    display: grid;
    gap: 0.75rem;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  .reception-log > header > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  .reception-log > header span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .reception-log > header strong {
    color: #6fe8d4;
  }
  .reception-log article {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  .reception-log article:last-child {
    border-bottom: 0;
  }
  .reception-log article > svg {
    padding: 0.3rem;
    box-sizing: content-box;
    border-radius: 50%;
    background: rgba(35, 173, 150, 0.16);
    color: #6fe8d4;
  }
  .reception-log article div {
    display: grid;
    gap: 0.15rem;
  }
  .reception-log article small {
    color: ${({ theme }) => theme.colors.textMuted};
  }
  .reception-log article > span {
    color: #6fe8d4;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const PrimaryAction = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.72rem 0.9rem;
  border: 1px solid #6fe8d4;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(35, 173, 150, 0.18);
  color: #ddfff9;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.45;
  }
`;

export const Progress = styled.div`
  height: 0.35rem;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(111, 232, 212, 0.12);
  i {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #27a98f, #6fe8d4);
    transition: width ${({ theme }) => theme.transitions.slow};
  }
`;
