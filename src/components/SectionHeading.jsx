/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

/** Shared section title block: mono kicker + display heading + optional icon stamp. */
export default function SectionHeading({ kicker, title, icon }) {
  return (
    <div className="mb-8 md:mb-10">
      <motion.p
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] md:text-xs tracking-[0.35em] uppercase text-[hsl(var(--signal))] mb-3"
      >
        {kicker}
      </motion.p>
      <div className="flex flex-wrap items-end gap-3 md:gap-4">
        {icon && (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex h-11 w-11 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] text-[hsl(var(--ink))] shadow-[5px_5px_0_hsl(22_90%_48%/0.4)]"
          >
            {icon}
          </motion.span>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-[hsl(var(--ink))]"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  )
}
