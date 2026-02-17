const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,.20),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,.25),transparent_30%)]" />

      <p className="rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        Founder • AI Engineer • Full Stack Developer
      </p>

      <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Building <span className="text-blue-400">AI-first products</span> with startup speed and
        production reliability.
      </h1>

      <p className="mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
        I design and ship intelligent platforms across education, backend systems, and applied
        machine learning—bridging architecture vision with hands-on execution.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
        >
          Explore Projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-blue-400 px-6 py-3 font-medium text-blue-200 transition hover:bg-blue-500/20"
        >
          Let&apos;s Collaborate
        </a>
      </div>

      <div className="mt-14 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">10+</p>
          <p className="text-sm text-gray-300">Production-grade projects</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">3</p>
          <p className="text-sm text-gray-300">Core domains: AI, backend, blockchain</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">1</p>
          <p className="text-sm text-gray-300">Founder-driven startup journey</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
