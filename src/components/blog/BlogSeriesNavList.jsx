/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { blogPostHref } from '../../blog/paths'

/** @typedef {import('../../blog/content').BlogPostIndexItem} BlogPostIndexItem */

/**
 * List of posts within a series (desktop sidebar or mobile collapsible).
 *
 * @param {object} props
 * @param {string} props.entrySlug Series topic slug.
 * @param {readonly BlogPostIndexItem[]} props.posts Posts in manifest order.
 * @param {string} props.activePostSlug Currently viewed post slug.
 * @param {'sidebar' | 'mobile'} [props.layout] Visual variant for spacing tweaks.
 */
const BlogSeriesNavList = ({ entrySlug, posts, activePostSlug, layout = 'sidebar' }) => (
  <ul className="divide-y divide-[hsl(var(--border))]" aria-label="Posts in this series">
    {posts.map((post) => {
      const active = post.postSlug === activePostSlug
      return (
        <li key={post.postSlug}>
          <Link
            to={blogPostHref(entrySlug, post.postSlug)}
            className={[
              'block px-5 py-4 no-underline transition-colors',
              active
                ? 'bg-[hsl(var(--paper))] shadow-[inset_4px_0_0_hsl(var(--signal))]'
                : 'hover:bg-[hsl(var(--paper))]',
            ].join(' ')}
            aria-current={active ? 'page' : undefined}
          >
            <p className="text-sm font-semibold leading-snug tracking-tight text-[hsl(var(--ink))]">
              {post.title}
            </p>
            {post.description.length > 0 && (
              <p className="mt-1 line-clamp-2 text-xs leading-snug text-[hsl(var(--muted-foreground))]">
                {post.description}
              </p>
            )}
            {post.dateISO.length > 0 && (
              <p
                className={[
                  'mt-2 font-mono text-[11px] tracking-wide text-[hsl(var(--muted-foreground))]',
                  layout === 'mobile' ? '' : '',
                ].join(' ')}
              >
                {post.dateISO}
              </p>
            )}
          </Link>
        </li>
      )
    })}
  </ul>
)

export default BlogSeriesNavList
