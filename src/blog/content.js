import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { BLOG_MANIFEST } from '../constants/blog.manifest'
import { applyBlogPinning } from './applyPinning'

/**
 * @typedef {object} BlogFrontmatter
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [date]
 * @property {readonly string[]} [tags]
 */

/**
 * @typedef {object} BlogDoc
 * @property {string} entrySlug
 * @property {string} postSlug
 * @property {string} path
 * @property {BlogFrontmatter} frontmatter
 * @property {string} markdown
 */

/**
 * @typedef {object} BlogPostIndexItem
 * @property {string} entrySlug
 * @property {string} postSlug
 * @property {string} title
 * @property {string} description
 * @property {string} dateISO
 * @property {readonly string[]} tags
 * @property {string} path
 */

/**
 * @typedef {object} BlogSeriesIndexItem
 * @property {'series'} type
 * @property {string} entrySlug
 * @property {string} title
 * @property {readonly string[]} tags
 * @property {readonly BlogPostIndexItem[]} posts
 * @property {boolean} [pinned] When true, entry is pinned on the blog index.
 */

/**
 * @typedef {object} BlogStandaloneIndexItem
 * @property {'standalone'} type
 * @property {string} entrySlug
 * @property {BlogPostIndexItem} post
 * @property {boolean} [pinned] When true, entry is pinned on the blog index.
 */

/**
 * @typedef {BlogSeriesIndexItem | BlogStandaloneIndexItem} BlogIndexItem
 */

marked.setOptions({
  gfm: true,
  breaks: false,
  mangle: false,
  headerIds: false,
})

/**
 * Custom renderer to wrap fenced code blocks with a copy button.
 * The copy action is handled via event delegation in the BlogReader.
 */
const blogRenderer = new marked.Renderer()

/**
 * @param {string} code
 * @param {string} infostring
 * @returns {string}
 */
blogRenderer.code = (code, infostring = '') => {
  const language = (infostring || '').trim().split(/\s+/)[0]
  const langClass = language.length > 0 ? `language-${escapeHtml(language)}` : ''
  const safeCode = escapeHtml(extractCodeText(code))

  return [
    '<div class="blog-codeblock">',
    '<button type="button" class="blog-codecopy" aria-label="Copy code">Copy</button>',
    `<pre><code class="${langClass}">${safeCode}</code></pre>`,
    '</div>',
  ].join('')
}

marked.use({ renderer: blogRenderer })

/**
 * Parse a simple YAML-like frontmatter block (no nesting).
 * Supported:
 * - title: string
 * - description: string
 * - date: 2026-06-02
 * - tags: [a, b, c]
 *
 * @param {string} raw
 * @returns {{ frontmatter: BlogFrontmatter, body: string }}
 */
export function parseFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return { frontmatter: {}, body: raw }
  const end = raw.indexOf('\n---\n', 4)
  if (end === -1) return { frontmatter: {}, body: raw }

  const fmText = raw.slice(4, end).trim()
  const body = raw.slice(end + '\n---\n'.length)

  /** @type {BlogFrontmatter} */
  const frontmatter = {}
  for (const line of fmText.split('\n')) {
    const trimmed = line.trim()
    if (trimmed.length === 0) continue
    const idx = trimmed.indexOf(':')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    const value = trimmed.slice(idx + 1).trim()

    if (key === 'title') frontmatter.title = stripQuotes(value)
    if (key === 'description') frontmatter.description = stripQuotes(value)
    if (key === 'date') frontmatter.date = stripQuotes(value)
    if (key === 'tags') frontmatter.tags = parseTags(value)
  }

  return { frontmatter, body }
}

/**
 * @param {string} value
 * @returns {string}
 */
function stripQuotes(value) {
  const v = value.trim()
  if (v.length >= 2 && ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))) {
    return v.slice(1, -1)
  }
  return v
}

/**
 * Parse tags formatted as `[a, b, c]`.
 * @param {string} value
 * @returns {readonly string[]}
 */
function parseTags(value) {
  const v = value.trim()
  if (!v.startsWith('[') || !v.endsWith(']')) return []
  const inner = v.slice(1, -1).trim()
  if (inner.length === 0) return []
  return inner.split(',').map((t) => stripQuotes(t.trim())).filter((t) => t.length > 0)
}

/**
 * @param {BlogDoc} doc
 * @returns {BlogPostIndexItem}
 */
function toIndexPost(doc) {
  const title = doc.frontmatter.title ?? humanizeSlug(doc.postSlug)
  const description = doc.frontmatter.description ?? ''
  const dateISO = doc.frontmatter.date ?? ''
  const tags = doc.frontmatter.tags ?? []
  return {
    entrySlug: doc.entrySlug,
    postSlug: doc.postSlug,
    title,
    description,
    dateISO,
    tags,
    path: doc.path,
  }
}

/**
 * @param {Map<string, BlogDoc>} docByKey
 * @param {string} entrySlug
 * @param {string} postSlug
 * @returns {BlogDoc | null}
 */
function findDoc(docByKey, entrySlug, postSlug) {
  return docByKey.get(`${entrySlug}/${postSlug}`) ?? null
}

