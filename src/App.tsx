import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import ParticleBackground from './components/ui/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;