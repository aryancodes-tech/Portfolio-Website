import { useEffect, useMemo, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import { BLOG_PATH, HOME_PATH } from '../constants/urls'
import { loadBlogContent, renderMarkdown, resolveDoc } from '../blog/content'

/**
 * Blog reader page.
 *
 * - `/blog/:entrySlug` shows the entry (series selects its first post by default).
 * - `/blog/:entrySlug/:postSlug` selects a specific post within a series.
 * - Standalone entries ignore `postSlug` and render their post while keeping the sidebar disabled.
 */

const BlogReader = () => {
  const { entrySlug = '', postSlug = '' } = useParams()
  const { items, docs } = useMemo(() => loadBlogContent(), [])
  const entry = useMemo(
    () => items.find((i) => i.entrySlug === entrySlug) ?? null,
    [items, entrySlug],
  )
  const articleRef = useRef(null)

  const resolved = useMemo(() => {
    if (!entry) return null
    const doc = resolveDoc(docs, entrySlug, postSlug)
    if (!doc) return null
    const html = renderMarkdown(doc.markdown)
    const isSeries = entry.type === 'series'
    return { entry, doc, html, isSeries }
  }, [docs, entry, entrySlug, postSlug])

  const htmlForEffect = resolved?.html ?? ''

  useEffect(() => {
    const root = articleRef.current
    if (!root) return

    /** @param {MouseEvent} event */
    const handleClick = async (event) => {
      const target = /** @type {HTMLElement | null} */ (event.target)
      const button = target?.closest?.('.blog-codecopy')
      if (!button) return

      const wrapper = button.closest('.blog-codeblock')
      const codeEl = wrapper?.querySelector('pre code')
      const text = codeEl?.textContent ?? ''
      if (text.length === 0) return

      event.preventDefault()
      event.stopPropagation()

      const original = button.textContent ?? 'Copy'

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          const ta = document.createElement('textarea')
          ta.value = text
          ta.style.position = 'fixed'
          ta.style.top = '-9999px'
          document.body.appendChild(ta)
          ta.focus()
          ta.select()
          document.execCommand('copy')
          ta.remove()
        }

        button.textContent = 'Copied'
        window.setTimeout(() => {
          button.textContent = original
        }, 1200)
      } catch {
        button.textContent = 'Failed'
        window.setTimeout(() => {
          button.textContent = original
        }, 1200)
      }
    }

    root.addEventListener('click', handleClick)
    return () => root.removeEventListener('click', handleClick)
  }, [htmlForEffect])

  if (!resolved) {
    return (
      <main className="content site-shell pb-16" role="main" aria-label="Blog post not found">
        <Navbar />
        <section className="px-1 pt-10 sm:px-2">
          <div className="surface-card rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] p-8 sm:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--signal-deep))]">
              blog
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[hsl(var(--ink))] sm:text-4xl">
              This post does not exist.
            </h1>
            <p className="mt-4 text-base text-[hsl(var(--muted-foreground))] sm:text-lg">
              Try going back to the blog index.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={BLOG_PATH}
                className="inline-flex items-center justify-center rounded-xl bg-[hsl(var(--ink))] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[hsl(var(--surface))] no-underline shadow-[5px_5px_0_hsl(var(--signal))] transition-transform hover:-translate-y-0.5"
              >
                Back to blog
              </Link>
              <Link
                to={HOME_PATH}
                className="inline-flex items-center justify-center rounded-xl border-2 border-[hsl(var(--ink))] bg-[hsl(var(--paper))] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[hsl(var(--ink))] no-underline shadow-[5px_5px_0_hsl(var(--ink)/0.12)] transition-transform hover:-translate-y-0.5"
              >
                Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const { doc, html, isSeries } = resolved

  const entryTitle =
    resolved.entry.type === 'series' ? resolved.entry.title : resolved.entry.post.title

  return (
    <main className="content site-shell pb-16" role="main" aria-label={`${entryTitle} — blog`}>
      <Navbar />

      <section className="px-1 pt-8 sm:px-2 sm:pt-10" aria-label="Blog content">
        <div
          className={[
            'grid grid-cols-1 gap-6',
            isSeries ? 'lg:grid-cols-[320px_1fr]' : '',
          ].join(' ')}
        >
          {isSeries && resolved.entry.type === 'series' && (
            <aside
              className="surface-card hidden overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] lg:block"
              aria-label="Series navigation"
            >
              <div className="border-b border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--muted-foreground))]">
                  Series
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-[hsl(var(--ink))]">
                  {resolved.entry.title}
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                  {resolved.entry.posts.length} posts
                </p>
                  </div>
                </div>
              </div>

              <ul className="divide-y divide-[hsl(var(--border))]" aria-label="Posts in this series">
                {resolved.entry.posts.map((p) => {
                  const active = p.postSlug === doc.postSlug
                  return (
                    <li key={p.postSlug}>
                      <Link
                        to={`${BLOG_PATH}/${resolved.entry.entrySlug}/${p.postSlug}`}
                        className={[
                          'block px-5 py-4 no-underline transition-colors',
                          active
                            ? 'bg-[hsl(var(--paper))] shadow-[inset_4px_0_0_hsl(var(--signal))]'
                            : 'hover:bg-[hsl(var(--paper))]',
                        ].join(' ')}
                        aria-current={active ? 'page' : undefined}
                      >
                        <p className="text-sm font-semibold leading-snug tracking-tight text-[hsl(var(--ink))]">
                          {p.title}
                        </p>
                        {p.description.length > 0 && (
                          <p className="mt-1 line-clamp-2 text-xs leading-snug text-[hsl(var(--muted-foreground))]">
                            {p.description}
                          </p>
                        )}
                        {p.dateISO.length > 0 && (
                          <p className="mt-2 font-mono text-[11px] tracking-wide text-[hsl(var(--muted-foreground))]">
                            {p.dateISO}
                          </p>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </aside>
          )}

          {isSeries && resolved.entry.type === 'series' && (
            <details className="group surface-card overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-[hsl(var(--muted))] px-5 py-4 focus:outline-none focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--muted-foreground))]">
                    series
                  </p>
                  <p className="mt-1 truncate text-base font-semibold tracking-tight text-[hsl(var(--ink))]">
                    {resolved.entry.title}
                  </p>
                  <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
                    {resolved.entry.posts.length} posts
                  </p>
                </div>
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--muted-foreground))]"
                  aria-hidden
                >
                  <ChevronDown className="transition-transform duration-200 group-open:rotate-180" size={18} />
                </span>
              </summary>
              <ul className="divide-y divide-[hsl(var(--border))]" aria-label="Posts in this series">
                {resolved.entry.posts.map((p) => {
                  const active = p.postSlug === doc.postSlug
                  return (
                    <li key={p.postSlug}>
                      <Link
                        to={`${BLOG_PATH}/${resolved.entry.entrySlug}/${p.postSlug}`}
                        className={[
                          'block px-5 py-4 no-underline transition-colors',
                          active
                            ? 'bg-[hsl(var(--paper))] shadow-[inset_4px_0_0_hsl(var(--signal))]'
                            : 'hover:bg-[hsl(var(--paper))]',
                        ].join(' ')}
                        aria-current={active ? 'page' : undefined}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-semibold leading-snug tracking-tight text-[hsl(var(--ink))]">
                            {p.title}
                          </p>
                        </div>
                        {p.description.length > 0 && (
                          <p className="mt-1 line-clamp-2 text-xs leading-snug text-[hsl(var(--muted-foreground))]">
                            {p.description}
                          </p>
                        )}
                        {p.dateISO.length > 0 && (
                          <p className="mt-2 font-mono text-[11px] tracking-wide text-[hsl(var(--muted-foreground))]">
                            {p.dateISO}
                          </p>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </details>
          )}

          <article
            className="surface-card rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] p-7 sm:p-10"
            aria-label={doc.frontmatter.title ?? 'Blog post'}
            ref={articleRef}
          >
            <div className="flex items-center justify-between gap-3 pb-4">
              <Link
                to={BLOG_PATH}
                className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--paper))] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--ink))] no-underline shadow-[4px_4px_0_hsl(var(--ink)/0.08)] transition-transform hover:-translate-y-0.5"
              >
                ← Back to blog
              </Link>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--muted-foreground))]">
                {doc.frontmatter.date ?? ''}
              </p>
            </div>

            <div className="flex flex-col gap-3 border-b-2 border-dashed border-[hsl(var(--border))] pb-6">
              <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--ink))] sm:text-4xl">
                {doc.frontmatter.title ?? ''}
              </h2>
              {doc.frontmatter.description && doc.frontmatter.description.length > 0 && (
                <p className="text-base leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-lg">
                  {doc.frontmatter.description}
                </p>
              )}
              {doc.frontmatter.tags && doc.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {doc.frontmatter.tags.map((tag) => (
                    <span key={tag} className="chip-tech">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="blog-prose mt-8" dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </div>
      </section>
    </main>
  )
}

export default BlogReader

