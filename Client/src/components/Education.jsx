import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: "Jaypee Institute of Information Technology",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology (IT)",
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
    institution: "Canbridge Court High School",
    degree: "Higher Secondary (XII)",
    duration: "2021",
    website: "https://cambridgecourthighschool.org/",
    percentage: "96.2 %"
  },
  {
    institution: "Canbridge Court High School",
    degree: "Secondary (X)",
    duration: "2019",
    website: "https://www.dpsghaziabad.com",
    percentage: "97.0 %"
  }
];

const Education = () => {
  return (
    <div id="education" className="font-['Gilroy'] px-5 py-5 w-full">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-xl"
          >
            <GraduationCap strokeWidth={2} size={36} className="text-black" />
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
        </div>

        {/* Updated grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* College Card - Full Height on Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300 h-full"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-bold">{educationData[0].degree}</h3>
                    <a href={educationData[0].website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      🔗
                    </a>
                  </div>
                  <p className="text-gray-600">{educationData[0].institution} • {educationData[0].duration}</p>
                  <p className="text-gray-600">{educationData[0].field}</p>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="md:mt-0 inline-flex bg-gradient-to-t from-black to-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium self-start"
              >
                CGPA: &nbsp; <b>{educationData[0].cgpa}</b>
              </motion.div>
              
              <div className="flex flex-wrap gap-2">
                {educationData[0].highlights.map((highlight, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors hover:cursor-default"
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* School Cards Container - Right Side */}
          <div className="grid grid-cols-1 gap-6">
            {/* XII Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-bold">{educationData[1].degree}</h3>
                    <a href={educationData[1].website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      🔗
                    </a>
                  </div>
                  <p className="text-gray-600">{educationData[1].institution} • {educationData[1].duration}</p>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-2 md:mt-0 inline-flex bg-gradient-to-t from-black to-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium self-start md:self-center"
                >
                  Percentage: &nbsp; <b>{educationData[1].percentage}</b>
                </motion.div>
              </div>
            </motion.div>

            {/* X Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-bold">{educationData[2].degree}</h3>
                    <a href={educationData[2].website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      🔗
                    </a>
                  </div>
                  <p className="text-gray-600">{educationData[2].institution} • {educationData[2].duration}</p>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-2 md:mt-0 inline-flex bg-gradient-to-t from-black to-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium self-start md:self-center"
                >
                  Percentage: &nbsp; <b>{educationData[2].percentage}</b>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 