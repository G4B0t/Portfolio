import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 15;
  display: grid;
  place-items: center;
  width: 2.85rem;
  height: 2.85rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: 50%;
  background: rgba(13, 16, 34, 0.88);
  color: ${({ theme }) => theme.colors.accentBright};
  box-shadow: ${({ theme }) => theme.shadows.card};
  backdrop-filter: blur(12px);
  transition:
    transform ${({ theme }) => theme.transitions.default},
    background ${({ theme }) => theme.transitions.default},
    border-color ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.accentBright};
    background: rgba(80, 55, 154, 0.62);
  }
`;
