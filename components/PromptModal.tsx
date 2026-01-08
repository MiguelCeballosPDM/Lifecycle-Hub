import React, { useState, useEffect } from 'react';
import { PromptData } from '../types';
import { X, Copy, Check, Terminal } from 'lucide-react';

interface PromptModalProps {
  prompt: PromptData | null;
  onClose: () => void;
}

const PromptModal: React.FC<PromptModalProps> = ({ prompt, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prompt) {
      setCopied(false);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [prompt]);

  if (!prompt) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">{prompt.title}</h2>
            <p className="text-lg text-gray-500 mt-1">{prompt.category}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
            <p className="text-gray-700 text-lg leading-relaxed">{prompt.description}</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Prompt Content
              </h4>
              {copied && <span className="text-sm text-green-600 font-bold animate-pulse">Copied to clipboard!</span>}
            </div>
            
            <div className="relative group">
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                    copied 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <textarea 
                readOnly
                className="w-full h-80 p-5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-sans text-lg leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                value={prompt.content}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-lg font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-200/50 rounded-lg transition-colors"
          >
            Close
          </button>
          <button 
            onClick={handleCopy}
            className="px-6 py-3 text-lg font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-lg shadow-sm shadow-brand-500/30 transition-all flex items-center gap-2"
          >
            {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
            {copied ? 'Copied!' : 'Copy Prompt'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PromptModal;