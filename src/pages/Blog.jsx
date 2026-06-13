import { useMemo } from 'react'
import Navbar from '../components/Navbar'
import BlogEmptyState from '../components/blog/BlogEmptyState'
import BlogIndexList from '../components/blog/BlogIndexList'
import BlogSearchField from '../components/blog/BlogSearchField'
import { BLOG_PAGE_DESCRIPTION, BLOG_PAGE_TITLE } from '../constants/copy'
import { loadBlogContent } from '../blog/content'
import { useBlogSearch } from '../hooks/useBlogSearch'

/**
 * Blog landing page - manifest-driven index with search and series accordion rows.
 */
const Blog = () => {
  const { items } = useMemo(() => loadBlogContent(), [])
  const {
    query,
    setQuery,
    filteredItems,
    hasPublishedPosts,
    showEmptyCatalog,
    showEmptySearch,
    showPostList,
  } = useBlogSearch(items)

  return (
    <main className="content site-shell pb-16" role="main" aria-label="Blog">
      <Navbar />

      <header className="px-1 pt-8 sm:px-2">
        <div className="surface-card relative overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))] px-6 py-8 sm:px-10 sm:py-10">
          <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.55]" aria-hidden />
          <div className="relative flex flex-col gap-4">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-[hsl(var(--ink))] sm:text-5xl">
              {BLOG_PAGE_TITLE}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-xl">
              {BLOG_PAGE_DESCRIPTION}
            </p>

            {hasPublishedPosts && <BlogSearchField query={query} onQueryChange={setQuery} />}
          </div>
        </div>
      </header>

      <section className="px-1 pt-10 sm:px-2" aria-label="Blog entries">
        <div className="surface-card overflow-hidden rounded-[2rem] border-2 border-[hsl(var(--ink))] bg-[hsl(var(--surface))]">
          {showEmptyCatalog && <BlogEmptyState variant="catalog" />}

          {showEmptySearch && (
            <BlogEmptyState
              variant="search"
              query={query.trim()}
              onClearSearch={() => setQuery('')}
            />
          )}

          {showPostList && <BlogIndexList items={filteredItems} />}
        </div>
      </section>
    </main>
  )
}

export default Blog
