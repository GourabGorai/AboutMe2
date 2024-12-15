import React from 'react';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  description: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: "Industrial Training on Machine Learning",
    issuer: "NIIT",
    description: "Completed industrial training program focused on Machine Learning techniques and tools.",
    image: "assets/img/cert1.jpg"
  },
  {
    title: "Applied ML Course",
    issuer: "Reliance Foundation Skilling Academy",
    description: "Completed Applied Machine Learning course with hands-on projects.",
    image: "assets/img/cert2.jpg"
  },
  {
    title: "Front-End Web Development",
    issuer: "Reliance Foundation Skilling Academy",
    description: "Mastered front-end development fundamentals including HTML, CSS, and JavaScript.",
    image: "assets/img/cert3.jpg"
  },
  {
    title: "Naukri Campus Young Turks Merit Certificate",
    issuer: "Naukri",
    description: "Recognized for excellence in technical and career-related skills.",
    image: "assets/img/cert4.png"
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    description: "Completed foundational Python programming course.",
    image: "assets/img/cert5.jpg"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">{cert.issuer}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}