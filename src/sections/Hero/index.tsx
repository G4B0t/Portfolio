import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { Actions, CapabilityList, Eyebrow, HeroGrid, HeroSection, HeroVisual, Lead, Signal, Title } from './styles';

export function Hero() {
  const reducedMotion = useReducedMotion();
  const rise = reducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55 } };
  return <HeroSection><Container><HeroGrid><motion.div {...rise}><Eyebrow>01 / {profile.role}</Eyebrow><Title>{profile.name}<br /><span>Software Engineer.</span></Title><Lead>{profile.introduction}</Lead><Actions><ButtonLink href="#work">View projects <ArrowDown size={18} /></ButtonLink><ButtonLink href="#contact" data-variant="quiet">Contact <ArrowUpRight size={18} /></ButtonLink></Actions><CapabilityList aria-label="Core capabilities">{['Frontend systems', 'Full-stack delivery', 'APIs & automation'].map((item) => <Signal key={item}>{item}</Signal>)}</CapabilityList></motion.div><motion.div {...(reducedMotion ? {} : { initial: { opacity: 0, scale: .96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: .7, delay: .15 } })}><HeroVisual aria-label="Abstract engineering visual placeholder"><div className="orb" /><div className="grid" /><div className="panel panel-one"><span>system / architecture</span><i /></div><div className="panel panel-two"><span>build</span><b>01</b></div><div className="line line-one" /><div className="line line-two" /></HeroVisual></motion.div></HeroGrid></Container></HeroSection>;
}
