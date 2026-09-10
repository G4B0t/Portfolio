import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  align-items: center;
  min-height: clamp(39rem, 55vw, 46rem);
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[8]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeroContent = styled.div`position:relative;z-index:2;max-width:38rem;padding-top:1.5rem;@media(max-width:${({ theme }) => theme.breakpoints.tablet}){padding-block:2rem;background:linear-gradient(90deg,rgba(5,6,17,.94) 0%,rgba(5,6,17,.72) 70%,transparent 100%);}`;
export const Eyebrow = styled.p`display:flex;align-items:center;gap:1rem;margin:0 0 ${({ theme }) => theme.spacing[4]};color:${({ theme }) => theme.colors.accentBright};font-family:${({ theme }) => theme.typography.display};font-size:${({ theme }) => theme.typography.sizes.sm};letter-spacing:.12em;text-transform:uppercase;&::after{content:'';width:3rem;height:1px;background:${({ theme }) => theme.colors.accentSoft};}`;
export const Title = styled.h1`margin:0;font-size:clamp(4rem,8vw,7rem);line-height:.84;letter-spacing:-.085em;text-shadow:0 6px 30px rgba(0,0,0,.25);& span{background:linear-gradient(105deg,${({ theme }) => theme.colors.text} 5%,#d0a0ff 50%,${({ theme }) => theme.colors.accentBright});background-clip:text;color:transparent;}`;
export const Lead = styled.p`max-width:32rem;margin:${({ theme }) => theme.spacing[5]} 0 0;color:${({ theme }) => theme.colors.textSecondary};font-size:${({ theme }) => theme.typography.sizes.lg};`;
export const Actions = styled.div`display:flex;flex-wrap:wrap;gap:${({ theme }) => theme.spacing[3]};margin-top:${({ theme }) => theme.spacing[5]};& [data-variant='quiet']{background:rgba(5,6,17,.35);color:${({ theme }) => theme.colors.text};border-color:${({ theme }) => theme.colors.borderStrong};}`;
export const CapabilityList = styled.ul`display:flex;flex-wrap:wrap;gap:${({ theme }) => theme.spacing[3]};margin:${({ theme }) => theme.spacing[5]} 0 0;padding:0;list-style:none;`;
export const Signal = styled.li`color:${({ theme }) => theme.colors.textSecondary};font-family:${({ theme }) => theme.typography.display};font-size:${({ theme }) => theme.typography.sizes.xs};text-transform:uppercase;&::before{content:'•';margin-right:.45rem;color:${({ theme }) => theme.colors.accentBright};}`;

export const HeroVisual = styled.div`
  position:absolute;z-index:-1;inset:0;
  background:radial-gradient(circle at 68% 27%,rgba(129,93,255,.48),transparent 20rem),radial-gradient(circle at 88% 12%,rgba(49,111,237,.28),transparent 22rem),linear-gradient(90deg,${({ theme }) => theme.colors.background} 0%,rgba(5,6,17,.96) 30%,rgba(5,6,17,.3) 65%,rgba(5,6,17,.85) 100%),linear-gradient(180deg,transparent 55%,${({ theme }) => theme.colors.background} 97%);
  .stars{position:absolute;inset:0;opacity:.65;background-image:radial-gradient(#d8c6ff 1px,transparent 1px),radial-gradient(#7c8cff 1px,transparent 1px);background-position:0 0,42px 28px;background-size:87px 88px,121px 117px;mask-image:linear-gradient(90deg,transparent 25%,#000 48%,transparent 100%)}
  .atmosphere{position:absolute;inset:0;opacity:.72;background:linear-gradient(113deg,transparent 42%,rgba(87,122,244,.32) 55%,transparent 78%)}
  .city{position:absolute;right:0;bottom:7%;width:70%;height:63%;opacity:.92;background:repeating-linear-gradient(90deg,transparent 0 3.5%,rgba(115,135,255,.5) 3.65% 4.15%,transparent 4.4% 7.4%),linear-gradient(90deg,transparent 0 5%,rgba(27,31,68,.92) 5% 10%,transparent 10% 17%,rgba(20,24,58,.96) 17% 25%,transparent 25% 32%,rgba(35,28,75,.9) 32% 45%,transparent 45% 52%,rgba(17,23,57,.95) 52% 64%,transparent 64%);clip-path:polygon(0 50%,8% 50%,8% 24%,20% 24%,20% 42%,31% 42%,31% 8%,48% 8%,48% 32%,57% 32%,57% 16%,76% 16%,76% 44%,100% 44%,100% 100%,0 100%)}
  .city-front{bottom:0;right:-7%;width:77%;height:37%;opacity:.95;background:linear-gradient(90deg,transparent,rgba(10,12,38,.96) 20%,rgba(25,25,65,.94) 60%,transparent),repeating-linear-gradient(90deg,transparent 0 7%,rgba(180,130,255,.45) 7.2% 7.7%,transparent 7.9% 14%);clip-path:polygon(0 68%,15% 68%,15% 35%,27% 35%,27% 55%,42% 55%,42% 15%,58% 15%,58% 47%,75% 47%,75% 22%,100% 22%,100% 100%,0 100%)}
  .code-panel{position:absolute;z-index:1;border:1px solid rgba(181,151,255,.38);border-radius:.45rem;background:repeating-linear-gradient(180deg,rgba(154,131,255,.48) 0 2px,transparent 2px 1rem),linear-gradient(120deg,rgba(18,19,55,.95),rgba(47,32,92,.65));box-shadow:0 1rem 3rem rgba(0,0,0,.32),inset 0 0 2rem rgba(111,76,255,.14);transform:perspective(40rem) rotateY(-12deg) rotateX(4deg)}
  .panel-one{right:30%;bottom:24%;width:22rem;height:15rem}.panel-two{right:11%;bottom:17%;width:16rem;height:10rem;opacity:.82}
  .workstation{position:absolute;right:13%;bottom:12%;width:min(38vw,32rem);height:38%;border-bottom:3px solid rgba(190,137,255,.78);transform:perspective(35rem) rotateX(54deg) rotateZ(-4deg);background:linear-gradient(90deg,transparent,rgba(81,113,237,.58),transparent);box-shadow:0 1rem 3rem rgba(83,104,216,.25)}
  .workstation i{position:absolute;display:block;border:1px solid rgba(205,180,255,.45);background:rgba(5,6,17,.54)}.workstation i:nth-child(1){left:10%;bottom:10%;width:34%;height:64%}.workstation i:nth-child(2){left:47%;bottom:14%;width:30%;height:54%}.workstation i:nth-child(3){right:7%;bottom:18%;width:14%;height:40%}.horizon{position:absolute;inset:auto 0 0;height:30%;background:linear-gradient(180deg,transparent,${({ theme }) => theme.colors.background})}
  @media(max-width:${({ theme }) => theme.breakpoints.tablet}){.city{right:-20%;width:105%;opacity:.42}.workstation{right:-5%;width:86vw;opacity:.38}.code-panel{display:none}.atmosphere{opacity:.35}}
`;
