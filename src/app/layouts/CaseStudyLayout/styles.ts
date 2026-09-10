import styled from 'styled-components';
export const Wrap = styled.div`
  padding: ${({ theme }) => theme.spacing[5]} 0;
`;
export const Fallback = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 48rem;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;
export const Kicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.display};
`;
export const Summary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
`;
