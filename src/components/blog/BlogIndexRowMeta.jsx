/* eslint-disable react/prop-types */
import { BLOG_PIN_ARIA_LABEL, BLOG_PIN_EMOJI } from '../../constants/copy'

/**
 * Right-hand meta column for a top-level blog index row.
 *
 * @param {object} props
 * @param {boolean} props.pinned Whether the entry is pinned on the index.
 * @param {'series' | 'standalone'} props.variant Row type.
 * @param {string} [props.dateISO] Publish date for standalone rows.
 * @param {number} [props.postCount] Post count for series rows.
 */
const BlogIndexRowMeta = ({ pinned, variant, dateISO = '', postCount = 0 }) => {
  if (pinned) {
    return (
      <div
        className="text-right leading-none"
        aria-label={BLOG_PIN_ARIA_LABEL}
        title={BLOG_PIN_ARIA_LABEL}
      >
        <span className="blog-pin-icon inline-block text-2xl sm:text-3xl" aria-hidden>
          {BLOG_PIN_EMOJI}
        </span>
      </div>
    )
  }

  if (variant === 'series') {
    return (
      <div className="text-right">
        <span className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--paper))] px-3 py-1 font-mono text-[11px] tracking-wider text-[hsl(var(--muted-foreground))]">
          {postCount} posts
        </span>
      </div>
    )
  }

  return (
    <div className="text-right font-mono text-xs text-[hsl(var(--muted-foreground))]">
      {dateISO}
    </div>
  )
}

export default BlogIndexRowMeta
