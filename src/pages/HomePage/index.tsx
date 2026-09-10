import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Experience } from '@/sections/Experience';
import { Hero } from '@/sections/Hero';
import { SelectedWork } from '@/sections/SelectedWork';
import { Skills } from '@/sections/Skills';
export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.slice(1);
    if (!sectionId) return;

    const section = document.getElementById(sectionId);
    const behavior = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    section?.scrollIntoView({ behavior, block: 'start' });
  }, [hash]);

  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
