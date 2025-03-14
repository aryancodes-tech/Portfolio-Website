import { motion } from 'framer-motion';
import { Users, ArrowUpRight } from 'lucide-react';

const positionsData = [
  {
    role: "Chairperson",
    organization: "IEEE Student Branch, JIIT",
    duration: "June 2023 - August 2024",
    description: <>Led & organized <b>20+ events</b>, resulting in a <b>15% increase</b> in participation compared to the previous year.</>,
    link: "https://ieeesbjiit.github.io/"
  },
  {
    role: "Core Team Member",
    organization: "OSDC, JIIT",
    duration: "November 2021 - May 2023",
    description: <>Lead Organizer of OSDHack'23, a hybrid hackathon with over <b>400 offline</b> and <b>300 online</b> participants.</>,
    link: ""
  }
];

const PositionsOfResponsibility = () => {
  return (
    <div id="positions" className="font-['Gilroy'] px-5 py-5 w-full mb-5">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-xl"
          >
            <Users strokeWidth={2} size={36} className="text-black" />
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold">Positions of Responsibility</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {positionsData.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl md:text-2xl PolySansMedian">{position.role}</h3>
                    { position.link != "" &&
                      <motion.a
                        href={position.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <ArrowUpRight size={20} />
                      </motion.a>
                    } 
                    </div>
                    <p className="text-gray-600">{position.organization}</p>
                    <p className="text-gray-600">{position.duration}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700">{position.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionsOfResponsibility; 