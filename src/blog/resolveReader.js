import { renderMarkdown, resolveDoc } from './content'

/**
 * @typedef {import('./content').BlogIndexItem} BlogIndexItem
 * @typedef {import('./content').BlogDoc} BlogDoc
 */

/**
 * @typedef {object} BlogReaderState
 * @property {BlogIndexItem} entry
 * @property {BlogDoc} doc
 * @property {string} html Sanitized article HTML.
 * @property {boolean} isSeries Whether the entry is a multi-post series.
 */

/**
 * Resolve the active blog entry and rendered article for the reader route.
 *
 * @param {readonly BlogIndexItem[]} items Published index items.
 * @param {readonly BlogDoc[]} docs Published markdown documents.
 * @param {string} entrySlug Route `:entrySlug`.
 * @param {string} postSlug Route `:postSlug` (optional for series).
 * @returns {BlogReaderState | null}
 */
export function resolveBlogReader(items, docs, entrySlug, postSlug) {
  if (entrySlug.length === 0) return null

  const entry = items.find((item) => item.entrySlug === entrySlug) ?? null
  if (!entry) return null

  const doc = resolveDoc(docs, entrySlug, postSlug)
  if (!doc) return null

  return {
    entry,
    doc,
    html: renderMarkdown(doc.markdown),
    isSeries: entry.type === 'series',
  }
}

/**
 * @param {BlogReaderState} state
 * @returns {string}
 */
export function getBlogReaderTitle(state) {
  return state.entry.type === 'series' ? state.entry.title : state.entry.post.title
}
