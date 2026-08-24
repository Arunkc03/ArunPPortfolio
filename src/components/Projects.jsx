import React from 'react';
import { portfolio } from '../data/portfolio';

const Projects = () => (
  <section id="projects">
    <div className="content">
      <p className="eyebrow">03 / SELECTED WORK</p><h2>Projects</h2>
      <div className="projects-grid">
        {portfolio.projects.map((project, i) => <article className="project" key={project.title}><p className="eyebrow">0{i + 1}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}
      </div>
    </div>
  </section>
);
export default Projects;
