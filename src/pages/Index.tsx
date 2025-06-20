import React, { useRef } from 'react';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  const projectsRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero onViewProjects={() => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <About />
      <Skills />
      <Projects ref={projectsRef} />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
