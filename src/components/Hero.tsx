const stats = [
  { value: '15+', label: 'AI prototypes shipped' },
  { value: '98%', label: 'API reliability target mindset' },
  { value: '24/7', label: 'Founder-level execution energy' },
]

const floatingTags = ['LLM Workflows', 'Realtime UX', 'AI Systems', 'Secure APIs']

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <div className="ai-grid-bg" aria-hidden="true" />
      <div className="ai-glow ai-glow-one" aria-hidden="true" />
      <div className="ai-glow ai-glow-two" aria-hidden="true" />
      <div className="ai-glow ai-glow-three" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl">
        <p className="mx-auto w-fit rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
          AI Founder • Full Stack Engineer • Product Builder
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Crafting <span className="text-cyan-300">AI-driven digital experiences</span> with live,
          modern UI and startup-grade speed.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 md:text-lg">
          I build production-ready products that combine intelligent systems, seamless UX, and
          scalable architecture—from idea to launch.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            View AI Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-cyan-300 px-6 py-3 font-medium text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Build with Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {floatingTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-left backdrop-blur"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
