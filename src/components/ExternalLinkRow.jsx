/* eslint-disable react/prop-types */
import { ExternalLink } from 'lucide-react'

/**
 * Inline “Visit” link with external icon (Experience / Education rows).
 * @param {{ href: string, className?: string }} props
 */
export default function ExternalLinkRow({ href, className = '' }) {
  if (href.length === 0) {
    return null
  }

  const baseClass =
    'inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[hsl(var(--signal-deep))] hover:text-[hsl(var(--ink))]'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`.trim()}
    >
      Visit
      <ExternalLink size={14} strokeWidth={2} aria-hidden />
    </a>
  )
}
