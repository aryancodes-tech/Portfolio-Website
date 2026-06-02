import { m } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { awardsData } from '../constants/data/honors'
import { fadeUpInView } from '../motion/variants'

const HonorsAndAwards = () => {
  return (
    <section id="honors" className="mb-8 w-full px-1 py-8 sm:px-2 md:py-12">
      <SectionHeading
        title="Honors & Awards"
        icon={<Award strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {awardsData.map((award, index) => {
          const AwardIcon = award.icon
          return (
            <m.article
              key={index}
              {...fadeUpInView(index, { delayStep: 0.08 })}
              className="surface-card relative overflow-hidden p-6 md:p-8"
            >
              <div className="absolute -right-4 -top-4 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[hsl(var(--ink))] bg-[hsl(var(--signal)/0.15)]">
                <AwardIcon className="h-10 w-10 text-[hsl(var(--signal-deep))]" strokeWidth={1.5} />
              </div>

              <div className="relative flex flex-col gap-4 pr-12">
                <div>
                  <h3 className="font-display text-xl font-bold text-[hsl(var(--ink))] md:text-2xl">{award.title}</h3>
                  <span className="mt-2 inline-block font-mono text-[11px] font-semibold uppercase tracking-widest text-[hsl(var(--surface))]">
                    <span className="rounded-lg bg-[hsl(var(--ink))] px-3 py-1 shadow-[3px_3px_0_hsl(var(--signal)/0.5)]">
                      {award.organization}
                    </span>
                  </span>
                </div>

                <m.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="h-0.5 w-24 origin-left bg-[hsl(var(--signal))]"
                />

                <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">{award.description}</p>
              </div>

              <AwardIcon
                className="pointer-events-none absolute -bottom-4 -right-2 h-28 w-28 text-[hsl(var(--ink))] opacity-[0.06]"
                strokeWidth={1}
              />
            </m.article>
          )
        })}
      </div>
    </section>
  )
}

export default HonorsAndAwards
