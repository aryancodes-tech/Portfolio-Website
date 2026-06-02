/* eslint-disable react/prop-types */
import { Github, ArrowUpRight, Trophy, Globe } from 'lucide-react'
import { useState, useCallback } from 'react'
import { m } from 'framer-motion'

const ProjectCard = ({source, imgPreview, name, githubLink, externalLink, externalLinkText, description, wonHackathon, isSaaS}) => {
  const [showPreview, setShowPreview] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }, [])

  return (
    <m.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="surface-card relative flex w-full flex-col gap-6 px-5 py-6 md:gap-8 md:p-8"
      style={{ zIndex: showPreview ? 50 : 0 }}
    >

      {wonHackathon && (
        <m.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -top-3 left-4 z-10 inline-flex w-fit items-center gap-2 rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--signal))] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-[hsl(var(--ink))] shadow-[4px_4px_0_hsl(var(--ink))] md:right-4 md:left-auto text-white"
        >
          <m.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Trophy size={16} strokeWidth={2} />
          </m.span>
          Hackathon winner
        </m.div>
      )}

      <div className="flex flex-row items-start justify-between gap-4 pt-1">
        <img
          src={source}
          className="h-9 w-auto max-w-[10rem] object-contain md:h-10"
          alt={`${name} logo`}
          width={160}
          height={40}
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-shrink-0 flex-row justify-end gap-2 md:flex-col md:items-end lg:flex-row">
          {isSaaS && (
            <m.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="absolute -top-3 right-4 z-10 inline-flex w-fit items-center gap-2 rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--ink))] shadow-[4px_4px_0_hsl(var(--signal)/0.4)] md:left-4 md:right-auto"
            >
              <Globe size={14} />
              Micro-SaaS
            </m.div>
          )}
          {githubLink && githubLink.length > 0 && (
            <>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`} className="hidden text-[hsl(var(--ink))] hover:text-[hsl(var(--signal-deep))] md:block">
                <Github size={36} strokeWidth={1.5} aria-hidden />
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`} className="block text-[hsl(var(--ink))] hover:text-[hsl(var(--signal-deep))] md:hidden">
                <Github size={26} strokeWidth={1.5} aria-hidden />
              </a>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="PolySansMedian text-lg text-[hsl(var(--ink))] md:text-2xl">{name}</h3>
        <p className="PolySansSlim text-base leading-snug text-[hsl(var(--muted-foreground))] md:text-lg">{description}</p>
      </div>

      <div className="relative border-t-2 border-dashed border-[hsl(var(--border))] pt-6">
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowPreview(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setShowPreview(false)}
          className="group inline-flex flex-wrap items-center gap-2 md:gap-3"
        >
          <span className="PolySansNeutral font-mono text-sm tracking-wide text-[hsl(var(--signal-deep))] group-hover:text-[hsl(var(--ink))] md:text-base lg:text-lg">
            {externalLinkText}
          </span>
          <span className="hidden rounded-full border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] p-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:inline-flex">
            <ArrowUpRight strokeWidth={2} size={20} className="text-[hsl(var(--ink))]" />
          </span>
          <span className="inline-flex rounded-full border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] p-1 md:hidden">
            <ArrowUpRight strokeWidth={2} size={14} className="text-[hsl(var(--ink))]" />
          </span>
        </a>

        {showPreview && (
          <div
            className="pointer-events-none absolute z-[999] hidden w-[min(100vw-2rem,400px)] rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] shadow-[10px_10px_0_hsl(var(--signal)/0.25)] sm:block"
            style={{
              left: `${position.x + 16}px`,
              top: `${position.y + 16}px`,
            }}
          >
            <img
              src={imgPreview}
              alt={`${name} preview`}
              width={400}
              height={225}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[10px]"
            />
          </div>
        )}
      </div>
    </m.article>
  )
}

export default ProjectCard
