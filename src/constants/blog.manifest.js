/**
 * Blog publish manifest — single source of truth for what appears on the site.
 *
 * Workflow:
 * 1. Add or edit markdown under `src/content/blog/` (drafts can live there unpublished).
 * 2. List slugs here to publish. Remove a slug (or comment it out) to hide without deleting files.
 *
 * Series:
 * - `series.<topicSlug>` is an ordered list of post slugs inside that topic folder.
 * Standalone:
 * - `standalone` is an ordered list of top-level `.md` files (slug = filename without `.md`).
 */

/**
 * @typedef {object} BlogManifest
 * @property {readonly string[]} standalone Published standalone post slugs.
 * @property {Readonly<Record<string, readonly string[]>>} series Published series: topic slug → post slugs.
 */

/** @type {BlogManifest} */
export const BLOG_MANIFEST = {
  standalone: ['engineering-notes'],
  // standalone: [''],
  series: {
    docker: ['getting-started', 'compose-for-backends'],
  },
}
