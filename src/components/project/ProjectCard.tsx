import React from 'react';
import { Code2, Play, FileText } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  onPlayDemo: () => void;
  onViewDetails: () => void;
}

export default function ProjectCard({
  title,
  category,
  description,
  onPlayDemo,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow">
      <Code2 className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{category}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex space-x-4">
        <button 
          onClick={onPlayDemo}
          className="flex items-center px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
        >
          <Play className="w-4 h-4 mr-2" />
          Play Demo
        </button>
        <button 
          onClick={onViewDetails}
          className="flex items-center px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
        >
          <FileText className="w-4 h-4 mr-2" />
          View Details
        </button>
      </div>
    </div>
  );
}