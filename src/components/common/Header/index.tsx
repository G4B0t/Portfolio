import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '@/content/navigation';
import { profile } from '@/content/profile';
import { Container } from '@/components/ui/Container';
import {
  Bar,
  Brand,
  BrandMark,
  DesktopCta,
  DesktopNav,
  Inner,
  MobileMenu,
  MobileToggle,
  NavLink,
  PrimaryLink,
} from './styles';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <Bar>
      <Inner as={Container}>
        <Brand to="/" aria-label={`${profile.name} home`}>
          <BrandMark>{profile.mark}</BrandMark>
          <span>{profile.name}</span>
        </Brand>
        <DesktopNav aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink href={item.href} key={item.href}>
              {item.label}
            </NavLink>
          ))}
        </DesktopNav>
        <DesktopCta href="/#contact">
          Let&apos;s connect <ArrowUpRight size={15} />
        </DesktopCta>
        <MobileToggle
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </MobileToggle>
        {isOpen && (
          <MobileMenu aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavLink href={item.href} key={item.href} onClick={close}>
                {item.label}
              </NavLink>
            ))}
            <PrimaryLink href="/#contact" onClick={close}>
              Let&apos;s connect <ArrowUpRight size={15} />
            </PrimaryLink>
          </MobileMenu>
        )}
      </Inner>
    </Bar>
  );
}