/**
 * Load markdown from `src/content/blog/`, then filter and order using `blog.manifest.js`.
 * Only slugs listed in the manifest are published; other files remain as drafts in the repo.
 *
 * @returns {{ items: readonly BlogIndexItem[], docs: readonly BlogDoc[] }}
 */
export function loadBlogContent() {
  /** @type {Record<string, string>} */
  const modules = import.meta.glob('/src/content/blog/**/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  })

  /** @type {BlogDoc[]} */
  const allDocs = Object.entries(modules)
    .map(([path, markdown]) => {
      const normalized = path.replaceAll('\\', '/')
      const rel = normalized.split('/src/content/blog/')[1] ?? ''
      const parts = rel.split('/').filter((p) => p.length > 0)

      let entrySlug = ''
      let postSlug = ''
      if (parts.length === 1) {
        entrySlug = parts[0].replace(/\.md$/, '')
        postSlug = entrySlug
      } else {
        entrySlug = parts[0]
        postSlug = (parts[1] ?? '').replace(/\.md$/, '')
      }

      const { frontmatter, body } = parseFrontmatter(markdown)
      return { entrySlug, postSlug, path: normalized, frontmatter, markdown: body }
    })
    .filter((d) => d.entrySlug.length > 0 && d.postSlug.length > 0)

  /** @type {Map<string, BlogDoc>} */
  const docByKey = new Map()
  for (const doc of allDocs) {
    docByKey.set(`${doc.entrySlug}/${doc.postSlug}`, doc)
  }

  /** @type {BlogDoc[]} */
  const publishedDocs = []
  /** @type {BlogIndexItem[]} */
  const items = []

  for (const entrySlug of BLOG_MANIFEST.standalone) {
    if (entrySlug.length === 0) continue
    const doc = findDoc(docByKey, entrySlug, entrySlug)
    if (!doc) continue

    publishedDocs.push(doc)
    items.push({
      type: 'standalone',
      entrySlug,
      post: toIndexPost(doc),
    })
  }

  for (const [entrySlug, postSlugs] of Object.entries(BLOG_MANIFEST.series)) {
    if (entrySlug.length === 0) continue

    /** @type {BlogPostIndexItem[]} */
    const posts = []
    for (const postSlug of postSlugs) {
      if (postSlug.length === 0) continue
      const doc = findDoc(docByKey, entrySlug, postSlug)
      if (!doc) continue

      publishedDocs.push(doc)
      posts.push(toIndexPost(doc))
    }

    if (posts.length === 0) continue

    items.push({
      type: 'series',
      entrySlug,
      title: humanizeSlug(entrySlug),
      tags: dedupeTags(posts.flatMap((p) => p.tags)),
      posts,
    })
  }

  const pinnedSlugs = BLOG_MANIFEST.pinned ?? []

  return {
    items: applyBlogPinning(items, pinnedSlugs),
    docs: publishedDocs,
  }
}

/**
 * Wrap GFM tables so wide layouts scroll horizontally on small screens.
 * @param {string} html
 * @returns {string}
 */
function wrapBlogTables(html) {
  return html.replace(/<table>/g, '<div class="blog-table-wrap"><table>').replace(/<\/table>/g, '</table></div>')
}

/**
 * Render markdown into sanitized HTML.
 * @param {string} markdown
 * @returns {string}
 */
export function renderMarkdown(markdown) {
  const html = wrapBlogTables(marked.parse(markdown))
  return DOMPurify.sanitize(html)
}

/**
 * Minimal HTML escaper for marked renderer output.
 * @param {string} input
 * @returns {string}
 */
function escapeHtml(input) {
  const text = String(input ?? '')
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Marked may pass non-string values for code in some cases.
 * @param {unknown} value
 * @returns {string}
 */
function extractCodeText(value) {
  if (typeof value === 'string') return value
  if (value && typeof value === 'object' && 'text' in value) {
    const maybeText = /** @type {{ text?: unknown }} */ (value).text
    if (typeof maybeText === 'string') return maybeText
  }
  return String(value ?? '')
}

/**
 * @param {string} slug
 * @returns {string}
 */
function humanizeSlug(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * @param {readonly string[]} tags
 * @returns {readonly string[]}
 */
function dedupeTags(tags) {
  const set = new Set(tags.filter((t) => t.length > 0))
  return Array.from(set)
}

/**
 * Resolve a markdown doc by entry + optional post slug.
 * - If `postSlug` is empty, returns the first post in a series (by date sort), or the standalone post.
 *
 * @param {readonly BlogDoc[]} docs
 * @param {string} entrySlug
 * @param {string} postSlug
 * @returns {BlogDoc | null}
 */
export function resolveDoc(docs, entrySlug, postSlug) {
  if (entrySlug.length === 0) return null
  const filtered = docs.filter((d) => d.entrySlug === entrySlug)
  if (filtered.length === 0) return null

  const isStandalone = filtered.length === 1 && filtered[0].postSlug === entrySlug
  if (isStandalone) return filtered[0]

  if (postSlug.length > 0) {
    return filtered.find((d) => d.postSlug === postSlug) ?? null
  }

  return filtered
    .slice()
    .sort((a, b) => (a.frontmatter.date ?? '').localeCompare(b.frontmatter.date ?? ''))[0] ?? null
}

