import { useEffect } from 'react'

/**
 * Attach delegated click handlers for markdown code-block copy buttons inside `rootRef`.
 *
 * @param {React.RefObject<HTMLElement | null>} rootRef Container rendered with `dangerouslySetInnerHTML`.
 * @param {string} htmlDependency Re-bind when article HTML changes.
 */
export function useBlogCodeCopy(rootRef, htmlDependency) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    /** @param {MouseEvent} event */
    const handleClick = async (event) => {
      const target = /** @type {HTMLElement | null} */ (event.target)
      const button = target?.closest?.('.blog-codecopy')
      if (!button) return

      const wrapper = button.closest('.blog-codeblock')
      const codeEl = wrapper?.querySelector('pre code')
      const text = codeEl?.textContent ?? ''
      if (text.length === 0) return

      event.preventDefault()
      event.stopPropagation()

      const original = button.textContent ?? 'Copy'

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          const ta = document.createElement('textarea')
          ta.value = text
          ta.style.position = 'fixed'
          ta.style.top = '-9999px'
          document.body.appendChild(ta)
          ta.focus()
          ta.select()
          document.execCommand('copy')
          ta.remove()
        }

        button.textContent = 'Copied'
        window.setTimeout(() => {
          button.textContent = original
        }, 1200)
      } catch {
        button.textContent = 'Failed'
        window.setTimeout(() => {
          button.textContent = original
        }, 1200)
      }
    }

    root.addEventListener('click', handleClick)
    return () => root.removeEventListener('click', handleClick)
  }, [rootRef, htmlDependency])
}
