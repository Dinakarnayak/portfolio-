const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h3 className="mb-10 text-3xl font-bold text-blue-500">Technical Skills</h3>

      <div className="grid gap-6 text-gray-400 md:grid-cols-3">
        <div>
          <h4 className="mb-2 font-semibold text-white">Programming</h4>
          <p>Python, TypeScript, Java, C++, JavaScript</p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-white">AI & ML</h4>
          <p>Deep Learning, NLP, LLMs, LSTM, GRU</p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-white">Web & Backend</h4>
          <p>React, Express, FastAPI, MongoDB, PostgreSQL</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
