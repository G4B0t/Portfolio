import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  padding-block: ${({ theme }) => theme.spacing[7]} ${({ theme }) => theme.spacing[8]};

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Hero = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  max-width: 60rem;

  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
    line-height: 1;
    letter-spacing: -0.06em;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    line-height: 1.25;
  }
  p {
    margin: 0;
    max-width: 48rem;
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

export const Kicker = styled.span`
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[5]};

  article {
    padding: ${({ theme }) => theme.spacing[5]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.surface};
  }

  h3 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Note = styled.aside`
  padding: ${({ theme }) => theme.spacing[5]};
  border-left: 3px solid ${({ theme }) => theme.colors.accentBright};
  background: ${({ theme }) => theme.colors.backgroundElevated};
  p {
    margin: 0;
  }
`;
