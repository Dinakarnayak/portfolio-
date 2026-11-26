import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Check, Code2, Github, Linkedin, Mail, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { categories, filterProjects, projects, skillGroups, type ProjectFilter } from './data/portfolio'

const email = 'dinakarnayak4248@gmail.com'
const links = [{ label: 'About', href: '#about' }, { label: 'Work', href: '#work' }, { label: 'Skills', href: '#skills' }, { label: 'Contact', href: '#contact' }]

export default function App() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [light, setLight] = useState(false)
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)
  const visibleProjects = useMemo(() => filterProjects(projects, filter), [filter])

  useEffect(() => {
    const update = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? window.scrollY / max * 100 : 0) }
    window.addEventListener('scroll', update, { passive: true }); update()
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => { document.documentElement.dataset.theme = light ? 'light' : 'dark' }, [light])

  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
    catch { window.location.href = `mailto:${email}` }
  }

  return <div className="site-shell">
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Dinakar Nayak home"><b>D<span>.</span></b> DINAKAR NAYAK</a>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav>
      <div className="header-actions"><button className="icon-button" onClick={() => setLight(!light)} aria-label="Toggle colour theme">{light ? <Moon size={18}/> : <Sun size={18}/>}</button><a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a><button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><i/> AVAILABLE FOR SELECT OPPORTUNITIES</div><p className="kicker">AI ENGINEER · BUILDER · FOUNDER</p><h1>Turning complex<br/>ideas into <em>useful AI.</em></h1><p className="lead">I'm Dinakar — an AI & software engineer building intelligent products, thoughtful digital experiences and reliable systems that solve real problems.</p><div className="actions"><a className="button primary" href="#work">Explore my work <ArrowDown size={16}/></a><a className="button quiet" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div><div className="socials"><a href="https://github.com/Dinakarnayak" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href="https://linkedin.com/in/dinakar-nayak-n-125762232" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div></div>
        <div className="hero-art" aria-label="Abstract AI-inspired artwork"><div className="orbit one"/><div className="orbit two"/><div className="orbit three"/><div className="core"><BrainCircuit size={78}/></div><span className="float-tag top"><Sparkles size={14}/> Applied AI</span><span className="float-tag bottom"><Code2 size={14}/> Product engineering</span><span className="art-index">01 / 04</span></div>
        <a className="scroll-cue" href="#about">— SCROLL TO EXPLORE</a>
      </section>
      <section className="intro section-wrap" id="about"><div className="section-label">01 / ABOUT</div><div className="two-col"><h2>Curious by nature.<br/><span>Engineer by practice.</span></h2><div className="body-copy"><p>My work sits at the intersection of artificial intelligence and software engineering. I enjoy taking ideas from a rough prototype to a dependable product — with clear architecture, measurable outcomes and an excellent user experience.</p><p>Currently deepening my expertise in AI, modern application development and responsible technology while building projects that make emerging tools practical.</p><div className="stats"><div><b>AI +</b><small>Product mindset</small></div><div><b>End-to-end</b><small>Build approach</small></div><div><b>Always</b><small>Learning</small></div></div></div></div></section>
      <section className="work-section" id="work"><div className="section-wrap"><div className="section-top"><div><div className="section-label">02 / SELECTED WORK</div><h2>Ideas, made <em>real.</em></h2></div><p className="aside">A selection of experiments, products and engineering work. Explore the code and details on GitHub.</p></div><div className="filters" role="group" aria-label="Filter projects">{categories.map(category => <button key={category} className={filter === category ? 'filter active' : 'filter'} onClick={() => setFilter(category)} aria-pressed={filter === category}>{category}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className="project-card" key={project.name}><div className="card-meta"><span>0{index + 1}</span><span>{project.category}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={18}/></a></div><div className="project-icon"><Code2 size={25}/></div><h3>{project.name}</h3><p>{project.summary}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.href} target="_blank" rel="noreferrer">View repository <ArrowRight size={15}/></a></article>)}</div></div></section>
      <section className="skills-section section-wrap" id="skills"><div className="section-label">03 / TOOLKIT</div><div className="section-top"><h2>Tools I use to<br/><span>shape what's next.</span></h2><p className="aside">Good engineering is about choosing the right tool for the problem — and knowing why it belongs there.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><small>0{index + 1}</small><h3>{group.title}</h3><div className="tags">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>
      <section className="vision-section"><div className="section-wrap vision-grid"><div className="section-label">04 / WHAT DRIVES ME</div><div><Sparkles className="vision-icon"/><h2>Technology should feel<br/>like <em>possibility.</em></h2><p>I'm interested in responsible AI, useful automation and software that makes complicated things feel simple. The goal is never technology for its own sake — it's meaningful impact.</p><a className="text-link" href="#contact">Let's build something meaningful <ArrowUpRight size={16}/></a></div></div></section>
      <section className="contact-section section-wrap" id="contact"><div className="section-label">05 / CONTACT</div><div><p className="kicker">HAVE A GOOD CHALLENGE?</p><h2>Let's make<br/><em>it happen.</em></h2><p className="lead">Have an idea, an opportunity or a problem worth solving? I'd love to hear about it.</p><div className="actions"><a className="button primary" href={`mailto:${email}?subject=Let's%20connect`}><Mail size={16}/> Send an email <ArrowUpRight size={16}/></a><button className="button quiet" onClick={copyEmail}>{copied ? <Check size={16}/> : <Code2 size={16}/>} {copied ? 'Copied email' : 'Copy email address'}</button></div></div></section>
    </main>
    <footer className="site-footer section-wrap"><a className="wordmark" href="#home"><b>D<span>.</span></b> DINAKAR NAYAK</a><span>Designed with intent. Built with curiosity.</span><div className="footer-socials"><a href="https://github.com/Dinakarnayak" aria-label="GitHub"><Github size={17}/></a><a href="https://linkedin.com/in/dinakar-nayak-n-125762232" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={17}/></a></div><small>© {new Date().getFullYear()} Dinakar Nayak</small></footer>
  </div>
}
