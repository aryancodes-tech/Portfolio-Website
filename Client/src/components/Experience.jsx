import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Omniful AI",
    logo: "/omniful.png",
    position: "Software Developer Intern",
    duration: <b>Jan 2023 - Present</b>,
    website: "https://omniful.ai",
    description: <>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <li>Reduced API response time from <b>8ms to 2ms</b>, scaling daily order processing from <b>20K+ to 50K+</b> orders.</li>
        <li>Enhanced UX for <b>21,000+ entities</b> using <b>Firebase Cloud Messaging</b> to improve cross-device communication.</li>
        <li>Maintained <b>3 microservices with</b> <b>AWS CloudWatch</b> and <b>New Relic</b> for real-time monitoring, logging, and rapid issue resolution.</li>
        <li>Implemented <b>Redis locking</b> to prevent failures and handle parallel requests on the same resource.</li>
      </ul>
    </>,
    techStack: ["Golang", "PostgreSQL", "AWS", "Redis", "Docker", "Kafka"]
  },
  {
    company: "Bezt Labs | Abouv",
    logo: "/beztlabs.jpeg",
    position: "Full Stack Developer Intern",
    duration: <b>Oct 2023 - Dec 2023</b>,
    website: "https://abouv.com",
    description: <>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <li><b>Cut follow-up time by 50%</b> with a <b>Google Sheets API</b> powered automated lead pipeline for real-time tracking.</li>
        <li><b>Boosted page load speed by 30%</b> with responsive web design and seamless team collaboration.</li>
        <li>Researched and integrated UPI payments workflow to enhance the Rewards module, collaborating with backend teams for secure transactions.</li>
      </ul>
    </>,
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "Docker"]
  }
  // Add more experiences as needed
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