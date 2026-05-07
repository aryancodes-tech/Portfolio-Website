import { FolderOpenDot } from "lucide-react"
import { motion } from 'framer-motion'

/**
 * Full-width hero with asymmetric layout and blueprint-style grid (no canvas snow).
 */
const HeroSection = () => {
  return (
    <div className="w-full px-1 sm:px-2 pt-2 pb-4">
      <section className="surface-card relative overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] p-6 sm:p-10 md:p-14 lg:p-16">
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.65]" aria-hidden />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[hsl(var(--signal)/0.12)] blur-3xl" aria-hidden />
        <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[hsl(200_40%_50%/0.08)] blur-3xl" aria-hidden />

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-[11px] tracking-[0.4em] text-[hsl(var(--signal-deep))] uppercase"
            >
              Backend · Golang · Systems
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.55 }}
              className="font-display text-[clamp(2.1rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--ink))]"
            >
              Aryan Gupta
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="max-w-xl font-['Gilroy'] text-lg leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-xl"
            >
              Backend engineer focused on{' '}
              <span className="text-[hsl(var(--ink))]">scalable APIs</span>, microservices, and{' '}
              <span className="text-[hsl(var(--ink))]">distributed systems</span> — from PostgreSQL internals to warehouse-scale workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="https://aryancodes.tech/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--ink))] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-[hsl(var(--surface))] shadow-[5px_5px_0_hsl(var(--signal))] transition-transform hover:-translate-y-0.5"
              >
                <FolderOpenDot strokeWidth={1.75} size={18} className="text-[hsl(var(--signal))] transition-colors group-hover:text-[hsl(var(--surface))]" />
                Résumé
              </a>
              <span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
                /omniful · shipping in prod
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, type: 'spring', stiffness: 120, damping: 18 }}
            className="relative mx-auto flex w-full max-w-[280px] flex-col items-center lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] border-2 border-dashed border-[hsl(var(--ink)/0.25)]" aria-hidden />
              <div className="relative rotate-2 overflow-hidden rounded-[1.75rem] border-4 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] shadow-[12px_12px_0_hsl(var(--signal)/0.35)]">
                <img
                  src="/photo.svg"
                  alt="Aryan Gupta — backend and Golang developer"
                  width={320}
                  height={320}
                  className="aspect-square w-full max-w-[260px] object-cover sm:max-w-[280px]"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 max-w-[200px] rotate-[-2deg] rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] px-4 py-2 font-mono text-[10px] font-semibold uppercase leading-snug tracking-widest text-[hsl(var(--ink))] shadow-[4px_4px_0_hsl(var(--ink)/0.15)] sm:text-xs">
                open to interesting infra problems
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
