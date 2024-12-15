import React from 'react';
import Modal from '../ui/Modal';

interface DetailsModalProps {
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailsModal({ content, isOpen, onClose }: DetailsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl p-6">
      <div className="max-h-[70vh] overflow-y-auto mt-4">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Modal>
  );
}