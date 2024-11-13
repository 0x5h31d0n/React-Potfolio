// About.jsx
import React, { useEffect, useRef } from 'react';
import '../style.css';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-section" ref={aboutRef}>
      <h2 className="fade-item">👀 About Me</h2>
      <div className="about-content fade-item">
        <p>I am an Infosec Enthusiast currently pursuing my Computer Science Engineering at SJEC Mangalore VTU. 
          My passion for tech began while I was in school, and I have been honing my skills and expanding my knowledge in Computer Science specializing in cyber security. 
        </p>
      </div>
    </section>
  );
}

export default About;