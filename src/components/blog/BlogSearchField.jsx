/* eslint-disable react/prop-types */
import { Search } from 'lucide-react'
import SiteButton from '../SiteButton'
import { BLOG_SEARCH_CLEAR_LABEL, BLOG_SEARCH_PLACEHOLDER } from '../../constants/copy'

/**
 * Blog index search input with optional clear action.
 *
 * @param {object} props
 * @param {string} props.query Current search value.
 * @param {(value: string) => void} props.onQueryChange Updates the search value.
 */
const BlogSearchField = ({ query, onQueryChange }) => (
  <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex w-full max-w-2xl items-center gap-2 rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] px-3 py-2.5 shadow-[6px_6px_0_hsl(var(--ink)/0.08)]">
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--muted-foreground))]"
        aria-hidden
      >
        <Search size={18} />
      </span>
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={BLOG_SEARCH_PLACEHOLDER}
        className="w-full bg-transparent font-mono text-[12px] tracking-wide text-[hsl(var(--ink))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none"
        aria-label={BLOG_SEARCH_PLACEHOLDER}
      />
      {query.trim().length > 0 && (
        <SiteButton type="button" variant="secondary" size="compact" onClick={() => onQueryChange('')}>
          {BLOG_SEARCH_CLEAR_LABEL}
        </SiteButton>
      )}
    </div>
  </div>
)

export default BlogSearchField
