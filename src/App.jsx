import React, { useEffect, useMemo, useState } from 'react';
import { skillGroups } from './data/skills';
import { projects } from './data/projects';
import { services } from './data/services';
import { experience } from './data/experience';

const icons = { Frontend:'⌘', Backend:'⌬', Database:'▦', Mobile:'▣', Tools:'⚙' };

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');
  const [filter, setFilter] = useState('All');
  const [sent, setSent] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-25% 0px -65% 0px' });
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const filters = useMemo(() => ['All', ...new Set(projects.flatMap(p => p.technologies))], []);
  const shownProjects = filter === 'All' ? projects : projects.filter(p => p.technologies.includes(filter));
  const nav = ['home','about','skills','projects','experience','services','contact'];
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };

  const submit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!form.get('name') || !form.get('email') || !form.get('message')) { setSent('error'); return; }
    setSent('success'); e.currentTarget.reset();
  };

  return <div className={dark ? 'site dark' : 'site'}>
    <header className="nav"><button className="brand" onClick={() => go('home')}>AK<span>.</span></button><button className="hamb" onClick={() => setMenu(!menu)}>☰</button><nav className={menu ? 'open' : ''}>{nav.map(id => <button key={id} className={active===id?'active':''} onClick={() => go(id)}>{id}</button>)}<button className="theme" onClick={() => setDark(!dark)}>{dark?'☼':'☾'}</button></nav></header>

    <main>
      <section id="home" className="hero section"><div className="hero-copy"><p className="eyebrow">FULL-STACK DEVELOPER</p><h1>Hi, I'm <span>Arun K.C.</span></h1><p className="lead">I build modern web and mobile applications that are fast, responsive, maintainable, and designed around real users.</p><div className="actions"><button className="primary" onClick={() => go('projects')}>View Projects ↗</button><button className="secondary" onClick={() => go('contact')}>Contact Me</button></div><div className="social"><a href="#GITHUB_PROFILE">GitHub</a><a href="#LINKEDIN_PROFILE">LinkedIn</a><a href="mailto:EMAIL_PLACEHOLDER">Email</a></div></div><div className="profile"><div className="profile-ring"><div className="profile-placeholder">AK</div></div><span>PROFILE IMAGE<br/>PLACEHOLDER</span></div></section>

      <section id="about" className="section"><div className="section-head"><p className="eyebrow">01 / ABOUT</p><h2>Developer with a product mindset.</h2></div><div className="about-grid"><p>I’m Arun K.C., a Full-Stack Developer interested in building modern web and mobile applications. I enjoy working across the interface, API and database layers to turn practical ideas into polished products.</p><p>My development journey spans React and Vite on the frontend, Laravel/PHP and REST APIs on the backend, MySQL for data, and Flutter/Dart for mobile. I continuously improve through project-based learning, collaboration and hands-on engineering.</p></div></section>

      <section id="skills" className="section"><div className="section-head"><p className="eyebrow">02 / SKILLS</p><h2>Tools I use to ship.</h2></div><div className="skill-grid">{skillGroups.map(g => <article className="skill-card" key={g.category}><div className="skill-icon">{icons[g.category]}</div><h3>{g.category}</h3><div className="badges">{g.skills.map(s => <span key={s}>{s}</span>)}</div></article>)}</div></section>

      <section id="projects" className="section"><div className="section-head"><p className="eyebrow">03 / PROJECTS</p><h2>Selected work.</h2></div><div className="filters">{filters.map(f => <button className={filter===f?'selected':''} key={f} onClick={() => setFilter(f)}>{f}</button>)}</div><div className="project-grid">{shownProjects.map((p,i) => <article className="project" key={p.title}><div className="project-image"><img loading="lazy" src={p.image} alt="" onError={e => {e.currentTarget.style.display='none'}}/><span>0{i+1}</span></div><div className="project-body"><h3>{p.title}</h3><p>{p.description}</p><div className="badges">{p.technologies.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><a href={p.github}>GitHub ↗</a><a href={p.demo}>Live Demo ↗</a></div></div></article>)}</div></section>

      <section id="experience" className="section"><div className="section-head"><p className="eyebrow">04 / EXPERIENCE</p><h2>Learning by building.</h2></div><div className="timeline">{experience.map(x => <article key={x.period}><div className="dot"/><p className="period">{x.period}</p><h3>{x.role}</h3><strong>{x.company}</strong><p>{x.description}</p></article>)}</div></section>

      <section id="services" className="section"><div className="section-head"><p className="eyebrow">05 / SERVICES</p><h2>From idea to implementation.</h2></div><div className="service-grid">{services.map((s,i)=><article className="service" key={s}><span>0{i+1}</span><h3>{s}</h3><p>Clean, scalable implementation focused on usability, performance and maintainability.</p></article>)}</div></section>

      <section id="contact" className="section contact"><div><p className="eyebrow">06 / CONTACT</p><h2>Have a project in mind?</h2><p>Let’s build something useful, elegant and reliable.</p><div className="social"><a href="mailto:EMAIL_PLACEHOLDER">EMAIL_PLACEHOLDER</a><a href="#LINKEDIN_PROFILE">LinkedIn</a><a href="#GITHUB_PROFILE">GitHub</a></div></div><form onSubmit={submit} noValidate><input name="name" placeholder="Name" required/><input name="email" type="email" placeholder="Email" required/><input name="subject" placeholder="Subject"/><textarea name="message" placeholder="Message" rows="6" required/><button className="primary" type="submit">Send Message →</button>{sent==='success'&&<p className="form-success">Message ready to send. Connect the form endpoint to enable delivery.</p>}{sent==='error'&&<p className="form-error">Please complete your name, email and message.</p>}</form></section>
    </main>

    <footer><span>© {new Date().getFullYear()} Arun K.C.</span><button onClick={() => go('home')}>Back to top ↑</button></footer><button className="top" onClick={() => go('home')}>↑</button>
  </div>;
}
export default App;
