import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-blue-400">
          Dinakar Nayak
        </a>

        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-1 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 text-sm text-gray-200 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-blue-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-gray-950 px-6 py-4 md:hidden">
          <ul className="space-y-3 text-sm text-gray-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
