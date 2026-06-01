import { FolderOpenDot } from 'lucide-react';

/** Fixed mobile résumé link (no animation lib on critical path). */
const ResumeButton = () => {
  return (
    <a
      href="https://aryancodes.tech/resume"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[hsl(var(--ink))] shadow-[6px_6px_0_hsl(var(--signal)/0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98] md:hidden"
    >
      <FolderOpenDot strokeWidth={2} size={18} className="text-[hsl(var(--signal-deep))]" aria-hidden />
      Résumé
    </a>
  );
};

export default ResumeButton;
