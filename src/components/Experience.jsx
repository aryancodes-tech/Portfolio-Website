import { m } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ExternalLinkRow from './ExternalLinkRow'
import { experiences } from '../constants/data/experience'
import { fadeUpInView } from '../motion/variants'

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full px-1 py-8 sm:px-2 md:py-12"
      aria-label="Aryan Gupta Work Experience — Omniful AI SDE-1, backend and microservices"
    >
      <SectionHeading
        title="Experience"
        icon={<Briefcase strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <m.article
            key={index}
            {...fadeUpInView(index, { y: 22 })}
            className="surface-card relative p-6 md:p-8"
          >
            <div className="flex flex-col gap-8 md:flex-row">
              <m.a
                whileHover={{ scale: 1.04 }}
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${exp.company} website`}
                className={`flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] shadow-[4px_4px_0_hsl(var(--signal)/0.35)] md:h-24 md:w-24 ${exp.company === 'Omniful AI' ? 'p-2' : ''}`}
              >
                <picture>
                  <source srcSet={exp.logoWebp} type="image/webp" />
                  <img
                    src={exp.logoFallback}
                    alt={`${exp.company} logo`}
                    title={exp.company}
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </m.a>

              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-bold text-[hsl(var(--ink))] md:text-2xl">
                      {exp.position}
                    </h3>
                    <ExternalLinkRow href={exp.website} />
                  </div>
                  <p className="mt-1 font-mono text-sm text-[hsl(var(--muted-foreground))]">
                    {exp.company} · {exp.duration}
                  </p>
                </div>

                <div className="text-[hsl(var(--foreground))]">{exp.description}</div>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="chip-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  )
}

export default Experience
