import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 42rem;
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.display};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

export const Copy = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;
