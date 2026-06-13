/* eslint-disable react/prop-types */
import { BookOpen, SearchX } from 'lucide-react'
import SiteButton from '../SiteButton'
import {
  BLOG_EMPTY_CATALOG_DESCRIPTION,
  BLOG_EMPTY_CATALOG_HOME_LABEL,
  BLOG_EMPTY_CATALOG_TITLE,
  BLOG_EMPTY_SEARCH_CLEAR_LABEL,
  BLOG_EMPTY_SEARCH_DESCRIPTION,
  BLOG_EMPTY_SEARCH_TITLE,
} from '../../constants/copy'
import { HOME_PATH } from '../../constants/urls'

/**
 * @typedef {'search' | 'catalog'} BlogEmptyStateVariant
 */

/**
 * Empty state panel for the blog index.
 *
 * @param {object} props
 * @param {BlogEmptyStateVariant} props.variant `search` - active query, no matches; `catalog` - no published posts.
 * @param {string} [props.query] Active search query (search variant only).
 * @param {() => void} [props.onClearSearch] Clears the search input (search variant only).
 */
const BlogEmptyState = ({ variant, query = '', onClearSearch }) => {
  const isSearch = variant === 'search'
  const Icon = isSearch ? SearchX : BookOpen

  return (
    <div
      className="flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16"
      role="status"
      aria-live="polite"
    >
      <span
        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] text-[hsl(var(--ink))] shadow-[6px_6px_0_hsl(var(--ink)/0.08)]"
        aria-hidden
      >
        <Icon size={26} strokeWidth={1.75} />
      </span>

      <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-[hsl(var(--ink))] sm:text-3xl">
        {isSearch ? BLOG_EMPTY_SEARCH_TITLE : BLOG_EMPTY_CATALOG_TITLE}
      </h2>

      <p className="mt-3 max-w-md text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
        {isSearch ? BLOG_EMPTY_SEARCH_DESCRIPTION : BLOG_EMPTY_CATALOG_DESCRIPTION}
      </p>

      {isSearch && query.length > 0 && (
        <p className="mt-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--paper))] px-4 py-2 font-mono text-[12px] tracking-wide text-[hsl(var(--ink))]">
          <span className="text-[hsl(var(--muted-foreground))]">Searched for </span>
          &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {isSearch && typeof onClearSearch === 'function' && (
          <SiteButton type="button" variant="secondary" onClick={onClearSearch}>
            {BLOG_EMPTY_SEARCH_CLEAR_LABEL}
          </SiteButton>
        )}

        {!isSearch && (
          <SiteButton variant="secondary" to={HOME_PATH}>
            {BLOG_EMPTY_CATALOG_HOME_LABEL}
          </SiteButton>
        )}
      </div>
    </div>
  )
}

export default BlogEmptyState
