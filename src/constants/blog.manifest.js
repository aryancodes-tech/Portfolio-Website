/**
 * Blog publish manifest — single source of truth for what appears on the site.
 *
 * Workflow:
 * 1. Add or edit markdown under `src/content/blog/` (drafts can live there unpublished).
 * 2. List slugs here to publish. Remove a slug (or comment it out) to hide without deleting files.
 * 3. List slugs in `pinned` (in order) to float entries to the top of the blog index.
 *
 * Series:
 * - `series.<topicSlug>` is an ordered list of post slugs inside that topic folder.
 * Standalone:
 * - `standalone` is an ordered list of top-level `.md` files (slug = filename without `.md`).
 * Pinned:
 * - `pinned` is an ordered list of entry slugs (standalone filename or series topic slug).
 * - Pinned rows show a pin indicator instead of the date / post-count badge on the index.
 */

/**
 * @typedef {object} BlogManifest
 * @property {readonly string[]} [pinned] Entry slugs pinned to the top of the blog index, in display order.
 * @property {readonly string[]} standalone Published standalone post slugs.
 * @property {Readonly<Record<string, readonly string[]>>} series Published series: topic slug → post slugs.
 */

/** @type {BlogManifest} */
export const BLOG_MANIFEST = {
  pinned: ['cache-eviction-strategies', 'docker'],
  standalone: ['cache-eviction-strategies'],
  series: {
    // docker: ['getting-started', 'compose-for-backends'],
  },
}
