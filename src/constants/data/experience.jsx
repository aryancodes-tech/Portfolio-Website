import {
  LOGO_OMNIFUL_WEBP,
  LOGO_OMNIFUL_PNG,
  LOGO_BEZTLABS_WEBP,
  LOGO_BEZTLABS_JPEG,
} from '../assets'

/** Work experience entries for the Experience section. */
export const experiences = [
  {
    company: 'Omniful AI',
    logoWebp: LOGO_OMNIFUL_WEBP,
    logoFallback: LOGO_OMNIFUL_PNG,
    position: 'SDE - I (Warehouse Management System)',
    duration: <b>July 2025 - Present</b>,
    website: 'https://omniful.ai',
    description: (
      <>
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
      </>
    ),
    techStack: ['Golang', 'PostgreSQL', 'AWS', 'Redis', 'Docker', 'Kafka'],
  },
  {
    company: 'Omniful AI',
    logoWebp: LOGO_OMNIFUL_WEBP,
    logoFallback: LOGO_OMNIFUL_PNG,
    position: 'SDE Intern',
    duration: <b>January 2025 - July 2025</b>,
    website: 'https://omniful.ai',
    description: (
      <>
        <ul className="list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--signal-deep))]">
          <li>Reduced API response time from <b className="text-[hsl(var(--ink))]">1,400ms to 8ms</b>, scaling the daily processing from <b className="text-[hsl(var(--ink))]">20K+ to 50K+</b> orders.</li>
          <li>Enhanced UX of <b className="text-[hsl(var(--ink))]">21,000+ entities</b> leveraging <b className="text-[hsl(var(--ink))]">Firebase Cloud Messaging</b> to improve cross-device communication.</li>
          <li>Implemented <b className="text-[hsl(var(--ink))]">Redis Locks</b> to prevent failures, handling parallel requests on the same resource.</li>
          <li>Maintained <b className="text-[hsl(var(--ink))]">3 Microservices</b>, implementing DB-level logging with <b className="text-[hsl(var(--ink))]">AWS Cloudwatch and Newrelic</b> for real-time monitoring, logging, and rapid resolution of production issues.</li>
        </ul>
      </>
    ),
    techStack: ['Golang', 'PostgreSQL', 'AWS', 'Redis', 'Docker', 'Kafka'],
  },
  {
    company: 'Bezt Labs',
    logoWebp: LOGO_BEZTLABS_WEBP,
    logoFallback: LOGO_BEZTLABS_JPEG,
    position: 'Full Stack Developer Intern',
    duration: <b>October 2024 - December 2024</b>,
    website: 'https://abouv.com',
    description: (
      <>
        <ul className="list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--signal-deep))]">
          <li><b className="text-[hsl(var(--ink))]">Cut follow-up time by 50%</b> with a <b className="text-[hsl(var(--ink))]">Google Sheets API</b> powered automated lead pipeline for real-time tracking.</li>
          <li><b className="text-[hsl(var(--ink))]">Boosted page load speed by 30%</b> by constructing highly responsive web-pages with effective communication from design team.</li>
        </ul>
      </>
    ),
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Docker'],
  },
]
