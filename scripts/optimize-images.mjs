#!/usr/bin/env node
/**
 * Generates WebP assets for LCP and company logos (requires cwebp: brew install webp).
 * Run: npm run optimize:images
 */
import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')

/** @param {string} cmd */
function run(cmd) {
  execSync(cmd, { stdio: 'inherit', cwd: root })
}

/** @type {{ in: string, out: string, size: number, quality: number }[]} */
const jobs = [
  { in: 'og-photo.png', out: 'hero-photo.webp', size: 560, quality: 82 },
  { in: 'og-photo.png', out: 'hero-photo-320.webp', size: 320, quality: 82 },
  { in: 'omniful.png', out: 'omniful.webp', size: 192, quality: 80 },
  { in: 'beztlabs.jpeg', out: 'beztlabs.webp', size: 192, quality: 80 },
]

try {
  execSync('cwebp -version', { stdio: 'ignore' })
} catch {
  console.error('cwebp not found. Install: brew install webp')
  process.exit(1)
}

for (const { in: file, out, size, quality } of jobs) {
  const input = join(publicDir, file)
  const output = join(publicDir, out)
  if (!existsSync(input)) {
    console.warn('Skip (missing):', input)
    continue
  }
  run(`cwebp -q ${quality} -resize ${size} ${size} "${input}" -o "${output}"`)
}

console.log('Image optimization complete.')
