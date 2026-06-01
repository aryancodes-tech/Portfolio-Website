#!/usr/bin/env node
/**
 * Injects SEO constants from src/constants/seo.js into index.html
 * between <!-- SEO:AUTO_START --> and <!-- SEO:AUTO_END --> markers.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  SITE_URL,
  SITE_PATH,
  PERSON_NAME,
  META_TITLE,
  META_DESCRIPTION,
  META_KEYWORDS,
  OG_SITE_NAME,
  OG_TITLE,
  OG_DESCRIPTION,
  OG_IMAGE_URL,
  OG_IMAGE_ALT,
  buildStructuredDataGraph,
} from '../src/constants/seo.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = join(root, 'index.html')

const canonicalUrl = `${SITE_URL}${SITE_PATH}`
const jsonLd = JSON.stringify(buildStructuredDataGraph(), null, 2)
  .split('\n')
  .map((line) => `      ${line}`)
  .join('\n')

const headBlock = `    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/ag_black.svg"/>
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${META_DESCRIPTION}" />
    <meta name="keywords" content="${META_KEYWORDS}" />
    <meta name="author" content="${PERSON_NAME}" />
    <meta name="google-site-verification" content="googleb40b905bc3926bb8.html" />
    <meta name="theme-color" content="#ebe8e1" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:type" content="profile" />
    <meta property="profile:username" content="aryancodes-tech" />
    <meta property="og:title" content="${OG_TITLE}" />
    <meta property="og:description" content="${OG_DESCRIPTION}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="${OG_SITE_NAME}" />
    <meta property="og:image" content="${OG_IMAGE_URL}" />
    <meta property="og:image:secure_url" content="${OG_IMAGE_URL}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${OG_IMAGE_ALT}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@aryancodes_tech" />
    <meta name="twitter:title" content="${OG_TITLE}" />
    <meta name="twitter:description" content="${OG_DESCRIPTION}" />
    <meta name="twitter:image" content="${OG_IMAGE_URL}" />
    <meta name="twitter:image:alt" content="${OG_IMAGE_ALT}" />
    <meta name="twitter:creator" content="@aryancodes_tech" />
    <link rel="image_src" href="${OG_IMAGE_URL}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Syne:wght@500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <title>${META_TITLE}</title>
    <script type="application/ld+json">
${jsonLd}
    </script>`

const html = readFileSync(indexPath, 'utf8')
const start = '<!-- SEO:AUTO_START -->'
const end = '<!-- SEO:AUTO_END -->'
const startIdx = html.indexOf(start)
const endIdx = html.indexOf(end)

if (startIdx === -1 || endIdx === -1) {
  console.error('Missing SEO:AUTO_START or SEO:AUTO_END markers in index.html')
  process.exit(1)
}

const updated =
  html.slice(0, startIdx + start.length) +
  '\n' +
  headBlock +
  '\n    ' +
  html.slice(endIdx)

writeFileSync(indexPath, updated)
console.log('Synced SEO meta and JSON-LD to index.html')
