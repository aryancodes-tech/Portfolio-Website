import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Search } from 'lucide-react'
import Navbar from '../components/Navbar'
import { BLOG_PATH } from '../constants/urls'
import { loadBlogContent } from '../blog/content'

/**
 * Blog landing page.
 * Table-like layout inspired by the reference screenshot: series topics expand into nested rows.
 */
const Blog = () => {
  const { items } = useMemo(() => loadBlogContent(), [])
  const [openTopics, setOpenTopics] = useState(() => new Set())
  const [query, setQuery] = useState('')

  const normalizedQuery = query.trim().toLowerCase()

  const filteredItems = useMemo(() => {
    if (normalizedQuery.length === 0) return items

    const matchesText = (text) => text.toLowerCase().includes(normalizedQuery)

    return items
      .map((item) => {
        if (item.type === 'standalone') {
          const haystack = `${item.post.title} ${item.post.description}`.trim()
          return matchesText(haystack) ? item : null
        }

        const topicHaystack = `${item.title} ${item.entrySlug}`.trim()
        const filteredPosts = item.posts.filter((p) =>
          matchesText(`${p.title} ${p.description}`.trim()),
        )

        if (matchesText(topicHaystack) || filteredPosts.length > 0) {
          return { ...item, posts: matchesText(topicHaystack) ? item.posts : filteredPosts }
        }

        return null
      })
      .filter((i) => i !== null)
  }, [items, normalizedQuery])

  const seriesItems = filteredItems.filter((i) => i.type === 'series')
  const standaloneItems = filteredItems.filter((i) => i.type === 'standalone')

  return (
    <main className="content site-shell pb-16" role="main" aria-label="Blog">
      <Navbar />

      <header className="px-1 pt-8 sm:px-2">
        <div className="surface-card relative overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] px-6 py-8 sm:px-10 sm:py-10">
          <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.55]" aria-hidden />
          <div className="relative flex flex-col gap-4">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-[hsl(var(--ink))] sm:text-5xl">
              Notes, writeups, and systems thinking.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-xl">
              This is a small, lightweight blog inside my portfolio. Some posts are standalones; others are part of a topic series.
            </p>

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
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search titles / descriptions…"
                  className="w-full bg-transparent font-mono text-[12px] tracking-wide text-[hsl(var(--ink))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none"
                  aria-label="Search blog posts"
                />
                {query.trim().length > 0 && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--ink))]"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-1 pt-10 sm:px-2" aria-label="Blog entries">
        <div className="surface-card overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))]">
          <div className="divide-y divide-[hsl(var(--border))]">
            {seriesItems.map((topic) => {
              const isOpen = openTopics.has(topic.entrySlug)
              return (
                <div key={`series:${topic.entrySlug}`}>
                  <button
                    type="button"
                    className="grid w-full grid-cols-[1fr_120px] items-center gap-0 bg-[hsl(var(--surface))] px-5 py-4 text-left transition-colors hover:bg-[hsl(var(--signal)/0.08)] sm:grid-cols-[1fr_140px]"
                    onClick={() => {
                      setOpenTopics((prev) => {
                        const next = new Set(prev)
                        if (next.has(topic.entrySlug)) next.delete(topic.entrySlug)
                        else next.add(topic.entrySlug)
                        return next
                      })
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`topic-${topic.entrySlug}`}
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
                          {topic.title}
                        </p>
                        <p className="mt-0.5 truncate text-sm text-[hsl(var(--muted-foreground))]">
                          {topic.posts.length} posts · {topic.tags.slice(0, 3).join(', ')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--paper))] px-3 py-1 font-mono text-[11px] tracking-wider text-[hsl(var(--muted-foreground))]">
                        {topic.posts.length} posts
                      </span>
                    </div>
                  </button>

                  <div
                    id={`topic-${topic.entrySlug}`}
                    className={isOpen ? 'block' : 'hidden'}
                  >
                    <ul className="divide-y divide-[hsl(var(--border))]">
                      {topic.posts.map((post) => (
                        <li key={`${topic.entrySlug}:${post.postSlug}`}>
                          <Link
                            to={`${BLOG_PATH}/${topic.entrySlug}/${post.postSlug}`}
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
            })}

            {standaloneItems.map((item) => {
              const href = `${BLOG_PATH}/${item.entrySlug}`
              const disabled = true
              return (
                <Link
                  key={`standalone:${item.entrySlug}`}
                  to={href}
                  className="grid grid-cols-[1fr_120px] items-center gap-0 bg-[hsl(var(--surface))] px-5 py-4 no-underline transition-colors hover:bg-[hsl(var(--paper))] sm:grid-cols-[1fr_140px]"
                  aria-label={`Open ${item.post.title}`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={[
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]',
                        disabled ? 'opacity-70' : '',
                      ].join(' ')}
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
                  <div className="text-right font-mono text-xs text-[hsl(var(--muted-foreground))]">
                    {item.post.dateISO}
                  </div>
                </Link>
              )
            })}

            {filteredItems.length === 0 && (
              <div className="px-5 py-10 text-center">
                <p className="font-display text-xl font-bold tracking-tight text-[hsl(var(--ink))]">
                  No matches.
                </p>
                <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                  Try a different keyword (title/description are searchable).
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog

