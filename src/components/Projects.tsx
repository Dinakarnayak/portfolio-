const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-10 text-3xl font-bold text-blue-500">Projects</h3>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-gray-800 p-6">
            <h4 className="mb-2 text-xl font-semibold">ShubhaVidya</h4>
            <p className="text-gray-400">
              Full-stack AI-powered education platform built with React, Node.js, MongoDB, and JWT
              authentication.
            </p>
          </div>

          <div className="rounded-xl bg-gray-800 p-6">
            <h4 className="mb-2 text-xl font-semibold">Blockchain E-Voting</h4>
            <p className="text-gray-400">
              Decentralized voting system using blockchain principles for transparency and security.
            </p>
          </div>

          <div className="rounded-xl bg-gray-800 p-6">
            <h4 className="mb-2 text-xl font-semibold">IndinaGPT</h4>
            <p className="text-gray-400">
              LLM-based chatbot system built using FastAPI and modular AI services.
            </p>
          </div>

          <div className="rounded-xl bg-gray-800 p-6">
            <h4 className="mb-2 text-xl font-semibold">RBAC API</h4>
            <p className="text-gray-400">
              Secure TypeScript backend with JWT authentication and role-based access control.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
