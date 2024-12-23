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
      console.log('Copied to clipboard:', content);
    } catch (error) {
      setIsCopied(false);
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return { isCopied, copyToClipboard };
};

const CopyToClipboardButton = ({ content }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className='flex flex-col justify-center items-center'>
      <button onClick={() => copyToClipboard(content)}>
        {isCopied ? <FaCheckCircle /> : <FaRegCopy />}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;