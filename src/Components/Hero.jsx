import React, { Suspense } from 'react';
import { ReactTyped } from "react-typed";
import skate from '../assets/skate.json';
import '../style.css';

const LazyLottie = React.lazy(() => import('lottie-react'));

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello There👋🏻, <br />Im <a className="name" href='/'>Sheldon Menezes</a></h1>
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
          <Suspense fallback={<div>Loading Animation...</div>}>
            <LazyLottie animationData={skate} loop={true} className="animation" style={{ width: '300px', height: '300px' }} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Hero;
