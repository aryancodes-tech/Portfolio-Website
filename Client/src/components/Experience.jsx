import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    company: "Omniful AI",
    logo: "/omniful.png",
    position: "SDE - I (Warehouse Management System)",
    duration: <b>July 2025 - Present</b>,
    website: "https://omniful.ai",
    description: <>
      <ul className="list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--signal-deep))]">
        <li>Led a <b className="text-[hsl(var(--ink))]">2+ engineer backend team</b>, owning design decisions, reviewing PRs, and running KT sessions.</li>
        <li>Reduced search latency by <b className="text-[hsl(var(--ink))]">75% (20ms to 5ms)</b> utilizing <b className="text-[hsl(var(--ink))]">PostgreSQL Full-Text Search (tsvector/tsquery)</b> and advanced indexing (B-Tree, GiST, n-gram).</li>
        <li>Designed and enforced <b className="text-[hsl(var(--ink))]">multi-tenant RBAC authorization</b>, preventing cross-tenant data exposure and securing <b className="text-[hsl(var(--ink))]">450+ API endpoints</b>.</li>
        <li>Built end-to-end <b className="text-[hsl(var(--ink))]">Packaging Materials Inventory System</b>, enabling packaging material selection during packing and tracking life cycle of inventory from inwarding to order consumption.</li>
        <li>Implemented <b className="text-[hsl(var(--ink))]">Fixed-Bucket Rate Limiting</b> on 10+ public APIs, reducing abuse during traffic spikes.</li>
        <li>Architected <b className="text-[hsl(var(--ink))]">idempotent Wave & Picklist Generation Algorithms</b> ensuring exactly-once execution across distributed warehouse operations.</li>
        <li>Built a common input sanitisation library, mitigating <b className="text-[hsl(var(--ink))]">HTML & SQL injection risks</b> across multiple backend modules.</li>
        <li>Worked on <b className="text-[hsl(var(--ink))]">index and query optimizations</b> in core WMS modules including Cycle Count, Serialised SKUs, Hub/Location Based Inventory and Picklists.</li>
      </ul>
    </>,
    techStack: ["Golang", "PostgreSQL", "AWS", "Redis", "Docker", "Kafka"]
  },
  {
    company: "Omniful AI",
    logo: "/omniful.png",
    position: "SDE Intern",
    duration: <b>January 2025 - July 2025</b>,
    website: "https://omniful.ai",
    description: <>
      <ul className="list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--signal-deep))]">
        <li>Reduced API response time from <b className="text-[hsl(var(--ink))]">1,400ms to 8ms</b>, scaling the daily processing from <b className="text-[hsl(var(--ink))]">20K+ to 50K+</b> orders.</li>
        <li>Enhanced UX of <b className="text-[hsl(var(--ink))]">21,000+ entities</b> leveraging <b className="text-[hsl(var(--ink))]">Firebase Cloud Messaging</b> to improve cross-device communication.</li>
        <li>Implemented <b className="text-[hsl(var(--ink))]">Redis Locks</b> to prevent failures, handling parallel requests on the same resource.</li>
        <li>Maintained <b className="text-[hsl(var(--ink))]">3 Microservices</b>, implementing DB-level logging with <b className="text-[hsl(var(--ink))]">AWS Cloudwatch and Newrelic</b> for real-time monitoring, logging, and rapid resolution of production issues.</li>
      </ul>
    </>,
    techStack: ["Golang", "PostgreSQL", "AWS", "Redis", "Docker", "Kafka"]
  },
  {
    company: "Bezt Labs",
    logo: "/beztlabs.jpeg",
    position: "Full Stack Developer Intern",
    duration: <b>October 2024 - December 2024</b>,
    website: "https://abouv.com",
    description: <>
      <ul className="list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--signal-deep))]">
        <li><b className="text-[hsl(var(--ink))]">Cut follow-up time by 50%</b> with a <b className="text-[hsl(var(--ink))]">Google Sheets API</b> powered automated lead pipeline for real-time tracking.</li>
        <li><b className="text-[hsl(var(--ink))]">Boosted page load speed by 30%</b> by constructing highly responsive web-pages with effective communication from design team.</li>
      </ul>
    </>,
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "Docker"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full px-1 py-8 sm:px-2 md:py-12">
      <SectionHeading
        kicker="02 — Production"
        title="Experience"
        icon={<Briefcase strokeWidth={2} size={22} className="md:h-7 md:w-7" />}
      />

      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.06, 0.25) }}
            className="surface-card relative p-6 md:p-8"
          >
            <div className="flex flex-col gap-8 md:flex-row">
              <motion.a
                whileHover={{ scale: 1.04 }}
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] shadow-[4px_4px_0_hsl(var(--signal)/0.35)] md:h-24 md:w-24 ${exp.company === 'Omniful AI' ? 'p-2' : ''}`}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  title={exp.company}
                  className="h-full w-full object-cover"
                />
              </motion.a>

              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-xl font-bold text-[hsl(var(--ink))] md:text-2xl">
                      {exp.position}
                    </h3>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[hsl(var(--signal-deep))] hover:text-[hsl(var(--ink))]"
                    >
                      <ExternalLink size={14} />
                    </a>
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
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
