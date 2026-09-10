import styled from 'styled-components';
export const Section = styled.section`padding:${({ theme }) => theme.spacing[9]} 0;`;
export const Box = styled.div`display:grid;gap:${({ theme }) => theme.spacing[4]};padding:${({ theme }) => theme.spacing[7]};overflow:hidden;border:1px solid ${({ theme }) => theme.colors.borderStrong};border-radius:${({ theme }) => theme.radii.lg};background:radial-gradient(circle at 85% 5%,rgba(124,99,255,.25),transparent 22rem),${({ theme }) => theme.colors.surface};box-shadow:${({ theme }) => theme.shadows.glowSubtle};`;
export const Eyebrow = styled.p`margin:0;color:${({ theme }) => theme.colors.accentBright};font-family:${({ theme }) => theme.typography.display};font-size:${({ theme }) => theme.typography.sizes.sm};letter-spacing:.1em;text-transform:uppercase;`;
export const Title = styled.h2`max-width:12ch;margin:0;font-size:clamp(2.5rem,7vw,5rem);line-height:.96;letter-spacing:-.06em;`;
export const Copy = styled.p`max-width:38rem;margin:0;color:${({ theme }) => theme.colors.textSecondary};`;
