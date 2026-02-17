const About = () => {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">About Me</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          I turn complex technical ideas into usable, scalable products.
        </h2>
        <p className="mt-6 leading-8 text-gray-300">
          Final-year AI & ML engineer and Founder of Next Tech. I focus on architecting reliable
          systems with measurable outcomes—from intelligent education experiences to secure APIs and
          distributed trust models.
        </p>
        <p className="mt-4 leading-8 text-gray-300">
          My strength is execution across the full lifecycle: product discovery, technical design,
          iterative development, and deployment readiness.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">What I prioritize</h3>
        <ul className="mt-4 space-y-3 text-sm text-gray-300">
          <li>• Scalable software architecture and maintainable codebases</li>
          <li>• AI integration that solves real user problems</li>
          <li>• Security-first backend engineering practices</li>
          <li>• Startup velocity without compromising quality</li>
        </ul>
      </div>
    </section>
  )
}

export default About
