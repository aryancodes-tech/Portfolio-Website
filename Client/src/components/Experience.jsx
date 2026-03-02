import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Omniful AI",
    logo: "/omniful.png",
    position: "SDE - I (Warehouse Management System)",
    duration: <b>July 2025 - Present</b>,
    website: "https://omniful.ai",
    description: <>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <li>Reduced search latency by <b>75% (20ms to 5ms)</b> utilizing <b>PostgreSQL Full-Text Search (tsvector/tsquery)</b> and advanced indexing (B-Tree, GiST, n-gram).</li>
        <li>Designed and enforced <b>multi-tenant RBAC authorization</b>, preventing cross-tenant data exposure and securing <b>450+ API endpoints</b>.</li>
        <li>Built end-to-end <b>Packaging Materials Inventory System</b>, enabling packaging material selection during packing and tracking life cycle of inventory from inwarding to order consumption.</li>
        <li>Implemented <b>Fixed-Bucket Rate Limiting</b> on 10+ public APIs, reducing abuse during traffic spikes.</li>
        <li>Architected <b>idempotent Wave & Picklist Generation Algorithms</b> ensuring exactly-once execution across distributed warehouse operations.</li>
        <li>Led a <b>2+ engineer backend team</b>, owning design decisions, reviewing PRs, and running KT sessions.</li>
        <li>Built a common input sanitisation library, mitigating <b>HTML & SQL injection risks</b> across multiple backend modules.</li>
        <li>Worked on <b>index and query optimizations</b> in core WMS modules including Cycle Count, Serialised SKUs, Hub/Location Based Inventory and Picklists.</li>
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
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <li>Reduced API response time from <b>1,400ms to 8ms</b>, scaling the daily processing from <b>20K+ to 50K+</b> orders.</li>
        <li>Enhanced UX of <b>21,000+ entities</b> leveraging <b>Firebase Cloud Messaging</b> to improve cross-device communication.</li>
        <li>Implemented <b>Redis Locks</b> to prevent failures, handling parallel requests on the same resource.</li>
        <li>Maintained <b>3 Microservices</b>, implementing DB-level logging with <b>AWS Cloudwatch and Newrelic</b> for real-time monitoring, logging, and rapid resolution of production issues.</li>
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
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <li><b>Cut follow-up time by 50%</b> with a <b>Google Sheets API</b> powered automated lead pipeline for real-time tracking.</li>
        <li><b>Boosted page load speed by 30%</b> by constructing highly responsive web-pages with effective communication from design team.</li>
      </ul>
    </>,
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "Docker"]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="font-['Gilroy'] px-5 py-5 w-full">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-xl"
          >
            <Briefcase strokeWidth={2} size={36} className=" text-black" />
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold">Experience</h2>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#F2F2F2] ${exp.company === 'Omniful AI' ? 'p-2' : 'p-0'}`}
                >
                  <a href={exp.website} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      title={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-4 md:gap-4">
                  <div className='flex flex-col'>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl md:text-2xl font-bold">{exp.position}</h3>
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        🔗
                      </a>
                    </div>
                    <p className="text-gray-600">{exp.company} • {exp.duration}</p>
                  </div>
                  
                  <p className="text-gray-700">{exp.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors hover:cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 