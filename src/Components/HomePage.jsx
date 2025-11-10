import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Achievements from './Achievements';

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Achievements />
    </div>
  );
}

export default HomePage;