const Hero = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center px-6 text-center">
      <h2 className="mb-4 text-4xl font-bold md:text-6xl">
        Founder of <span className="text-blue-500">Next Tech</span>
      </h2>
      <p className="max-w-2xl text-gray-400">
        AI Engineer | Full Stack Developer | Blockchain Systems Architect
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="https://github.com/Dinakarnayak"
          className="rounded-lg bg-blue-600 px-6 py-2 hover:bg-blue-700"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/dinakar-nayak-n-125762232"
          className="rounded-lg border border-blue-500 px-6 py-2 hover:bg-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Hero
