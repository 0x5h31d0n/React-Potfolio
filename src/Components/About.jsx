import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'; // Make sure to import the CSS file  

function About() {
  return (
    <section className="about">
      <h2>👀 About Me</h2>
      <div className="about-content">
        <p>I am an Infosec Enthusiast currently pursuing my Computer Science Engineering at SJEC Mangalore. 
          My passion for tech began while I was in high school, and I have been honing my skills and expanding my knowledge in this field and more in security part of it. 
          I am ctf player and also practice on PicoCTF and Hackthebox.
        </p>
      </div>
    </section>
  );
}

export default About;