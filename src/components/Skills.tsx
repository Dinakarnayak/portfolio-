const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'TypeScript', 'Java', 'C++', 'JavaScript'],
  },
  {
    title: 'AI & ML',
    items: ['Deep Learning', 'NLP', 'LLMs', 'LSTM', 'GRU'],
  },
  {
    title: 'Web & Backend',
    items: ['React', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Expertise</p>
      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Technical Skills</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
