/* eslint-disable react/prop-types */
import { FaRegCopy } from 'react-icons/fa6'
import { FaCheckCircle } from 'react-icons/fa'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

/**
 * Copies `content` to the clipboard when clicked.
 * @param {{ content: string }} props
 */
const CopyToClipboardButton = ({ content }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  const label = isCopied ? 'Email copied' : 'Copy email address'

  return (
    <button
      type="button"
      onClick={() => copyToClipboard(content)}
      aria-label={label}
      className="flex flex-col items-center justify-center rounded-lg p-1 text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--signal-deep))]"
    >
      {isCopied ? <FaCheckCircle aria-hidden /> : <FaRegCopy aria-hidden />}
    </button>
  )
}

export default CopyToClipboardButton
