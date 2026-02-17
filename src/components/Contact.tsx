const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 p-8 text-center md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Contact</p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Let&apos;s build something valuable.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          Open to AI engineering, backend architecture, and startup collaborations. If you&apos;re
          building ambitious products, I&apos;d love to contribute.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:dinakarnayak4248@gmail.com"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
          >
            dinakarnayak4248@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/dinakar-nayak-n-125762232"
            className="rounded-lg border border-blue-300 px-6 py-3 font-medium text-blue-200 transition hover:bg-blue-500/20"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
