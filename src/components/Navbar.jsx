import { Link } from "react-scroll"
import { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleMenuClick = () => {
    setIsOpen(prev => !prev)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const linkClass =
    "font-mono text-[11px] tracking-[0.12em] uppercase text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--signal-deep))] cursor-pointer"

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
      className="sticky top-0 z-50 px-3 pt-4 pb-2 sm:px-5"
    >
      <div className="content flex flex-row items-center justify-between gap-4 rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))]/95 px-4 py-3 shadow-[6px_6px_0_hsl(var(--signal)/0.25)] backdrop-blur-md md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <img src="/ag_black.svg" className="h-11 w-11 shrink-0 rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] p-1.5" alt="Aryan Gupta monogram" />
          <div className="flex min-w-0 flex-col leading-none">
            <span className="font-display truncate text-lg font-bold tracking-tight text-[hsl(var(--ink))] sm:text-xl">Aryan Gupta</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[hsl(var(--muted-foreground))]">
              portfolio
            </span>
          </div>
        </div>

        {/* Anchor dropdown to the hamburger so it lines up on narrow viewports */}
        <div className="relative shrink-0 lg:hidden">
          <button
            ref={buttonRef}
            type="button"
            onClick={handleMenuClick}
            className="rounded-lg border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] p-2 text-[hsl(var(--ink))] transition-colors hover:bg-[hsl(var(--signal)/0.12)]"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <Menu size={22} strokeWidth={2} />
          </button>

          {isOpen && (
            <div
              ref={menuRef}
              role="dialog"
              aria-label="Navigation menu"
              className="absolute right-0 top-full z-30 mt-2 w-[min(280px,calc(100vw-1.5rem))] origin-top-right rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] p-4 shadow-[8px_8px_0_hsl(var(--ink)/0.12)]"
            >
              <ul className="flex flex-col gap-3 text-center">
                <li className={linkClass}>
                  <Link to="education" smooth duration={500} onClick={handleLinkClick}>Education</Link>
                </li>
                <li className={linkClass}>
                  <Link to="experience" smooth duration={500} onClick={handleLinkClick}>Experience</Link>
                </li>
                <li className={linkClass}>
                  <Link to="projects" smooth duration={500} onClick={handleLinkClick}>Projects</Link>
                </li>
                <li className="pt-2">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-[hsl(var(--ink))] py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--surface))] shadow-[4px_4px_0_hsl(var(--signal))]"
                  >
                    <Link to="contactme" smooth duration={500} onClick={handleLinkClick}>
                      Contact
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex flex-row flex-wrap items-center gap-x-1 gap-y-2">
            <li className={linkClass}>
              <Link to="education" smooth duration={500}>Education</Link>
            </li>
            <li className="px-2 font-mono text-[hsl(var(--border))]" aria-hidden>·</li>
            <li className={linkClass}>
              <Link to="experience" smooth duration={500}>Experience</Link>
            </li>
            <li className="px-2 font-mono text-[hsl(var(--border))]" aria-hidden>·</li>
            <li className={linkClass}>
              <Link to="projects" smooth duration={500}>Projects</Link>
            </li>
            <li className="pl-6">
              <button
                type="button"
                className="rounded-xl bg-[hsl(var(--ink))] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--surface))] shadow-[4px_4px_0_hsl(var(--signal))] transition-transform hover:-translate-y-0.5"
              >
                <Link to="contactme" smooth duration={500}>
                  Contact
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar
