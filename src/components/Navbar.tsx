const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full bg-gray-900 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-500">Dinakar Nayak</h1>
        <div className="hidden space-x-6 md:flex">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
