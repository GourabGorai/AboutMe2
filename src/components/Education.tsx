import React from 'react';
import { BookOpen } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50" id="education">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-gray-300">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}