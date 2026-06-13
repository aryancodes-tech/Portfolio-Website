import { useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BlogArticle from '../components/blog/BlogArticle'
import BlogNotFound from '../components/blog/BlogNotFound'
import BlogSeriesNav from '../components/blog/BlogSeriesNav'
import { loadBlogContent } from '../blog/content'
import { getBlogReaderTitle, resolveBlogReader } from '../blog/resolveReader'
import { useBlogCodeCopy } from '../hooks/useBlogCodeCopy'

/**
 * Blog reader - `/blog/:entrySlug` and `/blog/:entrySlug/:postSlug`.
 */
const BlogReader = () => {
  const { entrySlug = '', postSlug = '' } = useParams()
  const { items, docs } = useMemo(() => loadBlogContent(), [])
  const articleRef = useRef(null)

  const resolved = useMemo(
    () => resolveBlogReader(items, docs, entrySlug, postSlug),
    [items, docs, entrySlug, postSlug],
  )

  useBlogCodeCopy(articleRef, resolved?.html ?? '')

  if (!resolved) {
    return (
      <main className="content site-shell pb-16" role="main" aria-label="Blog post not found">
        <Navbar />
        <BlogNotFound />
      </main>
    )
  }

  const { doc, html, isSeries, entry } = resolved
  const entryTitle = getBlogReaderTitle(resolved)

  return (
    <main className="content site-shell pb-16" role="main" aria-label={`${entryTitle} - blog`}>
      <Navbar />

      <section className="px-1 pt-8 sm:px-2 sm:pt-10" aria-label="Blog content">
        <div
          className={[
            'grid grid-cols-1 gap-6',
            isSeries ? 'lg:grid-cols-[320px_1fr]' : '',
          ].join(' ')}
        >
          {isSeries && entry.type === 'series' && (
            <BlogSeriesNav entry={entry} activePostSlug={doc.postSlug} />
          )}

          <BlogArticle doc={doc} html={html} articleRef={articleRef} />
        </div>
      </section>
    </main>
  )
}

export default BlogReader
