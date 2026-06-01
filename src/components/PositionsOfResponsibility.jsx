import { motion } from 'framer-motion';
import { Users, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const positionsData = [
  {
    role: "Chairperson",
    organization: "IEEE Student Branch, JIIT",
    duration: "June 2023 - August 2024",
    description: <>Led & organized <b className="text-[hsl(var(--ink))]">20+ events</b>, resulting in a <b className="text-[hsl(var(--ink))]">15% increase</b> in participation compared to the previous year.</>,
    link: "https://ieeesbjiit.github.io/"
  },
  {
    role: "Core Team Member",
    organization: "OSDC, JIIT",
    duration: "November 2021 - May 2023",
    description: <>Lead Organizer of OSDHack&apos;23, a hybrid hackathon with over <b className="text-[hsl(var(--ink))]">400 offline</b> and <b className="text-[hsl(var(--ink))]">300 online</b> participants.</>,
    link: ""
  }
];

const PositionsOfResponsibility = () => {
  return (
    <section id="positions" className="mb-8 w-full px-1 py-8 sm:px-2 md:py-12">
      <SectionHeading
        // kicker="05 — Community"
        title="Positions of Responsibility"
        icon={<Users strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {positionsData.map((position, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="surface-card p-6 md:p-8"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28 }}
                  className="flex min-w-0 flex-1 flex-col gap-2"
                >
                  <h3 className="font-display text-xl font-bold text-[hsl(var(--ink))] md:text-2xl">{position.role}</h3>
                  <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
                    <span className="inline-block w-fit font-mono text-[11px] font-semibold uppercase tracking-widest text-[hsl(var(--surface))]">
                      <span className="rounded-lg bg-[hsl(var(--ink))] px-3 py-1 shadow-[3px_3px_0_hsl(var(--signal)/0.5)]">
                        {position.organization}
                      </span>
                    </span>
                    <span
                      className="hidden shrink-0 font-mono text-sm text-[hsl(var(--muted-foreground))] sm:inline"
                      aria-hidden
                    >
                      ·
                    </span>
                    <p className="pt-1.5 font-mono text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] sm:pt-0">
                      {position.duration}
                    </p>
                  </div>
                </motion.div>

                {position.link.length > 0 && (
                  <motion.a
                    href={position.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] text-[hsl(var(--signal-deep))] transition-colors hover:bg-[hsl(var(--signal)/0.12)]"
                    aria-label="Organization website"
                  >
                    <ArrowUpRight size={20} />
                  </motion.a>
                )}
              </div>
              <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">{position.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default PositionsOfResponsibility;
