import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import PixelExclaim from './PixelArt/PixelExclaim'; 

const CryptoAddress = ({ label, address, currency }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-gray-800/90 border-2 border-gray-600 p-4 mb-4 font-mono backdrop-blur-sm">
      <div className="text-gray-300 text-sm mb-2 flex items-center gap-2">
        <PixelExclaim size={18} />
        {label} ({currency})
      </div>
      <div className="flex items-center justify-between">
        <div className="text-gray-100 text-xs break-all mr-2 select-all">{address}</div>
        <button
          onClick={copyToClipboard}
          className="bg-gray-600 hover:bg-gray-500 border border-gray-500 px-2 py-1 text-xs text-gray-200 flex items-center gap-1 transition-colors duration-200 hover:shadow-lg"
        >
          <Copy size={12} />
          {copied ? 'COPIED!' : 'COPY'}
        </button>
      </div>
    </div>
  );
};

export default CryptoAddress;