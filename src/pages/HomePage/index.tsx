import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Experience } from '@/sections/Experience';
import { Hero } from '@/sections/Hero';
import { SelectedWork } from '@/sections/SelectedWork';
import { Skills } from '@/sections/Skills';
export function HomePage() {
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
