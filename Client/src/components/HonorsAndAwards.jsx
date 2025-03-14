import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const awardsData = [
  {
    title: "Hackathon Winner",
    organization: "Hyperverge, Bengaluru",
    description: <><b>Secured 1st place</b> among 75+ shortlisted teams in hackathon organized by Hyperverge, Bengaluru.</>,
    icon: Trophy
  },
  {
    title: "NTSE Scholar'19",
    organization: "NCERT, India",
    description: <>Received a monetory scholarship among <b>India's top 1000 students</b>, outperforming over 10,00,000 participants in a 2-stage process.</>,
    icon: Medal
  }
];

const HonorsAndAwards = () => {
  return (
    <div id="honors" className="font-['Gilroy'] px-5 py-5 w-full mb-5 ">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-xl"
          >
            <Award strokeWidth={2} size={36} className="text-black" />
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold">Honors & Awards</h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all duration-300"
            >
              {/* Trophy Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 rounded-full shadow-lg"
              >
                <award.icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl PolySansMedian">{award.title}</h3>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex bg-gradient-to-t from-black to-blue-900 text-white px-3 py-0.5 rounded-full text-sm font-medium mt-2"
                  >
                    {award.organization}
                  </motion.div>
                </div>

                {/* Animated underline effect */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"
                />

                <p className="text-gray-600 mt-2 ">{award.description}</p>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-2 right-2"
                >
                  <award.icon className="w-20 h-20 text-yellow-500" strokeWidth={1} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HonorsAndAwards; 