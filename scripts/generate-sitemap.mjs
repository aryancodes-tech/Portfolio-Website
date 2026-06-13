#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from published blog manifest entries.
 * Aligns sitemap host with SITE_URL (canonical www).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { BLOG_MANIFEST } from '../src/constants/blog.manifest.js'
import { SITE_URL } from '../src/constants/seo.js'
import { BLOG_PATH } from '../src/constants/urls.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const contentRoot = join(root, 'src/content/blog')

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
 * @param {string} filePath
 * @returns {string}
 */
function readLastmodFromMarkdown(filePath) {
  try {
    const raw = readFileSync(filePath, 'utf8')
    if (!raw.startsWith('---\n')) return ''
    const end = raw.indexOf('\n---\n', 4)
    if (end === -1) return ''

    const fmText = raw.slice(4, end).trim()
    for (const line of fmText.split('\n')) {
      const trimmed = line.trim()
      if (trimmed.length === 0) continue
      const idx = trimmed.indexOf(':')
      if (idx === -1) continue
      const key = trimmed.slice(0, idx).trim()
      const value = trimmed.slice(idx + 1).trim()
      if (key === 'date') return stripQuotes(value)
    }
  } catch {
    return ''
  }
  return ''
}

/**
 * @param {string} loc
 * @param {string} [lastmod]
 * @param {string} [changefreq]
 * @param {string} [priority]
 * @returns {string}
 */
function formatUrlEntry(loc, lastmod = '', changefreq = 'monthly', priority = '0.7') {
  const lines = [
    '  <url>',
    `    <loc>${loc}</loc>`,
  ]
  if (lastmod.length > 0) lines.push(`    <lastmod>${lastmod}</lastmod>`)
  lines.push(`    <changefreq>${changefreq}</changefreq>`)
  lines.push(`    <priority>${priority}</priority>`)
  lines.push('  </url>')
  return lines.join('\n')
}

/** @type {{ loc: string, lastmod: string, changefreq: string, priority: string }[]} */
const entries = [
  {
    loc: `${SITE_URL}/`,
    lastmod: '',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    loc: `${SITE_URL}${BLOG_PATH}`,
    lastmod: '',
    changefreq: 'weekly',
    priority: '0.9',
  },
]

for (const entrySlug of BLOG_MANIFEST.standalone) {
  if (entrySlug.length === 0) continue
  const filePath = join(contentRoot, `${entrySlug}.md`)
  const lastmod = readLastmodFromMarkdown(filePath)
  entries.push({
    loc: `${SITE_URL}${BLOG_PATH}/${entrySlug}`,
    lastmod,
    changefreq: 'monthly',
    priority: '0.8',
  })
}

for (const [entrySlug, postSlugs] of Object.entries(BLOG_MANIFEST.series)) {
  if (entrySlug.length === 0) continue

  let seriesLastmod = ''
  for (const postSlug of postSlugs) {
    if (postSlug.length === 0) continue
    const filePath = join(contentRoot, entrySlug, `${postSlug}.md`)
    const lastmod = readLastmodFromMarkdown(filePath)
    if (lastmod.length > 0 && (seriesLastmod.length === 0 || lastmod > seriesLastmod)) {
      seriesLastmod = lastmod
    }

    entries.push({
      loc: `${SITE_URL}${BLOG_PATH}/${entrySlug}/${postSlug}`,
      lastmod,
      changefreq: 'monthly',
      priority: '0.8',
    })
  }

  if (postSlugs.length > 0) {
    entries.push({
      loc: `${SITE_URL}${BLOG_PATH}/${entrySlug}`,
      lastmod: seriesLastmod,
      changefreq: 'monthly',
      priority: '0.75',
    })
  }
}

const body = entries.map((entry) => formatUrlEntry(entry.loc, entry.lastmod, entry.changefreq, entry.priority)).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

writeFileSync(join(root, 'public/sitemap.xml'), sitemap)

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
writeFileSync(join(root, 'public/robots.txt'), robots)

console.log(`Generated sitemap with ${entries.length} URLs at ${SITE_URL}/sitemap.xml`)
