import { useState } from 'react'

/**
 * Copies text to the clipboard and exposes a short-lived copied state.
 * @returns {{ isCopied: boolean, copyToClipboard: (content: string) => Promise<void> }}
 */
export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (content) => {
    if (content.length === 0) {
      return
    }
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      setIsCopied(false)
      console.error('Unable to copy to clipboard:', error)
    }
  }

  return { isCopied, copyToClipboard }
}
