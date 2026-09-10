import styled from 'styled-components';
export const Section = styled.section`padding:${({ theme }) => theme.spacing[8]} 0;`;
export const Grid = styled.div`display:grid;gap:${({ theme }) => theme.spacing[4]};margin-top:${({ theme }) => theme.spacing[6]};@media(min-width:${({ theme }) => theme.breakpoints.tablet}){grid-template-columns:repeat(2,minmax(0,1fr));}@media(min-width:${({ theme }) => theme.breakpoints.laptop}){grid-template-columns:repeat(3,minmax(0,1fr));}`;
