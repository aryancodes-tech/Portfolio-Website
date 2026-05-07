import { motion } from 'framer-motion';
import { FolderOpenDot } from 'lucide-react';

const ResumeButton = () => {
  return (
    <motion.a
      href="https://aryancodes.tech/resume"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[hsl(var(--ink))] shadow-[6px_6px_0_hsl(var(--signal)/0.55)] md:hidden"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <FolderOpenDot strokeWidth={2} size={18} className="text-[hsl(var(--signal-deep))]" />
      Résumé
    </motion.a>
  );
};

export default ResumeButton;
