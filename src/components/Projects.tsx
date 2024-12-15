import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './project/ProjectCard';
import VideoModal from './project/VideoModal';
import DetailsModal from './project/DetailsModal';

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedDetails, setSelectedDetails] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              onPlayDemo={() => setSelectedVideo(project.videoUrl)}
              onViewDetails={() => setSelectedDetails(project.details)}
            />
          ))}
        </div>
      </div>

      <VideoModal 
        videoUrl={selectedVideo || ''}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <DetailsModal
        content={selectedDetails || ''}
        isOpen={!!selectedDetails}
        onClose={() => setSelectedDetails(null)}
      />
    </section>
  );
}