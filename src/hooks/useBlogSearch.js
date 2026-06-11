import { useMemo, useState } from 'react'
import { filterBlogItems } from '../blog/filterItems'

/**
 * @typedef {import('../blog/content').BlogIndexItem} BlogIndexItem
 */

/**
 * Search state and filtered blog index for {@link Blog}.
 *
 * @param {readonly BlogIndexItem[]} items Published blog index items.
 */
export function useBlogSearch(items) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()

  const filteredItems = useMemo(
    () => filterBlogItems(items, normalizedQuery),
    [items, normalizedQuery],
  )

  const hasPublishedPosts = items.length > 0
  const isSearchActive = normalizedQuery.length > 0
  const showEmptyCatalog = !hasPublishedPosts
  const showEmptySearch = hasPublishedPosts && isSearchActive && filteredItems.length === 0
  const showPostList = hasPublishedPosts && !showEmptySearch

  return {
    query,
    setQuery,
    filteredItems,
    hasPublishedPosts,
    showEmptyCatalog,
    showEmptySearch,
    showPostList,
  }
}
