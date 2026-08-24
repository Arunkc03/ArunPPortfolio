import React from 'react';
import bgImage from '../assets/Arun1.jpg';

const Home = () => (
  <section id="home" className="hero">
    <div className="hero-image-wrap"><img src={bgImage} alt="Arun K.C." className="hero-image" /></div>
    <div className="hero-copy">
      <p className="eyebrow">ARUN K.C. / PORTFOLIO</p>
      <h1>Code with purpose.<br /><span>Built for people.</span></h1>
      <p className="hero-role">Junior Developer</p>
      <p className="hero-text">Building modern, responsive and user-focused web applications with a practical full-stack mindset.</p>
      <a className="button" href="#projects">View my work <span>↗</span></a>
    </div>
  </section>
);

export default Home;
