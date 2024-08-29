import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
    </div>
  );
}

export default HomePage;