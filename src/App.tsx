import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Gallery />
      <Certifications />
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Gourab Gorai. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;