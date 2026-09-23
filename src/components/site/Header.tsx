import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { whatsappLink } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/portfolio', label: 'Portfolio', exact: false },
  { to: '/services', label: 'Services', exact: false },
  { to: '/pricing', label: 'Pricing', exact: false },
  { to: '/about', label: 'About', exact: false },
  { to: '/testimonials', label: 'Testimonials', exact: false },
  { to: '/faq', label: 'FAQ', exact: false },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
      return
    }

    if (savedTheme === 'light') {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
      return
    }

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    setDarkMode(prefersDark)

    document.documentElement.classList.toggle('dark', prefersDark)
    document.documentElement.style.colorScheme = prefersDark
      ? 'dark'
      : 'light'
  }, [])

  const toggleDarkMode = () => {
    const nextMode = !darkMode

    setDarkMode(nextMode)

    document.documentElement.classList.toggle('dark', nextMode)
    document.documentElement.style.colorScheme = nextMode ? 'dark' : 'light'

    localStorage.setItem('theme', nextMode ? 'dark' : 'light')
  }

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{
        borderColor: 'var(--line)',
        backgroundColor:
          'color-mix(in oklab, var(--paper) 88%, transparent)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight"
          style={{ color: 'var(--ink)' }}
          onClick={() => setOpen(false)}
        >
          Ohenebagraphix
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.exact }}
              className="text-sm font-medium tracking-wide transition-colors hover:opacity-70"
              activeProps={{ style: { color: 'var(--clay)' } }}
              style={{ color: 'var(--ink-soft)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--line)',
              color: 'var(--ink)',
            }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={darkMode}
            title={darkMode ? 'Light mode' : 'Dark mode'}
          >
            {darkMode ? (
              <Sun className="h-4.5 w-4.5" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>

          <a
            href={whatsappLink(
              "Hi Prince, I'd like to start a project with Ohenebagraphix.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline-offset-4 hover:underline"
            style={{ color: 'var(--ink-soft)' }}
          >
            WhatsApp Me
          </a>

          <Link
            to="/contact"
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--clay)',
              color: 'var(--paper)',
            }}
          >
            Start a Project
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border"
            style={{
              borderColor: 'var(--line)',
              color: 'var(--ink)',
            }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={darkMode}
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border"
            style={{
              borderColor: 'var(--line)',
              color: 'var(--ink)',
            }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-y-auto overflow-x-hidden border-t transition-[max-height] duration-300 ease-out lg:hidden',
          open
            ? 'max-h-[calc(100vh-4.5rem)]'
            : 'max-h-0 border-t-0',
        )}
        style={{
          borderColor: 'var(--line)',
          backgroundColor: 'var(--paper)',
        }}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.exact }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium"
              activeProps={{ style: { color: 'var(--clay)' } }}
              style={{ color: 'var(--ink-soft)' }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full px-5 py-3 text-center text-base font-semibold"
            style={{
              backgroundColor: 'var(--clay)',
              color: 'var(--paper)',
            }}
          >
            Start a Project
          </Link>

          <a
            href={whatsappLink(
              "Hi Prince, I'd like to start a project with Ohenebagraphix.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 rounded-full border px-5 py-3 text-center text-base font-semibold"
            style={{
              borderColor: 'var(--line)',
              color: 'var(--ink)',
            }}
          >
            WhatsApp Me
          </a>
        </nav>
      </div>
    </header>
  )
  }
