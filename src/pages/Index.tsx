
import HeroSection from '@/components/HeroSection';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

import Skills from './Skills';
import Timeline from './Timeline';

const Index = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
};

export default Index;
