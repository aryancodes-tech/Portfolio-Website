/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { blogPostHref } from '../../blog/paths'
import BlogIndexRowMeta from './BlogIndexRowMeta'

/** @typedef {import('../../blog/content').BlogIndexItem} BlogIndexItem */

/**
 * Table-like blog index: expandable series rows and standalone post rows.
 * Items render in manifest order with pinned entries first.
 *
 * @param {object} props
 * @param {readonly BlogIndexItem[]} props.items Filtered index items to render.
 */
const BlogIndexList = ({ items }) => {
  const [openTopics, setOpenTopics] = useState(() => new Set())

  /**
   * @param {string} entrySlug
   */
  const toggleTopic = (entrySlug) => {
    setOpenTopics((prev) => {
      const next = new Set(prev)
      if (next.has(entrySlug)) next.delete(entrySlug)
      else next.add(entrySlug)
      return next
    })
  }

  return (
    <div className="divide-y divide-[hsl(var(--border))]">
      {items.map((item) => {
        if (item.type === 'series') {
          const isOpen = openTopics.has(item.entrySlug)
          const pinned = item.pinned === true

          return (
            <div key={`series:${item.entrySlug}`}>
              <button
                type="button"
                className="grid w-full grid-cols-[1fr_120px] items-center gap-0 bg-[hsl(var(--surface))] px-5 py-4 text-left transition-colors hover:bg-[hsl(var(--signal)/0.08)] sm:grid-cols-[1fr_140px]"
                onClick={() => toggleTopic(item.entrySlug)}
                aria-expanded={isOpen}
                aria-controls={`topic-${item.entrySlug}`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]"
                    aria-hidden
                  >
                    {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </span>
                  <div className="min-w-0">
                    <p className="break-words whitespace-normal text-lg font-semibold leading-snug tracking-tight text-[hsl(var(--ink))] sm:truncate sm:whitespace-nowrap">
                      {item.title}
                    </p>
                    <p className="mt-0.5 truncate text-sm text-[hsl(var(--muted-foreground))]">
                      {item.posts.length} posts · {item.tags.slice(0, 3).join(', ')}
                    </p>
                  </div>
                </div>
                <BlogIndexRowMeta
                  pinned={pinned}
                  variant="series"
                  postCount={item.posts.length}
                />
              </button>

              <div id={`topic-${item.entrySlug}`} className={isOpen ? 'block' : 'hidden'}>
                <ul className="divide-y divide-[hsl(var(--border))]">
                  {item.posts.map((post) => (
                    <li key={`${item.entrySlug}:${post.postSlug}`}>
                      <Link
                        to={blogPostHref(item.entrySlug, post.postSlug)}
                        className="grid grid-cols-[1fr_120px] items-center bg-[hsl(var(--paper))]/70 px-5 py-4 no-underline transition-colors hover:bg-[hsl(var(--paper))] sm:grid-cols-[1fr_140px]"
                        aria-label={`Open ${post.title}`}
                      >
                        <div className="min-w-0 border-l-4 border-[hsl(var(--signal)/0.35)] pl-6 sm:pl-10">
                          <p className="break-words whitespace-normal text-base font-semibold leading-snug tracking-tight text-[hsl(var(--ink))] sm:truncate sm:whitespace-nowrap">
                            {post.title}
                          </p>
                          {post.description.length > 0 && (
                            <p className="mt-1 text-sm leading-snug text-[hsl(var(--muted-foreground))] sm:truncate">
                              {post.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right font-mono text-xs text-[hsl(var(--muted-foreground))]">
                          {post.dateISO}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }

        const pinned = item.pinned === true

        return (
          <Link
            key={`standalone:${item.entrySlug}`}
            to={blogPostHref(item.entrySlug)}
            className="grid grid-cols-[1fr_120px] items-center gap-0 bg-[hsl(var(--surface))] px-5 py-4 no-underline transition-colors hover:bg-[hsl(var(--paper))] sm:grid-cols-[1fr_140px]"
            aria-label={`Open ${item.post.title}`}
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] opacity-70"
                aria-hidden
              >
                <ChevronRight size={18} />
              </span>
              <div className="min-w-0">
                <p className="break-words whitespace-normal text-lg font-semibold leading-snug tracking-tight text-[hsl(var(--ink))] sm:truncate sm:whitespace-nowrap">
                  {item.post.title}
                </p>
                {item.post.description.length > 0 && (
                  <p className="mt-1 text-sm leading-snug text-[hsl(var(--muted-foreground))] sm:truncate">
                    {item.post.description}
                  </p>
                )}
              </div>
            </div>
            <BlogIndexRowMeta
              pinned={pinned}
              variant="standalone"
              dateISO={item.post.dateISO}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default BlogIndexList
