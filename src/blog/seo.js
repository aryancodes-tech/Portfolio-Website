import {
  BLOG_INDEX_META_DESCRIPTION,
  BLOG_INDEX_META_TITLE,
  BLOG_POST_TITLE_SUFFIX,
} from '../constants/copy'
import {
  META_DESCRIPTION,
  META_TITLE,
  OG_DESCRIPTION,
  OG_IMAGE_URL,
  OG_SITE_NAME,
  OG_TITLE,
  PERSON_NAME,
  SITE_PATH,
  SITE_URL,
} from '../constants/seo'
import { BLOG_PATH } from '../constants/urls'
import { blogPostHref } from './paths'

/** @type {string} */
const BLOG_JSON_LD_ID = 'blog-posting-jsonld'

/**
 * @typedef {object} PageSeoConfig
 * @property {string} title Document title.
 * @property {string} description Meta description.
 * @property {string} canonicalUrl Absolute canonical URL.
 * @property {'website' | 'article' | 'profile'} ogType Open Graph type.
 * @property {object} [jsonLd] Optional JSON-LD object for blog posts.
 */

/**
 * @param {string} name
 * @returns {HTMLMetaElement}
 */
function getOrCreateMetaByName(name) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  return el
}

/**
 * @param {string} property
 * @returns {HTMLMetaElement}
 */
function getOrCreateMetaByProperty(property) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  return el
}

/**
 * @returns {HTMLLinkElement}
 */
function getOrCreateCanonicalLink() {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  return el
}

/**
 * @param {string} id
 * @param {object} data
 */
function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * @param {string} id
 */
function removeJsonLd(id) {
  document.getElementById(id)?.remove()
}

/**
 * @typedef {import('./content').BlogDoc} BlogDoc
 */

/**
 * Build SEO config for the blog index page.
 * @returns {PageSeoConfig}
 */
export function buildBlogIndexSeo() {
  return {
    title: BLOG_INDEX_META_TITLE,
    description: BLOG_INDEX_META_DESCRIPTION,
    canonicalUrl: `${SITE_URL}${BLOG_PATH}`,
    ogType: 'website',
  }
}

/**
 * Build SEO config for a published blog post.
 *
 * @param {BlogDoc} doc Resolved markdown document.
 * @param {string} entrySlug Route entry slug.
 * @param {string} postSlug Route post slug.
 * @returns {PageSeoConfig}
 */
export function buildBlogPostSeo(doc, entrySlug, postSlug) {
  const title = doc.frontmatter.title ?? ''
  const description = doc.frontmatter.description ?? ''
  const path = blogPostHref(entrySlug, postSlug)
  const canonicalUrl = `${SITE_URL}${path}`

  return {
    title: title.length > 0 ? `${title}${BLOG_POST_TITLE_SUFFIX}` : BLOG_INDEX_META_TITLE,
    description: description.length > 0 ? description : BLOG_INDEX_META_DESCRIPTION,
    canonicalUrl,
    ogType: 'article',
    jsonLd: buildBlogPostingSchema(doc, canonicalUrl),
  }
}

/**
 * @param {BlogDoc} doc
 * @param {string} canonicalUrl
 * @returns {object}
 */
export function buildBlogPostingSchema(doc, canonicalUrl) {
  const title = doc.frontmatter.title ?? ''
  const description = doc.frontmatter.description ?? ''
  const datePublished = doc.frontmatter.date ?? ''
  const tags = doc.frontmatter.tags ?? []

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: datePublished.length > 0 ? datePublished : undefined,
    author: {
      '@type': 'Person',
      name: PERSON_NAME,
      url: `${SITE_URL}${SITE_PATH}`,
    },
    publisher: {
      '@type': 'Person',
      name: PERSON_NAME,
      url: `${SITE_URL}${SITE_PATH}`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    url: canonicalUrl,
    inLanguage: 'en-IN',
    image: OG_IMAGE_URL,
    keywords: tags.length > 0 ? tags.join(', ') : undefined,
  }
}

/**
 * Apply per-route SEO tags for blog pages.
 *
 * @param {PageSeoConfig} config
 */
export function applyPageSeo(config) {
  document.title = config.title

  getOrCreateMetaByName('description').setAttribute('content', config.description)
  getOrCreateMetaByProperty('og:title').setAttribute('content', config.title)
  getOrCreateMetaByProperty('og:description').setAttribute('content', config.description)
  getOrCreateMetaByProperty('og:url').setAttribute('content', config.canonicalUrl)
  getOrCreateMetaByProperty('og:type').setAttribute('content', config.ogType)
  getOrCreateMetaByProperty('og:site_name').setAttribute('content', OG_SITE_NAME)
  getOrCreateMetaByProperty('og:image').setAttribute('content', OG_IMAGE_URL)

  getOrCreateMetaByName('twitter:title').setAttribute('content', config.title)
  getOrCreateMetaByName('twitter:description').setAttribute('content', config.description)
  getOrCreateMetaByName('twitter:image').setAttribute('content', OG_IMAGE_URL)

  getOrCreateCanonicalLink().setAttribute('href', config.canonicalUrl)

  if (config.jsonLd) {
    setJsonLd(BLOG_JSON_LD_ID, config.jsonLd)
  } else {
    removeJsonLd(BLOG_JSON_LD_ID)
  }
}

/**
 * Restore homepage SEO defaults when leaving blog routes.
 */
export function restoreDefaultPageSeo() {
  const canonicalUrl = `${SITE_URL}${SITE_PATH}`

  document.title = META_TITLE
  getOrCreateMetaByName('description').setAttribute('content', META_DESCRIPTION)
  getOrCreateMetaByProperty('og:title').setAttribute('content', OG_TITLE)
  getOrCreateMetaByProperty('og:description').setAttribute('content', OG_DESCRIPTION)
  getOrCreateMetaByProperty('og:url').setAttribute('content', canonicalUrl)
  getOrCreateMetaByProperty('og:type').setAttribute('content', 'profile')
  getOrCreateMetaByName('twitter:title').setAttribute('content', OG_TITLE)
  getOrCreateMetaByName('twitter:description').setAttribute('content', OG_DESCRIPTION)
  getOrCreateCanonicalLink().setAttribute('href', canonicalUrl)
  removeJsonLd(BLOG_JSON_LD_ID)
}
