import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[8]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Header = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 46rem;
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accentBright};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Copy = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
`;
