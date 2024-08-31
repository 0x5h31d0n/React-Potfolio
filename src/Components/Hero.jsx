import React from 'react';
import Lottie from 'lottie-react';
import { ReactTyped } from "react-typed";
import skate from '../assets/skate.json';
import '../style.css'; // Assuming you have a specific CSS file for the Hero component

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello There👋🏻, <br></br>Im <a className="name" href='/'>Sheldon Menezes</a></h1>
          <h2>
            <ReactTyped
              strings={['developer', 'Infosec enthusiast', 'CTF player', 'bug bounty hunter']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
        <div className="hero-animation">
          <Lottie animationData={skate} loop={true} className="animation" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
