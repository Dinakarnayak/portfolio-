const milestones = [
  {
    year: '2024',
    title: 'Founded Next Tech',
    detail: 'Started building practical AI solutions with a long-term product vision.',
  },
  {
    year: '2025',
    title: 'Platform Prototyping',
    detail: 'Shipped early AI education and backend security-focused product iterations.',
  },
  {
    year: 'Now',
    title: 'Scaling Execution',
    detail: 'Expanding product reliability, architecture depth, and collaboration footprint.',
  },
]

const Founder = () => {
  return (
    <section id="founder" className="bg-gray-900/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Founder Journey</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Building Next Tech</h2>
        <p className="mt-5 max-w-3xl leading-8 text-gray-300">
          I&apos;m building AI-powered education systems and secure digital infrastructure with a
          focus on scalability, performance, and practical impact for real users.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {milestones.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-blue-300">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Founder
