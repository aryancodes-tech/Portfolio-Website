/**
 * @typedef {import('./content').BlogIndexItem} BlogIndexItem
 */

/**
 * @param {readonly string[]} pinnedSlugs
 * @returns {Map<string, number>}
 */
function buildPinOrder(pinnedSlugs) {
  /** @type {Map<string, number>} */
  const order = new Map()
  pinnedSlugs.forEach((slug, index) => {
    if (slug.length > 0) order.set(slug, index)
  })
  return order
}

/**
 * Mark pinned entries and sort: pinned first (manifest pin order), then unpinned (publish order).
 *
 * @param {readonly BlogIndexItem[]} items Published index items in manifest order.
 * @param {readonly string[]} [pinnedSlugs] Ordered entry slugs to pin (standalone or series).
 * @returns {readonly BlogIndexItem[]}
 */
export function applyBlogPinning(items, pinnedSlugs = []) {
  if (pinnedSlugs.length === 0) {
    return items.map((item) => ({ ...item, pinned: false }))
  }

  const pinOrder = buildPinOrder(pinnedSlugs)

  /** @type {{ item: BlogIndexItem, pinIndex: number }[]} */
  const pinned = []
  /** @type {BlogIndexItem[]} */
  const unpinned = []

  for (const item of items) {
    const pinIndex = pinOrder.get(item.entrySlug)
    if (pinIndex !== undefined) {
      pinned.push({ item, pinIndex })
    } else {
      unpinned.push(item)
    }
  }

  pinned.sort((a, b) => a.pinIndex - b.pinIndex)

  return [
    ...pinned.map(({ item }) => ({ ...item, pinned: true })),
    ...unpinned.map((item) => ({ ...item, pinned: false })),
  ]
}
