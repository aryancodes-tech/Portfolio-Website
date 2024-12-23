import { motion } from 'framer-motion';
import { FolderOpenDot } from 'lucide-react';

const ResumeButton = () => {
  return (
    <motion.a
      href="https://bit.ly/aryan-gupta-pdf" // Update with the actual path to your resume
      target="_blank"
      rel="noopener noreferrer"
      className="z-20 md:hidden flex flex-row items-center gap-2 fixed bottom-5 right-5 bg-black/80 font-bold text-white px-4 py-2 rounded-lg shadow-lg hover:bg-black transition duration-300"
      whileHover={{ scale: 1.1 }}
    >
      <FolderOpenDot strokeWidth={1.5} />Résumé
    </motion.a>
  );
};

export default ResumeButton;