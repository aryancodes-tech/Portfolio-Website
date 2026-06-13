import { useEffect } from 'react'
import { applyPageSeo, restoreDefaultPageSeo } from '../blog/seo'

/**
 * @typedef {import('../blog/seo').PageSeoConfig} PageSeoConfig
 */

/**
 * Apply per-route document SEO for blog pages; restore homepage defaults on unmount.
 *
 * @param {PageSeoConfig | null | undefined} config SEO payload for the active route.
 */
export function useBlogSeo(config) {
  useEffect(() => {
    if (!config) return undefined

    applyPageSeo(config)
    return () => {
      restoreDefaultPageSeo()
    }
  }, [config])
}
