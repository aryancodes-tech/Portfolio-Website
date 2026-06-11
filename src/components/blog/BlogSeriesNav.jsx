/* eslint-disable react/prop-types */
import { ChevronDown } from 'lucide-react'
import BlogSeriesNavList from './BlogSeriesNavList'

/** @typedef {import('../../blog/content').BlogSeriesIndexItem} BlogSeriesIndexItem */

/**
 * Series navigation: desktop sidebar and mobile collapsible panel.
 *
 * @param {object} props
 * @param {BlogSeriesIndexItem} props.entry Resolved series index entry.
 * @param {string} props.activePostSlug Currently viewed post slug.
 */
const BlogSeriesNav = ({ entry, activePostSlug }) => (
  <>
    <aside
      className="surface-card hidden overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] lg:block"
      aria-label="Series navigation"
    >
      <div className="border-b border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-5 py-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--muted-foreground))]">
          Series
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-[hsl(var(--ink))]">
          {entry.title}
        </p>
        <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
          {entry.posts.length} posts
        </p>
      </div>
      <BlogSeriesNavList
        entrySlug={entry.entrySlug}
        posts={entry.posts}
        activePostSlug={activePostSlug}
        layout="sidebar"
      />
    </aside>

    <details className="group surface-card overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-[hsl(var(--muted))] px-5 py-4 focus:outline-none focus-visible:outline-none [&::-webkit-details-marker]:hidden">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--muted-foreground))]">
            series
          </p>
          <p className="mt-1 truncate text-base font-semibold tracking-tight text-[hsl(var(--ink))]">
            {entry.title}
          </p>
          <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
            {entry.posts.length} posts
          </p>
        </div>
        <span
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--muted-foreground))]"
          aria-hidden
        >
          <ChevronDown className="transition-transform duration-200 group-open:rotate-180" size={18} />
        </span>
      </summary>
      <BlogSeriesNavList
        entrySlug={entry.entrySlug}
        posts={entry.posts}
        activePostSlug={activePostSlug}
        layout="mobile"
      />
    </details>
  </>
)

export default BlogSeriesNav
