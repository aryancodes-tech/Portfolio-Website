import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ExternalLinkRow from './ExternalLinkRow'
import { educationData } from '../constants/data/education'
import { fadeUpInView } from '../motion/variants'

const Education = () => {
  return (
    <section
      id="education"
      className="w-full px-1 py-8 sm:px-2 md:py-12"
      aria-label="Aryan Gupta education - JIIT Jaypee Institute of Information Technology"
    >
      <SectionHeading
        title="Education"
        icon={<GraduationCap strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.article
          {...fadeUpInView(0)}
          className="surface-card group relative flex h-full flex-col gap-5 p-6 md:p-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--ink))] md:text-2xl">
                {educationData[0].degree}
              </h3>
              <p className="mt-1 text-[hsl(var(--muted-foreground))]">
                {educationData[0].institution} · {educationData[0].duration}
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{educationData[0].field}</p>
            </div>
            <ExternalLinkRow
              href={educationData[0].website}
              className="shrink-0 underline decoration-dotted underline-offset-4"
            />
          </div>

          <span className="pill-signal w-fit font-mono text-xs uppercase tracking-wide">
            CGPA <span className="mx-1 text-[hsl(var(--signal))]">·</span> {educationData[0].cgpa}
          </span>

          <div className="flex flex-wrap gap-2">
            {educationData[0].highlights.map((highlight, i) => (
              <span key={i} className="chip-tech">
                {highlight}
              </span>
            ))}
          </div>
        </motion.article>

        <div className="grid grid-cols-1 gap-6">
          {[1, 2].map((idx) => (
            <motion.article
              key={idx}
              {...fadeUpInView(idx)}
              className="surface-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold text-[hsl(var(--ink))] md:text-xl">
                  {educationData[idx].degree}
                </h3>
                <p className="mt-1 text-[hsl(var(--muted-foreground))]">
                  {educationData[idx].institution} · {educationData[idx].duration}
                </p>
                <ExternalLinkRow
                  href={educationData[idx].website}
                  className="mt-2"
                />
              </div>
              <span className="pill-signal font-mono text-xs uppercase tracking-wide md:text-left">
                {educationData[idx].percentage}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
