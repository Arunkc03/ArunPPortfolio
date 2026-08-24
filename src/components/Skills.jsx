import React from 'react';
import { portfolio } from '../data/portfolio';

const Skills = () => (
  <section id="skills">
    <div className="content">
      <p className="eyebrow">02 / TOOLKIT</p><h2>Skills & Stack</h2>
      <div className="skills-grid">{portfolio.skills.map(skill => <div className="skill" key={skill}>{skill}</div>)}</div>
    </div>
  </section>
);
export default Skills;
