type Project = {
  title: string
  summary: string
  stack: string[]
  impact: string
}

const projects: Project[] = [
  {
    title: 'ShubhaVidya',
    summary:
      'AI-powered education platform with personalized learning flows, secure auth, and modular course delivery.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    impact: 'Built for scalable classroom-to-cloud learning experiences.',
  },
  {
    title: 'Blockchain E-Voting',
    summary:
      'Decentralized voting architecture designed to improve integrity, transparency, and auditable outcomes.',
    stack: ['Blockchain', 'Cryptography', 'Distributed Systems'],
    impact: 'Reduced trust assumptions through tamper-resistant record design.',
  },
  {
    title: 'IndinaGPT',
    summary:
      'Modular LLM application with API-first backend services, focused on extensibility and domain adaptation.',
    stack: ['FastAPI', 'Python', 'LLM Orchestration'],
    impact: 'Accelerated experimentation for AI assistant workflows.',
  },
  {
    title: 'RBAC API',
    summary:
      'Type-safe backend service implementing authentication, authorization, and role-driven access boundaries.',
    stack: ['TypeScript', 'Express', 'JWT', 'PostgreSQL'],
    impact: 'Strengthened service security and enterprise readiness.',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Selected Projects</h2>
          </div>
          <a
            href="https://github.com/Dinakarnayak"
            className="hidden text-sm text-blue-300 transition hover:text-blue-200 md:block"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400/50"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-gray-300">{project.summary}</p>
              <p className="mt-4 text-sm text-blue-200">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
