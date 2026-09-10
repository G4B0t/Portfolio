import { ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Box, Copy, Eyebrow, Section, Title } from './styles';
export function Contact() { return <Section id="contact"><Container><Box><Eyebrow>04 / Contact</Eyebrow><Title>Let&apos;s build something useful.</Title><Copy>Professional contact details are being prepared for publication. The portfolio foundation is ready for the next conversation.</Copy><ButtonLink href="#contact" aria-disabled="true">Contact details coming soon <ArrowUpRight size={18} /></ButtonLink></Box></Container></Section>; }
