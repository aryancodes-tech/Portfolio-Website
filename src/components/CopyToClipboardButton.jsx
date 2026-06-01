/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaRegCopy } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      setIsCopied(false);
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return { isCopied, copyToClipboard };
};

/**
 * Copies `content` to the clipboard when clicked.
 * @param {{ content: string }} props
 */
const CopyToClipboardButton = ({ content }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const label = isCopied ? 'Email copied' : 'Copy email address';

  return (
    <button
      type="button"
      onClick={() => copyToClipboard(content)}
      aria-label={label}
      className="flex flex-col items-center justify-center rounded-lg p-1 text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--signal-deep))]"
    >
      {isCopied ? <FaCheckCircle aria-hidden /> : <FaRegCopy aria-hidden />}
    </button>
  );
};

export default CopyToClipboardButton;
