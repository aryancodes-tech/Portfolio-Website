import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

const educationData = [
  {
    institution: "Jaypee Institute of Information Technology (JIIT)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology (IT) — Software Engineering",
    duration: "2021 - 2025",
    website: "https://www.jiit.ac.in",
    cgpa: "8.1 / 10",
    highlights: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management",
      "Computer Networks"
    ]
  },
  {
    institution: "Cambridge Court High School",
    degree: "Higher Secondary (XII)",
    duration: "2021",
    website: "https://cambridgecourthighschool.org/",
    percentage: "96.2 %"
  },
  {
    institution: "Cambridge Court High School",
    degree: "Secondary (X)",
    duration: "2019",
    website: "https://cambridgecourthighschool.org/",
    percentage: "97.0 %"
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="w-full px-1 py-8 sm:px-2 md:py-12"
      aria-label="Aryan Gupta education — JIIT Jaypee Institute of Information Technology"
    >
      <SectionHeading
        // kicker="01 — Formation"
        title="Education"
        icon={<GraduationCap strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <a
              href={educationData[0].website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-wider text-[hsl(var(--signal-deep))] underline decoration-dotted underline-offset-4 hover:text-[hsl(var(--ink))]"
            >
              Visit
              <ExternalLink size={14} strokeWidth={2} aria-hidden />
            </a>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="surface-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold text-[hsl(var(--ink))] md:text-xl">
                  {educationData[idx].degree}
                </h3>
                <p className="mt-1 text-[hsl(var(--muted-foreground))]">
                  {educationData[idx].institution} · {educationData[idx].duration}
                </p>
                <a
                  href={educationData[idx].website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[hsl(var(--signal-deep))] hover:text-[hsl(var(--ink))]"
                >
                  Visit
                  <ExternalLink size={14} strokeWidth={2} aria-hidden />
                </a>
              </div>
              <span className="pill-signal font-mono text-xs uppercase tracking-wide md:text-left">
                {educationData[idx].percentage}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
