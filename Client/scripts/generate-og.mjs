#!/usr/bin/env node
/**
 * Builds public/og-image.jpg (1200x630 link-preview card) from og-card.svg + og-photo.png.
 * Requires: rsvg-convert (brew install librsvg), macOS sips for JPEG export.
 */
import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')
const svgTemplate = join(publicDir, 'og-card.svg')
const photoSvgPath = join(publicDir, 'photo.svg')
const photoPath = join(publicDir, 'og-photo.png')
const svgTemp = join(publicDir, 'og-card.build.svg')
const pngPath = join(publicDir, 'og-image-temp.png')
const outPath = join(publicDir, 'og-image.jpg')

function extractPhotoFromSvg() {
  if (!existsSync(photoSvgPath)) {
    console.error('Missing public/photo.svg')
    process.exit(1)
  }

  const svg = readFileSync(photoSvgPath, 'utf8')
  const match = svg.match(
    /id="IMG_[^"]*"[^>]*xlink:href="data:img\/png;base64,([^"]+)"/
  )

  if (!match) {
    console.error('Could not find embedded PNG in photo.svg')
    process.exit(1)
  }

  writeFileSync(photoPath, Buffer.from(match[1], 'base64'))
  console.log('Extracted profile photo to', photoPath)
}

if (!existsSync(svgTemplate)) {
  console.error('Missing public/og-card.svg')
  process.exit(1)
}

// Always refresh from photo.svg so the card matches the site headshot
extractPhotoFromSvg()

try {
  execSync('which rsvg-convert', { stdio: 'ignore' })
} catch {
  console.error('Install rsvg-convert: brew install librsvg')
  process.exit(1)
}

const photoBase64 = readFileSync(photoPath).toString('base64')
const dataUri = `data:image/png;base64,${photoBase64}`

let svg = readFileSync(svgTemplate, 'utf8')
svg = svg
  .replace(/xlink:href="og-photo\.png"/g, `xlink:href="${dataUri}"`)
  .replace(/href="og-photo\.png"/g, `href="${dataUri}"`)

writeFileSync(svgTemp, svg)

try {
  execSync('rsvg-convert -w 1200 -h 630 og-card.build.svg -o og-image-temp.png', {
    cwd: publicDir,
  })
  execSync(`sips -s format jpeg -s formatOptions 90 "${pngPath}" --out "${outPath}"`, {
    stdio: 'inherit',
  })
} finally {
  for (const file of [svgTemp, pngPath]) {
    if (existsSync(file)) unlinkSync(file)
  }
}

console.log('Generated', outPath)
