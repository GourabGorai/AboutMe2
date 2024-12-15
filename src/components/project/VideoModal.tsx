import React from 'react';
import Modal from '../ui/Modal';

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, isOpen, onClose }: VideoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
      <div className="relative pt-[56.25%]">
        <video
          className="absolute inset-0 w-full h-full rounded-lg"
          controls
          autoPlay
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
}