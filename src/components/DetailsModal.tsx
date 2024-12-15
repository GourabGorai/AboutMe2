import React from 'react';
import { X } from 'lucide-react';

interface DetailsModalProps {
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailsModal({ content, isOpen, onClose }: DetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative bg-gray-900 rounded-lg w-full max-w-2xl mx-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="prose prose-invert max-h-[70vh] overflow-y-auto mt-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}