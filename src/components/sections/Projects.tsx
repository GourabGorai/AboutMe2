import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string;
  demoVideo?: string;
  detailsPage?: string;
}

const projects: Project[] = [
  {
    title: "Image Recognition System",
    description: "Advanced image recognition system using machine learning techniques",
    tech: "Logistic Regression, Machine Learning",
    demoVideo: "assets/videos/image_recog.mkv",
    detailsPage: "details/page3.html"
  },
  {
    title: "Crypto Prediction",
    description: "Cryptocurrency price prediction using machine learning algorithms",
    tech: "Linear Regression, Machine Learning",
    demoVideo: "assets/videos/crypto_prediction.mkv",
    detailsPage: "details/aboutp2.html"
  },
  {
    title: "Stock Price Prediction",
    description: "Stock market prediction system using advanced ML techniques",
    tech: "Random Forest, Machine Learning",
    demoVideo: "assets/videos/stock_price_prediction.mkv",
    detailsPage: "details/aboutp3.html"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-500">{project.tech}</p>
              <div className="flex space-x-4">
                {project.demoVideo && (
                  <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <Play size={16} />
                    <span>Demo</span>
                  </button>
                )}
                {project.detailsPage && (
                  <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <ExternalLink size={16} />
                    <span>Details</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}