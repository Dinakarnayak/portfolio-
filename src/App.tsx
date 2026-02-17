import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Founder from './components/Founder'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Founder />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dinakar Nayak. Built with React + TypeScript + Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
