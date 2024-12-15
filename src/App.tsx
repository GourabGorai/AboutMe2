import React, { useState } from 'react';
import { Background } from './components/layout/Background';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Background />
      <Navigation 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
}

export default App;