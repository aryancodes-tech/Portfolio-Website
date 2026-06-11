/**
 * @typedef {import('./content').BlogIndexItem} BlogIndexItem
 */

/**
 * @param {string} haystack
 * @param {string} normalizedQuery
 * @returns {boolean}
 */
function matchesQuery(haystack, normalizedQuery) {
  if (normalizedQuery.length === 0) return true
  return haystack.toLowerCase().includes(normalizedQuery)
}

/**
 * Filter blog index items by title and description (case-insensitive).
 *
 * @param {readonly BlogIndexItem[]} items
 * @param {string} normalizedQuery Trimmed, lowercased search string.
 * @returns {readonly BlogIndexItem[]}
 */
export function filterBlogItems(items, normalizedQuery) {
  if (normalizedQuery.length === 0) return items

  return items
    .map((item) => {
      if (item.type === 'standalone') {
        const haystack = `${item.post.title} ${item.post.description}`.trim()
        return matchesQuery(haystack, normalizedQuery) ? item : null
      }

      const topicHaystack = `${item.title} ${item.entrySlug}`.trim()
      const filteredPosts = item.posts.filter((post) =>
        matchesQuery(`${post.title} ${post.description}`.trim(), normalizedQuery),
      )

      if (matchesQuery(topicHaystack, normalizedQuery) || filteredPosts.length > 0) {
        return {
          ...item,
          posts: matchesQuery(topicHaystack, normalizedQuery) ? item.posts : filteredPosts,
        }
      }

      return null
    })
    .filter((item) => item !== null)
}
